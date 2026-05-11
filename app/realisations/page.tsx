import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import RealisationsGrid from "@/components/sections/RealisationsGrid";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Sélection de projets livrés au Burkina Faso et en Côte d'Ivoire — solaire industriel, off-grid résidentiel et installations agroalimentaires.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageBanner
        number="03"
        title="Nos réalisations"
        highlight="réalisations"
        breadcrumbLabel="Réalisations"
        subtitle={
          <>
            Une sélection de projets livrés au{" "}
            <span className="text-white font-semibold">Burkina Faso</span> et en{" "}
            <span className="text-white font-semibold">Côte d&apos;Ivoire</span>{" "}
            — solaire industriel, off-grid résidentiel et installations agroalimentaires.
          </>
        }
      />

      {/* Stats strip */}
      <section className="bg-white py-8 lg:py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
            <div className="text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey">
                9<span className="text-alia-orange">+</span>
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-500 mt-1 font-semibold">
                Projets livrés
              </p>
            </div>
            <span className="hidden md:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey">
                3
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-500 mt-1 font-semibold">
                Catégories
              </p>
            </div>
            <span className="hidden md:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey">
                2009
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-500 mt-1 font-semibold">
                Depuis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grille */}
      <RealisationsGrid />

      {/* CTA final */}
      <section className="relative bg-alia-orange py-14 lg:py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1.4px, transparent 1.4px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-[1.1] tracking-tight">
                Votre projet pourrait être le prochain.
              </h2>
              <p className="text-white/90 mt-3 text-base">
                Devis, étude technique, accompagnement clé en main — parlons-en.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact#devis"
                className="group inline-flex items-center justify-center gap-2 bg-alia-dark hover:bg-black text-white font-bold text-sm px-7 py-3.5 rounded-md transition-colors"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/22670757713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-alia-grey font-bold text-sm px-7 py-3.5 rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
