import { clsx, type ClassValue } from "clsx";

// Tiny className helper keeps component styling readable.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
