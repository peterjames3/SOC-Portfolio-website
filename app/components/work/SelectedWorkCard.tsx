import Image from "next/image";
import Link from "next/link";
import type { SelectedWorkFrontmatter } from "@/app/lib/selectedWorks";

interface SelectedWorkCardProps {
  work: SelectedWorkFrontmatter;
}

export function SelectedWorkCard({ work }: SelectedWorkCardProps) {
  return (
    <Link
      href={`/selected-work/${work.slug}`}
      className="group bg-surface border border-border rounded overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-border-light hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] block"
    >
      {/* Thumbnail */}
      <div className="aspect-16/10 overflow-hidden">
        <Image
          src={work.thumbnail}
          alt={work.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/incident-response-playbook.webp";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[11px] font-normal tracking-widest uppercase text-primary">
            {work.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-text-tertiary" />
          <span className="font-mono text-[10px] tracking-wider text-text-tertiary">
            {work.date}
          </span>
        </div>

        <h3 className="font-body text-md font-medium text-text-primary mt-2 mb-2 group-hover:text-primary transition-colors duration-200">
          {work.title}
        </h3>

        <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
          {work.description}
        </p>

        {/* Tags */}
        {work.tags && work.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {work.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 border border-border rounded-sm font-mono text-[10px] text-text-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <span className="font-mono text-[10px] tracking-wider text-text-tertiary">
            {work.challenge}
          </span>
          <span className="font-mono text-[11px] text-primary group-hover:translate-x-1 transition-transform duration-200">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
