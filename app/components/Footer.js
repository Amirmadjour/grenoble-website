"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <footer
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-golden)] to-transparent opacity-30" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-5">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, var(--color-golden) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Decorative element */}
        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
        >
          <div className="w-12 h-px bg-[var(--color-golden)] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-golden)] opacity-40" />
          <div className="w-12 h-px bg-[var(--color-golden)] opacity-40" />
        </div>

        <blockquote
          className={`text-2xl sm:text-3xl md:text-4xl italic leading-snug mb-8 transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
          style={{
            fontFamily: "var(--font-playfair)",
            transitionDelay: "0.2s",
          }}
        >
          &ldquo;At the end of every street, a mountain.&rdquo;
        </blockquote>

        <p
          className={`text-sm tracking-widest uppercase text-[var(--color-golden)] mb-12 transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
          style={{
            fontFamily: "var(--font-inter)",
            transitionDelay: "0.4s",
          }}
        >
          — Stendhal, born in Grenoble
        </p>

        <p
          className={`text-sm text-[var(--color-soft-gray)] opacity-60 transition-all duration-1000 ${isVisible ? "opacity-60" : "opacity-0"
            }`}
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            transitionDelay: "0.6s",
          }}
        >
          Us in Grenoble — L3 UGA — 2026
        </p>
      </div>
    </footer>
  );
}
