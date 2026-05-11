import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/seo/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
