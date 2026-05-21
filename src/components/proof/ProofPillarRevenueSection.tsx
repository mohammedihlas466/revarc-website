"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { ServiceTag } from "@/components/ui/ServiceTag";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const SUBTITLE =
  "A boutique villa's low season is not a marketing problem. Inbound tourist demand leaves the region. Spending more on ads to capture demand that does not exist is a way to lose money faster. The strategic move is to manufacture a different kind of demand.";

const PACKAGE_CARDS = [
  {
    id: "revenue-01",
    label: "REVENUE STREAM 01",
    titleLine1: "Valentine's Day",
    titleLine2: "Package.",
    body: "Single-night romantic experience. Marketed on a calendar trigger, February 12–14. Priced for the local market with full-board positioning.",
    evidence:
      "Two confirmed bookings against $87 in ad spend. Campaign-attributable revenue: Rs. 30,000+.",
    statusTag: "CONFIRMED BOOKINGS ✓",
    statusVariant: "confirmed" as const,
    ghostNumeral: "01",
  },
  {
    id: "revenue-02",
    label: "REVENUE STREAM 02",
    titleLine1: "Day Out",
    titleLine2: "Experience.",
    body: "Daytime villa package for local couples and small groups. Uses the property's amenities during hours that would otherwise sit idle. Productised pricing. Dedicated reel campaign.",
    evidence:
      "Multiple confirmed bookings, December 2024 – March 2025. Documented: Rs. 17,500 (Dec 14), Rs. 17,000 (Dec 17), Rs. 17,500 (Jan 4), Rs. 10,000 (Mar 9). Campaign reel: 301 reactions, 35 shares.",
    statusTag: "CONFIRMED BOOKINGS ✓",
    statusVariant: "confirmed" as const,
    ghostNumeral: "02",
  },
  {
    id: "revenue-03",
    label: "REVENUE STREAM 03",
    titleLine1: "Night Out",
    titleLine2: "Experience.",
    body: "Evening hire for groups of up to 20. Targets an entirely new demand segment the property was not reaching. Sales document and ad storyboard locked. Live campaign in market.",
    statusTag: "IN MARKET",
    statusVariant: "service" as const,
    ghostNumeral: "03",
  },
] as const;

const GROUP_ITEMS = [
  {
    guest: "Sachitha Fernando",
    dates: "13–15 April",
    config: "16 guests + 2 children · full board · 2 nights",
    revenue: "Rs. 245,000",
    featured: true,
  },
  {
    guest: "Nimna Kodithuwakku",
    dates: "15–16 April",
    config: "15 guests · full board · 1 night",
    revenue: "Rs. 120,000",
    featured: false,
  },
  {
    guest: "Group BB Booking",
    dates: "25–26 January",
    config: "14 guests · bed & breakfast · 1 night",
    revenue: "Rs. 115,000",
    featured: false,
  },
] as const;

const BELOW_CARD =
  "Three reservations. Four nights of inventory. Rs. 480,000 in documented revenue. This is what happens when a property productises its idle hours — it does not have an off-season. It has a different season.";

const CITATION =
  "Source: Named guest records. Booking confirmations and revenue verified through property management records.";

function parseRevenueValue(value: string): number {
  const match = value.match(/[\d,]+/);
  if (!match) return 0;
  return parseInt(match[0].replace(/,/g, ""), 10);
}

export function ProofPillarRevenueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const packageCards = gsap.utils.toArray<HTMLElement>(
        ".proof-revenue-package .bento-card"
      );
      const groupCard = section.querySelector(".proof-revenue-group .bento-card");
      const below = section.querySelector(".proof-revenue-below");
      const revenueValues = gsap.utils.toArray<HTMLElement>(
        ".proof-group-revenue-inner"
      );

      if (reduceMotion) {
        gsap.set(
          [...packageCards, groupCard, below, ...revenueValues].filter(Boolean),
          { opacity: 1, y: 0, clearProps: "all" }
        );
        return;
      }

      gsap.from(packageCards, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.15,
        immediateRender: false,
        scrollTrigger: {
          trigger: section.querySelector(".proof-revenue-packages"),
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onComplete: () => {
          packageCards.forEach((card) => {
            const tag = card.querySelector(".proof-revenue-status");
            if (tag) {
              gsap.from(tag, {
                opacity: 0,
                duration: 0.15,
                ease: "expo.out",
              });
            }
          });
        },
      });

      if (groupCard) {
        gsap.from(groupCard, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: groupCard,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      revenueValues.forEach((el) => {
        const finalText = el.dataset.finalValue ?? el.textContent ?? "";
        const end = parseRevenueValue(finalText);
        if (!end) return;

        const counter = { val: 0 };
        gsap.to(counter, {
          val: end,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: groupCard,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `Rs. ${Math.round(counter.val).toLocaleString("en-US")}`;
          },
          onComplete: () => {
            el.textContent = finalText;
          },
        });
      });

      if (below) {
        gsap.from(below, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: below,
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
      className="proof-revenue-section standard-section"
      aria-labelledby="proof-revenue-title"
    >
      <SectionHeader
        eyebrow="PILLAR 02 · REVENUE ARCHITECTURE"
        titleLine1="Inventing revenue"
        titleLine2="when occupancy disappears."
        subtitle={SUBTITLE}
        titleId="proof-revenue-title"
      />

      <div className="proof-revenue-packages bento-grid">
        <div className="bento-row">
          {PACKAGE_CARDS.map((card) => (
            <BentoCard
              key={card.id}
              colSpan={4}
              ghostNumeral={card.ghostNumeral}
              borderGlow
              className="proof-revenue-package"
              aria-labelledby={`${card.id}-title`}
            >
              <div className="bento-card-content">
                <p className={cn("card-label", fontMono.className)}>
                  <span className="card-label-dot" aria-hidden="true" />
                  {card.label}
                </p>

                <h3
                  id={`${card.id}-title`}
                  className={cn("card-title", fontDisplay.className)}
                >
                  <span className="card-title-line-1">{card.titleLine1}</span>
                  <br />
                  <span className="card-title-line-2">{card.titleLine2}</span>
                </h3>

                <p className={cn("card-body", fontUi.className)}>{card.body}</p>

                {"evidence" in card && card.evidence ? (
                  <p className={cn("proof-revenue-evidence", fontUi.className)}>
                    {card.evidence}
                  </p>
                ) : null}

                {card.statusVariant === "confirmed" ? (
                  <span
                    className={cn(
                      "status-tag-confirmed proof-revenue-status",
                      fontMono.className
                    )}
                  >
                    {card.statusTag}
                  </span>
                ) : (
                  <ServiceTag className="proof-revenue-status">
                    {card.statusTag}
                  </ServiceTag>
                )}
              </div>
            </BentoCard>
          ))}
        </div>

        <BentoCard
          colSpan={12}
          borderGlow
          className="proof-revenue-group"
          aria-labelledby="proof-group-bookings-label"
        >
          <div className="bento-card-content proof-group-bookings-content">
            <p
              id="proof-group-bookings-label"
              className={cn("card-label", fontMono.className)}
            >
              <span className="card-label-dot" aria-hidden="true" />
              GROUP BOOKINGS · DOCUMENTED
            </p>

            <div className="proof-group-bookings-row">
              {GROUP_ITEMS.map((item, index) => (
                <div key={item.guest} className="proof-group-booking-item">
                  {index > 0 ? (
                    <span
                      className="proof-group-divider stat-divider"
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className="proof-group-booking-details">
                    <p className={cn("proof-group-guest", fontUi.className)}>
                      {item.guest}
                    </p>
                    <p className={cn("proof-group-dates", fontMono.className)}>
                      {item.dates}
                    </p>
                    <p className={cn("proof-group-config", fontUi.className)}>
                      {item.config}
                    </p>
                    <p
                      className={cn(
                        "proof-group-revenue",
                        item.featured && "proof-group-revenue--featured",
                        fontDisplay.className
                      )}
                    >
                      <span
                        className="proof-group-revenue-inner"
                        data-final-value={item.revenue}
                      >
                        {item.revenue}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>
      </div>

      <p className={cn("proof-revenue-below", fontUi.className)}>{BELOW_CARD}</p>

      <SourceCitation className="proof-revenue-citation">{CITATION}</SourceCitation>
    </section>
  );
}
