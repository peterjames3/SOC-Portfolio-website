import type { CaseStudyFrontmatter } from "@/app/lib/caseStudies";
import { SectionLabel } from "../SectionLabel";
import { CaseStudyRow } from "./CaseStudyRow";

interface CaseStudiesListProps {
  studies: CaseStudyFrontmatter[];
}

export function CaseStudiesList({ studies }: CaseStudiesListProps) {
  if (!studies || studies.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="flex items-center gap-4 mb-8">
        <SectionLabel label="CASE STUDIES" />
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {studies.map((study, index) => (
          <CaseStudyRow key={study.slug} study={study} index={index} />
        ))}
      </div>
    </div>
  );
}
