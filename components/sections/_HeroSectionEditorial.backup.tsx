import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wheat } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FFF8F0] text-alia-grey py-12 lg:py-16 overflow-hidden">
      {/* Pattern map watermark en arrière-plan (très subtil) */}
      <Image
        src="/images/bg-pattern-1.png"
        alt=""
        width={1400}
        height={1400}
        priority
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] max-w-none opacity-[0.10] pointer-events-none select-none"
      />

      {/* Dots pattern orange subtil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245, 124, 0, 0.10) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      {/* Halos warm */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-alia-orange/[0.10] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[72vh]">
          {/* COL GAUCHE : Texte éditorial */}
          <div className="relative z-10">
            {/* Pill eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-alia-orange/30 shadow-sm mb-7">
              <Wheat className="w-3.5 h-3.5 text-alia-orange" />
              <span className="text-alia-orange text-xs font-bold tracking-[0.22em] uppercase">
                ALIA Industrie · Burkina Faso
              </span>
            </div>

            {/* Titre H1 éditorial */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.05] tracking-tight text-alia-grey mb-6">
              L&apos;industrie{" "}
              <span className="doodle-underline text-alia-orange">
                burkinabè
              </span>{" "}
              au cœur de{" "}
              <span className="signature text-alia-orange text-[1.05em] inline-block -rotate-2">
                Kossodo
              </span>
              .
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-alia-grey/75 leading-relaxed mb-10 max-w-xl">
              Depuis 2009, ALIA Industrie unit{" "}
              <strong className="text-alia-grey font-semibold">
                agroalimentaire durable
              </strong>{" "}
              et{" "}
              <strong className="text-alia-grey font-semibold">
                énergies renouvelables
              </strong>{" "}
              pour répondre concrètement aux défis africains. 50 t/jour de
              farine de maïs, distinctions ministérielles 2024.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg shadow-alia-orange/40 hover:shadow-xl hover:shadow-alia-orange/50 hover:-translate-y-0.5"
              >
                Découvrir ALIA
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/catalogue"
                className="group inline-flex items-center gap-2 text-alia-grey hover:text-alia-orange font-semibold text-sm border-b-2 border-alia-grey/30 hover:border-alia-orange pb-1 transition-colors"
              >
                Notre catalogue
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stat inline subtle */}
            <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-alia-grey/60 font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
                <span>17 ans d&apos;expertise</span>
              </div>
              <span className="text-alia-grey/20">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
                <span>ISO 22000</span>
              </div>
            </div>
          </div>

          {/* COL DROITE : Mosaïque de 3 photos éditoriales + connecteurs */}
          <div className="relative h-[500px] lg:h-[620px]">
            {/* Photo 1 — Bâtiment ALIA (top-left) */}
            <div
              className="editorial-card absolute top-0 left-0 w-[55%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-alia-dark/20"
              style={{ transform: "rotate(-2deg)" }}
            >
              <Image
                src="/images/batiment-alia.png"
                alt="Bâtiment ALIA Industrie à Kossodo"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Photo 2 — Équipe ALIA (top-right, FEATURED le plus grand) */}
            <div
              className="editorial-card absolute top-[8%] right-0 w-[52%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-alia-dark/25 z-10"
              style={{ transform: "rotate(1.5deg)" }}
            >
              <Image
                src="/images/equipe-alia.jpg"
                alt="L'équipe ALIA Industrie"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Photo 3 — Production farine de maïs (bottom-center, décalée) */}
            <div
              className="editorial-card absolute bottom-0 left-[18%] w-[60%] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-alia-dark/20"
              style={{ transform: "rotate(-1deg)" }}
            >
              <Image
                src="/images/about-1.jpg"
                alt="Production farine de maïs ALIA — Kossodo"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>

            {/* Stamp "DEPUIS 2009" circulaire en bas-droite */}
            <div className="hero-stamp absolute -bottom-3 -right-3 lg:-bottom-2 lg:-right-2 z-20">
              <div className="hero-stamp__rotate w-full h-full">
                <svg
                  viewBox="0 0 110 110"
                  className="w-full h-full drop-shadow-lg"
                >
                  {/* Cercle stamp */}
                  <circle
                    cx="55"
                    cy="55"
                    r="52"
                    fill="none"
                    stroke="#F57C00"
                    strokeWidth="2"
                  />
                  <circle
                    cx="55"
                    cy="55"
                    r="46"
                    fill="none"
                    stroke="#F57C00"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                  />
                  {/* Texte circulaire */}
                  <defs>
                    <path
                      id="stamp-circle-path"
                      d="M 55,55 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text
                    fill="#F57C00"
                    fontSize="9"
                    fontWeight="800"
                    letterSpacing="3"
                    fontFamily="var(--font-display)"
                  >
                    <textPath href="#stamp-circle-path" startOffset="0">
                      ALIA INDUSTRIE · DEPUIS 2009 ·
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Logo orange au centre (statique, ne tourne pas) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-alia-orange w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  <Wheat className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Dotted connectors (SVG) entre photos */}
            <svg
              className="dotted-connector inset-0 w-full h-full"
              viewBox="0 0 400 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Connector 1 → 2 */}
              <path
                d="M 200,160 Q 250,140 290,200"
                stroke="#F57C00"
                strokeWidth="2"
                strokeDasharray="3 6"
                fill="none"
                opacity="0.45"
              />
              {/* Connector 2 → 3 */}
              <path
                d="M 290,380 Q 250,440 220,470"
                stroke="#F57C00"
                strokeWidth="2"
                strokeDasharray="3 6"
                fill="none"
                opacity="0.45"
              />
            </svg>

            {/* Mini icône épi de maïs sur les connecteurs */}
            <div
              className="absolute pointer-events-none"
              style={{ top: "26%", left: "55%" }}
              aria-hidden="true"
            >
              <div className="w-7 h-7 rounded-full bg-alia-orange flex items-center justify-center shadow-md">
                <Wheat className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
