import type { Metadata } from "next";
import { SectionHeading } from "@/components/public/section-heading";

export const metadata: Metadata = { title: "Giới thiệu" };

// About page explains brand positioning for B2B partners.
export default function AboutPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Về City Blinds" title="Thương hiệu rèm cho hệ thống đại lý Việt Nam" description="City Blinds tập trung vào sản xuất, phân phối và hỗ trợ nội dung bán hàng cho đối tác B2B." />
        </div>
        <div className="grid gap-5 text-base leading-8 text-slate-600">
          <p>Website được thiết kế theo hướng catalogue B2B: nội dung sản phẩm rõ, thông số dễ quét nhanh, CTA tập trung vào đăng ký đối tác thay vì bán lẻ.</p>
          <p>Mỗi khu vực ưu tiên câu hỏi của đại lý: có sản phẩm nào, vì sao nên hợp tác, quy trình ra sao và gửi thông tin ở đâu.</p>
        </div>
      </div>
    </section>
  );
}
