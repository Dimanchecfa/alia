import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Googlebot can index images
      {
        userAgent: "Googlebot-Image",
        allow: "/images/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
