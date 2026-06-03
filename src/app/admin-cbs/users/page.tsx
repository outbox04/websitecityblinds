import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";

// User page manages profiles tied to Supabase Auth users and role-based permissions.
export default function UsersAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="Quản lý user">
        <p className="text-sm text-slate-600">Admin user được tạo và quản lý qua Supabase Auth. Bảng profiles lưu role admin, editor hoặc viewer.</p>
      </AdminCard>
    </AdminShell>
  );
}
