import Link from "next/link";
import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/lib/utils/sample-data";

// Product admin listing maps to Supabase products and color child tables.
export default function AdminProductsPage() {
  return (
    <AdminShell>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-city-900">Quan ly san pham</h1>
        <ButtonLink href="/admin-cbs/products/create">Them san pham</ButtonLink>
      </div>
      <AdminCard title="Danh sach san pham">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead><tr className="border-b"><th className="py-2">Ten</th><th>Ma</th><th>Danh muc</th><th></th></tr></thead>
            <tbody>{products.map((product) => <tr key={product.id} className="border-b"><td className="py-3 font-semibold">{product.name}</td><td>{product.code}</td><td>{product.categorySlug}</td><td><Link className="font-bold text-cta" href={`/admin-cbs/products/edit/${product.id}`}>Sua</Link></td></tr>)}</tbody>
          </table>
        </div>
      </AdminCard>
    </AdminShell>
  );
}
