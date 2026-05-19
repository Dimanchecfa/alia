"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Clock3,
  Mail,
  Phone,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

// Facebook icon en inline SVG (Lucide l'a déprécié)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Nos Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/equipe", label: "Équipe" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ── Topbar slim ── */}
      <div className="bg-alia-dark text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between gap-y-2 py-1.5">
          <div className="flex items-center gap-2">
            <Clock3 className="w-4 h-4 text-alia-blue" />
            <span>
              <strong className="font-semibold">Horaires :</strong> Lun – Sam, 8h00 – 18h00
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:contact@alia-industrie-bf.com"
              className="hidden md:flex items-center gap-2 hover:text-alia-orange transition"
            >
              <Mail className="w-4 h-4" />
              <span>contact@alia-industrie-bf.com</span>
            </a>
            <a
              href="tel:+22670757713"
              className="flex items-center gap-2 hover:text-alia-orange transition"
            >
              <Phone className="w-4 h-4" />
              <span>+226 70 75 77 13</span>
            </a>
            <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-white/20">
              <a
                href="https://www.facebook.com/ALIA-Industrie-100071375318375/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-alia-blue transition"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://wa.me/22670757713"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-alia-orange transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center shrink-0 py-1"
          aria-label="Accueil ALIA Industrie"
        >
          <Image
            src="/images/logo-trim.png"
            alt="ALIA Industrie"
            width={220}
            height={150}
            className="h-20 lg:h-24 w-auto transition-transform duration-300 ease-out group-hover:scale-110"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Navigation principale"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold transition ${
                isActive(href)
                  ? "text-alia-orange"
                  : "text-alia-grey hover:text-alia-orange"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            href="/contact#devis"
            className="bg-alia-orange hover:bg-alia-orange-dark text-white text-sm font-semibold px-6 py-3 rounded-full transition shadow-md shadow-alia-orange/30"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden text-alia-grey p-2 -mr-2"
        >
          {mobileOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav
            className="container mx-auto px-4 py-4 flex flex-col"
            aria-label="Navigation mobile"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-2 font-medium border-b border-gray-50 ${
                  isActive(href)
                    ? "text-alia-orange font-semibold"
                    : "text-alia-grey"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact#devis"
              onClick={() => setMobileOpen(false)}
              className="bg-alia-orange hover:bg-alia-orange-dark text-white text-center font-semibold px-5 py-3 rounded-full mt-4 transition"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
