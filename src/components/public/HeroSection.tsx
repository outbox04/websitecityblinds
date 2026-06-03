import { ButtonLink } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container-page grid min-h-[calc(100vh-64px)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-4 inline-flex rounded-md bg-city-50 px-3 py-2 text-sm font-bold text-city-700">
            Sản xuất và phân phối rèm B2B tại Việt Nam
          </div>
          <h1 className="text-4xl font-bold leading-tight text-city-900 md:text-6xl">City Blinds Vietnam</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Đối tác nguồn hàng rèm cho đại lý, showroom nội thất, nhà thầu và kiến trúc sư cần catalogue rõ ràng, dễ tư vấn và dễ thi công.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/doi-tac-ban-hang">Đăng ký đối tác bán hàng</ButtonLink>
            <ButtonLink href="/san-pham" variant="ghost">Xem catalogue sản phẩm</ButtonLink>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
          alt="Không gian nội thất sử dụng rèm City Blinds"
          className="aspect-[4/3] w-full rounded-md object-cover shadow-soft"
        />
      </div>
    </section>
  );
}
