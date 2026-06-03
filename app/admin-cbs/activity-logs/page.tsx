import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";

// Activity logs record important admin actions for auditability.
export default function ActivityLogsAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="Nhat ky hoat dong">
        <p className="text-sm text-slate-600">Bang activity_logs luu actor_id, action, entity_type, entity_id, metadata va created_at.</p>
      </AdminCard>
    </AdminShell>
  );
}
