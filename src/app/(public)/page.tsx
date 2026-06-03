import { Factory, Handshake, ShieldCheck, Truck } from "lucide-react";
import { BlogSection } from "@/components/public/BlogSection";
import { FeaturedProducts } from "@/components/public/FeaturedProducts";
import { HeroSection } from "@/components/public/HeroSection";
import { PartnerCTASection } from "@/components/public/PartnerCTASection";
import { ProductCategorySection } from "@/components/public/ProductCategorySection";
import { SectionHeading } from "@/components/public/section-heading";
import { getCategories, getPosts, getProducts } from "@/lib/supabase/queries";

const reasons = [
  { icon: Factory, title: "Sản xuất ổn định", text: "Nguồn hàng và quy cách đóng gói phù hợp mô hình đại lý." },
  { icon: ShieldCheck, title: "Kiểm soát chất lượng", text: "Thông số, màu sắc và bảo hành được chuẩn hóa cho B2B." },
  { icon: Truck, title: "Hỗ trợ giao hàng", text: "Quy trình tiếp nhận đơn và giao hàng rõ ràng theo khu vực." },
  { icon: Handshake, title: "Đồng hành đại lý", text: "Hỗ trợ catalogue, nội dung tư vấn và kiến thức sản phẩm." }
];

export default async function HomePage() {
  const [categories, featuredProducts, posts] = await Promise.all([
    getCategories(),
    getProducts({ featuredOnly: true }),
    getPosts()
  ]);

  return (
    <>
      <HeroSection />
      <ProductCategorySection categories={categories} />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Lý do chọn City Blinds"
            title="Thiết kế cho mô hình bán hàng B2B"
            description="Nhóm lợi ích được đặt sau danh mục để trả lời câu hỏi: tại sao đại lý nên hợp tác với City Blinds."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-md border border-slate-200 p-5">
                  <Icon className="mb-4 text-cta" />
                  <h3 className="font-bold text-city-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <FeaturedProducts products={featuredProducts} />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Quy trình hợp tác"
            title="Từ đăng ký đến triển khai catalogue"
            description="Quy trình năm bước giúp đại lý hiểu rõ việc tiếp nhận và làm việc với City Blinds."
          />
          <div className="grid gap-4 md:grid-cols-5">
            {["Gửi thông tin", "Tư vấn danh mục", "Chốt điều kiện", "Nhận catalogue", "Triển khai bán hàng"].map((step, index) => (
              <div key={step} className="rounded-md bg-city-50 p-5">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-city-700 font-bold text-white">{index + 1}</div>
                <div className="font-bold text-city-900">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PartnerCTASection categories={categories} />
      <BlogSection posts={posts} />
    </>
  );
}
