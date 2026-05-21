"use client";

import { useRef, useState } from "react";
import { RevArcSlidingNumber } from "@/components/ui/RevArcSlidingNumber";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const TARGET = 1_000_000;

function ThreeDigitSlide({ value }: { value: number }) {
  const clamped = Math.min(999, Math.max(0, value));
  const digits = String(clamped).padStart(3, "0").split("");

  return (
    <span className="polar-sliding-million__group">
      {digits.map((digit, index) => (
        <RevArcSlidingNumber
          key={`${index}-${digit}`}
          value={parseInt(digit, 10)}
        />
      ))}
    </span>
  );
}

type PolarRetroCountdownProps = {
  className?: string;
};

export function PolarRetroCountdown({ className }: PolarRetroCountdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        setValue(TARGET);
        return;
      }

      const counter = { val: 0 };

      gsap.to(counter, {
        val: TARGET,
        duration: 2.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: () => {
          setValue(Math.round(counter.val));
        },
        onComplete: () => {
          setValue(TARGET);
        },
      });
    },
    { scope: rootRef }
  );

  const millions = Math.min(1, Math.floor(value / 1_000_000));
  const thousands = Math.floor((value % 1_000_000) / 1_000);
  const ones = value % 1_000;
  const showMillions = millions > 0;

  return (
    <div
      ref={rootRef}
      className={cn("polar-metric-hero polar-metric-hero--number", className)}
      aria-label="One million confirmed direct bookings"
    >
      <div className="polar-sliding-million" aria-hidden="true">
        {showMillions ? (
          <>
            <RevArcSlidingNumber
              value={millions}
              className="polar-sliding-million__lead"
            />
            <span className="polar-sliding-million__sep">,</span>
          </>
        ) : null}
        <ThreeDigitSlide value={thousands} />
        <span className="polar-sliding-million__sep">,</span>
        <ThreeDigitSlide value={ones} />
      </div>
    </div>
  );
}
