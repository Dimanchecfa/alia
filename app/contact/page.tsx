import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Globe, Navigation } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Contact — Devis, partenariat, SAV · Kossodo, Ouagadougou",
  description:
    "Contactez ALIA Industrie à Kossodo, Ouagadougou. Téléphone +226 70 75 77 13, email contact@alia-industrie-bf.com. Devis, partenariat, renseignements techniques, SAV — réponse sous 48h.",
  keywords: [
    "contact ALIA Industrie",
    "Kossodo Ouagadougou",
    "devis industriel Burkina",
    "support technique ALIA",
    "ALIA téléphone email",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — ALIA Industrie",
    description:
      "Devis, partenariat, support — réponse sous 48h. Kossodo, Ouagadougou.",
    url: "/contact",
  },
};

const channels = [
  {
    icon: MapPin,
    label: "Adresse",
    title: "Arrondissement 4, Secteur 19,\nZone industrielle de Kossodo",
    cta: "Voir sur la carte",
    href: "https://maps.app.goo.gl/ZbmbrQuTgvzNNEvs8",
    external: true,
  },
  {
    icon: Phone,
    label: "Téléphone",
    title: "+226 70 75 77 13",
    sub: "+226 72 72 78 19",
    cta: "Appeler maintenant",
    href: "tel:+22670757713",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    title: "contact@alia-industrie-bf.com",
    cta: "Envoyer un email",
    href: "mailto:contact@alia-industrie-bf.com",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    title: "Discutons en direct",
    cta: "Démarrer la conversation",
    href: "https://wa.me/22670757713",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
          webPageSchema({
            type: "ContactPage",
            url: "/contact",
            name: "Contact — ALIA Industrie",
            description:
              "Nous contacter à Kossodo, Ouagadougou. Devis, partenariat, SAV.",
          }),
        ]}
        id="schema-contact"
      />
      <PageBanner
        number="06"
        title="Nous contacter"
        highlight="contacter"
        breadcrumbLabel="Contact"
        subtitle={
          <>
            Un projet ? Une question ? Notre équipe est{" "}
            <span className="text-white font-semibold">à votre écoute</span>{" "}
            pour vous accompagner.
          </>
        }
      />

      {/* Section ① QUICK CHANNELS STRIP */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {channels.map((c, idx) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="channel-card group bg-white border border-gray-200 rounded-lg p-6 lg:p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-alia-orange/25 hover:border-alia-orange/50"
                >
                  <div className="inline-flex w-12 h-12 rounded-md bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-4 group-hover:bg-alia-orange group-hover:border-alia-orange transition-colors">
                    <Icon className="w-5 h-5 text-alia-orange group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">
                    {c.label}
                  </p>
                  <p className="font-display font-bold text-alia-grey text-base leading-snug mb-1 whitespace-pre-line">
                    {c.title}
                  </p>
                  {c.sub && (
                    <p className="text-xs text-gray-500 mb-3">{c.sub}</p>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs text-alia-orange font-semibold mt-3 group-hover:gap-2.5 transition-all">
                    {c.cta}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section ② FORM + INFO (réutilise ContactSection de la home) */}
      <ContactSection />

      {/* Section ③ MAP — Cadre design industriel */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-12">
            <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
              Nous trouver
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.05] tracking-tight">
              Au cœur de la zone{" "}
              <span className="text-alia-orange">industrielle de Kossodo</span>.
            </h2>
          </div>

          {/* Map cadre */}
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="map-frame relative">
              {/* Corner accents */}
              <span className="map-corner tl" aria-hidden="true" />
              <span className="map-corner tr" aria-hidden="true" />
              <span className="map-corner bl" aria-hidden="true" />
              <span className="map-corner br" aria-hidden="true" />

              {/* Iframe */}
              <div className="map-iframe-wrap aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/6.5]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15584.549861356933!2d-1.4848671860078015!3d12.440560387828114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ec10037a157b3%3A0xdc57a5b65605db8f!2sAlia%20industrie!5e0!3m2!1sfr!2sbf!4v1757779103320!5m2!1sfr!2sbf"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte ALIA Industrie - Kossodo, Ouagadougou"
                />
              </div>

              {/* Floating card overlay */}
              <div className="hidden md:block absolute top-8 left-8 z-10 bg-white rounded-md shadow-2xl shadow-alia-dark/30 p-5 max-w-xs border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-md bg-alia-orange flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-alia-grey text-sm leading-tight">
                      ALIA Industrie
                    </p>
                    <p className="text-[10.5px] uppercase tracking-[0.18em] text-alia-orange font-bold mt-0.5">
                      Siège social
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-snug mb-4">
                  Arrondissement 4, Secteur 19,
                  <br />
                  Zone industrielle de Kossodo
                  <br />
                  Ouagadougou, Burkina Faso
                </p>
                <a
                  href="https://maps.app.goo.gl/ZbmbrQuTgvzNNEvs8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-alia-orange hover:text-alia-orange-dark transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Itinéraire
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Bandeau coords */}
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-alia-orange" />
                <span>
                  Coordonnées :{" "}
                  <strong className="text-alia-grey">
                    12.4406° N · 1.4849° W
                  </strong>
                </span>
              </span>
              <a
                href="https://maps.app.goo.gl/ZbmbrQuTgvzNNEvs8"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center gap-1.5 bg-alia-orange text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-alia-orange-dark transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                Itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
