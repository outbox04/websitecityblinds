import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/public/section-heading";

export const metadata: Metadata = { title: "Lien he" };

// Contact page gives B2B contact options and keeps primary conversion on partner signup.
export default function ContactPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Lien he" title="Ket noi voi City Blinds" description="Lien he de trao doi hop tac dai ly, showroom, nha thau hoac du an noi that." />
          <ButtonLink href="/doi-tac-ban-hang">Dang ky doi tac ban hang</ButtonLink>
        </div>
        <div className="rounded-md border border-slate-200 p-6">
          <p className="leading-8 text-slate-600">Hotline: 0900 000 000<br />Email: partner@cityblinds.vn<br />Khu vuc phuc vu: Toan quoc</p>
        </div>
      </div>
    </section>
  );
}
