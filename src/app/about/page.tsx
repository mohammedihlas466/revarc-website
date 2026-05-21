import type { Metadata } from "next";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutFounderSection } from "@/components/about/AboutFounderSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutOperatorNetworkSection } from "@/components/about/AboutOperatorNetworkSection";
import { AboutOriginSection } from "@/components/about/AboutOriginSection";
import { AboutPrinciplesSection } from "@/components/about/AboutPrinciplesSection";
import { NavBar } from "@/components/layout/NavBar";
import { SectionDivider } from "@/components/layout/SectionDivider";

export const metadata: Metadata = {
  title: "About — RevArc Systems",
  description:
    "Mohamed Ihlas, founder of RevArc. Revenue strategy built in Sri Lanka, delivered across European boutique hotel markets through a vetted operator network.",
};

export default function AboutPage() {
  return (
    <div className="about-page-root">
      <NavBar />
      <AboutHeroSection />
      <main className="about-page">
        <SectionDivider />
        <AboutFounderSection />
        <SectionDivider />
        <AboutOriginSection />
        <SectionDivider />
        <AboutOperatorNetworkSection />
        <SectionDivider />
        <AboutPrinciplesSection />
        <SectionDivider />
        <AboutCtaSection />
      </main>
    </div>
  );
}
