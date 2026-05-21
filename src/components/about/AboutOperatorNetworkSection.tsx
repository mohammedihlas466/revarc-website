"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { StepItem } from "@/components/ui/StepItem";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const CARD_BODY = `Revenue strategy for boutique hotels requires work that cannot be done remotely. Golden hour photography. On-site brand audits. Local reputation management in the native language. Meetings with property staff. Technical interventions in booking system backends.

RevArc maintains a vetted network of local operators across European markets — photographers, videographers, reputation management specialists, booking system technicians, and market scouts. Every operator is tested through paid trial projects before they handle priority work.

The network is not a marketplace. It is a curated roster, built over years, managed directly by RevArc. Operators are coordinated through the Command Centre. They work under RevArc's quality standards, on RevArc's timeline, accountable to RevArc's methodology.

When your partnership requires physical-world execution in your market, RevArc already has trusted operators on the ground.`;

const OPERATOR_CATEGORIES = [
  {
    number: "01",
    title: "Photographers & Videographers",
    body: "Hotel exteriors, interiors, lifestyle, food, drone, golden hour. Tested via paid trial shoot before roster inclusion.",
  },
  {
    number: "02",
    title: "Reputation Specialists",
    body: "Local-language review monitoring and response drafting. Native voice. Escalation handling. Critical for non-English markets.",
  },
  {
    number: "03",
    title: "Booking System Technicians",
    body: "Cloudbeds, SiteMinder, Mews specialists for backend configuration, audits, and interventions.",
  },
  {
    number: "04",
    title: "PR & Media Contacts",
    body: "Local hospitality journalists, regional travel publications, industry newsletters. Relationship-based, built through warm introductions.",
  },
  {
    number: "05",
    title: "Market Scouts",
    body: "On-the-ground operators who know which properties are underserved, which markets are shifting, and where the opportunities are forming.",
  },
] as const;

export function AboutOperatorNetworkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const narrativeCard = section.querySelector(".about-operator__narrative-card");
      const steps = gsap.utils.toArray<HTMLElement>(".about-operator__steps .step-item");

      if (reduceMotion) {
        gsap.set([narrativeCard, ...steps].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      if (narrativeCard) {
        gsap.from(narrativeCard, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: narrativeCard,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (steps.length) {
        gsap.from(steps, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "expo.out",
          stagger: 0.1,
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".about-operator__steps"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="about-operator-section standard-section"
      aria-labelledby="about-operator-title"
    >
      <SectionHeader
        eyebrow="THE OPERATOR NETWORK"
        titleLine1="Hands and feet"
        titleLine2="in your market."
        titleId="about-operator-title"
      />

      <div className="about-operator__row bento-row">
        <BentoCard
          colSpan={7}
          borderGlow
          className="about-operator__narrative-card"
          aria-labelledby="about-operator-card-title"
        >
          <div className="bento-card-content about-operator__card-content">
            <p className={cn("card-label", fontMono.className)}>
              <span className="card-label-dot" aria-hidden="true" />
              PHYSICAL-WORLD EXECUTION
            </p>

            <h3
              id="about-operator-card-title"
              className="sr-only"
            >
              Physical-world execution
            </h3>

            <p className={cn("card-body about-operator__card-body", fontUi.className)}>
              {CARD_BODY}
            </p>
          </div>
        </BentoCard>

        <div className="about-operator__steps bento-card-slot--5">
          {OPERATOR_CATEGORIES.map((category) => (
            <StepItem
              key={category.number}
              number={category.number}
              title={category.title}
              body={category.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
