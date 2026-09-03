"use client";

import { SectionLabel } from "../components/SectionLabel";
import { ServiceCard } from "../components/ServiceCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const services = [
  {
    number: "01",
    title: "ITGC & SOX Compliance Audits",
    description:
      "Plan and execute IT general controls audits across access management, change management, and backup & recovery. Risk-based scoping, control walkthroughs, and testing mapped to SOX and audit committee reporting requirements.",
  },
  {
    number: "02",
    title: "Access & Identity Controls Testing",
    description:
      "Test provisioning, deprovisioning, segregation of duties, and periodic recertification against role-based access matrices. Identify excess privilege, orphaned accounts, and SoD conflicts across ERP and supporting systems.",
  },
  {
    number: "03",
    title: "Change Management & Release Controls",
    description:
      "Evaluate change approval, testing/UAT evidence, rollback planning, and post-implementation review across standard and emergency change pathways. Test requester/approver segregation and CAB governance.",
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
