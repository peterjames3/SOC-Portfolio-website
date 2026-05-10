"use client";

interface StatusBadgeProps {
  status: "Active" | "Completed" | "In Progress";
}

const variants = {
  Active:
    "bg-[rgba(74,222,128,0.1)] text-success border-[rgba(74,222,128,0.2)]",
  Completed:
    "bg-[rgba(232,104,26,0.1)] text-primary border-[rgba(232,104,26,0.2)]",
  "In Progress":
    "bg-[rgba(251,191,36,0.1)] text-warning border-[rgba(251,191,36,0.2)]",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-sm font-mono text-[10px] font-medium uppercase border ${variants[status]}`}
    >
      {status}
    </span>
  );
}
