import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";

// CRM page displays partner_registrations including tracking attribution.
export default function PartnersAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="CRM đăng ký đối tác">
        <p className="text-sm leading-6 text-slate-600">Kết nối bảng partner_registrations để xem họ tên, SĐT, công ty, khu vực, mô hình, sản phẩm quan tâm, source_page, UTM, referrer, current_url, device_type và created_at.</p>
      </AdminCard>
    </AdminShell>
  );
}
