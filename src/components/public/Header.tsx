"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";

const nav = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/doi-tac-ban-hang", label: "Đối tác bán hàng" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" }
];

export function PublicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-city-900 bg-city-900/95 text-white backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-city-900">
          <img src="/images/city-blinds-logo.png" alt="City Blinds" className="h-14 w-auto" />
          <span className="sr-only">City Blinds</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-city-100 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-cta">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/doi-tac-ban-hang">Đăng ký đối tác bán hàng</ButtonLink>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-md border border-city-700 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Mở menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-city-700 bg-city-900 lg:hidden">
          <nav className="container-page grid gap-1 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 font-semibold text-city-100 hover:bg-city-700" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/doi-tac-ban-hang" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Trở thành đối tác City Blinds
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
