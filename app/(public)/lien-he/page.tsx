import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/public/section-heading";

export const metadata: Metadata = { title: "Liên hệ" };

// Contact page gives B2B contact options and keeps primary conversion on partner signup.
export default function ContactPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Liên hệ" title="Kết nối với City Blinds" description="Liên hệ để trao đổi hợp tác đại lý, showroom, nhà thầu hoặc dự án nội thất." />
          <ButtonLink href="/doi-tac-ban-hang">Đăng ký đối tác bán hàng</ButtonLink>
        </div>
        <div className="rounded-md border border-slate-200 p-6">
          <p className="leading-8 text-slate-600">Hotline: 0900 000 000<br />Email: partner@cityblinds.vn<br />Khu vực phục vụ: Toàn quốc</p>
        </div>
      </div>
    </section>
  );
}
