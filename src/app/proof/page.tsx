import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { ProofCtaSection } from "@/components/proof/ProofCtaSection";
import { ProofCurrentStateSection } from "@/components/proof/ProofCurrentStateSection";
import { ProofDiagnosisSection } from "@/components/proof/ProofDiagnosisSection";
import { ProofEvidenceSection } from "@/components/proof/ProofEvidenceSection";
import { ProofHeroSection } from "@/components/proof/ProofHeroSection";
import { ProofPillarDirectBookingSection } from "@/components/proof/ProofPillarDirectBookingSection";
import { ProofPillarOtaSection } from "@/components/proof/ProofPillarOtaSection";
import { ProofPillarRevenueSection } from "@/components/proof/ProofPillarRevenueSection";
import { ProofPropertySection } from "@/components/proof/ProofPropertySection";

export const metadata: Metadata = {
  title: "The Proof — RevArc Systems",
  description:
    "Two years. One property rebuilt. A documented operating record from Tranquil Escape — direct booking, revenue architecture, and OTA rehabilitation with named metrics and verifiable artifacts.",
};

export default function ProofPage() {
  return (
    <div className="proof-page-root">
      <NavBar />
      <main className="proof-page">
        <ProofHeroSection />
        <SectionDivider />
        <ProofPropertySection />
        <SectionDivider />
        <ProofDiagnosisSection />
        <SectionDivider />
        <ProofPillarDirectBookingSection />
        <SectionDivider />
        <ProofPillarRevenueSection />
        <SectionDivider />
        <ProofPillarOtaSection />
        <SectionDivider />
        <ProofEvidenceSection />
        <SectionDivider />
        <ProofCurrentStateSection />
        <SectionDivider />
        <ProofCtaSection />
      </main>
    </div>
  );
}
