import Link from "next/link";
import type { Category } from "@/types/category";
import { SectionHeading } from "@/components/public/section-heading";

export function ProductCategorySection({ categories }: { categories: Category[] }) {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Danh mục sản phẩm"
          title="Catalogue đủ cho đại lý và dự án"
          description="Khu vực này giúp khách B2B nhanh chóng nhận diện nhóm sản phẩm phù hợp trước khi vào chi tiết."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/san-pham?category=${category.slug}`} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm hover:border-city-600">
              <h3 className="text-xl font-bold text-city-900">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
