"use client";

import { useState } from "react";
import { SectionLabel } from "../components/SectionLabel";
import { FilterTabs } from "../components/FilterTabs";
import { ProjectCard } from "../components/ProjectCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const categories = [
  "ALL",
  "SIEM",
  "THREAT HUNTING",
  "INCIDENT RESPONSE",
  "MALWARE ANALYSIS",
  "CLOUD SECURITY",
];

const projects = [
  {
    category: "SIEM",
    title: "Enterprise SIEM Dashboard",
    description:
      "Designed and deployed a comprehensive SIEM dashboard aggregating logs from 200+ endpoints. Built custom correlation rules that reduced false positives by 65% and improved mean-time-to-detect by 40%.",
    image: "/siem-dashboard.png",
    link: "#",
  },
  {
    category: "THREAT HUNTING",
    title: "APT Threat Hunt Campaign",
    description:
      "Led a proactive threat hunting initiative that uncovered a sophisticated persistent threat operating undetected for 8 months. Developed custom detection logic now deployed across the organization's infrastructure.",
    image: "/threat-hunt.png",
    link: "#",
  },
  {
    category: "INCIDENT RESPONSE",
    title: "Incident Response Playbook Suite",
    description:
      "Created a comprehensive library of 15+ incident response playbooks covering ransomware, data exfiltration, insider threats, and supply chain attacks. Reduced average response time from 4 hours to 45 minutes.",
    image: "/incident-response-playbook.png",
    link: "#",
  },
  {
    category: "MALWARE ANALYSIS",
    title: "Malware Analysis Lab",
    description:
      "Built an isolated malware analysis laboratory with automated sandboxing capabilities. Reverse-engineered 30+ malware samples to extract IOCs and develop YARA rules for enterprise-wide detection.",
    image: "/malware-analysis.png",
    link: "#",
  },
  {
    category: "CLOUD SECURITY",
    title: "Cloud Security Posture Review",
    description:
      "Conducted a full security audit of AWS and Azure environments for a fintech client. Identified 47 misconfigurations and implemented CIS benchmarks, reducing the attack surface by 80%.",
    image: "/cloud-security.png",
    link: "#",
  },
  {
    category: "SIEM",
    title: "Vulnerability Management Program",
    description:
      "Established an enterprise vulnerability management lifecycle from discovery to remediation. Integrated Tenable.sc with ServiceNow for automated ticket creation and SLA tracking.",
    image: "/vuln-management.png",
    link: "#",
  },
];

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-32">
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
            <SectionLabel label="WORK" />
            <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4">
              Selected Work
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mt-3 max-w-[600px]">
              A selection of recent security projects across threat detection,
              incident response, forensic analysis, and cloud security. Each
              project represents a unique challenge solved with precision and
              expertise.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-10 overflow-x-auto pb-2">
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.title}-${activeCategory}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <ProjectCard
                  category={project.category}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center font-body text-text-secondary py-16">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
