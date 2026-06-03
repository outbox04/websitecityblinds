// Reusable section heading keeps public pages consistent and scannable.
export function SectionHeading({ eyebrow, title, description, inverse = false }: { eyebrow?: string; title: string; description?: string; inverse?: boolean }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <div className={`mb-2 text-sm font-bold uppercase tracking-wide ${inverse ? "text-orange-200" : "text-city-700"}`}>{eyebrow}</div> : null}
      <h2 className={`text-3xl font-bold md:text-4xl ${inverse ? "text-white" : "text-city-900"}`}>{title}</h2>
      {description ? <p className={`mt-3 text-base leading-7 ${inverse ? "text-city-100" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}
