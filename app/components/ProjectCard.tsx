"use client";

import { GhostButton } from "./GhostButton";
import Image from "next/image";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export function ProjectCard({
  category,
  title,
  description,
  image,
  link = "#",
}: ProjectCardProps) {
  return (
    <div className="group bg-surface border border-border rounded overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-border-light hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width='400'
          height='200'
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="font-mono text-[11px] font-normal tracking-[0.1em] uppercase text-primary">
          {category}
        </span>
        <h3 className="font-body text-xl font-medium text-text-primary mt-2 mb-2">
          {title}
        </h3>
        <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
        <GhostButton href={link}>View Project</GhostButton>
      </div>
    </div>
  );
}
