"use client";

import { ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socialLinks: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/james-kamau-24657b377/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Github",
    href: "github.com/kamaujames1230-lab",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    label: "TryHackMe",
    href: "https://tryhackme.com/p/Peterejames",
    icon: <ExternalLink size={14} />,
  },
  {
    label: "Hack The Box",
    href: "#",
    icon: <ExternalLink size={14} />,
  },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0807] border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <span className="font-mono text-base font-medium tracking-[0.1em] text-text-primary block mb-3">
              SEC.OPS
            </span>
            <p className="font-body text-sm text-text-secondary mb-2">
              Security Operations Analyst
            </p>
            <p className="font-body text-sm text-text-tertiary">
              Nairobi, Kenya
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        {/* Social */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:kamaujames1230@gmail.com"
              className="font-body text-sm text-text-secondary hover:text-primary transition-colors duration-200 block mb-2"
            >
              kamaujames1230@gmail.com
            </a>
            <p className="font-body text-xs text-text-tertiary mt-4">
              Currently accepting new opportunities.
              <br />
              24-48hr response time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} SEC.OPS. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-text-tertiary tracking-wider uppercase">
            Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
