import type { Metadata } from "next";
import { PartnerRegistrationForm } from "@/components/forms/partner-registration-form";
import { SectionHeading } from "@/components/public/section-heading";

export const metadata: Metadata = { title: "Doi tac ban hang" };

// Partner page is the main conversion route for B2B leads.
export default function PartnerPage() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Doi tac ban hang" title="Dang ky hop tac cung City Blinds" description="Thong tin gui tu form se duoc validate, luu vao CRM Supabase va gui thong bao Telegram cho doi ngu phu trach." />
          <div className="grid gap-4 text-sm leading-6 text-slate-600">
            <p>Trang nay duoc tach rieng de cac CTA tren website dua ve mot diem chuyen doi duy nhat, giup tracking nguon lead ro rang hon.</p>
            <p>City Blinds khong dat CTA bao gia si theo yeu cau, ma tap trung vao loi moi tro thanh doi tac ban hang.</p>
          </div>
        </div>
        <PartnerRegistrationForm formLocation="partner-page" />
      </div>
    </section>
  );
}
