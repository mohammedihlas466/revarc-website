"use client";

import { RevArcMagicDottedMap } from "@/components/backgrounds/RevArcMagicDottedMap";
import { RevArcMetallicOrb } from "@/components/backgrounds/RevArcMetallicOrb";
import { RevArcScrollMeteorOrbit } from "@/components/backgrounds/RevArcScrollMeteorOrbit";
import { cn } from "@/lib/utils";

export type FieldStudyVisualKind =
  | "prologue"
  | "before"
  | "rebuild"
  | "engine";

type FieldStudyVisualProps = {
  kind: FieldStudyVisualKind;
  className?: string;
};

export function FieldStudyVisual({ kind, className }: FieldStudyVisualProps) {
  return (
    <div className={cn("field-study-visual", className)}>
      <div
        className={cn(
          "field-study-visual-tile",
          `field-study-visual-tile--${kind}`
        )}
      >
        {kind === "prologue" && (
          <div className="field-study-visual-layer">
            <RevArcMagicDottedMap variant="property" />
          </div>
        )}
        {kind === "before" && (
          <div className="field-study-visual-layer">
            <RevArcScrollMeteorOrbit size={300} />
          </div>
        )}
        {kind === "rebuild" && (
          <div className="field-study-visual-layer field-study-visual-layer--map">
            <RevArcMagicDottedMap variant="footprint" />
          </div>
        )}
        {kind === "engine" && (
          <div className="field-study-visual-layer field-study-visual-layer--orb">
            <RevArcMetallicOrb variant="stable" />
          </div>
        )}
      </div>
    </div>
  );
}
