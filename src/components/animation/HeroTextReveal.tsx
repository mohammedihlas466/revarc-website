"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type HeroLineProps = {
  text: string;
  className: string;
  lineClassName: string;
};

function HeroLine({ text, className, lineClassName }: HeroLineProps) {
  const words = text.split(" ");

  return (
    <span
      className={cn(
        "hero-headline-line block",
        lineClassName,
        fontDisplay.className,
        className
      )}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="hero-word">
          <span className="hero-word-inner">{word}</span>
        </span>
      ))}
    </span>
  );
}

export function HeroTextReveal() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const lines = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".hero-headline-line")
      );
      if (!lines.length) return;

      const words = lines.flatMap((line) =>
        gsap.utils.toArray<HTMLElement>(line.querySelectorAll(".hero-word-inner"))
      );

      if (reduceMotion) {
        gsap.set(words, { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      const tl = gsap.timeline({ delay: 0.35 });

      lines.forEach((line, index) => {
        const lineWords = line.querySelectorAll<HTMLElement>(".hero-word-inner");
        tl.from(
          lineWords,
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.08,
            immediateRender: false,
          },
          index === 0 ? undefined : "-=0.6"
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <h1 ref={containerRef} className="hero-headlines">
      <HeroLine
        text="You built the hotel."
        lineClassName="hero-headline-line hero-line-1"
        className="hero-line-1-text"
      />
      <HeroLine
        text="Who builds"
        lineClassName="hero-headline-line hero-line-2"
        className="hero-line-2-text"
      />
      <HeroLine
        text="the revenue?"
        lineClassName="hero-headline-line hero-line-3"
        className="hero-line-3-text"
      />
    </h1>
  );
}
