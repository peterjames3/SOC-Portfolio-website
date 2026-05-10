"use client";

interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <span className="font-mono text-[11px] font-normal tracking-[0.1em] uppercase">
      <span className="text-text-tertiary">// </span>
      <span className="text-primary">{label}</span>
    </span>
  );
}
