"use client";

import { useRef } from "react";
import { CardVisual } from "@/components/backgrounds/CardVisual";
import { RevArcMeteorOrbit } from "@/components/backgrounds/RevArcMeteorOrbit";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const FOUNDER_PARAGRAPHS = [
  "I started RevArc because I spent two years operating every revenue channel for a boutique villa — and discovered that the structural problem was the same everywhere. Properties with strong assets and natural demand were underperforming because nobody was running the revenue. The General Manager runs operations. The owner runs the property. The gap between the property's potential and its actual revenue sits in that missing role.",
  "RevArc fills that role. Not as a consultant who recommends and leaves. Not as an agency that manages channels and sends monthly reports. As the operator who makes the revenue decisions alongside the owner, builds the systems to execute them, and stays accountable for the outcome across a multi-year partnership.",
  "Before RevArc, I built and operated the direct booking engine, the OTA strategy, the reputation infrastructure, and multiple Revenue Architecture streams for Tranquil Escape Villa in Hikkaduwa — generating over Rs. 2 million in tracked revenue across three channels, reaching seven international markets, and earning Booking.com Preferred Partner status. Every methodology documented in this site was built and refined through that engagement.",
  "I work at the intersection of strategic judgment and operational execution. The financial models, the Revenue Architecture deliverables, the Command Centre, the operator coordination — I built all of it. The methodology is not theoretical. It was stress-tested on a live property, with real money, for over two years.",
] as const;

export function AboutFounderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const founderCard = section.querySelector(".about-founder-card");
      const paragraphs = gsap.utils.toArray<HTMLElement>(
        ".about-founder__paragraph"
      );
      const cardVisual = section.querySelector(".about-founder-card .card-visual");

      if (reduceMotion) {
        gsap.set([founderCard, ...paragraphs, cardVisual].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      if (founderCard) {
        gsap.from(founderCard, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: founderCard,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (paragraphs.length) {
        gsap.from(paragraphs, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".about-founder__narrative"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (cardVisual) {
        gsap.to(cardVisual, {
          y: -25,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: founderCard,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="about-founder-section standard-section"
      aria-labelledby="about-founder-title"
    >
      <SectionHeader
        eyebrow="THE FOUNDER"
        titleLine1="Mohamed Ihlas."
        titleLine2="Galle, Sri Lanka."
        titleId="about-founder-title"
      />

      <div className="about-founder__row bento-row">
        <BentoCard
          colSpan={5}
          className="about-founder-card founder-card"
          aria-label="Founder portrait"
        >
          <CardVisual>
            <RevArcMeteorOrbit />
          </CardVisual>
        </BentoCard>

        <div className="about-founder__narrative">
          {FOUNDER_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={cn("about-founder__paragraph", fontUi.className)}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
