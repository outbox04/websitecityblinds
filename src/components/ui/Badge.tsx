import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-md bg-city-50 px-2.5 py-1 text-xs font-bold text-city-700">{children}</span>;
}
