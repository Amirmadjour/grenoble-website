"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#mountains", label: "Mountains" },
  { href: "#bastille", label: "Bastille" },
  { href: "#cycling", label: "Cycling" },
  { href: "#avenue", label: "Avenue" },
  { href: "#intro", label: "Intro" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Find active section
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(navItems[i].href.replace("#", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[rgba(12,18,32,0.85)] backdrop-blur-xl shadow-xl py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full border-2 border-[var(--color-golden)] flex items-center justify-center group-hover:bg-[var(--color-golden)] transition-all duration-300">
            <span
              className="text-sm font-bold text-[var(--color-golden)] group-hover:text-[var(--color-midnight)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              G
            </span>
          </div>
          <span
            className="text-lg font-semibold hidden sm:inline tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Grenoble
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm tracking-widest uppercase transition-all duration-300 ${isActive
                    ? "text-[var(--color-golden)]"
                    : "text-[var(--color-soft-gray)] hover:text-white"
                  }`}
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[var(--color-golden)] transition-all duration-300 ${isActive ? "w-full" : "w-0"
                    }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-6 bg-[rgba(12,18,32,0.95)] backdrop-blur-xl border-t border-white/10 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${isActive
                    ? "text-[var(--color-golden)]"
                    : "text-[var(--color-soft-gray)] hover:text-white"
                  }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
