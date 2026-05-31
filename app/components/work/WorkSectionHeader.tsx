import { SectionLabel } from "../SectionLabel";

export function WorkSectionHeader() {
  return (
    <div className="mb-12">
      <SectionLabel label="WORK" />
      <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4">
        Selected Work
      </h2>
      <p className="font-body text-base text-text-secondary leading-relaxed mt-3 max-w-[600px]">
        A selection of recent security projects and case studies across threat
        detection, incident response, forensic analysis, and cloud security.
        Each project represents a unique challenge solved with precision and
        expertise.
      </p>
    </div>
  );
}
