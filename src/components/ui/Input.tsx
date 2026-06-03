import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("min-h-11 rounded-md border border-slate-300 px-3 py-2 outline-city-600", className)} {...props} />;
}
