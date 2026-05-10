"use client";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="bg-[rgba(26,20,18,0.4)] border border-border rounded p-8 transition-all duration-300 ease-out hover:bg-[rgba(26,20,18,0.7)] hover:border-border-light">
      <span className="font-mono text-[32px] font-normal text-primary opacity-40 leading-none">
        {number}
      </span>
      <h3 className="font-body text-xl font-medium text-text-primary mt-4 mb-3">
        {title}
      </h3>
      <p className="font-body text-[15px] text-text-secondary leading-[1.7]">
        {description}
      </p>
    </div>
  );
}
