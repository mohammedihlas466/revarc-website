import { fontDisplay, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/** Figures pulled from PAGE-01 Diagnosis copy — not invented metrics */
const PROOF_ITEMS = [
  { value: "15–25%", label: "BOOKING COMMISSION" },
  { value: "€100,000", label: "MARGIN DECISION" },
  { value: "63.4%", label: "OTA BOOKING SHARE" },
  { value: "€190,000+", label: "ANNUAL COMMISSION" },
] as const;

export function DiagnosisProofRail({ className }: { className?: string }) {
  return (
    <aside className={cn("diagnosis-rail", className)} aria-label="Key figures from the diagnosis">
      <div className="diagnosis-rail-inner">
        <p className={cn("diagnosis-rail-eyebrow", fontMono.className)}>
          THE NUMBERS
        </p>
        <ul className="diagnosis-rail-list">
          {PROOF_ITEMS.map((item) => (
            <li
              key={item.label}
              className="diagnosis-rail-item diagnosis-rail-reveal"
            >
              <p className={cn("diagnosis-rail-value", fontDisplay.className)}>
                {item.value}
              </p>
              <p className={cn("diagnosis-rail-label", fontMono.className)}>
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
