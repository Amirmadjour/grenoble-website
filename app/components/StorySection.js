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
  reverse = false,
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <section
      id={id}
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Subtle section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[var(--color-golden)] to-transparent opacity-30" />

      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12 lg:gap-20`}
      >
        {/* Image Side */}
        <div
          className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${isVisible
              ? "opacity-100 translate-x-0"
              : reverse
                ? "opacity-0 translate-x-16"
                : "opacity-0 -translate-x-16"
            }`}
        >
          <div className="relative group">
            {/* Decorative frame */}
            <div
              className={`absolute -inset-3 border border-[var(--color-golden)] opacity-20 rounded-2xl transition-all duration-700 group-hover:opacity-40 group-hover:-inset-4`}
              style={{ transitionDelay: "0.2s" }}
            />

            {/* Image container */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Image overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,18,32,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Chapter number badge */}
            <div
              className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-[var(--color-golden)] flex items-center justify-center shadow-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="text-[var(--color-midnight)] font-bold text-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div
          className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${isVisible
              ? "opacity-100 translate-x-0"
              : reverse
                ? "opacity-0 -translate-x-16"
                : "opacity-0 translate-x-16"
            }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {/* Subtitle / Category */}
          <p
            className={`text-xs tracking-[0.3em] uppercase text-[var(--color-golden)] mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{
              fontFamily: "var(--font-inter)",
              transitionDelay: "0.5s",
            }}
          >
            {subtitle}
          </p>

          {/* Title */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }`}
            style={{
              fontFamily: "var(--font-playfair)",
              transitionDelay: "0.6s",
            }}
          >
            {title}
          </h2>

          {/* Decorative line */}
          <div
            className={`h-px bg-gradient-to-r from-[var(--color-golden)] to-transparent mb-8 transition-all duration-1000 ${isVisible ? "w-20 opacity-100" : "w-0 opacity-0"
              }`}
            style={{ transitionDelay: "0.7s" }}
          />

          {/* Description */}
          <p
            className={`text-base md:text-lg leading-relaxed text-[var(--color-soft-gray)] transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }`}
            style={{
              fontFamily: "var(--font-inter)",
              transitionDelay: "0.8s",
              fontWeight: 300,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
