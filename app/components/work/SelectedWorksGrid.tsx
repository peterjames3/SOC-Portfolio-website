import type { SelectedWorkFrontmatter } from "@/app/lib/selectedWorks";
import { SelectedWorkCard } from "./SelectedWorkCard";

interface SelectedWorksGridProps {
  works: SelectedWorkFrontmatter[];
  activeCategory: string;
}

export function SelectedWorksGrid({
  works,
  activeCategory,
}: SelectedWorksGridProps) {
  if (works.length === 0) {
    return (
      <p className="text-center font-body text-text-secondary py-16">
        No projects found in this category yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {works.map((work, index) => (
        <div
          key={`${work.slug}-${activeCategory}`}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <SelectedWorkCard work={work} />
        </div>
      ))}
    </div>
  );
}
