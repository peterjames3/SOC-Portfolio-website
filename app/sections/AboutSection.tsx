"use client";

import { SectionLabel } from "../components/SectionLabel";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7.5"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Bio */}
            <div>
              <SectionLabel label="ABOUT" />
              <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4 mb-6">
                Auditor. Analyst. Investigator.
              </h2>

            <div className="space-y-4 font-body text-base text-text-secondary leading-relaxed">
                <p>
                  I&apos;m James Kamau, an IT Auditor based in Nairobi, Kenya.
                  My work sits at the intersection of IT general controls
                  assessment, risk, and security monitoring. I test whether
                  controls actually operate the way policy says they do, trace
                  exceptions back to root cause, and build audit reports that
                  give management a clear, evidence-backed picture of where the
                  risk sits.
                </p>
                <p>
                  My practical experience spans both professional engagements
                  and independent investigation. As an IT Audit Analyst at EBN
                  Advisory LLP, I plan and execute ITGC audits across access
                  management, change management, and backup &amp; recovery,
                  testing populations against control criteria, documenting
                  findings, and producing audit-ready reports clients can act
                  on. In parallel, I&apos;ve built a strong log-analysis and
                  threat-hunting foundation through platforms like Elastic
                  Security and the KC7 Cybersecurity Challenge, including a
                  multi-stage phishing and lateral movement case where I traced
                  an attacker from initial email delivery all the way to
                  fraudulent content being published. That technical grounding
                  sharpens my audit work: I know what attacker behavior actually
                  looks like in logs, which makes me better at scoping risk and
                  spotting where a control narrative doesn&apos;t match the
                  evidence.
                </p>
              
               
              </div>

              {/* Philosophy Quote */}
              <blockquote className="mt-8 border-l-2 border-primary pl-6">
                <p className="font-display text-lg italic text-text-primary leading-relaxed">
                  &apos;A control is only as strong as the evidence behind it.
                  Trust the policy, but verify against the log. Because in IT
                  audit, the finding that holds up is the one you can
                  trace.&apos;
                </p>
              </blockquote>
            </div>

            {/* Right Column - Skills & Tools */}
            <div className="lg:mt-12">
              {/* Audit & Compliance */}
              <div className="mb-8">
                <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
                  Audit & Compliance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ITGC Testing",
                    "SOX Compliance",
                    "Access Reviews",
                    "Change Mgmt Testing",
                    "Risk Assessment",
                    
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 border border-border rounded-sm font-mono text-[11px] font-normal tracking-wider text-text-secondary bg-[rgba(26,20,18,0.6)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security & Log Analysis */}
              <div className="mb-8">
                <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
                  Security & Log Analysis
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Splunk",
                    "Elastic SIEM",
                    "PowerShell",
                    "Wireshark",
                    "Suricata",
                    "YARA",
                    "Wazuh",
                    "Osquery",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 border border-border rounded-sm font-mono text-[11px] font-normal tracking-wider text-text-secondary bg-[rgba(26,20,18,0.6)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages & Scripting */}
              <div className="mb-8">
                <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
                  Languages & Scripting
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "PowerShell", "Bash", "KQL", "SPL", "Sigma"].map(
                    (lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1.5 border border-border rounded-sm font-mono text-[11px] font-normal tracking-wider text-text-secondary bg-[rgba(26,20,18,0.6)]"
                      >
                        {lang}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Platforms */}
              <div>
                <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
                  Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Active Directory",
                    "Linux",
                    "Windows Server",
                    "VMware",
                  ].map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1.5 border border-border rounded-sm font-mono text-[11px] font-normal tracking-wider text-text-secondary bg-[rgba(26,20,18,0.6)]"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
