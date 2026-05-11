import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-24 bg-gray-50 overflow-hidden"
    >
      {/* Pattern dots */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0A0F1A 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* Halftone globe */}
      <Image
        src="/images/bg-pattern-1.png"
        alt=""
        width={600}
        height={600}
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[600px] opacity-[0.10] pointer-events-none select-none rotate-12"
      />

      {/* Halos */}
      <div
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-alia-orange/[0.10] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-alia-blue/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative max-w-[80rem]">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* COL GAUCHE : Form */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-alia-grey" />
              <span className="text-alia-grey text-xs font-semibold tracking-[0.25em] uppercase">
                Nous contacter
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-alia-grey leading-[1.05] tracking-tight mb-4">
              Parlons de votre{" "}
              <span className="signature text-alia-orange text-[1.4em] font-normal tracking-normal align-baseline">
                projet.
              </span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
              Devis, partenariat, renseignements techniques ou simple question
              — notre équipe vous répond sous 48&nbsp;heures ouvrées.
            </p>

            <form
              action="mailto:contact@alia-industrie-bf.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-alia-grey mb-2"
                  >
                    Nom complet <span className="text-alia-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Ex. Jean Ouédraogo"
                    className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:border-alia-orange focus:ring-2 focus:ring-alia-orange/20 text-sm text-alia-grey placeholder:text-gray-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-alia-grey mb-2"
                  >
                    Email <span className="text-alia-orange">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="exemple@entreprise.com"
                    className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:border-alia-orange focus:ring-2 focus:ring-alia-orange/20 text-sm text-alia-grey placeholder:text-gray-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-semibold text-alia-grey mb-2"
                >
                  Sujet <span className="text-alia-orange">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="Demande de devis, partenariat, renseignements…"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:border-alia-orange focus:ring-2 focus:ring-alia-orange/20 text-sm text-alia-grey placeholder:text-gray-400 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-alia-grey mb-2"
                >
                  Votre message <span className="text-alia-orange">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre besoin, votre projet, votre question…"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:border-alia-orange focus:ring-2 focus:ring-alia-orange/20 text-sm text-alia-grey placeholder:text-gray-400 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 bg-alia-orange hover:bg-alia-orange-dark text-white font-bold text-sm tracking-wide px-7 py-3.5 rounded-md shadow-lg shadow-alia-orange/25 transition-all"
                >
                  Envoyer le message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

          {/* COL DROITE : Card infos asymétrique */}
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="150">
            <div
              className="relative bg-alia-dark text-white p-8 lg:p-10 h-full overflow-hidden"
              style={{ borderRadius: "8px 90px 8px 90px" }}
            >
              {/* Pattern globe halftone */}
              <Image
                src="/images/bg-pattern-1.png"
                alt=""
                width={320}
                height={320}
                aria-hidden="true"
                className="absolute -bottom-20 -right-16 w-80 opacity-[0.06] pointer-events-none select-none rotate-12"
                style={{ filter: "invert(1)" }}
              />

              {/* Halo orange */}
              <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-alia-orange/15 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative space-y-7">
                {/* Adresse */}
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Adresse
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/ZbmbrQuTgvzNNEvs8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-alia-orange transition-colors leading-relaxed block"
                  >
                    Secteur 19, Zone industrielle de Kossodo
                    <br />
                    Ouagadougou, Burkina Faso
                  </a>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Contact
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Téléphone&nbsp;:{" "}
                    <a
                      href="tel:+22670757713"
                      className="hover:text-alia-orange transition-colors"
                    >
                      +226 70 75 77 13
                    </a>
                    <br />
                    <span className="ml-[6.5em]">
                      <a
                        href="tel:+22672727819"
                        className="hover:text-alia-orange transition-colors"
                      >
                        +226 72 72 78 19
                      </a>
                    </span>
                    <br />
                    Email&nbsp;:{" "}
                    <a
                      href="mailto:contact@alia-industrie-bf.com"
                      className="hover:text-alia-orange transition-colors break-all"
                    >
                      contact@alia-industrie-bf.com
                    </a>
                  </p>
                </div>

                {/* Horaires */}
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Horaires
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Lundi – Vendredi&nbsp;: 08:00 – 18:00
                    <br />
                    Samedi&nbsp;: 08:00 – 13:00
                    <br />
                    <span className="text-gray-500">
                      Dimanche&nbsp;: fermé
                    </span>
                  </p>
                </div>

                {/* Suivez-nous */}
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    Suivez-nous
                  </h3>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://www.facebook.com/ALIA-Industrie-100071375318375/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full bg-alia-orange hover:bg-white text-alia-dark flex items-center justify-center transition-colors"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://wa.me/22670757713"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="w-10 h-10 rounded-full bg-alia-orange hover:bg-white text-alia-dark flex items-center justify-center transition-colors"
                    >
                      <WhatsAppIcon />
                    </a>
                    <a
                      href="mailto:contact@alia-industrie-bf.com"
                      aria-label="Email"
                      className="w-10 h-10 rounded-full bg-alia-orange hover:bg-white text-alia-dark flex items-center justify-center transition-colors"
                    >
                      <MailIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
