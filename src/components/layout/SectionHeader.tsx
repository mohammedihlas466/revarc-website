"use client";

import { useRef } from "react";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle?: string;
  titleId?: string;
  className?: string;
};

function TitleLine({
  text,
  className,
  lineClassName,
}: {
  text: string;
  className: string;
  lineClassName: string;
}) {
  const words = text.split(" ");

  return (
    <span
      className={cn(
        "section-title-line block",
        lineClassName,
        fontDisplay.className,
        className
      )}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="section-title-word">
          <span className="section-title-word-inner">{word}</span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  titleId,
  className,
}: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const el = headerRef.current;
      if (!el || !scrollReady) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".section-eyebrow-inner", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
      });

      const lines = gsap.utils.toArray<HTMLElement>(".section-title-line");
      lines.forEach((line, index) => {
        const words = line.querySelectorAll<HTMLElement>(
          ".section-title-word-inner"
        );
        tl.from(
          words,
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.06,
          },
          index === 0 ? "-=0.4" : "-=0.7"
        );
      });

      const subtitleEl = el.querySelector(".section-subtitle");
      if (subtitleEl) {
        tl.from(
          subtitleEl,
          { y: 24, opacity: 0, duration: 0.8, ease: "expo.out" },
          "-=0.5"
        );
      }
    },
    { scope: headerRef, dependencies: [scrollReady] }
  );

  return (
    <header ref={headerRef} className={cn("section-header", className)}>
      <div className="section-eyebrow section-eyebrow-inner">
        <span className="status-pill-dot" aria-hidden="true" />
        <span className={cn("section-eyebrow-text", fontMono.className)}>
          {eyebrow}
        </span>
        <span className="section-rule" aria-hidden="true" />
      </div>

      <h2 id={titleId} className="section-titles">
        <TitleLine
          text={titleLine1}
          lineClassName="section-title-line-1"
          className="section-title-line-1-text"
        />
        <TitleLine
          text={titleLine2}
          lineClassName="section-title-line-2"
          className="section-title-line-2-text"
        />
      </h2>

      {subtitle ? (
        <p className={cn("section-subtitle", fontUi.className)}>{subtitle}</p>
      ) : null}
    </header>
  );
}
