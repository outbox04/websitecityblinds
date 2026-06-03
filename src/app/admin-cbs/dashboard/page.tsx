import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";
import { getDashboardStats } from "@/lib/supabase/queries";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <AdminShell>
      <div className="grid gap-5 md:grid-cols-4">
        <AdminCard title="Sản phẩm"><p className="text-3xl font-bold">{stats.products}</p><p className="text-sm text-slate-500">Đang active</p></AdminCard>
        <AdminCard title="Danh mục"><p className="text-3xl font-bold">{stats.categories}</p><p className="text-sm text-slate-500">Nhóm catalogue</p></AdminCard>
        <AdminCard title="Bài viết SEO"><p className="text-3xl font-bold">{stats.posts}</p><p className="text-sm text-slate-500">Published</p></AdminCard>
        <AdminCard title="Lead CRM"><p className="text-3xl font-bold">{stats.partners}</p><p className="text-sm text-slate-500">Đăng ký đối tác</p></AdminCard>
      </div>
      <div className="mt-5">
        <AdminCard title="Hướng dẫn quản trị">
          <p className="text-sm leading-6 text-slate-600">Khu admin đọc dữ liệu từ Supabase. Các bảng, RLS và seed nằm trong thư mục supabase.</p>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
