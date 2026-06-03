import { PublicFooter } from "@/components/public/Footer";
import { PublicHeader } from "@/components/public/Header";

// Public layout wraps only customer-facing routes; admin uses a separate hidden layout.
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </>
  );
}
