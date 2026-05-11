"use client";

import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { StatCounter } from "../components/StatCounter";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[72px]"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(13,10,9,0.4)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32 w-full">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          {/* Location Tag */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] font-normal tracking-[0.1em] uppercase text-primary">
             Nairobi, Kenya
            </span>
            <span className="w-12 h-px bg-border-light" />
            <span className="font-mono text-[11px] font-normal tracking-[0.1em] uppercase text-text-tertiary">
              Est. 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[40px] md:text-[52px] lg:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-text-primary max-w-[900px]">
            Defending digital infrastructure through precision and vigilance.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg text-text-secondary leading-relaxed mt-6 max-w-[600px]">
            Security Operations Center Analyst specializing in threat detection,
            incident response, and forensic analysis. I turn security data into
            actionable intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <PrimaryButton href="#contact">Get in Touch</PrimaryButton>
            <SecondaryButton href="#work">View My Work</SecondaryButton>
          </div>

          {/* Subtle note */}
          <p className="font-body text-sm text-text-tertiary mt-4 max-w-[400px]">
            Available for full-time roles and contract security engagements.
          </p>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-16 md:mt-24 border-t border-border pt-8 transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatCounter end={50} suffix="+" label="Incidents Handled" />
            <StatCounter end={12} suffix="+" label="Threat Campaigns" />
            <StatCounter end={7} suffix="" label="Certifications" />
            <StatCounter end={3} suffix="+" label="Years Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
