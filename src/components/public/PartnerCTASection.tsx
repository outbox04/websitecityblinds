import { CheckCircle2 } from "lucide-react";
import type { Category } from "@/types/category";
import { PartnerRegistrationForm } from "@/components/public/ContactForm";
import { SectionHeading } from "@/components/public/section-heading";

export function PartnerCTASection({ categories }: { categories: Category[] }) {
  return (
    <section className="section-pad bg-city-900 text-white">
      <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            inverse
            eyebrow="Đăng ký đối tác"
            title="Trở thành đối tác City Blinds"
            description="Form được đặt sau khi người dùng đã hiểu sản phẩm, lợi ích và quy trình, giúp tăng chất lượng lead."
          />
          <ul className="grid gap-3 text-city-100">
            {["Không có giỏ hàng hay mua ngay", "Tập trung hợp tác đại lý và nhà thầu", "Lưu nguồn, thiết bị và trang gửi form cho CRM"].map((item) => (
              <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-5 w-5 text-cta" /> {item}</li>
            ))}
          </ul>
        </div>
        <PartnerRegistrationForm categories={categories} formLocation="home" />
      </div>
    </section>
  );
}
