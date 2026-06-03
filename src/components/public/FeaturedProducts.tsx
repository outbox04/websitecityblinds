import type { Product } from "@/types/product";
import { ProductCard } from "@/components/public/product-card";
import { SectionHeading } from "@/components/public/section-heading";

export function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Sản phẩm nổi bật"
          title="Các dòng rèm dễ đưa vào showroom"
          description="Khu vực này rút ngắn đường dẫn từ nhận diện thương hiệu đến sản phẩm có thể bán ngay."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}
