import { CheckCircle2, Factory, Handshake, ShieldCheck, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { PartnerRegistrationForm } from "@/components/forms/partner-registration-form";
import { PostCard } from "@/components/public/post-card";
import { ProductCard } from "@/components/public/product-card";
import { SectionHeading } from "@/components/public/section-heading";
import { categories, posts, products } from "@/lib/utils/sample-data";

const reasons = [
  { icon: Factory, title: "Sản xuất ổn định", text: "Nguồn hàng và quy cách đóng gói phù hợp mô hình đại lý." },
  { icon: ShieldCheck, title: "Kiểm soát chất lượng", text: "Thông số, màu sắc và bảo hành được chuẩn hóa cho B2B." },
  { icon: Truck, title: "Hỗ trợ giao hàng", text: "Quy trình tiếp nhận đơn và giao hàng rõ ràng theo khu vực." },
  { icon: Handshake, title: "Đồng hành đại lý", text: "Hỗ trợ catalogue, nội dung tư vấn và kiến thức sản phẩm." }
];

// Homepage orders content from positioning -> catalogue -> trust -> process -> conversion.
export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="container-page grid min-h-[calc(100vh-64px)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 inline-flex rounded-md bg-city-50 px-3 py-2 text-sm font-bold text-city-700">Sản xuất và phân phối rèm B2B tại Việt Nam</div>
            <h1 className="text-4xl font-bold leading-tight text-city-900 md:text-6xl">City Blinds Vietnam</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Đối tác nguồn hàng rèm cho đại lý, showroom nội thất, nhà thầu và kiến trúc sư cần catalogue rõ ràng, dễ tư vấn và dễ thi công.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/doi-tac-ban-hang">Đăng ký đối tác bán hàng</ButtonLink>
              <ButtonLink href="/san-pham" variant="ghost">Xem catalogue sản phẩm</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80" alt="Không gian nội thất sử dụng rèm City Blinds" className="aspect-[4/3] w-full rounded-md object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="Danh mục sản phẩm" title="Catalogue đủ cho đại lý và dự án" description="Khu vực này giúp khách B2B nhanh chóng nhận diện nhóm sản phẩm phù hợp trước khi vào chi tiết." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a key={category.slug} href={`/san-pham?category=${category.slug}`} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm hover:border-city-600">
                <h3 className="text-xl font-bold text-city-900">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Lý do chọn City Blinds" title="Thiết kế cho mô hình bán hàng B2B" description="Nhóm lợi ích được đặt sau danh mục để trả lời câu hỏi: tại sao đại lý nên hợp tác với City Blinds." />
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

      <section className="section-pad bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="Sản phẩm nổi bật" title="Các dòng rèm dễ đưa vào showroom" description="Khu vực này rút ngắn đường dẫn từ nhận diện thương hiệu đến sản phẩm có thể bán ngay." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.filter((product) => product.isFeatured).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Quy trình hợp tác" title="Từ đăng ký đến triển khai catalogue" description="Quy trình năm bước giúp đại lý hiểu rõ việc tiếp nhận và làm việc với City Blinds." />
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

      <section className="section-pad bg-city-900 text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading inverse eyebrow="Đăng ký đối tác" title="Trở thành đối tác City Blinds" description="Form được đặt sau khi người dùng đã hiểu sản phẩm, lợi ích và quy trình, giúp tăng chất lượng lead." />
            <ul className="grid gap-3 text-city-100">
              {["Không có giỏ hàng hay mua ngay", "Tập trung hợp tác đại lý và nhà thầu", "Lưu nguồn, thiết bị và trang gửi form cho CRM"].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-5 w-5 text-cta" /> {item}</li>
              ))}
            </ul>
          </div>
          <PartnerRegistrationForm formLocation="home" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Tin tức / kiến thức" title="Nội dung hỗ trợ đại lý tư vấn" description="Khu vực SEO được đặt cuối trang để tiếp tục giữ chân người đọc và xây dựng chuyên môn." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
      </section>
    </>
  );
}
