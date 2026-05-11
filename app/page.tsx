import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PolesSection from "@/components/sections/PolesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PromoteurSection from "@/components/sections/PromoteurSection";
import RealisationsSection from "@/components/sections/RealisationsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import VideoSection from "@/components/sections/VideoSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title:
    "ALIA Industrie — Agroalimentaire & Énergies Renouvelables au Burkina Faso",
  description:
    "Industriel burkinabè depuis 2009 — minoterie 50 t/j (farine de maïs, semoule), installations solaires on/off-grid, distribution d'équipements industriels (SKF, ABB, Schneider, Victron). Distinctions ministérielles 2024.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "ALIA Industrie — Agroalimentaire & Énergies Renouvelables au Burkina",
    description:
      "Votre partenaire industriel depuis 2009 — 50 t/j de production maïs, solaire on/off-grid, 26+ références distribuées.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PolesSection />
      <ServicesSection />
      <PromoteurSection />
      <RealisationsSection />
      <PartnersSection />
      <VideoSection />
      <ContactSection />
    </main>
  );
}
