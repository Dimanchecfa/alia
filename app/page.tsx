import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PolesSection from "@/components/sections/PolesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PromoteurSection from "@/components/sections/PromoteurSection";
import RealisationsSection from "@/components/sections/RealisationsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import VideoSection from "@/components/sections/VideoSection";
import ContactSection from "@/components/sections/ContactSection";

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
