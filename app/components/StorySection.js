"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function StorySection({
  id,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  index = 0,
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  // Alternate text position: left on even, right on odd
  const isEven = index % 2 === 0;

  return (
    <section
      id={id}
      ref={ref}
      className="story-section relative w-full h-screen overflow-hidden flex items-center"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover transition-transform duration-[2000ms] ease-out ${isVisible ? "scale-100" : "scale-110"
            }`}
          sizes="100vw"
          quality={90}
        />

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,18,32,0.3)] via-[rgba(12,18,32,0.15)] to-[rgba(12,18,32,0.7)]" />

        {/* Side gradient for text area */}
        {isEven ? (
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,18,32,0.85)] via-[rgba(12,18,32,0.4)] to-transparent" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-l from-[rgba(12,18,32,0.85)] via-[rgba(12,18,32,0.4)] to-transparent" />
        )}
      </div>

      {/* Content overlay */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex ${isEven ? "justify-start" : "justify-end"
          }`}
      >
        <div className="max-w-xl">
          {/* Chapter number */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span
              className="text-6xl md:text-7xl font-bold text-[var(--color-golden)] opacity-30"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-golden)] to-transparent opacity-40" />
          </div>

          {/* Subtitle */}
          <p
            className={`text-xs md:text-sm tracking-[0.35em] uppercase text-[var(--color-golden)] mb-4 transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }`}
            style={{
              fontFamily: "var(--font-inter)",
              transitionDelay: "0.4s",
            }}
          >
            {subtitle}
          </p>

          {/* Title */}
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.05] transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
            style={{
              fontFamily: "var(--font-playfair)",
              transitionDelay: "0.6s",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </h2>

          {/* Decorative line */}
          <div
            className={`h-[2px] bg-gradient-to-r from-[var(--color-golden)] to-transparent mb-8 transition-all duration-1200 ${isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            style={{ transitionDelay: "0.7s" }}
          />

          {/* Description */}
          <p
            className={`text-sm md:text-base leading-relaxed transition-all duration-1000 ${isVisible
                ? "opacity-90 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              transitionDelay: "0.8s",
              textShadow: "0 1px 10px rgba(0,0,0,0.3)",
              lineHeight: "1.8",
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-midnight)] to-transparent z-10 pointer-events-none" />

      {/* Top gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--color-midnight)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
