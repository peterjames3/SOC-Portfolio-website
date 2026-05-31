"use client";

import { useState } from "react";
import { FilterTabs } from "../FilterTabs";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import type { CaseStudyFrontmatter } from "@/app/lib/caseStudies";
import type { SelectedWorkFrontmatter } from "@/app/lib/selectedWorks";
import { WorkSectionHeader } from "./WorkSectionHeader";
import { SelectedWorksGrid } from "./SelectedWorksGrid";
import { CaseStudiesList } from "./CaseStudiesList";

const CATEGORIES = [
  "ALL",
  "SIEM",
  "THREAT HUNTING",
  "INCIDENT RESPONSE",
  "MALWARE ANALYSIS",
  "CLOUD SECURITY",
  "IT AUDIT",
];

interface WorkSectionProps {
  caseStudies: CaseStudyFrontmatter[];
  selectedWorks: SelectedWorkFrontmatter[];
}

export function WorkSections({ caseStudies, selectedWorks }: WorkSectionProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const filteredWorks =
    activeCategory === "ALL"
      ? selectedWorks
      : selectedWorks.filter((w) => w.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          <WorkSectionHeader />

          <div className="mb-10 overflow-x-auto pb-2">
            <FilterTabs
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          <SelectedWorksGrid
            works={filteredWorks}
            activeCategory={activeCategory}
          />

          <CaseStudiesList studies={caseStudies} />
        </div>
      </div>
    </section>
  );
}
