import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/public/product-card";
import { SectionHeading } from "@/components/public/section-heading";
import { categories, products } from "@/lib/utils/sample-data";

export const metadata: Metadata = { title: "San pham" };

// Product listing supports category filtering but avoids cart and buy-now ecommerce patterns.
export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const selected = (await searchParams).category;
  const visibleProducts = selected ? products.filter((product) => product.categorySlug === selected) : products;

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page">
        <SectionHeading eyebrow="San pham" title="Catalogue san pham B2B" description="Loc theo danh muc de dai ly va nha thau nhanh chong tim dung dong rem can tu van." />
        <div className="mb-7 flex flex-wrap gap-2">
          <Link href="/san-pham" className={`rounded-md px-4 py-2 text-sm font-bold ${!selected ? "bg-city-700 text-white" : "bg-white text-city-900"}`}>Tat ca</Link>
          {categories.map((category) => (
            <Link key={category.slug} href={`/san-pham?category=${category.slug}`} className={`rounded-md px-4 py-2 text-sm font-bold ${selected === category.slug ? "bg-city-700 text-white" : "bg-white text-city-900"}`}>
              {category.name}
            </Link>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}
