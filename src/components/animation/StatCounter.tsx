"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export type StatItem = {
  value: string;
  label: string;
};

type StatCounterProps = {
  stats: readonly StatItem[];
  className?: string;
};

function parseStatValue(value: string): {
  kind: "number" | "currency" | "range" | "text";
  end?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
} {
  if (value.includes("–")) return { kind: "range" };
  if (value.startsWith("$")) {
    const num = parseFloat(value.slice(1));
    return { kind: "currency", end: num, prefix: "$", decimals: 2 };
  }
  const match = value.match(/^([\d.]+)(.*)$/);
  if (match) {
    return {
      kind: "number",
      end: parseFloat(match[1]),
      suffix: match[2] || "",
      decimals: match[1].includes(".") ? match[1].split(".")[1].length : 0,
    };
  }
  return { kind: "text" };
}

function formatAnimatedValue(
  current: number,
  parsed: ReturnType<typeof parseStatValue>
): string {
  if (parsed.kind === "currency") {
    return `${parsed.prefix}${current.toFixed(parsed.decimals ?? 2)}`;
  }
  if (parsed.kind === "number") {
    const formatted =
      parsed.decimals && parsed.decimals > 0
        ? current.toFixed(parsed.decimals)
        : Math.round(current).toString();
    return `${formatted}${parsed.suffix ?? ""}`;
  }
  return "";
}

export function StatCounter({ stats, className }: StatCounterProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const bar = barRef.current;
      if (!bar) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const valueEls = gsap.utils.toArray<HTMLElement>(".stat-value-inner");

      if (reduceMotion) return;

      valueEls.forEach((el) => {
        const finalText = el.dataset.finalValue ?? el.textContent ?? "";
        const parsed = parseStatValue(finalText);

        if (parsed.kind === "range" || parsed.kind === "text" || parsed.end === undefined) {
          gsap.from(el, {
            opacity: 0,
            y: 12,
            duration: 0.8,
            ease: "expo.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          });
          return;
        }

        const counter = { val: 0 };
        gsap.to(counter, {
          val: parsed.end,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          onUpdate: () => {
            el.textContent = formatAnimatedValue(counter.val, parsed);
          },
          onComplete: () => {
            el.textContent = finalText;
          },
        });
      });
    },
    { scope: barRef }
  );

  return (
    <div ref={barRef} className={cn("stat-bar bento-card bento-card--12", className)}>
      <div className="stat-bar-inner">
        {stats.flatMap((stat, index) => {
          const item = (
            <div key={stat.label} className="stat-item">
              <span
                className={cn("stat-value", fontDisplay.className)}
                aria-label={`${stat.value} ${stat.label}`}
              >
                <span
                  className="stat-value-inner"
                  data-final-value={stat.value}
                >
                  {stat.value}
                </span>
              </span>
              <span className={cn("stat-label", fontMono.className)}>
                {stat.label}
              </span>
            </div>
          );
          if (index < stats.length - 1) {
            return [
              item,
              <span
                key={`${stat.label}-divider`}
                className="stat-divider"
                aria-hidden="true"
              />,
            ];
          }
          return [item];
        })}
      </div>
    </div>
  );
}
