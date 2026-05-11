"use client";

import { useEffect, useRef } from "react";

const LETTERS = ["A", "L", "I", "A", " ", "I", "N", "D", "U", "S", "T", "R", "I", "E"];

export default function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="wordmark hidden lg:block mt-14 pointer-events-none select-none"
    >
      <p className="wordmark-text font-display font-black text-center leading-none whitespace-nowrap">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="wordmark-letter"
            style={{ ["--i" as string]: i }}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}
