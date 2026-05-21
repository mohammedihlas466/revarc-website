"use client";

import { useRef } from "react";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const CALL_ITEMS = [
  {
    number: "01",
    titleBefore: "Revenue ",
    titleEm: "diagnosis.",
    titleAfter: "",
    body:
      "Your property's current revenue mix. OTA dependency percentage. Direct booking infrastructure — what exists and what's missing. Where the margin is going and why.",
  },
  {
    number: "02",
    titleBefore: "Opportunity ",
    titleEm: "identification.",
    titleAfter: "",
    body:
      "The three highest-leverage opportunities specific to your property. Revenue Architecture potential. Off-season gaps. Guest segments you are not reaching.",
  },
  {
    number: "03",
    titleBefore: "Partnership ",
    titleEm: "assessment.",
    titleAfter: "",
    body:
      "Whether a RevArc partnership is the right intervention for your property — or whether your situation calls for something different. An honest assessment, not a close.",
  },
] as const;

export function ContactCallCoversSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const items = gsap.utils.toArray<HTMLElement>(".call-item");

      if (reduceMotion) {
        gsap.set(items, { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.12,
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
      className="contact-call-section"
      aria-labelledby="contact-call-heading"
    >
      <h2 id="contact-call-heading" className="sr-only">
        What the call covers
      </h2>

      <div className="contact-call-section__inner">
        <div className="contact-call__row bento-row">
          {CALL_ITEMS.map((item) => (
            <article key={item.number} className="call-item bento-card-slot--4">
              <p
                className={cn("call-item-number", fontDisplay.className)}
                aria-hidden="true"
              >
                {item.number}
              </p>
              <h3 className={cn("call-item-title", fontDisplay.className)}>
                {item.titleBefore}
                <span className="call-item-title-em">{item.titleEm}</span>
                {item.titleAfter}
              </h3>
              <p className={cn("call-item-body", fontUi.className)}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
