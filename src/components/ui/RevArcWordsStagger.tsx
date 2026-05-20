"use client";

import { WordsStagger } from "@/components/words-stagger";
import { cn } from "@/lib/utils";

type RevArcWordsStaggerProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  speed?: number;
  inView?: boolean;
};

/**
 * RevArc wrapper — Spell UI Words Stagger (manifest ID 31).
 */
export function RevArcWordsStagger({
  text,
  className,
  delay = 0.08,
  stagger = 0.065,
  speed = 0.55,
  inView = true,
}: RevArcWordsStaggerProps) {
  return (
    <WordsStagger
      className={cn("revarc-words-stagger", className)}
      delay={delay}
      stagger={stagger}
      speed={speed}
      inView={inView}
      once
      autoStart={!inView}
    >
      {text}
    </WordsStagger>
  );
}
