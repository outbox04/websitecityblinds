import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonBase = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-cta text-city-900 hover:bg-amber-400",
  secondary: "bg-city-700 text-white hover:bg-city-900",
  ghost: "bg-white text-city-900 ring-1 ring-slate-200 hover:ring-city-600"
};

// Shared CTA styles for links and form submit buttons.
export function ButtonLink({ children, variant = "primary", className, ...props }: ButtonBase & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link className={cn("inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-bold transition", variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({ children, variant = "primary", className, ...props }: ButtonBase & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn("inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-bold transition", variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
