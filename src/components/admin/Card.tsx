// Compact admin card for dashboard metrics and management panels.
export function AdminCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-lg font-bold text-city-900">{title}</h2>
      {children}
    </section>
  );
}
