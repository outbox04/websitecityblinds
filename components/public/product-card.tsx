import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";
import { getCategory } from "@/lib/utils/sample-data";

// Product card presents catalogue data for B2B browsing without cart or buy-now actions.
export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categorySlug);

  return (
    <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <img src={product.coverImage} alt={product.name} className="h-56 w-full object-cover" />
      <div className="p-5">
        <div className="mb-2 text-xs font-bold uppercase text-city-700">{category?.name}</div>
        <h3 className="text-xl font-bold text-city-900">{product.name}</h3>
        <p className="mt-2 min-h-14 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <Link href={`/san-pham/${product.slug}`} className="mt-4 inline-flex items-center gap-2 font-bold text-cta">
          Xem chi tiết <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
