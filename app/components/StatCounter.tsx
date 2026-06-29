"use client";

import CountUp from "react-countup";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({
  end,
  suffix = "",
  label,
  duration = 2,
}: StatCounterProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-[28px] font-normal text-primary leading-tight">
        {isVisible ? (
          <CountUp end={end} duration={duration} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="font-body text-p font-medium uppercase tracking-[0.08em] text-text-secondary mt-1">
        {label}
      </div>
    </div>
  );
}
