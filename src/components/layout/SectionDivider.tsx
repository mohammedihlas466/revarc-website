"use client";

import { useRef } from "react";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";

export function SectionDivider() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const el = dividerRef.current;
      if (!el || !scrollReady) return;

      gsap.fromTo(
        el,
        { scaleX: 0, transformOrigin: "center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: dividerRef, dependencies: [scrollReady] }
  );

  return <div ref={dividerRef} className="section-divider" aria-hidden="true" />;
}
