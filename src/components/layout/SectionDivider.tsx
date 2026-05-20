"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function SectionDivider() {
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = dividerRef.current;
      if (!el) return;

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
    { scope: dividerRef }
  );

  return <div ref={dividerRef} className="section-divider" aria-hidden="true" />;
}
