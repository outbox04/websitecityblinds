import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  code: z.string().min(1),
  categoryId: z.string().uuid(),
  shortDescription: z.string().optional(),
  description: z.string().optional()
});
