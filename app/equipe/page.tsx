import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Mail,
  Send,
  MessageSquare,
  Users,
} from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Notre équipe — Le promoteur Eulogue Tapsoba & l'équipe dirigeante",
  description:
    "Rencontrez M. Eulogue Tapsoba, promoteur d'ALIA Industrie, ainsi que l'équipe dirigeante : DAF, DRH, Directeur Technique et Directrice Marketing. Une équipe burkinabè au service de l'industrie locale.",
  keywords: [
    "équipe ALIA Industrie",
    "Eulogue Tapsoba",
    "Mathieu Compaoré DAF",
    "Geoffroy Koudougou DRH",
    "Justin Kabré Directeur Technique",
    "Alida Tapsoba Marketing",
    "promoteur burkinabè",
  ],
  alternates: { canonical: "/equipe" },
  openGraph: {
    title: "Notre équipe — ALIA Industrie",
    description:
      "Le promoteur Eulogue Tapsoba et l'équipe dirigeante d'ALIA Industrie.",
    url: "/equipe",
  },
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.46z" />
  </svg>
);

const team = [
  {
    photo: "/images/teams/directeur-alia_compaore_mathieu.png",
    name: "M. Mathieu COMPAORÉ",
    role: "Directeur Administratif & Financier",
    badge: "Adm. & Finances",
    desc: "Pilotage administratif, budgétaire et stratégie financière de l'entreprise.",
    bg: "bg-alia-blue-soft",
  },
  {
    photo: "/images/teams/directeur-production_justin_kabre.png",
    name: "M. Justin KABRÉ",
    role: "Directeur Technique",
    badge: "Direction Technique",
    desc: "Supervision technique des installations, études d'ingénierie et qualité opérationnelle.",
    bg: "bg-orange-50",
  },
  {
    photo: "/images/teams/directeur_affaire_financier%28daf%29_geoffroy_koudougou.png",
    name: "M. Geoffroy KOUDOUGOU",
    role: "Directeur des Ressources Humaines",
    badge: "Ressources Humaines",
    desc: "Gestion des talents, recrutement et développement des compétences.",
    bg: "bg-amber-50",
  },
  {
    photo: "/images/teams/directrice-marketing_mme_alida_tapsoba%3Akabore.png",
    name: "Mme Alida TAPSOBA / KABORÉ",
    role: "Directrice Marketing",
    badge: "Direction Marketing",
    desc: "Développement commercial, communication et relation clients.",
    bg: "bg-emerald-50",
  },
];

export default function EquipePage() {
  const yearsSince2009 = new Date().getFullYear() - 2009;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Équipe", url: "/equipe" },
          ]),
          webPageSchema({
            type: "AboutPage",
            url: "/equipe",
            name: "Notre équipe — ALIA Industrie",
            description:
              "Eulogue Tapsoba et l'équipe dirigeante d'ALIA Industrie.",
          }),
        ]}
        id="schema-equipe"
      />
      <PageBanner
        number="05"
        title="Notre équipe"
        highlight="équipe"
        breadcrumbLabel="Équipe"
        subtitle={
          <>
            Les{" "}
            <span className="text-white font-semibold">
              femmes et les hommes
            </span>{" "}
            qui font tourner ALIA Industrie au quotidien — engagement, expertise
            et passion.
          </>
        }
      />

      {/* SECTION ① PROMOTEUR */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-8 h-px bg-alia-orange" />
              <span className="text-alia-orange text-xs font-semibold tracking-[0.25em] uppercase">
                Le promoteur
              </span>
              <span className="block w-8 h-px bg-alia-orange" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.05] tracking-tight">
              Rencontrez notre{" "}
              <span className="signature text-alia-orange text-[1.4em] font-normal align-baseline">
                fondateur.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <div data-aos="fade-right">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-orange-50 shadow-2xl shadow-alia-dark/15">
                <div className="absolute top-5 left-5 z-10 bg-white text-alia-grey text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full shadow-md">
                  Promoteur &amp; Fondateur
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-transparent to-orange-50" />
                <Image
                  src="/images/promoteur.jpg"
                  alt="M. Eulogue Tapsoba — Promoteur d'ALIA Industrie"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply"
                />
              </div>
            </div>

            {/* Bio */}
            <div data-aos="fade-left" data-aos-delay="150">
              <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey leading-tight tracking-tight mb-5">
                M. Eulogue <span className="text-alia-orange">TAPSOBA</span>
              </h3>
              <blockquote className="text-base text-gray-600 leading-relaxed mb-6 italic border-l-2 border-alia-orange pl-4">
                « Bienvenue chez ALIA Industrie. Nous unissons agroalimentaire
                durable et énergies renouvelables pour répondre aux défis
                d&apos;aujourd&apos;hui. Notre force&nbsp;: anticiper, innover
                et bâtir un futur durable pour tous. »
              </blockquote>

              {/* Socials */}
              <div className="flex items-center gap-2 mb-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-md bg-gray-100 hover:bg-alia-orange text-alia-grey hover:text-white flex items-center justify-center transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:contact@alia-industrie-bf.com"
                  aria-label="Email"
                  className="w-10 h-10 rounded-md bg-gray-100 hover:bg-alia-orange text-alia-grey hover:text-white flex items-center justify-center transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="border-t border-gray-200 mb-6" />

              <h4 className="font-display font-bold text-xl lg:text-2xl text-alia-grey mb-4">
                Parcours &amp; Expertise
              </h4>

              <ul className="space-y-3">
                {[
                  [
                    `Plus de ${yearsSince2009} ans d'expertise`,
                    "dans l'industrie burkinabè.",
                  ],
                  [
                    "Distinctions ministérielles 2024",
                    "— Étalon d'argent de l'industrie burkinabè et Meilleur entrepreneur jeune (2ᵉ fois).",
                  ],
                  [
                    "Vision intégrée",
                    "— agroalimentaire durable + énergies renouvelables pour un développement africain souverain.",
                  ],
                ].map(([title, rest]) => (
                  <li
                    key={title}
                    className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                  >
                    <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-alia-orange flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span>
                      <strong className="text-alia-grey font-semibold">
                        {title}
                      </strong>{" "}
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ② ÉQUIPE DIRIGEANTE */}
      <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14 max-w-6xl mx-auto">
            <div>
              <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
                L&apos;équipe
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.08] tracking-tight">
                Notre équipe{" "}
                <span className="text-alia-orange">dirigeante</span>.
              </h2>
            </div>
            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              Une équipe pluridisciplinaire qui pilote au quotidien les
              opérations d&apos;ALIA Industrie au Burkina Faso et en Côte
              d&apos;Ivoire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((m, idx) => (
              <article key={m.name} className="group" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div
                  className={`relative aspect-[4/5] rounded-lg overflow-hidden ${m.bg} mb-5 flex items-end justify-center transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-alia-orange/30`}
                >
                  <span className="absolute top-4 left-4 z-10 bg-white text-alia-grey text-[10.5px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full shadow-md">
                    {m.badge}
                  </span>
                  <Image
                    src={m.photo}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-alia-grey mb-1">
                  {m.name}
                </h3>
                <p className="text-[10.5px] uppercase tracking-[0.18em] font-bold text-alia-orange mb-2">
                  {m.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {m.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION ③ NOTRE ÉQUIPE EN IMAGE */}
      <section className="relative py-16 lg:py-20 bg-gray-100 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cpath d='M40 36v8M36 40h8' stroke='%231E293B' stroke-width='1' stroke-opacity='0.10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-alia-orange text-white text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg shadow-alia-orange/30">
              <Users className="w-3.5 h-3.5" />
              L&apos;équipe complète
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.08] tracking-tight">
              Une équipe complète au service du{" "}
              <span className="text-alia-orange">Burkina</span>.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto relative" data-aos="zoom-in">
            <div className="map-frame">
              <span className="map-corner tl" aria-hidden="true" />
              <span className="map-corner tr" aria-hidden="true" />
              <span className="map-corner bl" aria-hidden="true" />
              <span className="map-corner br" aria-hidden="true" />
              <div className="relative rounded-md overflow-hidden bg-white p-2.5">
                <Image
                  src="/images/equipe-alia.jpg"
                  alt="L'équipe complète d'ALIA Industrie"
                  width={1600}
                  height={1066}
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center justify-between px-2 pt-3 pb-1 text-white">
                <p className="font-display font-extrabold text-sm lg:text-base tracking-wide">
                  ALIA <span className="text-alia-orange">INDUSTRIE</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-gray-400">
                  Kossodo, Ouagadougou · 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ④ REJOIGNEZ-NOUS */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[10.5px] font-bold tracking-[0.2em] uppercase mb-3">
                Carrières
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-[1.1] tracking-tight">
                Rejoignez l&apos;aventure ALIA.
              </h2>
              <p className="text-white/90 mt-3 text-base">
                Vous êtes passionné(e) par l&apos;industrie, l&apos;agroalimentaire
                ou les énergies renouvelables ? Envoyez-nous votre candidature
                spontanée.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="mailto:contact@alia-industrie-bf.com?subject=Candidature%20spontan%C3%A9e"
                className="group inline-flex items-center justify-center gap-2 bg-alia-dark hover:bg-black text-white font-bold text-sm px-7 py-3.5 rounded-md transition-colors"
              >
                Candidature spontanée
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-alia-grey font-bold text-sm px-7 py-3.5 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-alia-orange" />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
