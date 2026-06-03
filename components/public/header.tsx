"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Trang chu" },
  { href: "/gioi-thieu", label: "Gioi thieu" },
  { href: "/san-pham", label: "San pham" },
  { href: "/doi-tac-ban-hang", label: "Doi tac ban hang" },
  { href: "/tin-tuc", label: "Tin tuc" },
  { href: "/lien-he", label: "Lien he" }
];

// Public header intentionally excludes every admin URL from navigation.
export function PublicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-city-900">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-city-700 text-white">CB</span>
          <span>City Blinds</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-city-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/doi-tac-ban-hang">Dang ky doi tac ban hang</ButtonLink>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Mo menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-page grid gap-1 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 font-semibold text-slate-700 hover:bg-city-50" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/doi-tac-ban-hang" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Tro thanh doi tac City Blinds
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
