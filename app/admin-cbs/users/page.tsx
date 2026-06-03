import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";

// User page manages profiles tied to Supabase Auth users and role-based permissions.
export default function UsersAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="Quan ly user">
        <p className="text-sm text-slate-600">Admin user duoc tao va quan ly qua Supabase Auth. Bang profiles luu role admin, editor hoac viewer.</p>
      </AdminCard>
    </AdminShell>
  );
}
