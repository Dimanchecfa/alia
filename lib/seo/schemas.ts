/**
 * Schemas Schema.org (JSON-LD) pour rich snippets Google.
 * https://schema.org
 */

import { siteConfig } from "./site-config";

const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.url}${path}`;

// ── Organization (entité ALIA) ──
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
      width: 200,
      height: 200,
    },
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    foundingDate: siteConfig.foundingDate,
    foundingLocation: {
      "@type": "Place",
      name: siteConfig.foundingLocation,
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.jobTitle,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phonesE164[0],
        contactType: "customer service",
        email: siteConfig.contact.email,
        areaServed: ["BF", "CI"],
        availableLanguage: ["French"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phonesE164[1],
        contactType: "sales",
        areaServed: ["BF", "CI"],
        availableLanguage: ["French"],
      },
    ],
    sameAs: [siteConfig.socials.facebook],
    award: siteConfig.awards,
    knowsAbout: [
      "Transformation agroalimentaire",
      "Minoterie",
      "Farine de maïs",
      "Énergies renouvelables",
      "Installation solaire",
      "Équipements industriels",
    ],
    areaServed: siteConfig.areasServed.map((a) => ({
      "@type": "Country",
      name: a.name,
      identifier: a.code,
    })),
  };
}

// ── LocalBusiness (rich snippet local search + Google Maps) ──
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ManufacturingBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    image: absoluteUrl(siteConfig.ogImage),
    logo: absoluteUrl(siteConfig.logo),
    url: siteConfig.url,
    telephone: siteConfig.contact.phonesE164[0],
    email: siteConfig.contact.email,
    priceRange: "$$",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.address.mapsUrl,
    openingHoursSpecification: siteConfig.openingHoursSpec,
    sameAs: [siteConfig.socials.facebook],
    areaServed: siteConfig.areasServed.map((a) => a.name),
    award: siteConfig.awards,
  };
}

// ── WebSite (avec SearchAction pour sitelinks search box Google) ──
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.language,
  };
}

// ── BreadcrumbList (rich snippets breadcrumb dans SERPs) ──
export function breadcrumbSchema(
  items: { name: string; url: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

// ── Product (catalogue items) ──
export function productSchema(product: {
  name: string;
  description: string;
  image: string;
  category: string;
  brand?: string;
  sku?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.image),
    category: product.category,
    brand: product.brand
      ? {
          "@type": "Brand",
          name: product.brand,
        }
      : undefined,
    sku: product.sku,
    manufacturer: {
      "@id": `${siteConfig.url}/#organization`,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "XOF",
      areaServed: siteConfig.areasServed.map((a) => a.name),
      url: `${siteConfig.url}/contact#devis`,
      seller: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  };
}

// ── ItemList (collections de réalisations, produits, équipe) ──
export function itemListSchema<T extends { name: string; url: string }>(
  items: T[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  };
}

// ── AboutPage / ContactPage / CollectionPage ──
export function webPageSchema(opts: {
  type: "AboutPage" | "ContactPage" | "CollectionPage" | "WebPage";
  url: string;
  name: string;
  description: string;
  breadcrumbId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type,
    "@id": `${absoluteUrl(opts.url)}#webpage`,
    url: absoluteUrl(opts.url),
    name: opts.name,
    description: opts.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.language,
    ...(opts.breadcrumbId && {
      breadcrumb: { "@id": opts.breadcrumbId },
    }),
  };
}
