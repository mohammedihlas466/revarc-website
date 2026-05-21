import { CtaSection } from "@/components/home/CtaSection";
import { DiagnosisSection } from "@/components/home/DiagnosisSection";
import { HeroSection } from "@/components/home/HeroSection";
import { OperatingRecordSection } from "@/components/home/OperatingRecordSection";
import { SystemSection } from "@/components/home/SystemSection";
import { NavBar } from "@/components/layout/NavBar";
import { SectionDivider } from "@/components/layout/SectionDivider";

export default function Home() {
  return (
    <div className="home-page-root">
      <NavBar />
      <main className="home-page">
        <HeroSection />
        <SectionDivider />
        <DiagnosisSection />
        <SectionDivider />
        <SystemSection />
        <SectionDivider />
        <OperatingRecordSection />
        <SectionDivider />
        <CtaSection />
      </main>
    </div>
  );
}
