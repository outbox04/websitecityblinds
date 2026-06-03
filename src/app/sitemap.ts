import type { MetadataRoute } from "next";
import { getPosts, getProducts } from "@/lib/supabase/queries";
import { getSiteUrl } from "@/lib/utils/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const staticRoutes = ["", "/gioi-thieu", "/san-pham", "/doi-tac-ban-hang", "/tin-tuc", "/lien-he"];
  const [products, posts] = await Promise.all([getProducts(), getPosts()]);

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/san-pham/${product.slug}`,
      lastModified: new Date()
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/tin-tuc/${post.slug}`,
      lastModified: new Date(post.publishedAt)
    }))
  ];
}
