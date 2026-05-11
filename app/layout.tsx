import type { Metadata, Viewport } from "next";
import { Inter, Sora, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AOSInit from "@/components/AOSInit";
import JsonLd from "@/components/seo/JsonLd";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/seo/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F57C00",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Agroalimentaire & Énergies Renouvelables au Burkina Faso`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Business",
  classification: "Industrial Manufacturing",

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Agroalimentaire & Énergies Renouvelables`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: `L'équipe ${siteConfig.name} à Kossodo, Ouagadougou`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Agroalimentaire & Énergies Renouvelables`,
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Géolocalisation (important pour SEO local au Burkina Faso)
  other: {
    "geo.region": "BF-CEN",
    "geo.placename": "Ouagadougou",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },

  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: "/images/logo.png",
  },

  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${sora.variable} ${caveat.variable}`}
    >
      <body className="bg-white text-alia-grey antialiased">
        {/* Schemas globaux injectés dans <body> — visibles sur toutes les pages */}
        <JsonLd data={organizationSchema()} id="schema-organization" />
        <JsonLd data={localBusinessSchema()} id="schema-localbusiness" />
        <JsonLd data={websiteSchema()} id="schema-website" />

        <AOSInit />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
