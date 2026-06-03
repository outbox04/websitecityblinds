import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { validateImageUpload } from "@/lib/security/upload";

// Upload endpoint accepts images only, stores files in Supabase Storage and metadata in media_files.
export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const altText = String(formData.get("altText") || "");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file." }, { status: 400 });
  }

  const validation = validateImageUpload(file);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const supabase = createSupabaseAdminClient();
    const extension = file.name.split(".").pop()?.toLowerCase() || "webp";
    const path = `media/${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await supabase.storage.from("city-blinds").upload(path, file, {
      contentType: file.type,
      upsert: false
    });

    if (uploadError) {
      return NextResponse.json({ error: "Upload failed." }, { status: 500 });
    }

    const { data } = supabase.storage.from("city-blinds").getPublicUrl(path);
    await supabase.from("media_files").insert({
      url: data.publicUrl,
      alt_text: altText,
      file_name: file.name,
      mime_type: file.type,
      size: file.size
    });

    return NextResponse.json({ url: data.publicUrl });
  } catch {
    return NextResponse.json({ error: "Supabase admin environment is not configured." }, { status: 500 });
  }
}
