import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Agroalimentaire & Énergies Renouvelables`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0F1A",
    theme_color: "#F57C00",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    lang: "fr-BF",
    categories: ["business", "industrial", "agriculture"],
  };
}
