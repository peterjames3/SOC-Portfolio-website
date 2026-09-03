"use client";

import { SectionLabel } from "../components/SectionLabel";
import { CertificationCard } from "../components/CertificationCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const certifications = [
  {
    title: "Kenya Cyber Security and Forensics Association",
    issuer: "KCSFA",
    date: "Mar 2026",
    status: "Active" as const,
    credentialId: "KCSFA/S284M/2026",
    link: "#",
  },
  {
    title: "SOC Level 1 Path",
    issuer: "TryHackMe",
    date: "July 2026",
    status: "Completed" as const,
    credentialId:"THM-INXQM56DH0",
    link: "https://tryhackme.com/p/Peterejames",
  },
    {
    title: "ISC2 CC — Domain 2: Incident Response, Business Continuity & Disaster Recovery",
    issuer: "ISC2",
    date: "Apr 2026",
    status: "Completed" as const,
    credentialId: "b8e30030-bf84-4e5c-aee8-0596a4779708",
    link: "#",
  },
  {
    title: "Elastic Security for SIEM",
    issuer: "Elastic",
    date: "Jan 2026",
    status: "Completed" as const,
    credentialId: "C147214",
    link: "#",
  },
  {
    title: "Cybersecurity Track",
    issuer: "Cyber Shujaa Program",
    date: "Nov 2024",
    status: "Completed" as const,
    credentialId: "MS-AZ500-2024-3321",
    link: "#",
  },
  {
    title: "B.Tech in Information Technology",
    issuer: "Jomo Kenyatta University of Agriculture and Technology",
    date: "Jun 2024",
    status: "Completed" as const,
    credentialId: "undefined",
    link: "#",
  },
    {
    title: "ISC2 Certified in Cybersecurity (CC) — Full Exam",
    issuer: "ISC2",
    date: "In Progress",
    status: "In Progress" as const,
    credentialId: undefined,
    link: "https://www.isc2.org/certifications/cc",
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
              Credentials, Learning & Membership
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
