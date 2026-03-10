"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/hero-image.webp"
          alt="Panoramic view of Grenoble nestled among the Alps"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,18,32,0.4)] via-[rgba(12,18,32,0.3)] to-[rgba(12,18,32,0.95)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 z-10 flex items-center gap-3 opacity-80">
        <div className="w-2 h-2 rounded-full bg-[var(--color-golden)]" />
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Est. 43 BC
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-[0.25em] uppercase text-[var(--color-soft-gray)]"
          style={{
            animation: loaded ? "pulse 2s ease-in-out infinite" : "none",
          }}
        >
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-golden)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className={`text-sm md:text-base tracking-[0.35em] uppercase text-[var(--color-golden)] mb-6 transition-all duration-1000 ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
          style={{ fontFamily: "var(--font-inter)", transitionDelay: "0.3s" }}
        >
          Welcome to the Capital of the Alps
        </p>

        <h1
          className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8 transition-all duration-1000 ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
            }`}
          style={{
            fontFamily: "var(--font-playfair)",
            transitionDelay: "0.6s",
          }}
        >
          <span className="block">Grenoble</span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl font-light mt-4 italic text-[var(--color-soft-gray)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where Mountains Meet the Sky
          </span>
        </h1>

        <p
          className={`text-base md:text-lg max-w-2xl mx-auto text-[var(--color-soft-gray)] leading-relaxed transition-all duration-1000 ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
          style={{
            fontFamily: "var(--font-inter)",
            transitionDelay: "0.9s",
          }}
        >
          Nestled among three majestic mountain ranges, Grenoble is a city where
          nature&apos;s grandeur and urban charm coexist in perfect harmony.
        </p>
      </div>
    </section>
  );
}
