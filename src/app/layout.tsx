import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "@/app/globals.css";
import { getSiteUrl } from "@/lib/utils/site-url";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "City Blinds Vietnam - Sản xuất và phân phối rèm B2B",
    template: "%s | City Blinds Vietnam"
  },
  description:
    "City Blinds sản xuất và phân phối rèm cầu vồng, rèm cuốn, rèm tổ ong, rèm PVC, bạt che nắng và động cơ rèm tự động cho đại lý tại Việt Nam.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "City Blinds Vietnam",
    description: "Thương hiệu sản xuất và phân phối rèm B2B tại Việt Nam.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body>{children}</body>
    </html>
  );
}
