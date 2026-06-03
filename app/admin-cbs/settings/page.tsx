import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";

// Settings page maps to site_settings table for editable website metadata.
export default function SettingsAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="Cài đặt website">
        <form className="grid max-w-2xl gap-4">
          <input placeholder="Site title" className="min-h-11 rounded-md border px-3" />
          <input placeholder="Meta description mặc định" className="min-h-11 rounded-md border px-3" />
          <button type="button" className="rounded-md bg-city-700 px-5 py-3 font-bold text-white">Lưu cài đặt</button>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
