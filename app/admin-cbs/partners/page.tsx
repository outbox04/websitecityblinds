import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";

// CRM page displays partner_registrations including tracking attribution.
export default function PartnersAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="CRM dang ky doi tac">
        <p className="text-sm leading-6 text-slate-600">Ket noi bang partner_registrations de xem ho ten, SDT, cong ty, khu vuc, mo hinh, san pham quan tam, source_page, UTM, referrer, current_url, device_type va created_at.</p>
      </AdminCard>
    </AdminShell>
  );
}
