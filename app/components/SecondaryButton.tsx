"use client";

import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({
  children,
  href,
  onClick,
  className = "",
}: SecondaryButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 border border-border-light text-text-primary font-body text-[13px] font-medium uppercase tracking-[0.06em] px-7 py-3.5 rounded-sm transition-all duration-200 hover:border-primary hover:text-primary active:translate-y-0";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
