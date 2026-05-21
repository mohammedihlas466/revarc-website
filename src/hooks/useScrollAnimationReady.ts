"use client";

import { useEffect, useState } from "react";
import {
  isScrollAnimationReady,
  subscribeScrollAnimationReady,
} from "@/lib/scroll-animation";

/**
 * Returns true once Lenis + ScrollTrigger are synced.
 * Pass to useGSAP `dependencies` so scroll animations register after the scroller is ready.
 */
export function useScrollAnimationReady() {
  const [ready, setReady] = useState(isScrollAnimationReady);

  useEffect(() => subscribeScrollAnimationReady(() => setReady(true)), []);

  return ready;
}
