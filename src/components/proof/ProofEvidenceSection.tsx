"use client";

import { useRef } from "react";
import { RevArcEvidenceLightRays } from "@/components/backgrounds/RevArcEvidenceLightRays";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const SUBTITLE =
  "Every claim in this document is backed by a verifiable artifact. OTA dashboards, ad account performance, reputation profiles — reproduced here as they appear in the platforms.";

const DASHBOARD_CARDS = [
  {
    id: "booking-com",
    label: "BOOKING.COM PARTNER EXTRANET",
    caption:
      "Preferred Partner status. Active reservations. Includes the documented 18-night Russian booking at US$1,701.",
    imageSrc: "/proof/booking-com-extranet.png",
    imageAlt: "Booking.com Partner Extranet dashboard",
  },
  {
    id: "agoda",
    label: "AGODA PARTNER DASHBOARD",
    caption:
      "March 2026 performance after rehabilitation. Multiple confirmed international bookings.",
    imageSrc: "/proof/agoda-dashboard.png",
    imageAlt: "Agoda YCS partner dashboard",
  },
  {
    id: "meta",
    label: "META ADS MANAGER",
    caption:
      "Lifetime spend: $2,840.23. Opportunity Score: 100/100. Campaign architecture for WhatsApp conversation volume.",
    imageSrc: "/proof/meta-ads-manager.png",
    imageAlt: "Meta Ads Manager dashboard",
  },
  {
    id: "google",
    label: "GOOGLE BUSINESS PROFILE",
    caption:
      "4.7 stars across 55+ reviews. 795 customer interactions tracked.",
    imageSrc: "/proof/google-business-profile.png",
    imageAlt: "Google Business Profile dashboard",
  },
] as const;

function DashboardPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="proof-evidence-image-wrap proof-evidence-placeholder">
      <p className={cn("proof-evidence-fallback-caption", fontUi.className)}>
        {caption}
      </p>
      <p className={cn("proof-evidence-fallback-note", fontMono.className)}>
        Dashboard screenshots available on request.
      </p>
    </div>
  );
}

export function ProofEvidenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const rows = gsap.utils.toArray<HTMLElement>(".proof-evidence-row");

      if (reduceMotion) {
        rows.forEach((row) => {
          const cards = gsap.utils.toArray<HTMLElement>(
            row.querySelectorAll(".bento-card")
          );
          const placeholders = gsap.utils.toArray<HTMLElement>(
            row.querySelectorAll(".proof-evidence-placeholder")
          );
          gsap.set([...cards, ...placeholders], {
            opacity: 1,
            y: 0,
            clearProps: "all",
          });
        });
        return;
      }

      rows.forEach((row) => {
        const cards = gsap.utils.toArray<HTMLElement>(
          row.querySelectorAll(".proof-evidence-card .bento-card")
        );

        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            cards.forEach((card) => {
              const placeholder = card.querySelector(".proof-evidence-placeholder");
              if (placeholder) {
                gsap.from(placeholder, {
                  opacity: 0,
                  duration: 0.8,
                  ease: "expo.out",
                });
              }
            });
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="proof-evidence-section"
      aria-labelledby="proof-evidence-title"
    >
      <div className="proof-evidence-bg-stack" aria-hidden="true">
        <div className="proof-evidence-light-rays-layer">
          <RevArcEvidenceLightRays />
        </div>
        <div className="proof-evidence-scrim" />
      </div>

      <div className="proof-evidence-section__inner standard-section">
        <SectionHeader
          eyebrow="THE EVIDENCE"
          titleLine1="Receipts,"
          titleLine2="not estimates."
          subtitle={SUBTITLE}
          titleId="proof-evidence-title"
        />

        <div className="proof-evidence-grid bento-grid">
          {[DASHBOARD_CARDS.slice(0, 2), DASHBOARD_CARDS.slice(2)].map(
            (rowCards, rowIndex) => (
              <div key={`row-${rowIndex}`} className="proof-evidence-row bento-row">
                {rowCards.map((card) => (
                  <BentoCard
                    key={card.id}
                    colSpan={6}
                    className="proof-evidence-card"
                    aria-labelledby={`${card.id}-label`}
                  >
                    <div className="bento-card-content proof-evidence-content">
                      <p
                        id={`${card.id}-label`}
                        className={cn("card-label", fontMono.className)}
                      >
                        {card.label}
                      </p>

                      <p className={cn("proof-evidence-caption", fontUi.className)}>
                        {card.caption}
                      </p>

                      <DashboardPlaceholder caption={card.caption} />
                    </div>
                  </BentoCard>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
