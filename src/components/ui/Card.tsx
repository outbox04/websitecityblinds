import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">{children}</section>;
}
