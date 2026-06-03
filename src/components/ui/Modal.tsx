import type { ReactNode } from "react";

export function Modal({ children, open }: { children: ReactNode; open: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4">
      <div className="w-full max-w-lg rounded-md bg-white p-5 shadow-soft">{children}</div>
    </div>
  );
}
