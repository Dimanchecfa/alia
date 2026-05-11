import Image from "next/image";
import Link from "next/link";
import { Wheat, Sun, ArrowRight } from "lucide-react";

interface Pole {
  num: string;
  number: "01" | "02";
  href: string;
  title: string;
  description: string;
  image: string;
  icon: typeof Wheat;
  color: "orange" | "blue";
}

const poles: Pole[] = [
  {
    num: "Pôle 01",
    number: "01",
    href: "/services#agroalimentaire",
    title: "Agroalimentaire",
    description:
      "De la transformation à la distribution : équipements industriels pour valoriser la production locale.",
    image: "/images/pole-agro.jpg",
    icon: Wheat,
    color: "orange",
  },
  {
    num: "Pôle 02",
    number: "02",
    href: "/services#energie",
    title: "Énergies Renouvelables",
    description:
      "Solaire on-grid et off-grid : conception, installation et maintenance pour une autonomie durable.",
    image: "/images/pole-energie.jpg",
    icon: Sun,
    color: "blue",
  },
];

export default function PolesSection() {
  return (
    <section
      id="poles"
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Couronne globe dotted derrière le H2 */}
      <Image
        src="/images/bg-pattern-1.png"
        alt=""
        width={1100}
        height={1100}
        aria-hidden="true"
        className="bg-pattern-crown absolute top-4 lg:top-8 left-1/2 -translate-x-1/2 w-[1100px] max-w-[95vw] opacity-90 pointer-events-none select-none"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-alia-orange/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-widest uppercase mb-6" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-alia-orange pulse-dot" />
            Notre double expertise
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-alia-grey leading-[1.1] mb-6" data-aos="fade-up" data-aos-delay="100">
            Deux mondes industriels.{" "}
            <span className="relative inline-block">
              <span className="text-alia-orange">Une</span>
              <span className="text-alia-blue">&nbsp;seule</span>
            </span>{" "}
            exigence.
          </h2>
          <p className="text-base sm:text-lg text-alia-grey/70 leading-relaxed max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            ALIA Industrie maîtrise deux filières complémentaires, au cœur du
            développement burkinabè : la{" "}
            <strong className="text-alia-grey">
              transformation agroalimentaire
            </strong>{" "}
            et les{" "}
            <strong className="text-alia-grey">
              énergies renouvelables
            </strong>
            .
          </p>
        </div>

        {/* Grid 2 cartes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1182px] mx-auto">
          {poles.map((pole, idx) => {
            const Icon = pole.icon;
            const isOrange = pole.color === "orange";
            return (
              <Link
                key={pole.number}
                href={pole.href}
                className="pole-card group relative overflow-hidden rounded-lg aspect-[24/25] block shadow-2xl shadow-alia-dark/10"
                aria-label={`Découvrir le pôle ${pole.title}`}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
              >
                {/* Image plein-bleed */}
                <Image
                  src={pole.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
                />

                {/* Dégradé overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-alia-dark via-alia-dark/70 ${
                    isOrange ? "to-alia-orange/40" : "to-alia-blue/40"
                  } transition-all duration-500 group-hover:from-alia-dark group-hover:via-alia-dark/85`}
                />

                {/* Pattern de points */}
                <div
                  className="dots-pattern absolute top-6 right-6 w-20 h-20 lg:w-28 lg:h-28 opacity-50"
                  aria-hidden="true"
                />

                {/* Numéro outline éditorial */}
                <div
                  className="pole-number absolute top-3 right-5 lg:top-5 lg:right-7 text-[6rem] lg:text-[8rem]"
                  aria-hidden="true"
                >
                  {pole.number}
                </div>

                {/* Spine line */}
                <div
                  className={`pole-spine top-[4.5rem] left-[3.4rem] lg:top-[5.75rem] lg:left-[4rem] bg-gradient-to-b ${
                    isOrange ? "from-alia-orange" : "from-alia-blue"
                  } to-transparent`}
                  aria-hidden="true"
                />

                {/* Badge icône */}
                <div
                  className={`absolute top-5 left-5 lg:top-7 lg:left-7 rounded-md flex items-center justify-center text-white shadow-lg z-10 ${
                    isOrange
                      ? "bg-alia-orange shadow-alia-orange/40"
                      : "bg-alia-blue shadow-alia-blue/40"
                  }`}
                  style={{ width: "3.25rem", height: "3.25rem" }}
                >
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>

                {/* Contenu (bas) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                  <p
                    className={`text-[11px] font-bold tracking-[0.25em] uppercase mb-2 ${
                      isOrange ? "text-alia-orange" : "text-alia-blue"
                    }`}
                  >
                    {pole.num}
                  </p>
                  <h3 className="font-display font-extrabold text-3xl lg:text-4xl mb-3 leading-[1.1]">
                    {pole.title}
                  </h3>
                  <p className="text-white/85 mb-5 max-w-md leading-relaxed text-sm lg:text-[15px]">
                    {pole.description}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group-hover:gap-3 ${
                      isOrange ? "text-alia-orange" : "text-alia-blue"
                    }`}
                  >
                    <span
                      className={`border-b transition-colors ${
                        isOrange
                          ? "border-alia-orange/0 group-hover:border-alia-orange"
                          : "border-alia-blue/0 group-hover:border-alia-blue"
                      }`}
                    >
                      Découvrir ce pôle
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Phrase de liaison */}
        <p className="text-center text-alia-grey/60 text-sm mt-12 lg:mt-16 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          Une équipe technique unique, une logistique partagée, un seul
          interlocuteur pour vos projets industriels.
        </p>
      </div>
    </section>
  );
}
