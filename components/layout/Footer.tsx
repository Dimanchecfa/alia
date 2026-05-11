import Link from "next/link";
import Image from "next/image";
import FooterWordmark from "./FooterWordmark";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-alia-dark text-gray-400 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-20 pb-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Bloc 1 — Identité ALIA */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <Image
                src="/images/logo-icon.png"
                alt="ALIA Industrie"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <span className="leading-tight">
                <span className="block font-display font-extrabold text-xl text-white tracking-wide">
                  ALIA
                </span>
                <span className="block font-display font-bold text-[10.5px] tracking-[0.28em] text-alia-orange">
                  INDUSTRIE
                </span>
              </span>
            </Link>
            <p className="text-alia-orange font-semibold text-sm tracking-wide mb-5">
              La Qualité, La Vraie Satisfaction.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Industriel burkinabè depuis 2009, ALIA accompagne entreprises et
              particuliers en agroalimentaire, énergies renouvelables et
              distribution d&apos;équipements.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-alia-orange" />
              <span className="text-gray-300">Burkina Faso</span>
              <span className="text-gray-700">·</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-alia-blue" />
              <span className="text-gray-300">Côte d&apos;Ivoire</span>
            </div>
          </div>

          {/* Bloc 2 — Pôles + Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-1">
              Pôles principaux
            </h4>
            <span className="block w-8 h-[2px] bg-alia-orange mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#agroalimentaire"
                  className="hover:text-alia-orange transition-colors"
                >
                  Agroalimentaire
                </Link>
              </li>
              <li>
                <Link
                  href="/services#energie"
                  className="hover:text-alia-orange transition-colors"
                >
                  Énergie solaire
                </Link>
              </li>
            </ul>
            <h4 className="text-white font-bold text-base mt-7 mb-1">
              Services
            </h4>
            <span className="block w-8 h-[2px] bg-alia-orange mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-alia-orange transition-colors"
                >
                  Distribution équipements
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-alia-orange transition-colors"
                >
                  Études &amp; ingénierie
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-alia-orange transition-colors"
                >
                  Maintenance &amp; SAV
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc 3 — Entreprise */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-1">Entreprise</h4>
            <span className="block w-8 h-[2px] bg-alia-orange mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-alia-orange transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/equipe"
                  className="hover:text-alia-orange transition-colors"
                >
                  Le promoteur
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="hover:text-alia-orange transition-colors"
                >
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue"
                  className="hover:text-alia-orange transition-colors"
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-alia-orange transition-colors"
                >
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc 4 — Contact */}
          <div className="col-span-2 lg:col-span-4">
            <h4 className="text-white font-bold text-base mb-1">Contact</h4>
            <span className="block w-8 h-[2px] bg-alia-orange mb-4" />
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 text-[10.5px] uppercase tracking-[0.18em] mb-0.5">
                  Adresse
                </p>
                <a
                  href="https://maps.app.goo.gl/ZbmbrQuTgvzNNEvs8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-alia-orange transition-colors"
                >
                  Arrondissement 4, Secteur 19, Zone industrielle de Kossodo,
                  Ouagadougou
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-[10.5px] uppercase tracking-[0.18em] mb-0.5">
                  Téléphone
                </p>
                <a
                  href="tel:+22670757713"
                  className="text-gray-300 hover:text-alia-orange transition-colors"
                >
                  +226 70 75 77 13
                </a>
                <span className="text-gray-600 mx-1">/</span>
                <a
                  href="tel:+22672727819"
                  className="text-gray-300 hover:text-alia-orange transition-colors"
                >
                  72 72 78 19
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-[10.5px] uppercase tracking-[0.18em] mb-0.5">
                  Email
                </p>
                <a
                  href="mailto:contact@alia-industrie-bf.com"
                  className="text-gray-300 hover:text-alia-orange transition-colors break-all"
                >
                  contact@alia-industrie-bf.com
                </a>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-gray-500 text-[10.5px] uppercase tracking-[0.18em] mb-2.5">
                Suivez-nous
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/ALIA-Industrie-100071375318375/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-alia-orange text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://wa.me/22670757713"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-alia-orange text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="mailto:contact@alia-industrie-bf.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-alia-orange text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark animé */}
        <FooterWordmark />
      </div>

      {/* Bottom strip — copyright */}
      <div className="bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} ALIA Industrie. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-700">·</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
