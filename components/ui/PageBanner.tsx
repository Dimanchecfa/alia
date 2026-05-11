import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

interface PageBannerProps {
  number: string; // ex: "01"
  title: string; // ex: "À propos"
  highlight?: string; // partie en orange du titre, ex: "À propos"
  subtitle: React.ReactNode;
  breadcrumbLabel: string; // ex: "À propos"
}

export default function PageBanner({
  number,
  title,
  highlight,
  subtitle,
  breadcrumbLabel,
}: PageBannerProps) {
  // Si highlight est fourni, on remplace cette partie du titre par <span> orange
  const renderTitle = () => {
    if (!highlight) return <>{title}.</>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-alia-orange">{highlight}</span>
        {parts[1] || ""}.
      </>
    );
  };

  return (
    <section className="relative bg-alia-dark text-white py-12 lg:py-16 overflow-hidden">
      <Image
        src="/images/bg-pattern-1.png"
        alt=""
        width={700}
        height={700}
        aria-hidden="true"
        className="absolute -bottom-32 -left-40 w-[700px] opacity-[0.08] pointer-events-none select-none rotate-12"
        style={{ filter: "invert(1)" }}
      />

      {/* Halos */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-alia-orange/[0.10] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-1/3 w-72 h-72 rounded-full bg-alia-blue/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Pattern crosshair "+" */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 90'%3E%3Cpath d='M45 41v8M41 45h8' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: "90px 90px",
        }}
        aria-hidden="true"
      />

      {/* Chiffre stylisé /XX */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-4 hidden md:block">
        <span className="page-number block text-[7rem] sm:text-[10rem] lg:text-[14rem] xl:text-[16rem]">
          <span className="slash">/</span>
          {number}
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold mb-6"
          aria-label="Fil d'Ariane"
          data-aos="fade-up"
        >
          <Link
            href="/"
            className="hover:text-alia-orange transition-colors flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            Accueil
          </Link>
          <ChevronRight className="w-3 h-3 text-alia-orange" />
          <span className="text-white">{breadcrumbLabel}</span>
        </nav>

        {/* H1 */}
        <h1
          className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] tracking-tight mb-4 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {renderTitle()}
        </h1>

        {/* Underline orange */}
        <div
          className="w-10 h-[3px] bg-alia-orange mb-4"
          data-aos="fade-up"
          data-aos-delay="150"
        />

        {/* Subtitle */}
        <p
          className="text-sm lg:text-base text-gray-300 max-w-2xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle}
        </p>
      </div>

      {/* Indicator audio bars en bas */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-1.5 pointer-events-none">
        <span className="block w-1 h-3 bg-alia-orange/40" />
        <span className="block w-1 h-5 bg-alia-orange/70" />
        <span className="block w-1 h-7 bg-alia-orange" />
        <span className="block w-1 h-5 bg-alia-orange/70" />
        <span className="block w-1 h-3 bg-alia-orange/40" />
      </div>
    </section>
  );
}
