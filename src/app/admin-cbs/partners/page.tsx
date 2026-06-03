import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";
import { PartnerCRMTable } from "@/components/admin/PartnerCRMTable";
import { getPartnerRegistrations } from "@/lib/supabase/queries";

export default async function PartnersAdminPage() {
  const partners = await getPartnerRegistrations();

  return (
    <AdminShell>
      <AdminCard title="CRM đăng ký đối tác">
        <PartnerCRMTable rows={partners} />
      </AdminCard>
    </AdminShell>
  );
}
