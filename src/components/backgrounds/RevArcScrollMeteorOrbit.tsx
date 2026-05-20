"use client";

import { MeteorOrbit } from "@/components/ui/meteor-orbit";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type RevArcScrollMeteorOrbitProps = {
  className?: string;
  size?: number;
};

/**
 * RevArc wrapper — ScrollXUI Meteor Orbit (manifest ID 08).
 */
export function RevArcScrollMeteorOrbit({
  className,
  size = 320,
}: RevArcScrollMeteorOrbitProps) {
  return (
    <div className={cn("revarc-scroll-meteor", className)}>
      <MeteorOrbit
        icons={[]}
        rippleCount={5}
        meteorSpeed={5}
        size={size}
        className="revarc-scroll-meteor-orbit h-full w-full"
        meteorGradients={[
          [CANVAS_TOKENS.accent, CANVAS_TOKENS.accentBright],
          [CANVAS_TOKENS.accentBright, "rgba(125, 211, 252, 0.2)"],
        ]}
      />
    </div>
  );
}
