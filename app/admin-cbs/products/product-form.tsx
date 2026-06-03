import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";
import { categories } from "@/lib/utils/sample-data";

// Product form documents required B2B fields; submit wiring should call Supabase mutations.
export function ProductAdminForm({ mode, id }: { mode: "create" | "edit"; id?: string }) {
  return (
    <AdminShell>
      <h1 className="mb-5 text-2xl font-bold text-city-900">{mode === "create" ? "Thêm sản phẩm" : `Sửa sản phẩm ${id}`}</h1>
      <AdminCard title="Thông tin sản phẩm">
        <form className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Tên sản phẩm" />
            <Input label="Slug" />
            <Input label="Mã sản phẩm" />
            <label className="grid gap-1 text-sm font-semibold">Danh mục<select className="min-h-11 rounded-md border px-3">{categories.map((category) => <option key={category.slug}>{category.name}</option>)}</select></label>
          </div>
          <Input label="Mô tả ngắn" />
          <Textarea label="Mô tả chi tiết" />
          <Input label="Ảnh đại diện URL" />
          <Textarea label="Gallery ảnh URL, mỗi dòng một ảnh" />
          <Textarea label="Thông số kỹ thuật JSON" />
          <Textarea label="Ứng dụng, mỗi dòng một mục" />
          <Textarea label="Màu rèm / màu vải JSON" />
          <Textarea label="Màu hộp rèm JSON nếu có" />
          <button className="rounded-md bg-city-700 px-5 py-3 font-bold text-white" type="button">Lưu bản ghi</button>
        </form>
      </AdminCard>
    </AdminShell>
  );
}

function Input({ label }: { label: string }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<input className="min-h-11 rounded-md border px-3" /></label>;
}

function Textarea({ label }: { label: string }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<textarea rows={4} className="rounded-md border px-3 py-2" /></label>;
}
