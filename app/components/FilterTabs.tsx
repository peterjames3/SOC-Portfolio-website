"use client";

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 font-mono text-[11px] font-normal tracking-[0.08em] uppercase rounded-sm transition-all duration-200 ${
            activeCategory === category
              ? "bg-primary text-background"
              : "bg-transparent text-text-secondary hover:text-text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
