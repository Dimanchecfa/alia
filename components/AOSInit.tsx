"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true, // animation joue une seule fois
      offset: 80, // déclenche 80px avant que l'élément entre dans le viewport
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    // Refresh AOS quand le DOM change (navigation Next.js par exemple)
    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
