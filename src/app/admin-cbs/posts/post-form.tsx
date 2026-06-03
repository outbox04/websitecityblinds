import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";

const fields = ["Tiêu đề bài viết", "Slug", "Danh mục bài viết", "Tóm tắt", "Ảnh đại diện", "Alt ảnh", "OG Image", "SEO Title", "Meta Description", "Focus Keyword", "Canonical URL", "Tác giả", "Ngày xuất bản", "Sản phẩm liên quan", "Danh mục liên quan"];

// Mini CMS form includes SEO, FAQ, schema and rich editor requirements.
export function PostAdminForm({ mode, id }: { mode: "create" | "edit"; id?: string }) {
  return (
    <AdminShell>
      <h1 className="mb-5 text-2xl font-bold text-city-900">{mode === "create" ? "Thêm bài viết SEO" : `Sửa bài viết ${id}`}</h1>
      <AdminCard title="Mini CMS SEO">
        <form className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map((field) => <label key={field} className="grid gap-1 text-sm font-semibold">{field}<input className="min-h-11 rounded-md border px-3" /></label>)}
          </div>
          <label className="grid gap-1 text-sm font-semibold">Schema Type<select className="min-h-11 rounded-md border px-3"><option>Article</option><option>BlogPosting</option><option>FAQPage</option></select></label>
          <label className="grid gap-1 text-sm font-semibold">Trạng thái<select className="min-h-11 rounded-md border px-3"><option>draft</option><option>published</option><option>hidden</option></select></label>
          <label className="grid gap-1 text-sm font-semibold">Nội dung bài viết bằng editor nâng cao<textarea rows={10} className="rounded-md border px-3 py-2" placeholder="Hỗ trợ H2, H3, H4, bold, italic, list, quote, image, table, button CTA, FAQ block, Youtube embed." /></label>
          <label className="grid gap-1 text-sm font-semibold">FAQ Builder JSON<textarea rows={5} className="rounded-md border px-3 py-2" /></label>
          <button className="rounded-md bg-city-700 px-5 py-3 font-bold text-white" type="button">Lưu bài viết</button>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
