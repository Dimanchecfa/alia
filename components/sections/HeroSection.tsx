import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="hero-bleed relative bg-alia-dark text-white">
        {/* Image full-bleed */}
        <Image
          src="/images/equipe-alia.jpg"
          alt="L'équipe ALIA Industrie à Kossodo, Ouagadougou"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay : gradient dark left → transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-alia-dark via-alia-dark/85 to-alia-dark/30" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-alia-dark via-alia-dark/60 to-transparent" />

        {/* Pattern crosshair subtil */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 90'%3E%3Cpath d='M45 41v8M41 45h8' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.06' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundSize: "90px 90px",
          }}
          aria-hidden="true"
        />

        {/* Halos */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-alia-orange/[0.18] blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Container avec contenu */}
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="flex flex-col justify-center min-h-[88vh] py-20 lg:py-24">
            {/* Top eyebrow pill */}
            <div className="inline-flex self-start items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/90">
                ALIA Industrie · Depuis 2019
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.15] tracking-tight mb-6 max-w-2xl">
              Bâtir l&apos;<span className="text-alia-orange font-bold">industrie burkinabè</span> ensemble.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-white/80 leading-relaxed mb-9 max-w-xl">
              Nous fournissons une industrie agroalimentaire durable, des
              équipements industriels certifiés et des solutions solaires —
              combinant savoir-faire local, technologie moderne et 17 ans
              d&apos;expertise au service du Burkina Faso.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-alia-orange hover:bg-alia-orange-dark text-white font-semibold pl-7 pr-2 py-2 rounded-full transition-all shadow-lg shadow-alia-orange/40"
              >
                <span>Découvrir nos services</span>
                <span className="w-10 h-10 rounded-full bg-white text-alia-orange flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
              </Link>
              <Link
                href="/contact#devis"
                className="group inline-flex items-center gap-2 text-white hover:text-alia-orange font-semibold text-sm border-b-2 border-white/40 hover:border-alia-orange pb-1 transition-colors"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Audio bars en bas */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-end gap-1.5 pointer-events-none z-10">
          <span className="block w-1 h-3 bg-alia-orange/40" />
          <span className="block w-1 h-5 bg-alia-orange/70" />
          <span className="block w-1 h-7 bg-alia-orange" />
          <span className="block w-1 h-5 bg-alia-orange/70" />
          <span className="block w-1 h-3 bg-alia-orange/40" />
        </div>
      </section>
    </>
  );
}
