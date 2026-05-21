"use client";

import { BarsWaveCanvas } from "@/components/animation/BarsWaveCanvas";
import { cn } from "@/lib/utils";

type RevArcBarsWaveProps = {
  className?: string;
};

/** ScrollXUI Bars Wave — UI_MANIFEST ID 19, tokenized RevArc wrapper. */
export function RevArcBarsWave({ className }: RevArcBarsWaveProps) {
  return (
    <div className={cn("revarc-bars-wave", className)} aria-hidden="true">
      <BarsWaveCanvas />
    </div>
  );
}
