"use client";

import { useRef } from "react";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const CLOSING_LINE_1 = "Your property deserves";

const CLOSING_LINE_2 = "a revenue strategy.";

export function ContactClosingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const lines = gsap.utils.toArray<HTMLElement>(
        ".contact-closing__line"
      );

      if (reduceMotion) {
        gsap.set(lines, { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.from(lines, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.15,
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="contact-closing-section"
      aria-label="Closing statement"
    >
      <div className="contact-closing-section__inner">
        <p className={cn("contact-closing__headline", fontDisplay.className)}>
          <span className="contact-closing__line contact-closing__line--primary">
            {CLOSING_LINE_1}
          </span>
          <span className="contact-closing__line contact-closing__line--silver">
            {CLOSING_LINE_2}
          </span>
        </p>
      </div>
    </section>
  );
}
