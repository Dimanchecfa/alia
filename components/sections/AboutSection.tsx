import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function AboutSection() {
  // Calcul auto des années depuis 2009 (rendu côté serveur au build)
  const yearsSince2009 = new Date().getFullYear() - 2009;

  const bullets = [
    "Deux pôles complémentaires",
    "Démarche qualité ISO 22000",
    "Présence Burkina & Côte d'Ivoire",
    "Distinctions ministérielles 2024",
  ];

  return (
    <section
      id="about"
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Halos diffus */}
      <div
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-alia-orange/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-32 w-72 h-72 rounded-full bg-alia-blue/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* COL GAUCHE : Mosaïque 2 photos */}
          <div className="lg:col-span-5 relative" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {/* Photo 1 (top-left) */}
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl shadow-alia-dark/15">
                <Image
                  src="/images/batiment-alia.png"
                  alt="Bâtiment ALIA Industrie à Kossodo"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Photo 2 (décalée vers le bas) */}
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl shadow-alia-dark/15 mt-8 lg:mt-12">
                <Image
                  src="/images/about-1.jpg"
                  alt="Production ALIA — Farine de maïs"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Badge "Depuis 2009" floating bottom-right */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 z-20 w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-alia-orange text-white flex flex-col items-center justify-center shadow-2xl shadow-alia-orange/40 border-4 border-white">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/80 font-semibold">
                Depuis
              </span>
              <span className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-none mt-0.5">
                2009
              </span>
              <div className="w-6 h-px bg-white/40 mt-1.5" />
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/70 font-semibold mt-1">
                Burkina Faso
              </span>
            </div>
          </div>

          {/* COL DROITE : Bio + bullets + CTA */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="150">
            {/* Eyebrow avec tiret */}
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-alia-orange" />
              <span className="text-alia-orange text-xs font-semibold tracking-[0.25em] uppercase">
                À propos d&apos;ALIA Industrie
              </span>
            </div>

            {/* H2 avec calcul auto des années */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.7rem] text-alia-grey leading-[1.08] tracking-tight mb-6">
              {yearsSince2009} ans d&apos;
              <span className="text-alia-orange">expertise industrielle</span>{" "}
              au service du Burkina.
            </h2>

            {/* Bio */}
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Créée en{" "}
              <strong className="text-alia-grey">2009</strong> à Ouagadougou,
              ALIA Industrie est née d&apos;une vision : unir{" "}
              <strong className="text-alia-grey">
                agroalimentaire durable
              </strong>{" "}
              et{" "}
              <strong className="text-alia-grey">
                énergies renouvelables
              </strong>{" "}
              pour répondre concrètement aux défis africains.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-7">
              Spécialisée dans la transformation du maïs (gritz, farine,
              semoule) avec une capacité de{" "}
              <strong className="text-alia-grey">50 tonnes par jour</strong>,
              l&apos;entreprise s&apos;engage dans une démarche qualité visant
              la norme <strong className="text-alia-grey">ISO 22000</strong>.
            </p>

            {/* 4 bullets clés (grid 2 cols) */}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {bullets.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed"
                >
                  <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-alia-orange flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/a-propos"
              className="group inline-flex items-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-sm px-7 py-3.5 rounded-md transition-colors shadow-md shadow-alia-orange/25"
            >
              En savoir plus sur ALIA
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
