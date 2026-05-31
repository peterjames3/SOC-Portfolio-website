"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
];

export function Header() {
  const scrolled = useScrollProgress(50);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(13,10,9,0.85)] backdrop-blur-xl border-b border-[rgba(42,32,28,0.5)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            {/* Avatar ring */}
            <div className="w-[38px] h-[38px] rounded-full p-[2px] bg-gradient-to-br from-primary via-[#ff9a5c] to-primary flex-shrink-0">
              <div className="w-full h-full rounded-full bg-background overflow-hidden flex items-center justify-center">
                {/* Swap src to your actual photo e.g. /images/james.jpg */}
                <Image
                  src="/passport 2.png"
                  alt="James Kamau"
                  width={400}
                  height={7600}
                  quality={80}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML =
                      '<span class="font-mono text-[13px] font-semibold text-primary">JK</span>';
                  }}
                />
              </div>
            </div>
            {/* Name + title */}
            <div className="flex flex-col gap-[3px]">
              <span className="font-body text-[18px] font-semibold text-text-primary leading-none tracking-[0.01em] group-hover:text-primary transition-colors duration-200">
                James Kamau
              </span>
              <span className="font-mono text-[14px] text-text-tertiary leading-none tracking-[0.04em]">
                SOC Analyst
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-body text-[13px] font-medium uppercase tracking-[0.06em] text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden md:inline-flex items-center justify-center bg-primary text-background font-body text-[13px] font-semibold uppercase tracking-[0.06em] px-6 py-2.5 rounded-sm transition-all duration-200 hover:bg-primary-hover hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(232,104,26,0.3)]"
            >
              Contact
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex md:hidden text-text-primary p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[72px] px-6">
          <span className="font-mono text-base font-medium tracking-[0.1em] text-text-primary">
            SEC.OPS
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-text-primary p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-body text-2xl font-medium text-text-primary hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center justify-center bg-primary text-background font-body text-sm font-semibold uppercase tracking-[0.06em] px-6 py-3 rounded-sm mt-4 w-fit"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
