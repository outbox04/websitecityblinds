import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";

// Activity logs record important admin actions for auditability.
export default function ActivityLogsAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="Nhật ký hoạt động">
        <p className="text-sm text-slate-600">Bảng activity_logs lưu actor_id, action, entity_type, entity_id, metadata và created_at.</p>
      </AdminCard>
    </AdminShell>
  );
}
