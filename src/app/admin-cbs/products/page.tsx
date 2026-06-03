import Link from "next/link";
import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";
import { ButtonLink } from "@/components/ui/Button";
import { getProducts } from "@/lib/supabase/queries";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <AdminShell>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-city-900">Quản lý sản phẩm</h1>
        <ButtonLink href="/admin-cbs/products/create">Thêm sản phẩm</ButtonLink>
      </div>
      <AdminCard title="Danh sách sản phẩm">
        <DataTable
          rows={products}
          columns={[
            { key: "name", header: "Tên", cell: (product) => <span className="font-semibold">{product.name}</span> },
            { key: "code", header: "Mã", cell: (product) => product.code },
            { key: "category", header: "Danh mục", cell: (product) => product.categoryName || product.categorySlug },
            { key: "status", header: "Trạng thái", cell: (product) => product.isActive ? "Active" : "Ẩn" },
            { key: "actions", header: "", cell: (product) => <Link className="font-bold text-cta" href={`/admin-cbs/products/edit/${product.id}`}>Sửa</Link> }
          ]}
        />
      </AdminCard>
    </AdminShell>
  );
}
