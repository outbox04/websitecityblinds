import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function checkAdminRole(allowedRoles: string[] = ["admin", "editor", "viewer"]) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { data: profile } = await supabase.from("profiles").select("role,is_active").eq("id", user.id).single();
  return Boolean(profile?.is_active && allowedRoles.includes(profile.role));
}
