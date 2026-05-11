"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  realisations,
  type Realisation,
  type RealisationCategory,
} from "@/lib/data/realisations";
import Modal from "@/components/ui/Modal";

type Filter = "all" | RealisationCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "solaire", label: "Énergie solaire" },
  { id: "agro", label: "Agroalimentaire" },
  { id: "maintenance", label: "Maintenance" },
];

const CATEGORY_BG: Record<RealisationCategory, string> = {
  solaire: "bg-alia-blue",
  agro: "bg-alia-orange",
  maintenance: "bg-gray-700",
};

function RealisationCard({
  r,
  onClick,
  aosDelay,
}: {
  r: Realisation;
  onClick: () => void;
  aosDelay: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="realisation-card group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl shadow-alia-dark/10 cursor-pointer aspect-[4/3] lg:aspect-auto lg:h-[280px] text-left w-full"
    >
      <Image
        src={r.image}
        alt={r.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-alia-dark via-alia-dark/55 to-transparent transition-opacity duration-500 group-hover:from-alia-dark group-hover:via-alia-dark/75" />

      <span
        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold text-white ${CATEGORY_BG[r.category]}`}
      >
        {r.categoryLabel}
      </span>

      <span className="absolute top-4 right-14 text-[10px] uppercase tracking-[0.18em] font-bold text-white/70 mt-1">
        {r.year}
      </span>

      <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-alia-orange group-hover:scale-110">
        <ArrowUpRight className="w-4 h-4" />
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
        {r.metric && (
          <p className="font-display font-black text-3xl lg:text-4xl text-alia-orange leading-none mb-2 tracking-tight">
            {r.metric.value}
            <span className="text-base lg:text-lg ml-1 font-bold">
              {r.metric.unit}
            </span>
          </p>
        )}
        <h3 className="font-display font-bold text-base lg:text-lg mb-1.5 leading-tight">
          {r.title}
        </h3>
        <p className="text-[11px] text-white/75 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-alia-orange" />
          <span>{r.location}</span>
        </p>
      </div>
    </button>
  );
}

export default function RealisationsGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Realisation | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? realisations
        : realisations.filter((r) => r.category === activeFilter),
    [activeFilter]
  );

  const counts = useMemo(
    () => ({
      all: realisations.length,
      solaire: realisations.filter((r) => r.category === "solaire").length,
      agro: realisations.filter((r) => r.category === "agro").length,
      maintenance: realisations.filter((r) => r.category === "maintenance")
        .length,
    }),
    []
  );

  // Refresh AOS quand le filtre change → re-scan des cards
  useEffect(() => {
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => AOS.refreshHard?.() ?? AOS.refresh?.());
    }
  }, [activeFilter]);

  return (
    <>
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-[80rem]">
          {/* Filter chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`filter-chip px-5 py-2.5 rounded-md text-sm font-semibold ${
                  activeFilter === f.id ? "active" : ""
                }`}
              >
                {f.label}{" "}
                <span className="ml-1 text-xs opacity-70">
                  ({counts[f.id]})
                </span>
              </button>
            ))}
          </div>

          {/* Grille */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">
                Aucune réalisation dans cette catégorie pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {filtered.map((r, idx) => (
                <RealisationCard
                  key={r.id}
                  r={r}
                  onClick={() => setSelected(r)}
                  aosDelay={(idx % 6) * 60}
                />
              ))}
            </div>
          )}
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
            {/* Image */}
            <div
              className="relative bg-black flex items-center justify-center"
              style={{ maxHeight: "70vh" }}
            >
              <Image
                src={selected.image}
                alt={`${selected.title} — ${selected.location}`}
                width={1600}
                height={1066}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Info bar */}
            <div className="p-6 lg:p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold ${CATEGORY_BG[selected.category]} text-white`}
                >
                  {selected.categoryLabel}
                </span>
                <span className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-gray-500">
                  {selected.year}
                </span>
              </div>

              {selected.metric && (
                <p className="font-display font-black text-4xl lg:text-5xl text-alia-orange leading-none mb-3 tracking-tight">
                  {selected.metric.value}
                  <span className="text-xl lg:text-2xl ml-2 font-bold">
                    {selected.metric.unit}
                  </span>
                </p>
              )}

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
