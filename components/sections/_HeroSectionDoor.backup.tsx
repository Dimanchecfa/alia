import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, ChevronDown, MousePointerClick } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section relative text-white py-14 lg:py-16 overflow-hidden bg-alia-dark">
      {/* Bg moitié gauche : alia-dark */}
      <div
        className="absolute inset-y-0 left-0 right-0 lg:right-1/2 bg-alia-dark"
        aria-hidden="true"
      />

      {/* Bg moitié droite : gradient warm (anim au hover → glisse à gauche) */}
      <div className="hero-bg-right hidden lg:block" aria-hidden="true" />

      {/* Pattern crosshair côté gauche */}
      <div
        className="absolute inset-y-0 left-0 right-0 lg:right-1/2 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 90'%3E%3Cpath d='M45 41v8M41 45h8' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: "90px 90px",
        }}
        aria-hidden="true"
      />

      {/* Pattern dots côté droit (anim au hover) */}
      <div className="hero-pattern-right hidden lg:block" aria-hidden="true" />

      {/* Divider porte (anim au hover → glisse à fond à gauche) */}
      <div className="hero-divider hidden lg:block" aria-hidden="true" />

      {/* Halos */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-alia-orange/[0.12] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-alia-blue/[0.10] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-10 items-center min-h-[66vh]">
          {/* COL GAUCHE : Texte */}
          <div className="hero-text-col lg:col-span-6">
            {/* Pill eyebrow */}
            <div className="pill-eyebrow text-alia-orange text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-alia-orange pulse-dot" />
              ALIA Industrie · Burkina Faso
            </div>

            {/* Titre principal */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] mb-6">
              Votre partenaire de confiance en{" "}
              <span className="text-alia-orange">agroalimentaire</span> &amp;{" "}
              <span className="text-alia-orange">énergies renouvelables</span>.
            </h1>

            {/* Sous-titre */}
            <p className="text-base sm:text-lg text-white/85 max-w-xl mb-10 leading-relaxed">
              Équipements industriels, solutions solaires et{" "}
              <span className="text-alia-blue font-semibold">
                expertise technique
              </span>{" "}
              au cœur du Burkina Faso.
              <span className="block mt-2 font-semibold text-white">
                La qualité, la vraie satisfaction.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-alia-orange/30"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact#devis"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-alia-dark font-semibold px-8 py-4 rounded-full transition"
              >
                <MessageSquare className="w-5 h-5" />
                Demander un devis
              </Link>
            </div>
          </div>

          {/* COL DROITE : Spacer (la photo est en absolute overlay au-dessus) */}
          <div className="lg:col-span-6 hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* PHOTO OVERLAY (absolute en lg+, en flow sur mobile) */}
      <div className="hero-photo-overlay">
        <span className="hero-photo-glow" aria-hidden="true" />
        <div className="hero-photo-frame">
          {/* Coin accent orange top-left (rest only) */}
          <span className="hero-photo-corner" aria-hidden="true" />
          {/* Hint hover */}
          <span className="hero-photo-hint">
            <MousePointerClick className="w-3 h-3" />
            Survoler
          </span>
          {/* Image */}
          <Image
            src="/images/equipe-alia.jpg"
            alt="L'équipe ALIA Industrie"
            width={1600}
            height={1066}
            priority
            className="block w-full h-auto"
          />
          {/* Caption default (rest) */}
          <div className="hero-photo-caption-default absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
            <span className="text-xs font-bold text-alia-grey tracking-wide">
              L&apos;équipe ALIA · Kossodo
            </span>
          </div>
          {/* Caption expanded (hover) */}
          <div className="hero-photo-caption-expanded absolute bottom-8 left-8 z-10 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-alia-orange mb-2">
              L&apos;équipe complète · Kossodo 2026
            </p>
            <p className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-tight drop-shadow-2xl">
              Une famille industrielle au service du Burkina.
            </p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 float-y">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
          Faites défiler
        </span>
        <ChevronDown className="w-5 h-5 text-alia-blue" />
      </div>
    </section>
  );
}
