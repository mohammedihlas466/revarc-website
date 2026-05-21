"use client";

import { useRef, useState } from "react";
import { RevArcSlidingNumber } from "@/components/ui/RevArcSlidingNumber";
import {
  animate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const TARGET = 1_000_000;
const COUNTER_DURATION = 4;
const SNAP_STEP = 10_000;

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
  const targetValue = useMotionValue(0);
  const smoothValue = useSpring(targetValue, {
    stiffness: 85,
    damping: 28,
    mass: 0.8,
  });
  const [display, setDisplay] = useState(0);
  const lastSnapRef = useRef(-1);
  const scrollReady = useScrollAnimationReady();

  useMotionValueEvent(smoothValue, "change", (latest) => {
    const snapped = Math.min(
      TARGET,
      Math.round(latest / SNAP_STEP) * SNAP_STEP
    );
    if (snapped !== lastSnapRef.current) {
      lastSnapRef.current = snapped;
      setDisplay(snapped);
    }
  });

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        targetValue.set(TARGET);
        setDisplay(TARGET);
        return;
      }

      targetValue.set(0);
      setDisplay(0);
      lastSnapRef.current = -1;

      const st = ScrollTrigger.create({
        trigger: root,
        start: "top 88%",
        once: true,
        onEnter: () => {
          lastSnapRef.current = -1;
          targetValue.set(0);
          setDisplay(0);
          animate(targetValue, TARGET, {
            duration: COUNTER_DURATION,
            ease: [0.22, 0.03, 0.25, 1],
            onComplete: () => {
              lastSnapRef.current = TARGET;
              setDisplay(TARGET);
            },
          });
        },
      });

      return () => {
        st.kill();
      };
    },
    { scope: rootRef, dependencies: [scrollReady] }
  );

  return (
    <div
      ref={rootRef}
      className={cn("polar-metric-hero polar-metric-hero--number", className)}
      aria-label="One million confirmed direct bookings"
    >
      <div className="polar-sliding-million">
        <MillionDisplay value={display} />
      </div>
    </div>
  );
}
