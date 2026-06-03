// SEO post model includes rich metadata needed by the admin mini CMS.
export type FAQItem = {
  question: string;
  answer: string;
};

export type PostStatus = "draft" | "published" | "hidden";

export type Post = {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  excerpt: string;
  contentHtml: string;
  featuredImage: string;
  imageAlt: string;
  ogImage: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl?: string;
  schemaType: "Article" | "BlogPosting" | "FAQPage";
  faq: FAQItem[];
  author: string;
  publishedAt: string;
  status: PostStatus;
  relatedProductSlugs: string[];
  relatedCategorySlugs: string[];
};
