import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/public/product-card";
import { SectionHeading } from "@/components/public/section-heading";
import { getProductBySlug, getProducts } from "@/lib/supabase/queries";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = await getProductBySlug((await params).slug);
  return { title: product?.name || "Sản phẩm", description: product?.shortDescription };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = await getProductBySlug((await params).slug);
  if (!product) notFound();

  const related = (await getProducts({ categorySlug: product.categorySlug })).filter((item) => item.slug !== product.slug);

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <img src={product.coverImage} alt={product.name} className="aspect-[4/3] w-full rounded-md object-cover" />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {product.gallery.map((item) => <img key={item} src={item} alt={product.name} className="aspect-video rounded-md object-cover" />)}
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm font-bold uppercase text-city-700">{product.categoryName || product.categorySlug}</div>
            <h1 className="text-4xl font-bold text-city-900">{product.name}</h1>
            <p className="mt-2 text-sm font-bold text-slate-500">Mã sản phẩm: {product.code}</p>
            <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>
            <ButtonLink href="/doi-tac-ban-hang" className="mt-6">Đăng ký đối tác bán hàng</ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-md border border-slate-200 p-5">
            <h2 className="mb-4 text-2xl font-bold text-city-900">Thông số kỹ thuật</h2>
            <dl className="grid gap-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 border-b border-slate-100 pb-2 text-sm">
                  <dt className="font-bold text-slate-700">{key}</dt>
                  <dd className="text-slate-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-md border border-slate-200 p-5">
            <h2 className="mb-4 text-2xl font-bold text-city-900">Ứng dụng</h2>
            <ul className="grid gap-2 text-slate-600">
              {product.applications.map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ColorPanel title="Màu rèm / màu vải" colors={product.fabricColors} />
          {product.boxColors?.length ? <ColorPanel title="Màu hộp rèm" colors={product.boxColors} /> : null}
        </div>

        {related.length ? (
          <div className="mt-12">
            <SectionHeading title="Sản phẩm liên quan" description={`Các sản phẩm cùng danh mục ${product.categoryName || product.categorySlug}.`} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => <ProductCard key={item.id} product={item} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ColorPanel({ title, colors }: { title: string; colors: { id: string; name: string; hex: string }[] }) {
  return (
    <div className="rounded-md border border-slate-200 p-5">
      <h2 className="mb-4 text-2xl font-bold text-city-900">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <div key={color.id} className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold">
            <span className="h-6 w-6 rounded border border-slate-200" style={{ backgroundColor: color.hex }} />
            {color.name}
          </div>
        ))}
      </div>
    </div>
  );
}
