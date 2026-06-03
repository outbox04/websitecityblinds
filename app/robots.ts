import type { MetadataRoute } from "next";

// Robots excludes admin routes from crawlers while allowing public SEO pages.
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin-cbs", "/admin-cbs/"]
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
