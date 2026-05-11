import Image from "next/image";
import { ArrowRight } from "lucide-react";

// YouTube icon inline (Lucide l'a déprécié)
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const bullets = [
  "Production 100 % locale",
  "Maïs burkinabè sélectionné",
  "Conditionnement industriel",
  "Distribution nationale",
];

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative py-16 lg:py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* COL GAUCHE : Éditorial */}
          <div data-aos="fade-right">
            {/* Eyebrow tiret */}
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-alia-orange" />
              <span className="text-alia-orange text-xs font-semibold tracking-[0.25em] uppercase">
                Notre production
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.7rem] text-alia-grey leading-[1.08] tracking-tight mb-6">
              Au cœur de notre minoterie&nbsp;: la{" "}
              <span className="text-alia-orange">farine de maïs</span> ALIA.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-7 max-w-xl">
              Découvrez en images notre savoir-faire agroalimentaire — de la
              sélection du maïs local à la mise en sachet, dans nos
              installations de Kossodo. Une farine{" "}
              <strong className="text-alia-grey font-semibold">
                100&nbsp;% burkinabè
              </strong>
              , distribuée à travers le pays.{" "}
              <a
                href="https://www.youtube.com/watch?v=xYnGCL7g3_c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-alia-orange font-semibold underline underline-offset-4 decoration-alia-orange/40 hover:decoration-alia-orange transition-colors ml-1"
              >
                Voir la vidéo
              </a>
            </p>

            {/* Bullets */}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-gray-700"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full bg-alia-orange flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Bottom signature + tel */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div>
                <p className="font-display font-bold text-alia-grey text-base leading-tight">
                  Eulogue&nbsp;TAPSOBA
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Promoteur, ALIA Industrie
                </p>
              </div>
              <div>
                <a
                  href="tel:+22670757713"
                  className="font-display font-bold text-alia-grey hover:text-alia-orange text-base leading-tight transition-colors"
                >
                  +226 70 75 77 13
                </a>
                <p className="text-xs text-gray-500 mt-0.5">Pour toute question</p>
              </div>
            </div>
          </div>

          {/* COL DROITE : Image avec bouton play overlay */}
          <div data-aos="fade-left" data-aos-delay="150">
            <a
              href="https://www.youtube.com/watch?v=xYnGCL7g3_c"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lire la vidéo de la farine ALIA sur YouTube"
              className="group relative block aspect-[5/4] rounded-lg overflow-hidden shadow-2xl shadow-alia-dark/20"
            >
              <Image
                src="/images/realisations/realisation-agro-2.jpg"
                alt="Farine de maïs ALIA Industrie produite à Kossodo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              />

              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-alia-dark/0 group-hover:bg-alia-dark/20 transition-colors duration-500" />

              {/* Bouton "Lire la vidéo" */}
              <div className="absolute top-0 right-0 flex items-center gap-3 bg-alia-orange text-white pl-4 pr-6 py-3.5 rounded-bl-2xl shadow-lg transition-transform group-hover:scale-105">
                <span className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3.5 h-3.5 ml-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="font-display font-bold text-sm">
                  Lire la vidéo
                </span>
              </div>

              {/* Lien YouTube subtle bottom-right */}
              <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-alia-grey px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                <YoutubeIcon className="w-3.5 h-3.5 text-red-600" />
                YouTube
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
