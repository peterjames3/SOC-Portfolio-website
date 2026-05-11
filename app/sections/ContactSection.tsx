"use client";


import { SectionLabel } from "../components/SectionLabel";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/app/components/Form/contact-form"
export function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <SectionLabel label="CONTACT" />
            <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4">
              Get in Touch
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mt-3 max-w-[600px]">
              Ready to strengthen your security posture or discuss a role? I
              respond to all inquiries within 24-48 hours. Let&apos;s build something
              secure together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[rgba(232,104,26,0.1)] border border-[rgba(232,104,26,0.2)] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-primary mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:analyst@secops.dev"
                    className="font-body text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    kamaujames1230@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[rgba(232,104,26,0.1)] border border-[rgba(232,104,26,0.2)] flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-primary mb-1">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/james-kamau-24657b377/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    https://www.linkedin.com/in/james-kamau-24657b377/
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[rgba(232,104,26,0.1)] border border-[rgba(232,104,26,0.2)] flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-primary mb-1">
                    Availability
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    Currently accepting new opportunities
                  </p>
                  <p className="font-body text-xs text-text-tertiary mt-1">
                    Response time: 24-48 hours (EAT)
                  </p>
                </div>
              </div>

              {/* Status note */}
              <div className="mt-8 p-4 border border-border rounded bg-[rgba(26,20,18,0.4)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-success">
                    Available for Hire
                  </span>
                </div>
                <p className="font-body text-sm text-text-secondary">
                  Open to SOC Analyst roles, security consulting engagements,
                  and freelance incident response contracts.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
