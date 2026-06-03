import { CheckCircle2, Factory, Handshake, ShieldCheck, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { PartnerRegistrationForm } from "@/components/forms/partner-registration-form";
import { PostCard } from "@/components/public/post-card";
import { ProductCard } from "@/components/public/product-card";
import { SectionHeading } from "@/components/public/section-heading";
import { categories, posts, products } from "@/lib/utils/sample-data";

const reasons = [
  { icon: Factory, title: "San xuat on dinh", text: "Nguon hang va quy cach dong goi phu hop mo hinh dai ly." },
  { icon: ShieldCheck, title: "Kiem soat chat luong", text: "Thong so, mau sac va bao hanh duoc chuan hoa cho B2B." },
  { icon: Truck, title: "Ho tro giao hang", text: "Quy trinh tiep nhan don va giao hang ro rang theo khu vuc." },
  { icon: Handshake, title: "Dong hanh dai ly", text: "Ho tro catalogue, noi dung tu van va kien thuc san pham." }
];

// Homepage orders content from positioning -> catalogue -> trust -> process -> conversion.
export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="container-page grid min-h-[calc(100vh-64px)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 inline-flex rounded-md bg-city-50 px-3 py-2 text-sm font-bold text-city-700">San xuat va phan phoi rem B2B tai Viet Nam</div>
            <h1 className="text-4xl font-bold leading-tight text-city-900 md:text-6xl">City Blinds Vietnam</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Doi tac nguon hang rem cho dai ly, showroom noi that, nha thau va kien truc su can catalogue ro rang, de tu van va de thi cong.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/doi-tac-ban-hang">Dang ky doi tac ban hang</ButtonLink>
              <ButtonLink href="/san-pham" variant="ghost">Xem catalogue san pham</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80" alt="Khong gian noi that su dung rem City Blinds" className="aspect-[4/3] w-full rounded-md object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="Danh muc san pham" title="Catalogue du cho dai ly va du an" description="Section nay giup khach B2B nhanh chong nhan dien nhom san pham phu hop truoc khi vao chi tiet." />
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
          <SectionHeading eyebrow="Ly do chon City Blinds" title="Thiet ke cho mo hinh ban hang B2B" description="Nhom loi ich duoc dat sau danh muc de tra loi cau hoi: tai sao dai ly nen hop tac voi City Blinds." />
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
          <SectionHeading eyebrow="San pham noi bat" title="Cac dong rem de dua vao showroom" description="Section nay rut ngan duong dan tu nhan dien thuong hieu den san pham co the ban ngay." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.filter((product) => product.isFeatured).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Quy trinh hop tac" title="Tu dang ky den trien khai catalogue" description="Quy trinh nam buoc giup dai ly hieu ro viec tiep nhan va lam viec voi City Blinds." />
          <div className="grid gap-4 md:grid-cols-5">
            {["Gui thong tin", "Tu van danh muc", "Chot dieu kien", "Nhan catalogue", "Trien khai ban hang"].map((step, index) => (
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
            <SectionHeading inverse eyebrow="Dang ky doi tac" title="Tro thanh doi tac City Blinds" description="Form duoc dat sau khi nguoi dung da hieu san pham, loi ich va quy trinh, giup tang chat luong lead." />
            <ul className="grid gap-3 text-city-100">
              {["Khong co gio hang hay mua ngay", "Tap trung hop tac dai ly va nha thau", "Luu nguon, thiet bi va trang gui form cho CRM"].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-5 w-5 text-cta" /> {item}</li>
              ))}
            </ul>
          </div>
          <PartnerRegistrationForm formLocation="home" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Tin tuc / kien thuc" title="Noi dung ho tro dai ly tu van" description="Khu vuc SEO duoc dat cuoi trang de tiep tuc giu chan nguoi doc va xay dung chuyen mon." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
      </section>
    </>
  );
}
