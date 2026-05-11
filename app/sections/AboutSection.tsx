"use client";

import { SectionLabel } from "../components/SectionLabel";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Bio */}
            <div>
              <SectionLabel label="ABOUT" />
              <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4 mb-6">
                Analyst. Defender. Investigator.
              </h2>

              <div className="space-y-4 font-body text-base text-text-secondary leading-relaxed">
                <p>
                  I&apos;m James Kamau, a Security Operations Center Analyst
                  based in Nairobi, Kenya. My work sits at the intersection of
                  threat detection, incident response, and IT controls
                  assessment — I dig into logs, correlate events across data
                  sources, and build a clear picture of what happened, how, and
                  what to do next.
                </p>
                <p>
                  My practical experience spans both professional engagements
                  and independent investigation. As an IT Audit Analyst at EBN
                  Advisory LLP, I review security controls, investigate
                  suspicious events using log data, and produce audit-ready
                  reports that clients can act on. In parallel, I&apos;ve conducted
                  full forensic investigations through platforms like Elastic
                  Security and the KC7 Cybersecurity Challenge — including a
                  multi-stage phishing and lateral movement case where I traced
                  an attacker from initial email delivery all the way to
                  fraudulent content being published.
                </p>
                <p>
                  My approach begins with curiosity. I don&apos;t just respond
                  to alerts — I dig into the &apos;why&apos; behind them,
                  hunting for the subtle anomalies that indicate compromise. The
                  result is a security posture that is not just reactive, but
                  predictive.
                </p>
                <p>
                  I&apos;m currently working toward my ISC2 Cybersecurity
                  certification and progressing through the TryHackMe SOC Path.
                  I&apos;m open to full-time roles and contract security engagements
                  where I can contribute to a team that takes detection and
                  response seriously.
                </p>
              </div>

              {/* Philosophy Quote */}
              <blockquote className="mt-8 border-l-2 border-primary pl-6">
                <p className="font-display text-lg italic text-text-primary leading-relaxed">
                  &apos;Security is not a product, but a process. Understand
                  deeply. Hunt relentlessly. Respond with precision. Because in
                  the digital world, the best defense is an informed one.&apos;
                </p>
              </blockquote>
            </div>

            {/* Right Column - Skills & Tools */}
            <div className="lg:mt-12">
              {/* Core Stack */}
              <div className="mb-8">
                <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
                  Core Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Splunk",
                    "SPL Queries",
                    "Elastic SIEM",
                    "PowerShell",
                    "Wireshark",
                    "Suricata",
                    "YARA",

                    "Wazuh",
                    "Osquery",
                    "MITRE ATT&CK",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 border border-border rounded-sm font-mono text-[11px] font-normal tracking-[0.05em] text-text-secondary bg-[rgba(26,20,18,0.6)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Stack Languages */}
              <div className="mb-8">
                <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
                  Languages & Scripting
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "PowerShell",
                    "Bash",
                    "KQL",
                    "SPL",
                    "Sigma",
                    "SQL",
                    "Regex",
                  ].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 border border-border rounded-sm font-mono text-[11px] font-normal tracking-[0.05em] text-text-secondary bg-[rgba(26,20,18,0.6)]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div>
                <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-tertiary mb-4">
                  Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Active Directory", "Azure", "Linux", "Windows Server", "VMware"].map(
                    (platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1.5 border border-border rounded-sm font-mono text-[11px] font-normal tracking-[0.05em] text-text-secondary bg-[rgba(26,20,18,0.6)]"
                      >
                        {platform}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
