import type { Metadata } from "next";

// Admin layout is noindex and deliberately separate from public navigation.
export const metadata: Metadata = {
  title: "City Blinds Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true
  }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
