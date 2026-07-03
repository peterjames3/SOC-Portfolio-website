"use client";

import { SectionLabel } from "../components/SectionLabel";
import { ServiceCard } from "../components/ServiceCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const services = [
  {
    number: "01",
    title: "Security Monitoring & SIEM",
    description:
      "Design, deploy, and optimize SIEM platforms for comprehensive threat visibility. Custom correlation rules, alerting thresholds, and dashboard creation across Splunk, Sentinel, and Elastic.",
  },
  {
    number: "02",
    title: "Threat Hunting & Detection",
    description:
      "Proactive threat hunting using hypothesis-driven methodologies. Develop custom detection logic, Sigma rules, and YARA signatures to identify advanced persistent threats and insider risks.",
  },
  {
    number: "03",
    title: "Incident Response & Forensics",
    description:
      "Lead incident response from detection through recovery. Digital forensics, evidence preservation, root cause analysis, and post-incident reporting. Build IR playbooks and tabletop exercises.",
  },
  {
    number: "04",
    title: "Cloud Security & Compliance",
    description:
      "Secure cloud environments across AWS and Azure. Implement CIS benchmarks, identity governance, network segmentation, and compliance frameworks including ISO 27001 and SOC 2.",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7.5"
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <SectionLabel label="SKILLS" />
            <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4">
              Technical Capabilities
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mt-3 max-w-150">
              Core disciplines honed through real-world incident response,
              threat hunting operations, and enterprise security architecture.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  number={service.number}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
