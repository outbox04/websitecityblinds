import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";
import { categories, posts, products } from "@/lib/utils/sample-data";

// Dashboard summarizes operational areas for admin users.
export default function DashboardPage() {
  return (
    <AdminShell>
      <div className="grid gap-5 md:grid-cols-3">
        <AdminCard title="Sản phẩm"><p className="text-3xl font-bold">{products.length}</p><p className="text-sm text-slate-500">Đang active</p></AdminCard>
        <AdminCard title="Danh mục"><p className="text-3xl font-bold">{categories.length}</p><p className="text-sm text-slate-500">Nhóm catalogue</p></AdminCard>
        <AdminCard title="Bài viết SEO"><p className="text-3xl font-bold">{posts.length}</p><p className="text-sm text-slate-500">Published</p></AdminCard>
      </div>
      <div className="mt-5">
        <AdminCard title="Hướng dẫn quản trị">
          <p className="text-sm leading-6 text-slate-600">Kết nối Supabase để thay sample data bằng dữ liệu thật. Các bảng, RLS và seed nằm trong thư mục supabase.</p>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
