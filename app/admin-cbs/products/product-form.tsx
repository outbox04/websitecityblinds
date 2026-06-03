import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";
import { categories } from "@/lib/utils/sample-data";

// Product form documents required B2B fields; submit wiring should call Supabase mutations.
export function ProductAdminForm({ mode, id }: { mode: "create" | "edit"; id?: string }) {
  return (
    <AdminShell>
      <h1 className="mb-5 text-2xl font-bold text-city-900">{mode === "create" ? "Them san pham" : `Sua san pham ${id}`}</h1>
      <AdminCard title="Thong tin san pham">
        <form className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Ten san pham" />
            <Input label="Slug" />
            <Input label="Ma san pham" />
            <label className="grid gap-1 text-sm font-semibold">Danh muc<select className="min-h-11 rounded-md border px-3">{categories.map((category) => <option key={category.slug}>{category.name}</option>)}</select></label>
          </div>
          <Input label="Mo ta ngan" />
          <Textarea label="Mo ta chi tiet" />
          <Input label="Anh dai dien URL" />
          <Textarea label="Gallery anh URL, moi dong mot anh" />
          <Textarea label="Thong so ky thuat JSON" />
          <Textarea label="Ung dung, moi dong mot muc" />
          <Textarea label="Mau rem / mau vai JSON" />
          <Textarea label="Mau hop rem JSON neu co" />
          <button className="rounded-md bg-city-700 px-5 py-3 font-bold text-white" type="button">Luu ban ghi</button>
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
