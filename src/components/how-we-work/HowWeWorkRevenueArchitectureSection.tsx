"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { StatusTagConfirmed } from "@/components/ui/StatusTagConfirmed";
import { StepItem } from "@/components/ui/StepItem";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const NARRATIVE_BODY = [
  "Every RevArc partnership includes a guaranteed commitment: one new revenue stream identified, architected, and delivered per 12-month period.",
  "This is not consulting. It is not a strategy deck that gathers dust. You receive a complete, ready-to-launch revenue stream — fully modelled with pricing, costs, operational requirements, and a presentation that shows you exactly what the opportunity looks like.",
  "You decide whether to build it. If you say yes, RevArc runs the marketing and lead generation as part of the partnership.",
  "This commitment is what makes a RevArc partnership categorically different from an agency retainer. An agency optimises your existing channels. RevArc builds new ones.",
] as const;

const STEPS = [
  {
    number: "01",
    title: "Asset Audit",
    body: "Map every physical and operational asset your property owns. Rooms, spaces, kitchen, staff capacity, time blocks. Identify what is underutilised.",
  },
  {
    number: "02",
    title: "Demand Mapping",
    body: "Identify underserved demand in your market. Corporate retreats, weddings, wellness, events, remote workers. Match demand to your idle assets.",
  },
  {
    number: "03",
    title: "Architecture",
    body: "Build the full revenue stream. Pricing structure, cost model, capacity constraints, operational requirements, marketing positioning.",
  },
  {
    number: "04",
    title: "Presentation",
    body: "You receive a complete pitch deck and financial model. You make the build decision with full information. No surprises. No hidden costs.",
  },
  {
    number: "05",
    title: "Operate",
    body: "Once approved, RevArc runs the marketing and lead generation for the new stream. Performance reported quarterly. Iterated based on results.",
  },
] as const;

const VALIDATED_ITEMS = [
  {
    title: "Valentine's Day Package",
    detail:
      "Single-night romantic experience. Two confirmed bookings against $87 in ad spend.",
  },
  {
    title: "Day Out Experience",
    detail:
      "Daytime villa package for local couples and groups. Multiple confirmed bookings, December 2024 – March 2025. Campaign reel: 301 reactions, 35 shares.",
  },
  {
    title: "Group Bookings",
    detail:
      "Full-property group reservations. Three documented bookings totalling Rs. 480,000 across four nights of inventory.",
  },
] as const;

const CITATION =
  "Source: All bookings verified through Meta Ads Manager, Booking.com Partner Extranet, and named guest records. Revenue Architecture methodology documented in full in the operating record.";

export function HowWeWorkRevenueArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const narrative = section.querySelector(".how-ra-narrative .bento-card");
      const steps = gsap.utils.toArray<HTMLElement>(".how-ra-step");
      const validated = section.querySelector(".how-ra-validated .bento-card");
      const statusTags = gsap.utils.toArray<HTMLElement>(
        ".how-ra-validated-item .status-tag-confirmed"
      );
      const citation = section.querySelector(".how-ra-citation");

      if (reduceMotion) {
        gsap.set(
          [narrative, ...steps, validated, citation, ...statusTags].filter(
            Boolean
          ),
          { opacity: 1, y: 0, clearProps: "all" }
        );
        return;
      }

      if (narrative) {
        gsap.from(narrative, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".how-ra-row"),
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
            trigger: section.querySelector(".how-ra-steps"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (validated) {
        gsap.from(validated, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: validated,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (statusTags.length) {
        gsap.from(statusTags, {
          opacity: 0,
          duration: 0.4,
          ease: "expo.out",
          stagger: 0.15,
          delay: 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: validated,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (citation) {
        gsap.from(citation, {
          y: 8,
          opacity: 0,
          duration: 0.4,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: citation,
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
      className="how-ra-section standard-section"
      aria-labelledby="how-ra-title"
    >
      <SectionHeader
        eyebrow="REVENUE ARCHITECTURE"
        titleLine1="Your property has assets"
        titleLine2="it isn't using."
        titleId="how-ra-title"
      />

      <div className="how-ra-grid bento-grid">
        <div className="how-ra-row bento-row">
          <BentoCard
            colSpan={7}
            borderGlow
            className="how-ra-narrative"
            aria-labelledby="how-ra-commitment-title"
          >
            <div className="bento-card-content how-ra-narrative-content">
              <p className={cn("card-label", fontMono.className)}>
                <span className="card-label-dot" aria-hidden="true" />
                THE ANNUAL COMMITMENT
              </p>

              <div
                id="how-ra-commitment-title"
                className={cn("how-ra-narrative-body", fontUi.className)}
              >
                {NARRATIVE_BODY.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="how-ra-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </BentoCard>

          <div className="how-ra-steps bento-card-slot bento-card-slot--5">
            {STEPS.map((step) => (
              <StepItem
                key={step.number}
                number={step.number}
                title={step.title}
                body={step.body}
                className="how-ra-step"
              />
            ))}
          </div>
        </div>

        <BentoCard
          colSpan={12}
          borderGlow
          className="how-ra-validated"
          aria-labelledby="how-ra-validated-label"
        >
          <div className="bento-card-content how-ra-validated-content">
            <p
              id="how-ra-validated-label"
              className={cn("card-label", fontMono.className)}
            >
              <span className="card-label-dot" aria-hidden="true" />
              DEPLOYED AND VALIDATED
            </p>

            <div className="how-ra-validated-items">
              {VALIDATED_ITEMS.map((item, index) => (
                <div key={item.title} className="how-ra-validated-item">
                  {index > 0 ? (
                    <span
                      className="how-ra-validated-divider"
                      aria-hidden="true"
                    />
                  ) : null}
                  <h4
                    className={cn(
                      "how-ra-validated-title",
                      fontDisplay.className
                    )}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={cn(
                      "how-ra-validated-detail",
                      fontUi.className
                    )}
                  >
                    {item.detail}
                  </p>
                  <StatusTagConfirmed>CONFIRMED BOOKINGS ✓</StatusTagConfirmed>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>
      </div>

      <SourceCitation className="how-ra-citation">{CITATION}</SourceCitation>
    </section>
  );
}
