import Link from "next/link";

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap gap-2 text-sm text-slate-500">
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          {index > 0 ? <span>/</span> : null}
          <Link href={item.href} className="hover:text-city-700">{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}
