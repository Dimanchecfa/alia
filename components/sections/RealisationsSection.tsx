"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Modal from "@/components/ui/Modal";

interface FeaturedRealisation {
  id: string;
  image: string;
  alt: string;
  category: "Énergie solaire" | "Solaire" | "Agroalimentaire";
  metricValue: string;
  metricUnit: string;
  metricColor: "orange" | "blue";
  title: string;
  location: string;
  badgeBg: "orange" | "blue";
  size: "featured" | "small";
}

const featured: FeaturedRealisation[] = [
  {
    id: "grand-bassam-45kwc",
    image: "/images/realisations/realisation-1.jpg",
    alt: "Centrale solaire 45 KWc à Grand Bassam, Côte d'Ivoire",
    category: "Énergie solaire",
    metricValue: "45",
    metricUnit: "KWc",
    metricColor: "orange",
    title: "Centrale solaire industrielle",
    location: "Grand Bassam, Côte d'Ivoire",
    badgeBg: "orange",
    size: "featured",
  },
  {
    id: "yamoussoukro-25kwc",
    image: "/images/realisations/realisation-2.jpg",
    alt: "Système solaire 24,78 KWc à Yamoussoukro",
    category: "Solaire",
    metricValue: "24,78",
    metricUnit: "KWc",
    metricColor: "blue",
    title: "Système solaire résidentiel",
    location: "Yamoussoukro, Côte d'Ivoire",
    badgeBg: "blue",
    size: "small",
  },
  {
    id: "minoterie-farine-mais",
    image: "/images/realisations/realisation-agro.jpg",
    alt: "Minoterie ALIA Industrie — Farine de maïs et semoule produites à Kossodo, Ouagadougou",
    category: "Agroalimentaire",
    metricValue: "100",
    metricUnit: "% LOCAL",
    metricColor: "orange",
    title: "Minoterie ALIA — Farine de maïs",
    location: "Kossodo, Ouagadougou",
    badgeBg: "orange",
    size: "small",
  },
];

export default function RealisationsSection() {
  const [selected, setSelected] = useState<FeaturedRealisation | null>(null);

  const renderCard = (r: FeaturedRealisation, idx: number) => {
    const isFeatured = r.size === "featured";
    return (
      <button
        type="button"
        key={r.id}
        onClick={() => setSelected(r)}
        data-aos="fade-up"
        data-aos-delay={100 + idx * 100}
        className={`group relative overflow-hidden rounded-lg shadow-xl shadow-alia-dark/15 cursor-pointer aspect-[4/3] lg:aspect-auto text-left ${
          isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
        }`}
      >
        <Image
          src={r.image}
          alt={r.alt}
          fill
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 66vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alia-dark via-alia-dark/65 to-transparent transition-opacity duration-500 group-hover:from-alia-dark group-hover:via-alia-dark/80" />

        <div
          className={`absolute ${isFeatured ? "top-5 left-5 lg:top-6 lg:left-6 px-3 py-1.5" : "top-4 left-4 px-3 py-1"} ${
            r.badgeBg === "orange" ? "bg-alia-orange" : "bg-alia-blue"
          } text-white rounded-full text-[10px] uppercase tracking-[0.2em] font-bold`}
        >
          {r.category}
        </div>

        <div
          className={`absolute ${isFeatured ? "top-5 right-5 lg:top-6 lg:right-6 w-10 h-10" : "top-4 right-4 w-9 h-9"} rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 ${
            r.badgeBg === "orange"
              ? "group-hover:bg-alia-orange"
              : "group-hover:bg-alia-blue"
          }`}
        >
          <ArrowUpRight className={isFeatured ? "w-5 h-5" : "w-4 h-4"} />
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 ${isFeatured ? "p-6 lg:p-8" : "p-5 lg:p-6"} text-white`}
        >
          <p
            className={`font-display font-black leading-none tracking-tight ${
              isFeatured
                ? "text-5xl lg:text-7xl xl:text-[5.5rem] mb-3"
                : "text-3xl lg:text-4xl mb-2"
            } ${r.metricColor === "orange" ? "text-alia-orange" : "text-alia-blue"}`}
          >
            {r.metricValue}
            <span
              className={`${isFeatured ? "text-2xl lg:text-4xl" : "text-base lg:text-lg"} ml-1 font-bold`}
            >
              {r.metricUnit}
            </span>
          </p>
          <h3
            className={`font-display font-bold leading-tight ${isFeatured ? "text-xl lg:text-2xl mb-2" : "text-sm lg:text-base mb-1.5"}`}
          >
            {r.title}
          </h3>
          <p
            className={`${isFeatured ? "text-xs lg:text-sm" : "text-[11px]"} text-white/75 flex items-center ${isFeatured ? "gap-1.5" : "gap-1"}`}
          >
            <MapPin
              className={`${isFeatured ? "w-3.5 h-3.5" : "w-3 h-3"} ${
                r.badgeBg === "orange" ? "text-alia-orange" : "text-alia-blue"
              }`}
            />
            {r.location}
          </p>
        </div>
      </button>
    );
  };

  return (
    <>
      <section
        id="realisations"
        className="relative py-16 lg:py-24 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14 max-w-6xl mx-auto">
            <div data-aos="fade-up">
              <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-widest uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-alia-orange pulse-dot" />
                Nos réalisations
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.1] tracking-tight max-w-2xl">
                De Ouagadougou à{" "}
                <span className="text-alia-orange">Abidjan</span>,
                <br className="hidden sm:block" />
                nos <span className="text-alia-blue">projets parlent</span>.
              </h2>
            </div>
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-2 text-alia-grey hover:text-alia-orange font-semibold text-sm border-b-2 border-alia-grey hover:border-alia-orange pb-1 transition-colors self-start lg:self-end shrink-0"
            >
              Voir toutes nos réalisations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-[290px] gap-4 lg:gap-5 max-w-6xl mx-auto">
            {featured.map(renderCard)}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        ariaLabel={selected?.title ?? "Détails de la réalisation"}
      >
        {selected && (
          <>
            <div
              className="relative bg-black flex items-center justify-center"
              style={{ maxHeight: "70vh" }}
            >
              <Image
                src={selected.image}
                alt={selected.alt}
                width={1600}
                height={1066}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6 lg:p-8 text-white">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4 ${
                  selected.badgeBg === "orange"
                    ? "bg-alia-orange"
                    : "bg-alia-blue"
                }`}
              >
                {selected.category}
              </span>
              <p
                className={`font-display font-black text-4xl lg:text-5xl leading-none mb-3 tracking-tight ${
                  selected.metricColor === "orange"
                    ? "text-alia-orange"
                    : "text-alia-blue"
                }`}
              >
                {selected.metricValue}
                <span className="text-xl lg:text-2xl ml-2 font-bold">
                  {selected.metricUnit}
                </span>
              </p>
              <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-tight mb-3">
                {selected.title}
              </h3>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-alia-orange" />
                <span>{selected.location}</span>
              </p>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
