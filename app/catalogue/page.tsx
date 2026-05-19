import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Cog,
  Factory,
  Sun,
  Zap,
  Download,
  ArrowRight,
  MessageCircle,
  Check,
  MapPin,
  BadgeCheck,
  FileText,
  type LucideIcon,
} from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import CatalogueCategoryGrid from "@/components/sections/CatalogueCategoryGrid";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  webPageSchema,
  productSchema,
} from "@/lib/seo/schemas";
import {
  productionItems,
  distributionCategories,
} from "@/lib/data/catalogue";

export const metadata: Metadata = {
  title:
    "Notre catalogue — Farine de maïs ALIA & 26+ équipements industriels distribués",
  description:
    "Production maison ALIA (farine de maïs, semoule) et distribution de 26+ équipements industriels : composants électriques (Schneider, ABB), mécaniques (SKF), solaire (Victron). Catalogue PDF téléchargeable.",
  keywords: [
    "catalogue ALIA Industrie",
    "farine maïs Burkina",
    "semoule maïs Burkina",
    "équipements électriques Burkina",
    "roulements SKF Burkina",
    "panneaux solaires Victron",
    "groupes électrogènes Burkina",
    "automates Schneider ABB",
  ],
  alternates: { canonical: "/catalogue" },
  openGraph: {
    title: "Catalogue ALIA Industrie — 2 produits maison + 26+ équipements",
    description:
      "Production farine de maïs locale + distribution équipements industriels certifiés.",
    url: "/catalogue",
  },
};

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  cog: Cog,
  factory: Factory,
  wheat: Wheat,
  sun: Sun,
};

export default function CataloguePage() {
  // Génère un schema Product pour chaque produit ALIA + chaque item distribution
  const allProductSchemas = [
    ...productionItems.map((p) =>
      productSchema({
        name: `${p.title} ALIA`,
        description: p.description,
        image: `/images/catalogue/production/${p.filename}`,
        category: "Agroalimentaire — Production maison ALIA",
        brand: "ALIA Industrie",
      })
    ),
    ...distributionCategories.flatMap((cat) =>
      cat.items.map((it) =>
        productSchema({
          name: it.title,
          description: it.description,
          image: `/images/catalogue/distribution/${cat.id}/${it.filename}`,
          category: cat.title,
        })
      )
    ),
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Catalogue", url: "/catalogue" },
          ]),
          webPageSchema({
            type: "CollectionPage",
            url: "/catalogue",
            name: "Catalogue ALIA Industrie",
            description:
              "Production farine de maïs + distribution d'équipements industriels.",
          }),
          ...allProductSchemas,
        ]}
        id="schema-catalogue"
      />
      <PageBanner
        number="04"
        title="Notre catalogue"
        highlight="catalogue"
        breadcrumbLabel="Catalogue"
        subtitle={
          <>
            Notre{" "}
            <span className="text-white font-semibold">production maison</span>{" "}
            et notre offre de{" "}
            <span className="text-white font-semibold">
              distribution d&apos;équipements
            </span>{" "}
            industriels — tout ce qu&apos;il faut pour faire tourner votre
            activité.
          </>
        }
      />

      {/* SECTION ① STATS BAND */}
      <section className="bg-white py-8 lg:py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
            <div className="text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey">
                2
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-500 mt-1 font-semibold">
                Univers produits
              </p>
            </div>
            <span className="hidden md:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey">
                2
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-500 mt-1 font-semibold">
                Produits ALIA
              </p>
            </div>
            <span className="hidden md:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-alia-grey">
                26<span className="text-alia-orange">+</span>
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-gray-500 mt-1 font-semibold">
                Références distribution
              </p>
            </div>
            <span className="hidden md:block w-px h-12 bg-gray-200" />
            <a
              href="/CATALOGUE-ALIA-INDUSTRIE.pdf"
              download
              className="group inline-flex items-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-xs px-4 py-2.5 rounded-md transition-colors shadow-md shadow-alia-orange/25"
            >
              <Download className="w-4 h-4" />
              Télécharger PDF
            </a>
          </div>
        </div>
      </section>

      {/* SECTION ② PRODUITS ALIA */}
      <section
        id="production"
        className="relative py-16 lg:py-24 promoteur-bg overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-alia-orange/[0.18] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-alia-orange text-white text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg shadow-alia-orange/30">
              <Wheat className="w-3.5 h-3.5" />
              Marque ALIA
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.05] tracking-tight mb-5">
              Notre{" "}
              <span className="signature text-alia-orange text-[1.4em] font-normal align-baseline">
                production
              </span>{" "}
              maison.
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
              De la sélection du maïs local à la mise en sachet, notre
              minoterie de{" "}
              <strong className="text-alia-grey font-semibold">Kossodo</strong>{" "}
              produit une gamme certifiée pour l&apos;agroalimentaire
              burkinabè.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-xs text-gray-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-alia-orange" />
                120 t/jour
              </span>
              <span className="text-gray-400">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-alia-orange" />
                100 % Burkina
              </span>
              <span className="text-gray-400">·</span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-alia-orange" />
                Visée ISO 22000
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 max-w-4xl mx-auto">
            {productionItems.map((p, idx) => (
              <article
                key={p.title}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-alia-orange/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={`/images/catalogue/production/${p.filename}`}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-alia-orange text-white text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full shadow-md">
                    🇧🇫 Fabriqué au Burkina
                  </span>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="font-display font-bold text-xl text-alia-grey mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-700 mb-5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-alia-orange shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact#devis"
                    className="group inline-flex items-center gap-1.5 text-sm font-bold text-alia-orange hover:gap-2 transition-all"
                  >
                    Demander un devis
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SÉPARATEUR DISTRIBUTION */}
      <section className="bg-white py-12 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-alia-orange text-xs font-bold tracking-[0.3em] uppercase">
              Distribution d&apos;équipements
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.08] tracking-tight mt-6 mb-4">
              5 catégories.{" "}
              <span className="text-alia-orange">26 références</span>.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Une offre complète d&apos;équipements industriels via nos
              partenariats avec les plus grandes marques internationales —
              SKF, ABB, Schneider, Victron…
            </p>
          </div>
        </div>
      </section>

      {/* 5 CATÉGORIES */}
      {distributionCategories.map((cat) => {
        const Icon = iconMap[cat.partnersIcon];
        return (
          <section key={cat.id} id={cat.id}>
            {/* Hero band */}
            <div className="cat-hero">
              <Image
                src={`/images/catalogue/distribution/${cat.id}/_hero.jpg`}
                alt=""
                fill
                sizes="100vw"
                className="cat-hero-image"
              />
              <div className="cat-hero-overlay" />
              <div className="cat-hero-pattern" />
              <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative max-w-[80rem]">
                <div className="max-w-2xl">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display font-black text-5xl lg:text-6xl text-alia-orange/40 leading-none">
                      /{cat.number}
                    </span>
                    <span className="text-[10.5px] uppercase tracking-[0.22em] font-bold text-alia-orange">
                      {cat.itemsCount} références
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-[1.1] tracking-tight mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4 max-w-xl">
                    {cat.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                    <Icon className="w-4 h-4 text-alia-orange" />
                    <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-white">
                      {cat.partners}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Items grid avec modal */}
            <CatalogueCategoryGrid
              categoryId={cat.id}
              itemsCount={cat.itemsCount}
              bgItems={cat.bgItems}
              items={cat.items}
              categoryTitle={cat.title}
            />
          </section>
        );
      })}

      {/* SECTION TÉLÉCHARGEMENT PDF */}
      <section className="relative py-16 lg:py-20 bg-alia-dark text-white overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-alia-orange/[0.10] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-alia-grey to-alia-dark border border-white/10 rounded-lg p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="shrink-0 w-20 h-24 lg:w-24 lg:h-28 bg-alia-orange rounded-md flex flex-col items-center justify-center text-white shadow-lg shadow-alia-orange/30 relative">
                <FileText className="w-10 h-10 lg:w-12 lg:h-12" />
                <span className="absolute -bottom-2 right-2 bg-white text-alia-orange text-[9px] font-black tracking-wider px-1.5 py-0.5 rounded shadow">
                  PDF
                </span>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <p className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-alia-orange mb-2">
                  Document officiel
                </p>
                <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-tight mb-2">
                  Catalogue ALIA Industrie complet
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Téléchargez notre catalogue détaillé : références complètes,
                  fiches techniques, partenaires.
                </p>
              </div>
              <a
                href="/CATALOGUE-ALIA-INDUSTRIE.pdf"
                download
                className="shrink-0 group inline-flex items-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-sm px-6 py-3.5 rounded-md transition-colors shadow-lg shadow-alia-orange/30"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                Télécharger
                <span className="text-xs text-white/70">(1.4 Mo)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
                Besoin d&apos;un produit qui ne figure pas&nbsp;?
              </h2>
              <p className="text-white/90 mt-3 text-base">
                Devis sur mesure, sourcing dédié — parlez-nous de votre besoin
                spécifique.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact#devis"
                className="group inline-flex items-center justify-center gap-2 bg-alia-dark hover:bg-black text-white font-bold text-sm px-7 py-3.5 rounded-md transition-colors"
              >
                Devis personnalisé
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
