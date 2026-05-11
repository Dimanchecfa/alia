"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Modal from "@/components/ui/Modal";
import type { CatalogueItem } from "@/lib/data/catalogue";

interface CatalogueCategoryGridProps {
  categoryId: string;
  itemsCount: number;
  bgItems: "white" | "gray-50";
  items: CatalogueItem[];
  categoryTitle: string;
}

export default function CatalogueCategoryGrid({
  categoryId,
  itemsCount,
  bgItems,
  items,
  categoryTitle,
}: CatalogueCategoryGridProps) {
  const [selected, setSelected] = useState<CatalogueItem | null>(null);

  const gridCols =
    itemsCount === 9
      ? "lg:grid-cols-3"
      : itemsCount === 5
        ? "lg:grid-cols-3 xl:grid-cols-5"
        : "lg:grid-cols-4";

  return (
    <>
      <div
        className={`${bgItems === "gray-50" ? "bg-gray-50" : "bg-white"} py-14 lg:py-16`}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-[80rem]">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-5 lg:gap-6 max-w-6xl mx-auto`}
          >
            {items.map((it, idx) => (
              <button
                key={it.filename}
                type="button"
                onClick={() => setSelected(it)}
                data-aos="fade-up"
                data-aos-delay={(idx % 6) * 60}
                className="item-card bg-white rounded-lg overflow-hidden border border-gray-200 cursor-pointer text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={`/images/catalogue/distribution/${categoryId}/${it.filename}`}
                    alt={it.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="item-image absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-bold text-base text-alia-grey mb-1.5 leading-tight">
                    {it.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {it.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact#devis"
              className="group inline-flex items-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-xs px-6 py-3 rounded-md transition-colors shadow-md shadow-alia-orange/25"
            >
              Devis sur cette catégorie
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        ariaLabel={selected?.title ?? "Détails du produit"}
      >
        {selected && (
          <>
            <div
              className="relative bg-black flex items-center justify-center"
              style={{ maxHeight: "65vh" }}
            >
              <Image
                src={`/images/catalogue/distribution/${categoryId}/${selected.filename}`}
                alt={selected.title}
                width={1200}
                height={900}
                className="w-full max-h-[65vh] object-contain"
              />
            </div>
            <div className="p-6 lg:p-8 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-alia-orange mb-4">
                {categoryTitle}
              </span>
              <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-tight mb-3">
                {selected.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact#devis"
                  className="inline-flex items-center justify-center gap-2 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-sm px-6 py-3 rounded-md transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/22670757713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-md transition-colors border border-white/20"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
