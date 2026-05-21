"use client";

import type Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";

type ReadyListener = () => void;

let scrollAnimationReady = false;
const readyListeners = new Set<ReadyListener>();

export function isScrollAnimationReady() {
  return scrollAnimationReady;
}

export function subscribeScrollAnimationReady(listener: ReadyListener) {
  if (scrollAnimationReady) listener();
  readyListeners.add(listener);
  return () => {
    readyListeners.delete(listener);
  };
}

function notifyScrollAnimationReady() {
  if (scrollAnimationReady) return;
  scrollAnimationReady = true;
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("revarc:scroll-ready"));
  }
  readyListeners.forEach((listener) => listener());
}

export function resetScrollAnimationReady() {
  scrollAnimationReady = false;
}

/** Rebind every ScrollTrigger to Lenis virtual scroll on <html>. */
export function syncScrollTriggersWithLenis(lenis: Lenis) {
  const scroller = document.documentElement;

  ScrollTrigger.scrollerProxy(scroller, {
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
    pinType: "transform",
  });

  ScrollTrigger.defaults({ scroller });
  ScrollTrigger.refresh(true);
  notifyScrollAnimationReady();
}

export function scheduleScrollTriggerRefreshes(lenis: Lenis) {
  const run = () => syncScrollTriggersWithLenis(lenis);

  run();
  requestAnimationFrame(run);
  window.setTimeout(run, 150);
  window.setTimeout(run, 600);

  const onLoad = () => run();
  window.addEventListener("load", onLoad, { once: true });

  return () => {
    window.removeEventListener("load", onLoad);
  };
}
