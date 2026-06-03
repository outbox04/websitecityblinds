export function CategoryForm() {
  return (
    <form className="grid gap-4">
      <label className="grid gap-1 text-sm font-semibold">Tên danh mục<input className="min-h-11 rounded-md border px-3" /></label>
      <label className="grid gap-1 text-sm font-semibold">Slug<input className="min-h-11 rounded-md border px-3" /></label>
      <label className="grid gap-1 text-sm font-semibold">Mô tả<textarea rows={4} className="rounded-md border px-3 py-2" /></label>
      <button type="button" className="rounded-md bg-city-700 px-5 py-3 font-bold text-white">Lưu danh mục</button>
    </form>
  );
}
