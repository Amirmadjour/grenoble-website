"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function IntroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="story-section relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--color-deep-blue) 0%, var(--color-midnight) 100%)",
      }}
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--color-golden) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-midnight)] to-transparent z-10 pointer-events-none" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--color-midnight)] to-transparent z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        {/* Decorative top element */}
        <div
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
        >
          <div className="w-20 h-px bg-[var(--color-golden)] opacity-50" />
          <div className="w-3 h-3 border border-[var(--color-golden)] rotate-45 opacity-50" />
          <div className="w-20 h-px bg-[var(--color-golden)] opacity-50" />
        </div>

        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-10 leading-tight transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
          style={{
            fontFamily: "var(--font-playfair)",
            transitionDelay: "0.2s",
          }}
        >
          A City That Takes{" "}
          <span className="italic text-[var(--color-golden)]">
            Your Breath Away
          </span>
        </h2>

        <p
          className={`text-lg md:text-xl leading-relaxed text-[var(--color-soft-gray)] max-w-3xl mx-auto transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            transitionDelay: "0.4s",
            lineHeight: "1.9",
          }}
        >
          Grenoble is not just a city — it is a feeling. From the moment you
          arrive, the towering Alps envelop you in an embrace that whispers
          stories of centuries past, of adventurers who dared to dream, and of a
          landscape so stunning it defies description. Let us take you on a
          journey through its most captivating wonders.
        </p>

        {/* Decorative bottom element */}
        <div
          className={`flex items-center justify-center gap-4 mt-12 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="w-20 h-px bg-[var(--color-golden)] opacity-50" />
          <div className="w-3 h-3 border border-[var(--color-golden)] rotate-45 opacity-50" />
          <div className="w-20 h-px bg-[var(--color-golden)] opacity-50" />
        </div>
      </div>
    </section>
  );
}
