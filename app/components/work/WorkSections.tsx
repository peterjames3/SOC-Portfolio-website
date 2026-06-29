"use client";

import { useState } from "react";
import { FilterTabs } from "../FilterTabs";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import type { CaseStudyFrontmatter } from "@/app/lib/caseStudies";
import type { SelectedWorkFrontmatter } from "@/app/lib/selectedWorks";
import type { WriteUpsFrontmatter } from "@/app/lib/writeUps"
import { WorkSectionHeader } from "./WorkSectionHeader";
import { SelectedWorkGrid } from "./SelectedWorkGrid";
import { CaseStudiesList } from "./CaseStudiesList";
import { WriteUpsList } from "./WriteUpList"

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
  writeups: WriteUpsFrontmatter[];
}

export function WorkSections({ caseStudies, selectedWorks, writeups }: WorkSectionProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const filteredWorks =
    activeCategory === "ALL"
      ? selectedWorks
      : selectedWorks.filter((w) => w.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7.5"
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

          <SelectedWorkGrid
            works={filteredWorks}
            activeCategory={activeCategory}
          />

          <CaseStudiesList studies={caseStudies} />

          <WriteUpsList writeups={writeups} />
        </div>
      </div>
    </section>
  );
}
