import type { Metadata } from "next";

export function createSeoMeta({ title, description }: { title: string; description?: string }): Metadata {
  return { title, description };
}
