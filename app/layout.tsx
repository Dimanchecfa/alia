import type { Metadata } from "next";
import { Inter, Sora, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AOSInit from "@/components/AOSInit";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://alia-industrie-bf.com"),
  title: {
    default: "ALIA Industrie — Agroalimentaire & Énergies Renouvelables au Burkina Faso",
    template: "%s · ALIA Industrie",
  },
  description:
    "Industriel burkinabè depuis 2009, ALIA Industrie unit agroalimentaire durable (farine de maïs, gritz, semoule) et énergies renouvelables au cœur du Burkina Faso.",
  keywords: [
    "ALIA Industrie",
    "agroalimentaire Burkina Faso",
    "minoterie Ouagadougou",
    "farine de maïs",
    "énergies renouvelables Burkina",
    "panneaux solaires Burkina",
    "équipements industriels",
    "Kossodo",
  ],
  authors: [{ name: "ALIA Industrie" }],
  creator: "ALIA Industrie",
  publisher: "ALIA Industrie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_BF",
    url: "https://alia-industrie-bf.com",
    siteName: "ALIA Industrie",
    title: "ALIA Industrie — Agroalimentaire & Énergies Renouvelables",
    description:
      "Industriel burkinabè depuis 2009. Production de farine de maïs (50 t/j), distribution d'équipements industriels et solutions solaires.",
    images: [
      {
        url: "/images/equipe-alia.jpg",
        width: 1600,
        height: 1066,
        alt: "L'équipe ALIA Industrie à Kossodo, Ouagadougou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALIA Industrie — Agroalimentaire & Énergies Renouvelables",
    description:
      "Industriel burkinabè depuis 2009 — agroalimentaire durable et énergies renouvelables.",
    images: ["/images/equipe-alia.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <AOSInit />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
