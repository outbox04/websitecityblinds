// Product models follow: product -> fabric/blind colors -> optional box colors.
export type ProductColor = {
  id: string;
  name: string;
  hex: string;
  imageUrl?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  code: string;
  categorySlug: string;
  categoryName?: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: string[];
  specs: Record<string, string>;
  applications: string[];
  fabricColors: ProductColor[];
  boxColors?: ProductColor[];
  isFeatured: boolean;
  isActive: boolean;
};
