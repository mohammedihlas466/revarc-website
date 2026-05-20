"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function LenisScrollTriggerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const root = document.documentElement;

    ScrollTrigger.scrollerProxy(root, {
      scrollTop(value) {
        if (typeof value === "number") {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.defaults({ scroller: root });

    lenis.on("scroll", ScrollTrigger.update);

    const onRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    requestAnimationFrame(refresh);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(onTick);
      ScrollTrigger.scrollerProxy(root, {});
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.defaults({ scroller: window });
    };
  }, [lenis]);

  return null;
}

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        autoRaf: false,
      }}
    >
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
