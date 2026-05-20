import type { Metadata } from "next";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { PageAtmosphere } from "@/components/layout/PageAtmosphere";
import { fontUi, fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "RevArc — Revenue Architecture for Boutique Hotels",
  description:
    "Revenue strategy ownership for independent boutique hotels. Structured systems, measured outcomes, and a documented operating record.",
  openGraph: {
    type: "website",
    siteName: "RevArc Systems",
    title: "RevArc — Revenue Architecture for Boutique Hotels",
    description:
      "Revenue strategy ownership for independent boutique hotels. Structured systems, measured outcomes, and a documented operating record.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", fontVariables)}
      style={{
        backgroundColor: "var(--void, #020202)",
        colorScheme: "dark",
      }}
    >
      <body
        className={cn(fontUi.className, "antialiased")}
        style={{
          backgroundColor: "var(--void, #020202)",
          color: "var(--text-primary, #f0f0ee)",
          minHeight: "100vh",
        }}
      >
        <SmoothScroll>
          <PageAtmosphere />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
