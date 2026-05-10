"use client";

import { useState } from "react";
import { SectionLabel } from "../components/SectionLabel";
import { FilterTabs } from "../components/FilterTabs";
import { ProjectCard } from "../components/ProjectCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import type { CaseStudyFrontmatter } from "../lib/caseStudies";
import Image from "next/image";
import Link from "next/link";

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
    image: "/images/projects/siem-dashboard.jpg",
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
    image: "/incident-response.png",
    link: "#",
  },
  {
    category: "MALWARE ANALYSIS",
    title: "Malware Analysis Lab",
    description:
      "Built an isolated malware analysis laboratory with automated sandboxing capabilities. Reverse-engineered 30+ malware samples to extract IOCs and develop YARA rules for enterprise-wide detection.",
    image: "/malware-analysis.jpg",
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

interface WorkSectionProps {
  caseStudies: CaseStudyFrontmatter[];
}

export function WorkSection({ caseStudies }: WorkSectionProps) {
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
              A selection of recent security projects and case studies across
              threat detection, incident response, forensic analysis, and cloud
              security. Each project represents a unique challenge solved with
              precision and expertise.
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

          {/* Case Studies Section */}
          {caseStudies?.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center gap-4 mb-8">
                <SectionLabel label="CASE STUDIES" />
                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-4">
                {caseStudies.map((study, index) => (
                  <CaseStudyRow
                    key={study.slug}
                    study={study}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CaseStudyRow({
  study,
  index,
  // isVisible,
}: {
  study: CaseStudyFrontmatter;
  index: number;
  isVisible: boolean;
}) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group block border border-border rounded bg-surface transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-border-light hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5 md:p-6">
        {/* Thumbnail */}
        <div className="w-full md:w-48 h-24 rounded overflow-hidden flex-shrink-0">
          <Image
            src={study.thumbnail}
            alt={study.title}
            width="400"
            height="200"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-primary">
              {study.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span className="font-mono text-[10px] tracking-[0.05em] text-text-tertiary">
              {study.challenge}
            </span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span className="font-mono text-[10px] tracking-[0.05em] text-text-tertiary">
              {study.date}
            </span>
          </div>

          <h3 className="font-body text-lg font-medium text-text-primary group-hover:text-primary transition-colors duration-200 mb-1.5 truncate">
            {study.title}
          </h3>

          <p className="font-body text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {study.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {study.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 border border-border rounded-sm font-mono text-[10px] text-text-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded border border-border text-text-tertiary group-hover:border-primary group-hover:text-primary transition-all duration-200 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
