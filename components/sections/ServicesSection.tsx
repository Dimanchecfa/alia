import Link from "next/link";
import {
  ClipboardList,
  Package,
  Wrench,
  RefreshCw,
  ArrowUpRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Service {
  num: "01" | "02" | "03" | "04";
  title: string;
  description: string;
  icon: LucideIcon;
  color: "orange" | "blue";
  delay: number;
}

const services: Service[] = [
  {
    num: "01",
    title: "Étude & conseil",
    description:
      "Analyse de besoins, étude de faisabilité et dimensionnement technique sur-mesure.",
    icon: ClipboardList,
    color: "orange",
    delay: 80,
  },
  {
    num: "02",
    title: "Fourniture & sourcing",
    description:
      "Sélection d'équipements certifiés (SKF, ABB, Schneider) et logistique terrain.",
    icon: Package,
    color: "blue",
    delay: 160,
  },
  {
    num: "03",
    title: "Installation & mise en service",
    description:
      "Déploiement clé en main par nos techniciens, mise en route et formation des équipes.",
    icon: Wrench,
    color: "orange",
    delay: 240,
  },
  {
    num: "04",
    title: "Maintenance & SAV",
    description:
      "Entretien préventif, dépannage rapide, pièces de rechange disponibles au Burkina.",
    icon: RefreshCw,
    color: "blue",
    delay: 320,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden"
    >
      {/* Décor */}
      <div
        className="dots-accent absolute top-12 right-8 lg:top-16 lg:right-16 w-36 h-20 hidden md:block pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="dots-accent absolute bottom-12 left-8 lg:bottom-16 lg:left-16 w-36 h-20 hidden md:block pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-1/4 w-72 h-72 rounded-full bg-alia-blue/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-alia-orange/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-14">
          <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-widest uppercase mb-5" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-alia-orange pulse-dot" />
            Notre processus
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.1] mb-5" data-aos="fade-up" data-aos-delay="100">
            De l&apos;idée au résultat.{" "}
            <span className="text-alia-orange">Notre chaîne</span>{" "}
            <span className="text-alia-blue">d&apos;expertise.</span>
          </h2>
          <p className="text-base text-alia-grey/70 leading-relaxed max-w-xl mx-auto">
            4 prestations transversales aux pôles Agro et Énergies — de
            l&apos;étude à la maintenance.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((s) => {
            const Icon = s.icon;
            const isOrange = s.color === "orange";
            return (
              <article
                key={s.num}
                className={`service-edit group relative bg-white border border-gray-200/80 p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer rounded-md ${
                  isOrange
                    ? "hover:border-alia-orange hover:shadow-2xl hover:shadow-alia-orange/10"
                    : "hover:border-alia-blue hover:shadow-2xl hover:shadow-alia-blue/10"
                }`}
                data-aos="fade-up"
                data-aos-delay={s.delay}
              >
                <div className="flex items-start gap-6 lg:gap-7">
                  <span
                    className={`font-display font-black text-[3.25rem] lg:text-[4rem] leading-none shrink-0 transition-transform duration-300 group-hover:-rotate-3 ${
                      isOrange ? "text-alia-orange" : "text-alia-blue"
                    }`}
                  >
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0 pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className={`w-4 h-4 text-alia-grey/40 transition-colors ${
                          isOrange
                            ? "group-hover:text-alia-orange"
                            : "group-hover:text-alia-blue"
                        }`}
                      />
                      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-alia-grey/45">
                        Étape
                      </p>
                    </div>
                    <h3 className="font-display font-bold text-2xl lg:text-[1.7rem] text-alia-grey mb-2.5 leading-[1.15] tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-sm text-alia-grey/65 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className={`absolute top-6 right-6 w-5 h-5 text-alia-grey/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    isOrange
                      ? "group-hover:text-alia-orange"
                      : "group-hover:text-alia-blue"
                  }`}
                />
              </article>
            );
          })}
        </div>

        {/* CTA compact */}
        <div className="text-center mt-10 lg:mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-alia-grey hover:bg-alia-dark text-white font-semibold px-7 py-3.5 rounded-full transition shadow-lg shadow-alia-dark/20 text-sm"
          >
            Discuter de votre projet
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
