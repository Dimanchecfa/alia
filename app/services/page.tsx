import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Sun,
  ArrowRight,
  Check,
  Brain,
  Handshake,
  Lightbulb,
  Cog,
  Search,
  FileText,
  Hammer,
  PlayCircle,
  ShieldCheck,
  Layers,
  Route,
  MessageCircle,
  Factory,
  Zap,
} from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title:
    "Nos services — Agroalimentaire, Énergies Renouvelables, Maintenance industrielle",
  description:
    "Partenaire technique à chaque étape : conseil, installation solaire on/off-grid, transformation agroalimentaire (maïs 120t/j), distribution d'équipements et maintenance industrielle au Burkina Faso.",
  keywords: [
    "services industriels Burkina",
    "installation solaire Ouagadougou",
    "minoterie maïs",
    "maintenance industrielle Burkina",
    "études faisabilité solaire",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Nos services — ALIA Industrie",
    description:
      "Agroalimentaire & énergies renouvelables — partenaire technique de A à Z.",
    url: "/services",
  },
};

const transverses = [
  {
    icon: Brain,
    title: "Conseil technique & Expertise",
    desc: "Analyse approfondie de vos besoins et recommandations sur mesure, optimisées pour vos objectifs et contraintes budgétaires.",
  },
  {
    icon: Handshake,
    title: "Installation & Mise en service",
    desc: "Déploiement, configuration et tests par des équipes spécialisées — installation clé en main de vos équipements.",
  },
  {
    icon: Lightbulb,
    title: "Accompagnement énergétique",
    desc: "De l'étude de faisabilité à la mise en place de solutions solaires on-grid et off-grid pour votre autonomie.",
  },
  {
    icon: Cog,
    title: "Maintenance & Suivi",
    desc: "Contrats de maintenance préventive, dépannage rapide et remplacement de pièces d'usure pour la longévité de vos installations.",
  },
];

const process = [
  { num: "01", icon: Search, title: "Diagnostic", desc: "Analyse de votre besoin, visite technique sur site." },
  { num: "02", icon: FileText, title: "Proposition", desc: "Devis technique & financier, plan d'exécution." },
  { num: "03", icon: Hammer, title: "Installation", desc: "Fourniture des équipements, pose et raccordement." },
  { num: "04", icon: PlayCircle, title: "Mise en service", desc: "Tests, formation utilisateurs, livraison opérationnelle." },
  { num: "05", icon: ShieldCheck, title: "Maintenance", desc: "Suivi continu, dépannage et entretien préventif." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Nos services", url: "/services" },
          ]),
          webPageSchema({
            type: "WebPage",
            url: "/services",
            name: "Nos services — ALIA Industrie",
            description:
              "Agroalimentaire, énergies renouvelables et services transverses au Burkina Faso.",
          }),
        ]}
        id="schema-services"
      />
      <PageBanner
        number="02"
        title="Nos services"
        highlight="services"
        breadcrumbLabel="Nos services"
        subtitle={
          <>
            Plus qu&apos;un fournisseur, un{" "}
            <span className="text-white font-semibold">partenaire technique</span>{" "}
            à chaque étape de votre projet — de l&apos;étude à la maintenance.
          </>
        }
      />

      {/* SECTION ① INTRO 2 PÔLES */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-alia-orange pulse-dot" />
              Notre expertise
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.05] tracking-tight mb-5">
              Deux grands pôles,{" "}
              <span className="text-alia-orange">complémentaires.</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Industrie agroalimentaire et énergies renouvelables — deux secteurs essentiels pour un développement africain souverain et durable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { href: "#agroalimentaire", num: "Pôle 01", title: "Agroalimentaire", desc: "Transformation du maïs et production de farine, gritz et semoule à grande échelle.", icon: Wheat },
              { href: "#energie", num: "Pôle 02", title: "Énergies Renouvelables", desc: "Études, installation et maintenance de systèmes solaires on-grid et off-grid.", icon: Sun },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.href}
                  data-aos="fade-up"
                  data-aos-delay={100 + idx * 100}
                  className="group bg-white border border-gray-200 rounded-lg p-7 lg:p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-alia-orange/20"
                >
                  <div className="inline-flex w-14 h-14 rounded-lg bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-5 group-hover:bg-alia-orange group-hover:border-alia-orange transition-colors">
                    <Icon className="w-7 h-7 text-alia-orange group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10.5px] uppercase tracking-[0.22em] font-bold text-alia-orange mb-2">
                    {p.num}
                  </p>
                  <h3 className="font-display font-bold text-xl text-alia-grey mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-alia-orange mt-4 group-hover:gap-2.5 transition-all">
                    En savoir plus
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION ② PÔLE AGROALIMENTAIRE */}
      <section id="agroalimentaire" className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-[80rem]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-alia-dark/20">
                <Image
                  src="/images/services/agroalimentaire.jpg"
                  alt="Pôle Agroalimentaire ALIA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white rounded-md px-4 py-3 shadow-xl flex items-center gap-3">
                  <Factory className="w-6 h-6 text-alia-orange" />
                  <div>
                    <p className="font-display font-extrabold text-2xl text-alia-grey leading-none">
                      120<span className="text-alia-orange">t/j</span>
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-0.5">
                      Capacité maïs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="150">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-black text-5xl lg:text-6xl text-alia-orange/30 leading-none">
                  /01
                </span>
                <span className="text-[10.5px] uppercase tracking-[0.22em] font-bold text-alia-orange">
                  Pôle Agroalimentaire
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey leading-[1.1] tracking-tight mb-5">
                L&apos;essence du maïs au cœur de notre{" "}
                <span className="text-alia-orange">savoir-faire.</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Notre minoterie de <strong className="text-alia-grey">Kossodo</strong> transforme le maïs local sélectionné en{" "}
                <strong className="text-alia-grey">farine, gritz et semoule</strong> certifiés. Capacité industrielle, démarche qualité ISO&nbsp;22000 et distribution nationale.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  ["Minoterie haute capacité", "120 tonnes par jour de production effective"],
                  ["Démarche qualité ISO 22000", "sécurité alimentaire à chaque étape"],
                  ["Innovation produit", "recherche continue sur la granulométrie"],
                  ["Distribution nationale", "Burkina Faso et Côte d'Ivoire"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-alia-orange flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span>
                      <strong className="text-alia-grey font-semibold">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/catalogue#production"
                className="group inline-flex items-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-sm px-6 py-3 rounded-md transition-colors shadow-md shadow-alia-orange/25"
              >
                Voir notre catalogue
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ③ PÔLE ÉNERGIES RENOUVELABLES (image right) */}
      <section id="energie" className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-[80rem]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6 lg:order-1" data-aos="fade-right">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-black text-5xl lg:text-6xl text-alia-orange/30 leading-none">
                  /02
                </span>
                <span className="text-[10.5px] uppercase tracking-[0.22em] font-bold text-alia-orange">
                  Pôle Énergies Renouvelables
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey leading-[1.1] tracking-tight mb-5">
                Le <span className="text-alia-orange">solaire</span> pour un avenir durable.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Études, installation et maintenance de systèmes solaires{" "}
                <strong className="text-alia-grey">on-grid</strong> et{" "}
                <strong className="text-alia-grey">off-grid</strong> — résidentiel, tertiaire ou industriel.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  ["Études de faisabilité", "dimensionnement et calcul de retour sur investissement"],
                  ["Installation clé en main", "fourniture, pose et mise en service"],
                  ["Solutions on-grid & off-grid", "hybrides selon vos besoins"],
                  ["Maintenance & monitoring", "contrats de suivi et SAV réactif"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-alia-orange flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span>
                      <strong className="text-alia-grey font-semibold">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/realisations"
                className="group inline-flex items-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-sm px-6 py-3 rounded-md transition-colors shadow-md shadow-alia-orange/25"
              >
                Voir nos réalisations
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6 lg:order-2" data-aos="fade-left" data-aos-delay="150">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-alia-dark/20">
                <Image
                  src="/images/services/energies.jpg"
                  alt="Pôle Énergies Renouvelables ALIA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white rounded-md px-4 py-3 shadow-xl flex items-center gap-3">
                  <Zap className="w-6 h-6 text-alia-orange" />
                  <div>
                    <p className="font-display font-extrabold text-2xl text-alia-grey leading-none">
                      On / Off<span className="text-alia-orange">·</span>grid
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-0.5">
                      Solutions hybrides
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ④ SERVICES TRANSVERSES */}
      <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-[80rem]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              Services transverses
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.08] tracking-tight">
              Quatre <span className="text-alia-orange">expertises</span> à votre service.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {transverses.map((s, idx) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="group bg-white border border-gray-200 rounded-lg p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-alia-dark/20 hover:border-alia-orange/40"
                >
                  <div className="inline-flex w-12 h-12 rounded-md bg-alia-orange/15 border border-alia-orange/30 items-center justify-center mb-5 group-hover:bg-alia-orange group-hover:border-alia-orange transition-colors">
                    <Icon className="w-6 h-6 text-alia-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-alia-grey mb-3 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION ⑤ PROCESS TIMELINE */}
      <section className="relative py-16 lg:py-24 bg-alia-dark text-white overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-alia-orange/[0.10] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-alia-orange/15 border border-alia-orange/40 text-alia-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <Route className="w-3.5 h-3.5" />
              Notre process
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.08] tracking-tight mb-4">
              Comment on <span className="text-alia-orange">travaille</span> ensemble.
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Une méthode éprouvée en 5 étapes claires.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 max-w-6xl mx-auto">
            {process.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={p.num} className="text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="relative w-16 h-16 mx-auto mb-4 z-10">
                    <div className="absolute inset-0 rounded-full bg-alia-orange flex items-center justify-center shadow-lg shadow-alia-orange/40">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-alia-orange font-display font-extrabold text-xs flex items-center justify-center shadow-md">
                      {p.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION ⑥ CTA DEVIS */}
      <section className="relative bg-alia-orange py-14 lg:py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.4px, transparent 1.4px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-[1.1] tracking-tight">
                Discutons de votre projet.
              </h2>
              <p className="text-white/90 mt-3 text-base">
                Une question, une étude, un devis — notre équipe vous répond sous 48&nbsp;h.
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
