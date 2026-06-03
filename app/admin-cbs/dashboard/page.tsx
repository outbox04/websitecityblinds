import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";
import { categories, posts, products } from "@/lib/utils/sample-data";

// Dashboard summarizes operational areas for admin users.
export default function DashboardPage() {
  return (
    <AdminShell>
      <div className="grid gap-5 md:grid-cols-3">
        <AdminCard title="San pham"><p className="text-3xl font-bold">{products.length}</p><p className="text-sm text-slate-500">Dang active</p></AdminCard>
        <AdminCard title="Danh muc"><p className="text-3xl font-bold">{categories.length}</p><p className="text-sm text-slate-500">Nhom catalogue</p></AdminCard>
        <AdminCard title="Bai viet SEO"><p className="text-3xl font-bold">{posts.length}</p><p className="text-sm text-slate-500">Published</p></AdminCard>
      </div>
      <div className="mt-5">
        <AdminCard title="Huong dan quan tri">
          <p className="text-sm leading-6 text-slate-600">Ket noi Supabase de thay sample data bang du lieu that. Cac bang, RLS va seed nam trong thu muc supabase.</p>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
