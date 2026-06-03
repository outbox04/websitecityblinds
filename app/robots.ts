import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils/site-url";

// Robots excludes admin routes from crawlers while allowing public SEO pages.
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin-cbs", "/admin-cbs/"]
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
