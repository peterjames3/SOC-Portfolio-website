"use client";

import {
  Shield,
  Lock,
  Eye,
  Bug,
  Cloud,
  Terminal,
  Search,
  FileWarning,
  Network,
  Server,
  Fingerprint,
  Radio,
  Radar,
  Siren,
  Scan,
  Crosshair,
} from "lucide-react";

const row1 = [
  { label: "SIEM Administration", icon: Shield },
  { label: "Threat Hunting", icon: Crosshair },
  { label: "Incident Response", icon: Siren },
  { label: "Malware Analysis", icon: Bug },
  { label: "Cloud Security", icon: Cloud },
  { label: "Digital Forensics", icon: Fingerprint },
  { label: "Vulnerability Assessment", icon: Scan },
  { label: "Log Analysis", icon: Terminal },
];

const row2 = [
  { label: "Network Monitoring", icon: Network },
  { label: "IDS/IPS Management", icon: Radar },
  { label: "Endpoint Security", icon: Server },
  { label: "Penetration Testing", icon: Lock },
  { label: "Security Auditing", icon: Eye },
  { label: "Threat Intelligence", icon: Radio },
  { label: "Forensic Investigation", icon: Search },
  { label: "Risk Assessment", icon: FileWarning },
];

function MarqueeRow({
  items,
  direction,
}: {
  items: { label: string; icon: React.ElementType }[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-track flex overflow-hidden py-3">
      <div
        className={`flex gap-6 whitespace-nowrap ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-border rounded bg-[rgba(26,20,18,0.4)]"
          >
            <item.icon size={14} className="text-primary flex-shrink-0" />
            <span className="font-mono text-[12px] font-normal tracking-[0.05em] uppercase text-text-secondary">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section
      id="marquee"
      className="py-8 border-y border-border overflow-hidden"
    >
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </section>
  );
}
