import type { Metadata } from "next";
import { HowWeWorkCommandCentreSection } from "@/components/how-we-work/HowWeWorkCommandCentreSection";
import { HowWeWorkCtaSection } from "@/components/how-we-work/HowWeWorkCtaSection";
import { HowWeWorkHeroSection } from "@/components/how-we-work/HowWeWorkHeroSection";
import { HowWeWorkInvestmentSection } from "@/components/how-we-work/HowWeWorkInvestmentSection";
import { HowWeWorkPartnershipSection } from "@/components/how-we-work/HowWeWorkPartnershipSection";
import { HowWeWorkPillarsSection } from "@/components/how-we-work/HowWeWorkPillarsSection";
import { HowWeWorkRevenueArchitectureSection } from "@/components/how-we-work/HowWeWorkRevenueArchitectureSection";
import { NavBar } from "@/components/layout/NavBar";
import { SectionDivider } from "@/components/layout/SectionDivider";

export const metadata: Metadata = {
  title: "How We Work — RevArc Systems",
  description:
    "RevArc's revenue methodology — three pillars, Revenue Architecture, 3-year partnership trajectory, transparent investment structure, and the Command Centre operational dashboard.",
};

export default function HowWeWorkPage() {
  return (
    <div className="how-we-work-page-root">
      <NavBar />
      <main className="how-we-work-page">
        <HowWeWorkHeroSection />
        <SectionDivider />
        <HowWeWorkPillarsSection />
        <SectionDivider />
        <HowWeWorkRevenueArchitectureSection />
        <SectionDivider />
        <HowWeWorkPartnershipSection />
        <SectionDivider />
        <HowWeWorkInvestmentSection />
        <SectionDivider />
        <HowWeWorkCommandCentreSection />
        <SectionDivider />
        <HowWeWorkCtaSection />
      </main>
    </div>
  );
}
