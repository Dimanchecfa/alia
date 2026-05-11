/**
 * Configuration SEO centralisée — single source of truth pour
 * sitemap, robots, JSON-LD, OpenGraph, metadata.
 */

export const siteConfig = {
  name: "ALIA Industrie",
  legalName: "ALIA Industrie",
  url: "https://alia-industrie-bf.com",
  description:
    "Industriel burkinabè depuis 2009, ALIA Industrie unit agroalimentaire durable (farine de maïs, gritz, semoule) et énergies renouvelables au cœur du Burkina Faso.",
  shortDescription:
    "Agroalimentaire & énergies renouvelables — Burkina Faso depuis 2009.",
  slogan: "La Qualité, La Vraie Satisfaction.",
  locale: "fr_BF",
  language: "fr",
  countryCode: "BF",

  // Coordonnées
  contact: {
    email: "contact@alia-industrie-bf.com",
    phones: ["+226 70 75 77 13", "+226 72 72 78 19"],
    phonesE164: ["+22670757713", "+22672727819"],
    whatsapp: "+22670757713",
    whatsappLink: "https://wa.me/22670757713",
  },

  // Adresse
  address: {
    streetAddress: "Arrondissement 4, Secteur 19, Zone industrielle de Kossodo",
    addressLocality: "Ouagadougou",
    addressRegion: "Centre",
    addressCountry: "BF",
    postalCode: "01 BP",
    mapsUrl: "https://maps.app.goo.gl/ZbmbrQuTgvzNNEvs8",
  },

  // Coords GPS (Kossodo, Ouagadougou)
  geo: {
    latitude: 12.4406,
    longitude: -1.4849,
  },

  // Horaires
  hours: {
    monday: "08:00-18:00",
    tuesday: "08:00-18:00",
    wednesday: "08:00-18:00",
    thursday: "08:00-18:00",
    friday: "08:00-18:00",
    saturday: "08:00-13:00",
    sunday: "closed",
  },
  openingHoursSpec: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],

  // Identité
  founder: {
    name: "Eulogue TAPSOBA",
    jobTitle: "Promoteur & Fondateur",
  },
  foundingDate: "2009",
  foundingLocation: "Ouagadougou, Burkina Faso",

  // Réseaux sociaux
  socials: {
    facebook: "https://www.facebook.com/ALIA-Industrie-100071375318375/",
    whatsapp: "https://wa.me/22670757713",
  },

  // Zones d'intervention
  areasServed: [
    { name: "Burkina Faso", code: "BF" },
    { name: "Côte d'Ivoire", code: "CI" },
  ],

  // Images
  logo: "/images/logo.png",
  ogImage: "/images/equipe-alia.jpg",
  ogImageWidth: 1600,
  ogImageHeight: 1066,

  // Distinctions
  awards: [
    "Étalon d'argent de l'industrie burkinabè — Édition 2024",
    "Meilleur entrepreneur jeune — Édition 2024 (2ᵉ fois)",
  ],

  // Mots-clés SEO globaux
  keywords: [
    "ALIA Industrie",
    "ALIA Burkina Faso",
    "agroalimentaire Burkina Faso",
    "minoterie Ouagadougou",
    "farine de maïs Burkina",
    "semoule de maïs Burkina",
    "énergies renouvelables Burkina",
    "panneaux solaires Burkina",
    "installation solaire Ouagadougou",
    "équipements industriels Burkina",
    "distribution SKF Burkina",
    "distribution ABB Schneider Burkina",
    "Kossodo industriel",
    "Eulogue Tapsoba",
    "industrie burkinabè",
  ],
} as const;

// Routes du site (pour sitemap + nav)
export const siteRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/a-propos", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/realisations", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/catalogue", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/equipe", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];
