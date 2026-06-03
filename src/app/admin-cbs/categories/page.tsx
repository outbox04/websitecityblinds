import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";
import { getCategories } from "@/lib/supabase/queries";

export default async function CategoriesAdminPage() {
  const categories = await getCategories();

  return (
    <AdminShell>
      <AdminCard title="Quản lý danh mục sản phẩm">
        <DataTable
          rows={categories}
          columns={[
            { key: "name", header: "Tên", cell: (category) => <span className="font-semibold">{category.name}</span> },
            { key: "slug", header: "Slug", cell: (category) => category.slug },
            { key: "description", header: "Mô tả", cell: (category) => category.description },
            { key: "status", header: "Trạng thái", cell: (category) => category.isActive ? "Active" : "Ẩn" }
          ]}
        />
      </AdminCard>
    </AdminShell>
  );
}
