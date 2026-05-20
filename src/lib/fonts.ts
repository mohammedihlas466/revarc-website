import {
  Cormorant_Garamond,
  DM_Mono,
  Instrument_Sans,
} from "next/font/google";

export const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

/** UI + body — editorial grotesk (replaces Bricolage for a less generic SaaS feel) */
export const fontUi = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui",
  display: "swap",
});

export const fontMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = `${fontDisplay.variable} ${fontUi.variable} ${fontMono.variable}`;
