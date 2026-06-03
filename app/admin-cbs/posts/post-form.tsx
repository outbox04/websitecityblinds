import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";

const fields = ["Tieu de bai viet", "Slug", "Danh muc bai viet", "Tom tat", "Anh dai dien", "Alt anh", "OG Image", "SEO Title", "Meta Description", "Focus Keyword", "Canonical URL", "Tac gia", "Ngay xuat ban", "San pham lien quan", "Danh muc lien quan"];

// Mini CMS form includes SEO, FAQ, schema and rich editor requirements.
export function PostAdminForm({ mode, id }: { mode: "create" | "edit"; id?: string }) {
  return (
    <AdminShell>
      <h1 className="mb-5 text-2xl font-bold text-city-900">{mode === "create" ? "Them bai viet SEO" : `Sua bai viet ${id}`}</h1>
      <AdminCard title="Mini CMS SEO">
        <form className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map((field) => <label key={field} className="grid gap-1 text-sm font-semibold">{field}<input className="min-h-11 rounded-md border px-3" /></label>)}
          </div>
          <label className="grid gap-1 text-sm font-semibold">Schema Type<select className="min-h-11 rounded-md border px-3"><option>Article</option><option>BlogPosting</option><option>FAQPage</option></select></label>
          <label className="grid gap-1 text-sm font-semibold">Trang thai<select className="min-h-11 rounded-md border px-3"><option>draft</option><option>published</option><option>hidden</option></select></label>
          <label className="grid gap-1 text-sm font-semibold">Noi dung bai viet bang editor nang cao<textarea rows={10} className="rounded-md border px-3 py-2" placeholder="Ho tro H2, H3, H4, bold, italic, list, quote, image, table, button CTA, FAQ block, Youtube embed." /></label>
          <label className="grid gap-1 text-sm font-semibold">FAQ Builder JSON<textarea rows={5} className="rounded-md border px-3 py-2" /></label>
          <button className="rounded-md bg-city-700 px-5 py-3 font-bold text-white" type="button">Luu bai viet</button>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
