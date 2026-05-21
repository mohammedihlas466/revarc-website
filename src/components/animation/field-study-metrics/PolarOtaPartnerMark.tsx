"use client";

import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type PolarOtaPartnerMarkProps = {
  className?: string;
};

/**
 * Minimal typographic mark for OTA partner status — no progress UI or status chips.
 */
export function PolarOtaPartnerMark({ className }: PolarOtaPartnerMarkProps) {
  return (
    <div
      className={cn("polar-ota-mark", className)}
      role="img"
      aria-label="Booking.com Preferred Partner status"
    >
      <span className={cn("polar-ota-mark__eyebrow", fontMono.className)}>
        PARTNER TIER
      </span>
      <span className="polar-ota-mark__rule" aria-hidden="true" />
      <p className={cn("polar-ota-mark__title", fontDisplay.className)}>
        Preferred
        <span className="polar-ota-mark__title-italic"> Partner</span>
      </p>
      <p className={cn("polar-ota-mark__platform", fontUi.className)}>
        Booking.com
      </p>
    </div>
  );
}
