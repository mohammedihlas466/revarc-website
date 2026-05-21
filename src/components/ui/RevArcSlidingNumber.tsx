"use client";

import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import { cn } from "@/lib/utils";

type RevArcSlidingNumberProps = {
  value: number;
  className?: string;
  padStart?: boolean;
};

/**
 * RevArc token pass over motion-primitives SlidingNumber (Aceternity / Motion Primitives odometer).
 */
export function RevArcSlidingNumber({
  value,
  className,
  padStart = false,
}: RevArcSlidingNumberProps) {
  return (
    <span
      className={cn("revarc-sliding-number", className)}
      aria-hidden="true"
    >
      <SlidingNumber value={value} padStart={padStart} />
    </span>
  );
}
