import Image from "next/image";

const partners = [
  { src: "/images/partners/SKF.jpeg", alt: "SKF" },
  { src: "/images/partners/abb.png", alt: "ABB" },
  { src: "/images/partners/schneider.png", alt: "Schneider Electric" },
  { src: "/images/partners/YC.png", alt: "YC Diesel" },
  { src: "/images/partners/cS.png", alt: "C&S Electric" },
  { src: "/images/partners/victron.png", alt: "Victron Energy" },
  { src: "/images/partners/sorotec.png", alt: "Sorotec" },
  { src: "/images/partners/delixi.jpg", alt: "Delixi Electric" },
  { src: "/images/partners/felicitySolar.avif", alt: "Felicity Solar" },
];

export default function PartnersSection() {
  return (
    <section
      id="partenaires"
      className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden"
    >
      {/* Pattern globe halftone */}
      <Image
        src="/images/bg-pattern-1.png"
        alt=""
        width={1100}
        height={1100}
        aria-hidden="true"
        className="bg-pattern-crown absolute -top-8 left-1/2 -translate-x-1/2 w-[1100px] max-w-[95vw] opacity-70 pointer-events-none select-none"
      />

      {/* Halos */}
      <div
        className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-alia-orange/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-alia-blue/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        {/* Header compact */}
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
          <div className="pill-eyebrow text-alia-orange text-xs font-semibold tracking-widest uppercase mb-4" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-alia-orange pulse-dot" />
            Nos partenaires
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-alia-grey leading-[1.15] tracking-tight" data-aos="fade-up" data-aos-delay="100">
            Une <span className="text-alia-orange">expertise</span> renforcée
            par des{" "}
            <span className="text-alia-blue">partenaires de confiance</span>.
          </h2>
        </div>

        {/* Marquee horizontal infini */}
        <div className="marquee-mask py-2" data-aos="fade-up" data-aos-delay="200">
          <div className="marquee-track items-center gap-4 lg:gap-5">
            {/* Bloc 1 (original) */}
            {partners.map((p) => (
              <div key={p.alt} className="partner-logo-wrap">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={140}
                  height={80}
                  className="partner-logo"
                />
              </div>
            ))}
            {/* Bloc 2 (duplicat pour boucle infinie) */}
            {partners.map((p, i) => (
              <div
                key={`dup-${i}`}
                className="partner-logo-wrap"
                aria-hidden="true"
              >
                <Image
                  src={p.src}
                  alt=""
                  width={140}
                  height={80}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
