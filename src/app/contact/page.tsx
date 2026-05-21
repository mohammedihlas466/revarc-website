import type { Metadata } from "next";
import { ContactCallCoversSection } from "@/components/contact/ContactCallCoversSection";
import { ContactClosingSection } from "@/components/contact/ContactClosingSection";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { NavBar } from "@/components/layout/NavBar";
import { SectionDivider } from "@/components/layout/SectionDivider";

export const metadata: Metadata = {
  title: "Contact — RevArc Systems",
  description:
    "Book a strategy call with RevArc. A 30-minute diagnostic conversation about your property's revenue architecture.",
};

export default function ContactPage() {
  return (
    <div className="contact-page-root">
      <NavBar />
      <main className="contact-page">
        <ContactHeroSection />
        <SectionDivider />
        <ContactCallCoversSection />
        <SectionDivider />
        <ContactClosingSection />
      </main>
    </div>
  );
}
