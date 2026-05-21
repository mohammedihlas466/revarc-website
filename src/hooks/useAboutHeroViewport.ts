"use client";

import { useEffect, type RefObject } from "react";

/**
 * Pins About hero + bg stack to real device viewport width (Android Chrome / visualViewport).
 * DevTools emulation often sizes correctly without this; physical phones may not.
 */
export function useAboutHeroViewport(
  sectionRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const bg = section.querySelector<HTMLElement>(".about-hero-bg-stack");
    const veil = section.querySelector<HTMLElement>(".about-hero-darkveil-layer");

    const sync = () => {
      const w = Math.round(
        window.visualViewport?.width ??
          document.documentElement.clientWidth ??
          window.innerWidth
      );
      const h = Math.round(section.getBoundingClientRect().height);

      if (w < 1) return;

      section.style.width = `${w}px`;
      section.style.maxWidth = `${w}px`;
      section.style.minWidth = `${w}px`;

      for (const el of [bg, veil]) {
        if (!el) continue;
        el.style.width = `${w}px`;
        el.style.maxWidth = `${w}px`;
        el.style.minWidth = `${w}px`;
        el.style.left = "0";
        el.style.right = "0";
      }

      if (h > 0 && bg) {
        bg.style.height = `${h}px`;
        bg.style.minHeight = `${h}px`;
      }
    };

    sync();
    const timers = [0, 50, 150, 400, 800, 1500].map((ms) =>
      window.setTimeout(sync, ms)
    );

    window.addEventListener("resize", sync);
    window.addEventListener("orientationchange", sync);
    window.visualViewport?.addEventListener("resize", sync);
    window.visualViewport?.addEventListener("scroll", sync);

    const ro = new ResizeObserver(sync);
    ro.observe(section);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("resize", sync);
      window.removeEventListener("orientationchange", sync);
      window.visualViewport?.removeEventListener("resize", sync);
      window.visualViewport?.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, [sectionRef]);
}
