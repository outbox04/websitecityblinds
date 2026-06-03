import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  excerpt: z.string().optional(),
  contentHtml: z.string().optional(),
  status: z.enum(["draft", "published", "hidden"])
});
