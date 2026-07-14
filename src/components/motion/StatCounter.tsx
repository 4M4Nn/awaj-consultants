"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface StatCounterProps {
  value: string;
  className?: string;
}

export function StatCounter({ value, className }: StatCounterProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || !match) return;

    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, match, target]);

  return (
    <span ref={ref} className={className}>
      {match ? `${display}${suffix}` : value}
    </span>
  );
}
