import Image from "next/image";
import Link from "next/link";
import type { CaseStudyFrontmatter } from "@/app/lib/caseStudies";

interface CaseStudyRowProps {
  study: CaseStudyFrontmatter;
  index: number;
}

export function CaseStudyRow({ study, index }: CaseStudyRowProps) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block border border-border rounded bg-surface transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-border-light hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5 md:p-6">
        {/* Thumbnail */}
        <div className="w-full md:w-48 h-24 rounded overflow-hidden flex-shrink-0">
          <Image
            src={study.thumbnail}
            alt={study.title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/incident-response-playbook.webp";
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-primary">
              {study.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span className="font-mono text-[10px] tracking-[0.05em] text-text-tertiary">
              {study.challenge}
            </span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span className="font-mono text-[10px] tracking-[0.05em] text-text-tertiary">
              {study.date}
            </span>
          </div>

          <h3 className="font-body text-lg font-medium text-text-primary group-hover:text-primary transition-colors duration-200 mb-1.5 truncate">
            {study.title}
          </h3>

          <p className="font-body text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {study.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {(study.tags ?? []).slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 border border-border rounded-sm font-mono text-[10px] text-text-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded border border-border text-text-tertiary group-hover:border-primary group-hover:text-primary transition-all duration-200 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}