"use client";

import { AlertTriangle, CheckCircle, Key, Info } from "lucide-react";

interface CalloutProps {
  type: "key" | "finding" | "confirmed" | "info";
  children: React.ReactNode;
}

const calloutStyles = {
  key: {
    border: "border-primary",
    bg: "bg-[rgba(232,104,26,0.08)]",
    icon: Key,
    iconColor: "text-primary",
  },
  finding: {
    border: "border-warning",
    bg: "bg-[rgba(251,191,36,0.08)]",
    icon: AlertTriangle,
    iconColor: "text-warning",
  },
  confirmed: {
    border: "border-success",
    bg: "bg-[rgba(74,222,128,0.08)]",
    icon: CheckCircle,
    iconColor: "text-success",
  },
  info: {
    border: "border-border-light",
    bg: "bg-[rgba(26,20,18,0.6)]",
    icon: Info,
    iconColor: "text-text-secondary",
  },
};

export function Callout({ type, children }: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div
      className={`my-6 border-l-2 ${style.border} ${style.bg} rounded-r p-5`}
    >
      <div className="flex items-start gap-3">
        <Icon size={18} className={`${style.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="text-[15px] leading-relaxed text-text-primary">
          {children}
        </div>
      </div>
    </div>
  );
}
