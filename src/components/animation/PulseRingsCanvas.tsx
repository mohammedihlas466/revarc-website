"use client";

import { useEffect, useRef } from "react";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type PulseRingsCanvasProps = {
  className?: string;
};

/**
 * Concentric pulse rings — Design System §09 (trust/signal pattern).
 */
export function PulseRingsCanvas({ className }: PulseRingsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.58;
      const cy = height * 0.5;
      const t = reduceMotion ? 0 : time * 0.001;

      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = CANVAS_TOKENS.accent;
      ctx.fill();

      const rings = [
        { base: 0.12, speed: 0.55, offset: 0 },
        { base: 0.22, speed: 0.55, offset: 0.33 },
        { base: 0.32, speed: 0.55, offset: 0.66 },
      ];

      rings.forEach((ring) => {
        const progress = (t * ring.speed + ring.offset) % 1;
        const radius =
          Math.min(width, height) * ring.base * (0.6 + progress * 0.9);
        const alpha = (1 - progress) * 0.22;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pulse-rings-canvas", className)}
      aria-hidden="true"
    />
  );
}
