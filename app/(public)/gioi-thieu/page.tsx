import type { Metadata } from "next";
import { SectionHeading } from "@/components/public/section-heading";

export const metadata: Metadata = { title: "Gioi thieu" };

// About page explains brand positioning for B2B partners.
export default function AboutPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Ve City Blinds" title="Thuong hieu rem cho he thong dai ly Viet Nam" description="City Blinds tap trung vao san xuat, phan phoi va ho tro noi dung ban hang cho doi tac B2B." />
        </div>
        <div className="grid gap-5 text-base leading-8 text-slate-600">
          <p>Website duoc thiet ke theo huong catalogue B2B: noi dung san pham ro, thong so de quet nhanh, CTA tap trung vao dang ky doi tac thay vi ban le.</p>
          <p>Moi section uu tien cau hoi cua dai ly: co san pham nao, vi sao nen hop tac, quy trinh ra sao va gui thong tin o dau.</p>
        </div>
      </div>
    </section>
  );
}
