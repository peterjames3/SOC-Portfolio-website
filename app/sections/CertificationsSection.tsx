"use client";

import { SectionLabel } from "../components/SectionLabel";
import { CertificationCard } from "../components/CertificationCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const certifications = [
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Mar 2023",
    status: "Completed" as const,
    credentialId: "COMP-SecPlus-2023",
    link: "#",
  },
  {
    title: "Certified SOC Analyst (CSA)",
    issuer: "EC-Council",
    date: "Jul 2023",
    status: "Completed" as const,
    credentialId: "ECC-CSA-2023-7842",
    link: "#",
  },
  {
    title: "Splunk Core Certified Power User",
    issuer: "Splunk",
    date: "Nov 2023",
    status: "Completed" as const,
    credentialId: "SPLK-PU-2023-4512",
    link: "#",
  },
  {
    title: "Microsoft Certified: Azure Security Engineer (AZ-500)",
    issuer: "Microsoft",
    date: "Feb 2024",
    status: "Completed" as const,
    credentialId: "MS-AZ500-2024-3321",
    link: "#",
  },
  {
    title: "Certified Incident Handler (ECIH)",
    issuer: "EC-Council",
    date: "Jun 2024",
    status: "Completed" as const,
    credentialId: "ECC-ECIH-2024-9087",
    link: "#",
  },
  {
    title: "GIAC Certified Incident Handler (GCIH)",
    issuer: "SANS/GIAC",
    date: "Dec 2024",
    status: "Completed" as const,
    credentialId: "GIAC-GCIH-2024-5567",
    link: "#",
  },
  {
    title: "AWS Certified Security - Specialty",
    issuer: "Amazon Web Services",
    date: "Expected Aug 2025",
    status: "In Progress" as const,
  },
];

export function CertificationsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 md:py-32 bg-surface">
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
            <SectionLabel label="CERTIFICATIONS" />
            <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4">
              Credentials & Learning
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mt-3 max-w-[600px]">
              Continuous learning is the foundation of effective security
              operations. A commitment to staying current in an ever-evolving
              threat landscape.
            </p>
          </div>

          {/* Certifications List */}
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CertificationCard
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  status={cert.status}
                  credentialId={cert.credentialId}
                  link={cert.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
