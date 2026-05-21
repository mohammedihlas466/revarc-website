"use client";

import { useRef } from "react";
import { CalendarCard } from "@/components/contact/CalendarCard";
import { ContactItem } from "@/components/ui/ContactItem";
import { StatusPill } from "@/components/ui/StatusPill";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle } from "lucide-react";
function LinkedInIcon({
  className,
  size = 14,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const EYEBROW = "START HERE";

const HEADLINE_LINE_1 = "Book a";

const HEADLINE_LINE_2 = "strategy call.";

const SUBTITLE_P1 =
  "A 30-minute conversation about your property's revenue architecture. RevArc audits your current state, identifies the highest-leverage opportunities, and determines whether a partnership makes sense for both sides.";

const SUBTITLE_P2 =
  "This is a diagnostic, not a pitch. You will leave the call with a clear understanding of your property's revenue gaps and what closing them would look like — whether or not you choose to work with RevArc.";

const CONTACT_ICON_PROPS = {
  size: 14,
  strokeWidth: 1.2,
  className: "contact-icon",
} as const;

const CONTACT_ITEMS = [
  {
    icon: <Mail {...CONTACT_ICON_PROPS} aria-hidden="true" />,
    label: "EMAIL",
    value: "contact@revarcsystems.com",
    href: "mailto:contact@revarcsystems.com",
    external: false,
  },
  {
    icon: <MessageCircle {...CONTACT_ICON_PROPS} aria-hidden="true" />,
    label: "WHATSAPP",
    value: "Message RevArc",
    href: "https://wa.me/PLACEHOLDER_NUMBER",
    external: true,
  },
  {
    icon: <LinkedInIcon {...CONTACT_ICON_PROPS} />,
    label: "LINKEDIN",
    value: "Mohamed Ihlas",
    href: "https://linkedin.com/in/PLACEHOLDER",
    external: true,
  },
] as const;

export function ContactHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const eyebrow = section.querySelector(".contact-hero__eyebrow");
      const headline = section.querySelector(".contact-hero__headline");
      const subtitle = section.querySelector(".contact-hero__subtitle-block");
      const items = gsap.utils.toArray<HTMLElement>(".contact-item");
      const calendar = section.querySelector(".contact-hero__calendar");

      if (reduceMotion) {
        gsap.set(
          [eyebrow, headline, subtitle, calendar, ...items].filter(Boolean),
          { opacity: 1, y: 0, clearProps: "all" }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      if (eyebrow) {
        tl.from(
          eyebrow,
          { y: 12, opacity: 0, duration: 0.5, immediateRender: false },
          0.2
        );
      }

      if (headline) {
        tl.from(
          headline,
          { y: 20, opacity: 0, duration: 0.7, immediateRender: false },
          0.3
        );
      }

      if (calendar) {
        tl.from(
          calendar,
          { y: 40, opacity: 0, duration: 0.8, immediateRender: false },
          0.4
        );
      }

      if (subtitle) {
        tl.from(
          subtitle,
          { y: 12, opacity: 0, duration: 0.6, immediateRender: false },
          0.5
        );
      }

      if (items.length) {
        tl.from(
          items,
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            immediateRender: false,
          },
          0.7
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="contact-hero-section"
      aria-labelledby="contact-hero-heading"
    >
      <div className="contact-hero-section__inner">
        <div className="contact-hero__row bento-row">
          <div className="contact-hero__left bento-card-slot--5">
            <StatusPill className="contact-hero__eyebrow">
              {EYEBROW}
            </StatusPill>

            <h1
              id="contact-hero-heading"
              className={cn("contact-hero__headline", fontDisplay.className)}
            >
              <span className="contact-hero__headline-line contact-hero__headline-line--primary">
                {HEADLINE_LINE_1}
              </span>
              <span className="contact-hero__headline-line contact-hero__headline-line--silver">
                {HEADLINE_LINE_2}
              </span>
            </h1>

            <div className="contact-hero__subtitle-block">
              <p className={cn("contact-hero__subtitle", fontUi.className)}>
                {SUBTITLE_P1}
              </p>
              <p className={cn("contact-hero__subtitle", fontUi.className)}>
                {SUBTITLE_P2}
              </p>
            </div>

            <div className="contact-hero__details">
              {CONTACT_ITEMS.map((item, index) => (
                <ContactItem
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  external={item.external}
                  className={
                    index === CONTACT_ITEMS.length - 1
                      ? "contact-item--last"
                      : undefined
                  }
                />
              ))}
            </div>
          </div>

          <div className="contact-hero__calendar">
            <CalendarCard />
          </div>
        </div>
      </div>
    </section>
  );
}
