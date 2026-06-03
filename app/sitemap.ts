import type { MetadataRoute } from "next";
import { posts, products } from "@/lib/utils/sample-data";
import { getSiteUrl } from "@/lib/utils/site-url";

// Sitemap deliberately lists only public URLs; admin routes stay hidden.
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticRoutes = ["", "/gioi-thieu", "/san-pham", "/doi-tac-ban-hang", "/tin-tuc", "/lien-he"];

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
