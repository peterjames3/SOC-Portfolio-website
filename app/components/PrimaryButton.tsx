"use client";

import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 bg-primary text-background font-body text-[13px] font-semibold uppercase tracking-[0.06em] px-7 py-3.5 rounded-sm transition-all duration-200 hover:bg-primary-hover hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(232,104,26,0.3)] active:translate-y-0";

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
