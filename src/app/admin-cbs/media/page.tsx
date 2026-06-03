import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";

// Media manager stores URL metadata in media_files after upload to Supabase Storage.
export default function MediaAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="Quản lý media">
        <form className="grid max-w-xl gap-4">
          <input type="file" accept="image/jpeg,image/png,image/webp" className="rounded-md border bg-white p-3" />
          <input placeholder="Alt text cho SEO" className="min-h-11 rounded-md border px-3" />
          <button type="button" className="rounded-md bg-city-700 px-5 py-3 font-bold text-white">Upload lên Supabase Storage</button>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
