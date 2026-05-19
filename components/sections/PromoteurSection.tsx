import Image from "next/image";
import { Award } from "lucide-react";

export default function PromoteurSection() {
  return (
    <section
      id="promoteur"
      className="relative py-20 lg:py-28 promoteur-bg overflow-hidden"
    >
      {/* Énorme guillemet décoratif en arrière-plan */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 lg:top-8 z-0"
        aria-hidden="true"
      >
        <span className="big-quote text-[18rem] lg:text-[28rem]">&ldquo;</span>
      </div>

      {/* Halos */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-alia-orange/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-alia-blue/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[80rem]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* COL PHOTO */}
          <div className="lg:col-span-5 relative" data-aos="fade-right">
            {/* Forme orange offset derrière la card */}
            <div
              className="absolute top-5 -left-5 w-full h-full bg-alia-orange rounded-md -z-0"
              aria-hidden="true"
            />

            {/* Card photo */}
            <div className="relative bg-white p-3 rounded-md shadow-2xl shadow-alia-dark/15">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/promoteur.jpg"
                  alt="M. Eulogue TAPSOBA — Promoteur d'ALIA Industrie"
                  width={500}
                  height={625}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Overlay bas */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-alia-dark/90 to-transparent" />
                {/* Plaque nom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-alia-orange font-bold mb-1">
                    Promoteur
                  </p>
                  <p className="font-display font-bold text-base lg:text-lg leading-tight">
                    M. Eulogue TAPSOBA
                  </p>
                </div>
              </div>
            </div>

            {/* Badge "Étalon d'argent" */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-5 lg:-right-5 bg-alia-dark text-white px-4 py-3 rounded-md shadow-2xl flex items-center gap-2.5 z-20">
              <Award className="w-5 h-5 text-alia-orange" />
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/70 font-semibold leading-none mb-1">
                  Distinction 2024
                </p>
                <p className="text-xs font-bold leading-none">
                  Étalon d&apos;argent
                </p>
              </div>
            </div>
          </div>

          {/* COL QUOTE */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-alia-orange pulse-dot" />
              Mot du Promoteur
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.15] mb-7 tracking-tight">
              Anticiper, <span className="text-alia-orange">innover</span>{" "}
              <br className="hidden sm:block" />
              et bâtir un <span className="text-alia-blue">futur durable</span>.
            </h2>

            {/* Citation */}
            <blockquote className="relative pl-6 border-l-2 border-alia-orange/40 mb-8">
              <p className="text-base lg:text-lg text-alia-grey/80 leading-relaxed mb-4">
                <strong className="text-alia-grey font-semibold">
                  Bienvenue chez ALIA Industrie.
                </strong>{" "}
                Nous unissons agroalimentaire durable et énergies renouvelables
                pour répondre aux défis d&apos;aujourd&apos;hui.
              </p>
              <p className="text-base lg:text-lg text-alia-grey/80 leading-relaxed italic">
                Notre force : anticiper, innover et bâtir un futur durable pour
                tous.
              </p>
            </blockquote>

            {/* Signature */}
            <div className="flex items-center gap-5">
              <div className="signature text-3xl lg:text-4xl text-alia-grey">
                E. Tapsoba
              </div>
              <div className="border-l border-gray-300 pl-5">
                <p className="font-semibold text-alia-grey text-sm">
                  M. Eulogue TAPSOBA
                </p>
                <p className="text-[11px] text-alia-grey/60 uppercase tracking-wider">
                  Promoteur · ALIA Industrie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
