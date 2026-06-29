import type { CaseStudyFrontmatter } from "@/app/lib/caseStudies";
import { SectionLabel } from "../SectionLabel";
import { CaseStudyRow } from "./CaseStudyRow";
import { GhostButton } from "@/app/components/GhostButton";

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
        {studies.slice(0, 3).map((study, index) => (
          <CaseStudyRow key={study.slug} study={study} index={index} />
        ))}
      </div>
      <div className="max-w-7xl mt-10 mx-auto w-full px-6 md:px-12 lg:px-16 flex items-center justify-center">
              <GhostButton href="/case-st">View All Case Studies</GhostButton>
            </div>
    </div>
  );
}