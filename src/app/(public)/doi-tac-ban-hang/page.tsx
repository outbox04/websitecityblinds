import type { Metadata } from "next";
import { PartnerRegistrationForm } from "@/components/public/ContactForm";
import { SectionHeading } from "@/components/public/section-heading";
import { getCategories } from "@/lib/supabase/queries";

export const metadata: Metadata = { title: "Đối tác bán hàng" };

export default async function PartnerPage() {
  const categories = await getCategories();

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Đối tác bán hàng"
            title="Đăng ký hợp tác cùng City Blinds"
            description="Thông tin gửi từ form sẽ được kiểm tra, lưu vào CRM Supabase và gửi thông báo Telegram cho đội ngũ phụ trách."
          />
          <div className="grid gap-4 text-sm leading-6 text-slate-600">
            <p>Trang này được tách riêng để các CTA trên website đưa về một điểm chuyển đổi duy nhất, giúp tracking nguồn lead rõ ràng hơn.</p>
            <p>City Blinds tập trung vào lời mời trở thành đối tác bán hàng thay vì luồng giỏ hàng của website thương mại điện tử.</p>
          </div>
        </div>
        <PartnerRegistrationForm categories={categories} formLocation="partner-page" />
      </div>
    </section>
  );
}
