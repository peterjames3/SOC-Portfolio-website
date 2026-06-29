import { SectionLabel } from "../SectionLabel";

export function BlogSectionHeader() {
  return (
    <div className="mb-12">
      <SectionLabel label="BLOG" />
      <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4">
        Blog
      </h2>
      <p className="font-body text-base text-text-secondary leading-relaxed mt-3 max-w-150">
        A selection of recent security blogs across threat
        detection, incident response, forensic analysis, and cloud security.
        Each project represents a unique challenge solved with precision and
        expertise.
      </p>
    </div>
  );
}
