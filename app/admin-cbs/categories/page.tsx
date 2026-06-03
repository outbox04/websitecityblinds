import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";
import { categories } from "@/lib/utils/sample-data";

// Category admin manages catalogue filters used by public product pages.
export default function CategoriesAdminPage() {
  return (
    <AdminShell>
      <AdminCard title="Quan ly danh muc san pham">
        <div className="grid gap-3">{categories.map((category) => <div key={category.id} className="rounded-md border p-3"><b>{category.name}</b><p className="text-sm text-slate-600">{category.description}</p></div>)}</div>
      </AdminCard>
    </AdminShell>
  );
}
