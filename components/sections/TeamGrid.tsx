"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

type Member = {
  photo: string;
  title: string;
  firstName: string;
  lastName: string;
  role: string;
  badge: string;
  desc: string;
  bg: string;
  isDG?: boolean;
};

const team: Member[] = [
  {
    photo: "/images/teams/directeur_affaire_financier%28daf%29_geoffroy_koudougou.png",
    title: "M.",
    firstName: "Geoffroy",
    lastName: "KOUDOUGOU",
    role: "Responsable Gestion des Stocks",
    badge: "Gestion des Stocks",
    desc: "Suivi et optimisation des stocks, approvisionnements et logistique interne pour assurer une chaîne fluide entre les pôles industriels d'ALIA.",
    bg: "bg-amber-50",
  },
  {
    photo: "/images/teams/directeur-production_justin_kabre.png",
    title: "M.",
    firstName: "Justin",
    lastName: "KABRÉ",
    role: "Directeur Technique",
    badge: "Direction Technique",
    desc: "Supervision technique des installations, études d'ingénierie, qualité opérationnelle et coordination des chantiers solaires & agroalimentaires.",
    bg: "bg-orange-50",
  },
  {
    photo: "/images/teams/directeur-alia_compaore_mathieu1.png",
    title: "M.",
    firstName: "Mathieu",
    lastName: "COMPAORÉ",
    role: "Directeur Général",
    badge: "Direction Générale",
    desc: "Pilotage stratégique de l'entreprise, vision long terme, coordination des pôles agroalimentaire et énergies renouvelables, relations institutionnelles.",
    bg: "bg-alia-blue-soft",
    isDG: true,
  },
  {
    photo: "/images/teams/directrice-marketing_mme_alida_tapsoba%3Akabore.png",
    title: "Mme",
    firstName: "Alida",
    lastName: "TAPSOBA-KABORÉ",
    role: "Responsable Marketing",
    badge: "Pôle Marketing",
    desc: "Développement commercial, stratégie de communication, relation clients et déploiement de la marque ALIA au Burkina Faso.",
    bg: "bg-emerald-50",
  },
  {
    photo: "/images/teams/responsable_energie-renouvelable_yoda_frederic.png",
    title: "M.",
    firstName: "Frédéric",
    lastName: "YODA",
    role: "Responsable Énergies Renouvelables",
    badge: "Pôle Énergies Renouvelables",
    desc: "Études et installations solaires on-grid et off-grid, suivi de projets énergétiques pour particuliers, entreprises et institutions.",
    bg: "bg-orange-50",
  },
];

export default function TeamGrid() {
  const [selected, setSelected] = useState<Member | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 items-center max-w-6xl mx-auto">
        {team.map((m, idx) => (
          <button
            key={m.lastName}
            type="button"
            onClick={() => setSelected(m)}
            aria-label={`Voir ${m.title} ${m.firstName} ${m.lastName} — ${m.role}`}
            className={`group text-left cursor-pointer ${
              m.isDG
                ? "order-first max-w-[16rem] sm:max-w-xs sm:col-span-2 sm:justify-self-center mx-auto lg:order-none lg:col-span-1 lg:max-w-none lg:mx-0 lg:justify-self-auto lg:scale-[1.12] lg:z-10 origin-center"
                : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={idx * 70}
          >
            <div
              className={`relative aspect-[4/5] rounded-xl overflow-hidden ${m.bg} mb-4 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-alia-orange/30 ${
                m.isDG ? "shadow-2xl ring-1 ring-alia-orange/40" : ""
              }`}
            >
              <div
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <span
                className={`absolute bottom-3.5 z-10 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full shadow-md ${
                  m.isDG
                    ? "left-1/2 -translate-x-1/2 bg-alia-orange text-white px-3.5 py-1 shadow-alia-orange/40 inline-flex items-center gap-1.5 whitespace-nowrap"
                    : "left-3.5 bg-white/95 backdrop-blur-sm text-alia-grey px-2.5 py-1"
                }`}
              >
                {m.isDG && (
                  <span aria-hidden="true" className="text-[8px] opacity-90">
                    ✦
                  </span>
                )}
                {m.badge}
                {m.isDG && (
                  <span aria-hidden="true" className="text-[8px] opacity-90">
                    ✦
                  </span>
                )}
              </span>
              <Image
                src={m.photo}
                alt={`${m.title} ${m.firstName} ${m.lastName} — ${m.role}`}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                priority={m.isDG}
              />
            </div>
            <h3 className="leading-none mb-1.5">
              <span className="block text-[9px] uppercase tracking-[0.28em] font-semibold text-gray-400 mb-1">
                {m.title}
              </span>
              <span className="block font-display font-medium text-[13px] text-alia-grey/70 mb-0.5">
                {m.firstName}
              </span>
              <span
                className={`block font-display font-extrabold ${
                  m.isDG ? "text-[1.15rem]" : "text-[1.05rem]"
                } text-alia-grey tracking-tight`}
              >
                {m.lastName}
              </span>
            </h3>
            <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-alia-orange mt-2.5 leading-[1.4] min-h-[2.5em]">
              {m.role}
            </p>
            <p className="text-[12.5px] text-gray-500 mt-1.5 group-hover:text-alia-orange transition-colors">
              Voir le profil →
            </p>
          </button>
        ))}
      </div>

      {selected && <MemberModal member={selected} onClose={close} />}
    </>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: Member;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-alia-dark/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-alia-orange hover:text-white text-alia-grey backdrop-blur-sm flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className={`relative w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:min-h-[28rem] ${member.bg} shrink-0`}
        >
          <Image
            src={member.photo}
            alt={`${member.title} ${member.firstName} ${member.lastName}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-alia-dark/70 to-transparent pointer-events-none lg:hidden"
            aria-hidden="true"
          />
        </div>

        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <span
            className={`inline-block text-[10px] font-bold tracking-[0.22em] uppercase rounded-full px-3 py-1.5 mb-5 ${
              member.isDG
                ? "bg-alia-orange text-white"
                : "bg-alia-orange/10 text-alia-orange"
            }`}
          >
            {member.isDG && <span className="mr-1">✦</span>}
            {member.badge}
            {member.isDG && <span className="ml-1">✦</span>}
          </span>

          <h2 id="modal-title" className="leading-none mb-5">
            <span className="block text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-2">
              {member.title}
            </span>
            <span className="block font-display font-medium text-base text-alia-grey/70 mb-1">
              {member.firstName}
            </span>
            <span className="block font-display font-extrabold text-3xl lg:text-4xl text-alia-grey tracking-tight">
              {member.lastName}
            </span>
          </h2>

          <div className="w-10 h-px bg-alia-orange mb-4" aria-hidden="true" />

          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-alia-orange mb-4">
            {member.role}
          </p>

          <p className="text-base text-gray-600 leading-relaxed mb-5">
            {member.desc}
          </p>

          {member.isDG && (
            <p className="signature text-2xl text-alia-orange mt-2 leading-snug">
              — La qualité, la vraie satisfaction.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
