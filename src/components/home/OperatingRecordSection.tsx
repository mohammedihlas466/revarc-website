"use client";

import Link from "next/link";
import { useRef } from "react";
import { FieldStudyPolarScroll } from "@/components/animation/FieldStudyPolarScroll";
import { ScrollSpotlightText } from "@/components/animation/ScrollSpotlightText";
import { FieldStudyMetricsPolar } from "@/components/home/FieldStudyMetricsPolar";
import { FieldStudyVisual } from "@/components/home/FieldStudyVisual";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { RevArcWordsStagger } from "@/components/ui/RevArcWordsStagger";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const PROLOGUE =
  "A boutique villa on the southern coast of Sri Lanka — five double rooms, three triple rooms, performing at a fraction of its potential.";

const BEFORE_BEAT = {
  index: "01 — BEFORE",
  body: "Broken OTA listings. No direct acquisition channel. Unmanaged reputation. Zero off-season programming.",
} as const;

const REBUILD_LEAD =
  "RevArc rebuilt three revenue channels in parallel and operated all three in concert for over two years.";

const REBUILD_BODY =
  "The direct booking engine generated hundreds of confirmed bookings through Meta Ads and WhatsApp at $0.47 per conversation. The OTA channel was rehabilitated to Booking.com Preferred Partner status, reaching seven international markets. Two productised revenue packages — a Valentine's Day experience and a Day Out package — were architected, launched, and both generated confirmed bookings and real revenue.";

const ENGINE_BODY =
  "The result is a working revenue engine: owner-controlled, year-round, and re-engineerable.";

const CITATION =
  "All metrics sourced from Meta Ads Manager, Booking.com Partner Extranet, Agoda YCS Dashboard, and Google Business Profile. Named guest records available on request.";

function FieldStudyBeatRow({
  index,
  body,
  align,
  visualKind,
}: {
  index: string;
  body: string;
  align: "left" | "right";
  visualKind: "before";
}) {
  const textCol = (
    <div className="field-study-beat-copy">
      <div className={cn("field-study-beat-index", fontMono.className)}>
        <RevArcWordsStagger text={index} stagger={0.12} speed={0.4} inView />
      </div>
      <ScrollSpotlightText text={body} variant="display" />
    </div>
  );

  const visualCol = <FieldStudyVisual kind={visualKind} />;

  return (
    <article
      className={cn(
        "field-study-beat",
        align === "right" && "field-study-beat--text-right"
      )}
    >
      <div className="field-study-beat-grid">
        {align === "left" ? (
          <>
            {textCol}
            {visualCol}
          </>
        ) : (
          <>
            {visualCol}
            {textCol}
          </>
        )}
      </div>
    </article>
  );
}

export function OperatingRecordSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const beats = gsap.utils.toArray<HTMLElement>(".field-study-beat");
      const prologue = section.querySelector(".field-study-prologue");
      const closure = section.querySelector(".field-study-closure");

      if (reduceMotion) {
        gsap.set([prologue, ...beats, closure], {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      const reveal = (targets: gsap.DOMTarget, trigger: Element) => {
        gsap.from(targets, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          immediateRender: false,
          scrollTrigger: {
            trigger,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      };

      if (prologue) {
        reveal(prologue, prologue);
      }

      beats.forEach((beat) => reveal(beat, beat));

      if (closure) {
        reveal(closure, closure);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="operating-record-section"
      aria-labelledby="operating-record-title"
    >
      <div className="field-study-stage">
        <div className="field-study-stage-inner standard-section">
          <SectionHeader
            className="operating-record-header"
            eyebrow="FIELD STUDY"
            titleLine1="Two years. Three channels."
            titleLine2="One property rebuilt."
            titleId="operating-record-title"
          />

          <div className="field-study-prologue">
            <p className={cn("card-label", fontMono.className)}>
              <span className="card-label-dot" aria-hidden="true" />
              THE OPERATING RECORD
            </p>
            <div className="field-study-prologue-grid">
              <div className="field-study-prologue-copy">
                <ScrollSpotlightText text={PROLOGUE} variant="display" />
              </div>
              <FieldStudyVisual kind="prologue" />
            </div>
          </div>

          <div className="field-study-beats">
            <FieldStudyBeatRow
              index={BEFORE_BEAT.index}
              body={BEFORE_BEAT.body}
              align="right"
              visualKind="before"
            />

            <FieldStudyPolarScroll
              beats={[
                {
                  index: "02 — REBUILD",
                  segments: [
                    { text: REBUILD_LEAD, variant: "display" },
                    { text: REBUILD_BODY, variant: "display" },
                  ],
                },
                {
                  index: "03 — ENGINE",
                  segments: [{ text: ENGINE_BODY, variant: "display" }],
                },
              ]}
            />
          </div>

          <div className="field-study-closure">
            <SourceCitation>{CITATION}</SourceCitation>
            <Link href="/proof" className="operating-record-link">
              Read the full operating record →
            </Link>
          </div>

          <FieldStudyMetricsPolar />
        </div>
      </div>
    </section>
  );
}
