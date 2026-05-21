"use client";

import { useRef } from "react";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type ScrollSpotlightTextProps = {
  text: string;
  className?: string;
  variant?: "display" | "body";
};

/**
 * Scroll-driven staggered spotlight — typography earns focus via scrubbed 3D word depth.
 */
export function ScrollSpotlightText({
  text,
  className,
  variant = "body",
}: ScrollSpotlightTextProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const scrollReady = useScrollAnimationReady();
  const words = text.split(" ").filter(Boolean);

  useGSAP(
    () => {
      const root = rootRef.current;
      const beam = beamRef.current;
      if (!root || !scrollReady) return;

      const wordEls = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".scroll-spotlight-word")
      );
      if (!wordEls.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(wordEls, {
          opacity: 1,
          filter: "none",
          rotateX: 0,
          z: 0,
          clearProps: "transform",
        });
        if (beam) beam.style.opacity = "0";
        return;
      }

      gsap.set(root, { perspective: 900, transformStyle: "preserve-3d" });
      gsap.set(wordEls, {
        opacity: 0.14,
        filter: "blur(8px)",
        rotateX: 14,
        z: -48,
        transformOrigin: "50% 100%",
      });

      ScrollTrigger.create({
        trigger: root,
        start: "top 82%",
        end: "bottom 28%",
        scrub: 0.85,
        onUpdate: (self) => {
          const progress = self.progress;
          const span = 1 / Math.max(wordEls.length, 1);

          wordEls.forEach((word, index) => {
            const local = gsap.utils.clamp(
              0,
              1,
              (progress - index * span * 0.82) / (span * 1.35)
            );
            gsap.set(word, {
              opacity: 0.12 + local * 0.88,
              filter: `blur(${8 * (1 - local)}px)`,
              rotateX: 14 * (1 - local),
              z: -48 + local * 52,
            });
          });

          if (beam) {
            const y = 8 + progress * 84;
            beam.style.setProperty("--spotlight-y", `${y}%`);
            beam.style.opacity = String(0.35 + progress * 0.45);
          }
        },
      });
    },
    { scope: rootRef, dependencies: [text, scrollReady] }
  );

  return (
    <div
      ref={rootRef}
      className={cn(
        "scroll-spotlight",
        variant === "display" && "scroll-spotlight--display",
        className
      )}
    >
      <div ref={beamRef} className="scroll-spotlight-beam" aria-hidden="true" />
      <p
        className={cn(
          "scroll-spotlight-copy",
          variant === "display" ? fontDisplay.className : fontUi.className
        )}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="scroll-spotlight-word">
            {word}
            {index < words.length - 1 ? "\u00a0" : null}
          </span>
        ))}
      </p>
    </div>
  );
}
