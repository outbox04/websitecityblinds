import type { Metadata } from "next";
import "@/styles/globals.css";

// Root layout wires global CSS and safe SEO defaults for public pages.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "City Blinds Vietnam - San xuat va phan phoi rem B2B",
    template: "%s | City Blinds Vietnam"
  },
  description:
    "City Blinds san xuat va phan phoi rem cau vong, rem cuon, rem to ong, rem PVC, bat che nang va dong co rem tu dong cho dai ly tai Viet Nam.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "City Blinds Vietnam",
    description: "Thuong hieu san xuat va phan phoi rem B2B tai Viet Nam.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
