import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Wheat,
  BadgeCheck,
  Sun,
  Handshake,
  TrendingUp,
  Lightbulb,
  Leaf,
  Award,
  Medal,
  Trophy,
  Check,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "À propos d'ALIA Industrie — Histoire, valeurs, distinctions 2024",
  description:
    "ALIA Industrie, créée en 2019, prolonge le savoir-faire d'une équipe industrielle burkinabè active depuis 2009 : agroalimentaire durable (farine de maïs, 120 t/j) et énergies renouvelables. Histoire, valeurs et distinctions ministérielles 2024 (Étalon d'argent).",
  keywords: [
    "histoire ALIA Industrie",
    "Eulogue Tapsoba",
    "industrie burkinabè 2009",
    "Étalon argent 2024",
    "valeurs entreprise",
  ],
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos d'ALIA Industrie",
    description:
      "17 ans d'expertise industrielle au Burkina Faso. Distinctions ministérielles 2024.",
    url: "/a-propos",
    type: "article",
  },
};

const values = [
  {
    num: "01",
    icon: Handshake,
    title: "Confiance",
    desc: "Bâtir des relations solides et durables avec nos clients et partenaires.",
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "Performance",
    desc: "Garantir la qualité, la fiabilité et la rentabilité de chaque projet livré.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Innovation",
    desc: "Proposer des solutions modernes et adaptées aux défis africains de demain.",
  },
  {
    num: "04",
    icon: Leaf,
    title: "Durabilité",
    desc: "Favoriser des solutions respectueuses des ressources et de l'environnement.",
  },
];

const trophies = [
  { src: "/images/trophies/dame.jpg", alt: "Remise du trophée à ALIA Industrie" },
  { src: "/images/trophies/monsieur.jpg", alt: "Remise du trophée à M. Eulogue Tapsoba" },
  { src: "/images/trophies/tous.jpg", alt: "Trophées ALIA Industrie" },
];

export default function AProposPage() {
  const yearsSince2009 = new Date().getFullYear() - 2009;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "À propos", url: "/a-propos" },
          ]),
          webPageSchema({
            type: "AboutPage",
            url: "/a-propos",
            name: "À propos d'ALIA Industrie",
            description:
              "Histoire, valeurs et distinctions d'ALIA Industrie — créée en 2019, portée par une équipe industrielle burkinabè active depuis 2009.",
          }),
        ]}
        id="schema-a-propos"
      />
      <PageBanner
        number="01"
        title="À propos"
        highlight="propos"
        breadcrumbLabel="À propos"
        subtitle={
          <>
            ALIA Industrie, créée en 2019, prolonge un savoir-faire industriel
            développé par son équipe depuis 2009 — unissant{" "}
            <span className="text-white font-semibold">
              agroalimentaire durable
            </span>{" "}
            et{" "}
            <span className="text-white font-semibold">
              énergies renouvelables
            </span>{" "}
            au cœur du Burkina Faso.
          </>
        }
      />

      {/* SECTION ① NOTRE HISTOIRE */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Mosaïque 3 photos */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-3 lg:gap-4 relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl shadow-alia-dark/15">
                  <Image
                    src="/images/batiment-alia.png"
                    alt="Bâtiment ALIA Industrie à Kossodo"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl shadow-alia-dark/15 mt-4 lg:mt-6">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Production farine de maïs ALIA"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-[16/9] rounded-lg overflow-hidden shadow-xl shadow-alia-dark/15 mt-2">
                  <Image
                    src="/images/equipe-alia.jpg"
                    alt="Équipe ALIA Industrie"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge "Équipe depuis 2009" */}
                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 z-20 w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-alia-orange text-white flex flex-col items-center justify-center shadow-2xl shadow-alia-orange/40 border-4 border-white">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/80 font-semibold">
                    Équipe
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
            </div>

            {/* Texte */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="150">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-px bg-alia-orange" />
                <span className="text-alia-orange text-xs font-semibold tracking-[0.25em] uppercase">
                  À propos d&apos;ALIA Industrie
                </span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.7rem] text-alia-grey leading-[1.08] tracking-tight mb-6">
                {yearsSince2009} ans d&apos;
                <span className="text-alia-orange">expertise industrielle</span>{" "}
                au service du Burkina.
              </h2>

              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Officiellement créée en{" "}
                <strong className="text-alia-grey font-semibold">2019</strong>
                {" "}à Ouagadougou, ALIA Industrie prolonge le savoir-faire
                d&apos;une équipe industrielle active{" "}
                <strong className="text-alia-grey font-semibold">depuis 2009</strong>
                , portée par une vision : unir{" "}
                <strong className="text-alia-grey font-semibold">
                  agroalimentaire durable
                </strong>{" "}
                et{" "}
                <strong className="text-alia-grey font-semibold">
                  énergies renouvelables
                </strong>{" "}
                pour répondre concrètement aux défis africains.
              </p>

              <p className="text-base text-gray-600 leading-relaxed mb-7">
                Spécialisée dans la transformation du maïs (gritz, farine,
                semoule) avec une capacité de{" "}
                <strong className="text-alia-grey font-semibold">
                  120 tonnes par jour
                </strong>
                , l&apos;entreprise s&apos;engage dans une démarche qualité
                visant la norme{" "}
                <strong className="text-alia-grey font-semibold">
                  ISO 22000
                </strong>
                .
              </p>

              {/* Bullets */}
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {[
                  "Deux pôles complémentaires",
                  "Démarche qualité ISO 22000",
                  "Présence Burkina & Côte d'Ivoire",
                  "Distinctions ministérielles 2024",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-alia-orange flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Bottom signature */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <p className="signature text-2xl text-alia-orange leading-none mb-1">
                    Eulogue T.
                  </p>
                  <p className="font-display font-bold text-alia-grey text-sm leading-tight">
                    Eulogue TAPSOBA
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Promoteur, ALIA Industrie
                  </p>
                </div>
                <div>
                  <a
                    href="tel:+22670757713"
                    className="font-display font-bold text-alia-grey hover:text-alia-orange text-base leading-tight transition-colors"
                  >
                    +226 70 75 77 13
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Pour toute question
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ② CHIFFRES CLÉS */}
      <section className="bg-alia-dark py-12 lg:py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-6 max-w-4xl mx-auto">
            <div className="text-center" data-aos="fade-up">
              <div className="inline-flex w-12 h-12 rounded-full bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-alia-orange" />
              </div>
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-none">
                2019
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-400 mt-2 font-semibold">
                Création ALIA Industrie
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex w-12 h-12 rounded-full bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-3">
                <Wheat className="w-5 h-5 text-alia-orange" />
              </div>
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-none">
                120<span className="text-lg lg:text-xl text-alia-orange ml-1">t/j</span>
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-400 mt-2 font-semibold">
                Capacité maïs
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-flex w-12 h-12 rounded-full bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-3">
                <BadgeCheck className="w-5 h-5 text-alia-orange" />
              </div>
              <p className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-none">
                ISO 22000
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-400 mt-2 font-semibold">
                Démarche qualité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ③ NOTRE MISSION */}
      <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-2xl mx-auto text-center mb-12" data-aos="fade-up">
            <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
              Notre mission
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.08] tracking-tight">
              Anticiper, innover, bâtir un avenir{" "}
              <span className="text-alia-orange">durable</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-7 lg:p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex w-14 h-14 rounded-md bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-5">
                <Wheat className="w-7 h-7 text-alia-orange" />
              </div>
              <h3 className="font-display font-bold text-xl lg:text-2xl text-alia-grey mb-3">
                Agroalimentaire durable
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Privilégier des pratiques responsables et respectueuses de
                l&apos;environnement pour offrir des produits agroalimentaires
                de qualité — gritz, farine, semoule — issus du maïs sélectionné
                localement.
              </p>
            </div>
            <div className="bg-white rounded-lg p-7 lg:p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-flex w-14 h-14 rounded-md bg-alia-blue/15 border border-alia-blue/30 items-center justify-center mb-5">
                <Sun className="w-7 h-7 text-alia-blue" />
              </div>
              <h3 className="font-display font-bold text-xl lg:text-2xl text-alia-grey mb-3">
                Transition énergétique
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Développer des solutions solaires innovantes — on-grid,
                off-grid, résidentielles ou industrielles — pour accompagner
                entreprises et particuliers vers une autonomie énergétique
                propre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ④ NOS VALEURS */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-8 h-px bg-alia-orange" />
              <span className="text-alia-orange text-xs font-semibold tracking-[0.25em] uppercase">
                Nos valeurs
              </span>
              <span className="block w-8 h-px bg-alia-orange" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.08] tracking-tight">
              4 piliers qui guident chaque projet.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.num}
                  className="group relative bg-gray-50 hover:bg-alia-dark rounded-lg p-7 transition-colors duration-500 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="inline-flex w-12 h-12 rounded-md bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-5 group-hover:bg-alia-orange group-hover:border-alia-orange transition-colors">
                    <Icon className="w-6 h-6 text-alia-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-alia-grey group-hover:text-white mb-2 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                    {v.desc}
                  </p>
                  <span className="absolute top-5 right-5 font-display font-black text-2xl text-alia-grey/10 group-hover:text-alia-orange/30 transition-colors">
                    {v.num}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION ⑤ DISTINCTIONS 2024 */}
      <section className="relative py-20 lg:py-24 overflow-hidden promoteur-bg">
        <div
          className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-alia-orange/[0.18] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-alia-orange/[0.10] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <p
          className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 font-display font-black whitespace-nowrap pointer-events-none select-none"
          style={{
            fontSize: "clamp(80px, 14vw, 220px)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(245,124,0,0.20)",
            letterSpacing: "-0.04em",
            lineHeight: 0.8,
          }}
        >
          DISTINCTIONS
        </p>

        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-alia-orange text-white text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg shadow-alia-orange/30">
              <Award className="w-3.5 h-3.5" />
              Reconnaissances 2024
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.05] tracking-tight mb-6">
              Distinctions <span className="text-alia-orange">officielles</span>.
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Décernées par le{" "}
              <strong className="text-alia-grey font-bold">
                Ministère de l&apos;Industrie, du Commerce et de
                l&apos;Artisanat
              </strong>{" "}
              du Burkina Faso, en reconnaissance de notre engagement pour des
              solutions avant-gardistes.
            </p>
          </div>

          {/* Trophées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-14">
            {trophies.map((t, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-lg overflow-hidden border-[3px] border-alia-orange shadow-2xl shadow-amber-900/20 bg-white"
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Liste des 2 distinctions */}
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="bg-white border border-amber-200 rounded-lg p-6 lg:p-7 shadow-lg shadow-amber-900/10 hover:shadow-xl hover:shadow-alia-orange/20 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-md bg-alia-orange flex items-center justify-center">
                  <Medal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-alia-orange mb-1">
                    Distinction n°1
                  </p>
                  <h3 className="font-display font-bold text-lg lg:text-xl text-alia-grey leading-tight">
                    Étalon d&apos;argent de l&apos;industrie burkinabè
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">Édition 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-amber-200 rounded-lg p-6 lg:p-7 shadow-lg shadow-amber-900/10 hover:shadow-xl hover:shadow-alia-orange/20 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-md bg-alia-orange flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-alia-orange mb-1">
                    Distinction n°2
                  </p>
                  <h3 className="font-display font-bold text-lg lg:text-xl text-alia-grey leading-tight">
                    Meilleur entrepreneur jeune
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">
                    Pour la 2ème fois — Édition 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ⑥ CTA FINAL */}
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
        <div
          className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-white/[0.10] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-[1.1] tracking-tight">
                Travaillons ensemble.
              </h2>
              <p className="text-white/90 mt-3 text-base">
                Un projet industriel, agricole ou énergétique ? On en discute.
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
