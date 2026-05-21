"use client";

import { useRef } from "react";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type PolarSegment = {
  text: string;
  variant: "display" | "body";
};

export type PolarBeat = {
  index: string;
  segments: PolarSegment[];
};

type FieldStudyPolarScrollProps = {
  beats: PolarBeat[];
  className?: string;
};

function PolarWord({
  word,
  variant,
}: {
  word: string;
  variant: "display" | "body";
}) {
  return (
    <span
      className={cn(
        "field-study-polar-word",
        variant === "display" && "field-study-polar-word--display"
      )}
    >
      {word}
      {"\u00a0"}
    </span>
  );
}

/**
 * Polar.sh-style word reveal — scroll-scrubbed (no pin; safe with Lenis).
 */
export function FieldStudyPolarScroll({
  beats,
  className,
}: FieldStudyPolarScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const thumb = thumbRef.current;
      if (!section || !scrollReady) return;

      const words = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll(".field-study-polar-word")
      );
      if (!words.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(words, { opacity: 1, clearProps: "all" });
        if (thumb) {
          gsap.set(thumb, { top: 0, height: "100%", opacity: 1 });
        }
        return;
      }

      gsap.set(words, { opacity: 0.12 });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 78%",
        end: "bottom 22%",
        scrub: 0.55,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const revealThrough = progress * words.length;

          words.forEach((word, wordIndex) => {
            const local = gsap.utils.clamp(
              0,
              1,
              (revealThrough - wordIndex) * 1.35
            );
            gsap.set(word, { opacity: 0.12 + local * 0.88 });
          });

          if (thumb) {
            const track = thumb.parentElement;
            if (!track) return;
            const trackHeight = track.clientHeight;
            const thumbHeight = thumb.clientHeight;
            const travel = Math.max(trackHeight - thumbHeight, 0);
            gsap.set(thumb, {
              top: progress * travel,
              opacity: 0.35 + progress * 0.65,
            });
          }
        },
      });

      return () => {
        st.kill();
      };
    },
    { scope: sectionRef, dependencies: [beats, scrollReady] }
  );

  return (
    <article
      ref={sectionRef}
      className={cn("field-study-polar-group", className)}
    >
      <div className="field-study-polar-group__body">
        <div className="field-study-polar-group__layout">
          <div className="field-study-polar-rail" aria-hidden="true">
            <div className="field-study-polar-rail__track">
              <div ref={thumbRef} className="field-study-polar-rail__thumb" />
            </div>
          </div>

          <div className="field-study-polar-group__content">
            {beats.map((beat, beatIndex) => (
              <div
                key={beat.index}
                className={cn(
                  "field-study-polar-beat",
                  beatIndex > 0 && "field-study-polar-beat--spaced"
                )}
              >
                <p className={cn("field-study-polar-index", fontMono.className)}>
                  {beat.index}
                </p>

                {beat.segments.map((segment, segmentIndex) => {
                  const segmentWords = segment.text.split(" ").filter(Boolean);
                  return (
                    <p
                      key={`${beat.index}-${segment.variant}-${segmentIndex}`}
                      className={cn(
                        "field-study-polar-block",
                        fontDisplay.className,
                        "field-study-polar-block--display"
                      )}
                    >
                      {segmentWords.map((word, wordIndex) => (
                        <PolarWord
                          key={`${beat.index}-${wordIndex}`}
                          word={word}
                          variant="display"
                        />
                      ))}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
