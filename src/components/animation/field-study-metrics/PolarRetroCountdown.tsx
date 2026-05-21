"use client";

import { useRef, useState } from "react";
import { RevArcSlidingNumber } from "@/components/ui/RevArcSlidingNumber";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const TARGET = 1_000_000;

function MillionDisplay({ value }: { value: number }) {
  const clamped = Math.min(TARGET, Math.max(0, value));
  const millions = Math.floor(clamped / 1_000_000);
  const thousands = Math.floor((clamped % 1_000_000) / 1_000);
  const ones = clamped % 1_000;
  const thousandsDigits = String(thousands).padStart(3, "0").split("");
  const onesDigits = String(ones).padStart(3, "0").split("");

  return (
    <>
      <RevArcSlidingNumber value={millions} className="polar-sliding-million__lead" />
      <span className="polar-sliding-million__sep">,</span>
      <span className="polar-sliding-million__group" aria-hidden="true">
        {thousandsDigits.map((digit, index) => (
          <RevArcSlidingNumber key={`t-${index}`} value={parseInt(digit, 10)} />
        ))}
      </span>
      <span className="polar-sliding-million__sep">,</span>
      <span className="polar-sliding-million__group" aria-hidden="true">
        {onesDigits.map((digit, index) => (
          <RevArcSlidingNumber key={`o-${index}`} value={parseInt(digit, 10)} />
        ))}
      </span>
    </>
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

      setValue(0);
      const counter = { val: 0 };

      gsap.to(counter, {
        val: TARGET,
        duration: 4.6,
        ease: "power2.inOut",
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

  return (
    <div
      ref={rootRef}
      className={cn("polar-metric-hero polar-metric-hero--number", className)}
      aria-label="One million confirmed direct bookings"
    >
      <div className="polar-sliding-million">
        <MillionDisplay value={value} />
      </div>
    </div>
  );
}
