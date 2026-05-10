"use client";

import { ReactNode } from "react";

interface GhostButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function GhostButton({
  children,
  href,
  onClick,
  className = "",
}: GhostButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 text-text-secondary font-body text-[13px] font-medium py-2 transition-all duration-200 hover:text-text-primary group";

  const arrow = (
    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
      {arrow}
    </button>
  );
}
