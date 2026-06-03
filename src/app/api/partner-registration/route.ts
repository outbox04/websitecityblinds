import { NextResponse } from "next/server";
import { formatPartnerTelegramMessage, sendTelegramMessage } from "@/lib/telegram/notify";
import { partnerRegistrationSchema } from "@/lib/validation/partner";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

// Validates partner leads, stores them in Supabase CRM, then notifies Telegram.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = partnerRegistrationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid partner registration data." }, { status: 400 });
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("partner_registrations").insert({
      full_name: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      company_name: parsed.data.companyName,
      province: parsed.data.province,
      business_model: parsed.data.businessModel,
      interested_products: parsed.data.interestedProducts,
      note: parsed.data.note || null,
      source_page: parsed.data.sourcePage || null,
      form_location: parsed.data.formLocation || null,
      utm_source: parsed.data.utmSource || null,
      utm_medium: parsed.data.utmMedium || null,
      utm_campaign: parsed.data.utmCampaign || null,
      referrer_url: parsed.data.referrerUrl || null,
      current_url: parsed.data.currentUrl || null,
      device_type: parsed.data.deviceType || null
    });

    if (error) {
      return NextResponse.json({ error: "Could not save registration." }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: "Supabase admin environment is not configured." }, { status: 500 });
  }

  await sendTelegramMessage(formatPartnerTelegramMessage(parsed.data));
  return NextResponse.json({ ok: true });
}
