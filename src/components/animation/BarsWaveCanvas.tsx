"use client";

import { useEffect, useRef } from "react";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type BarsWaveCanvasProps = {
  className?: string;
};

/**
 * Rhythmic vertical bars — UI_MANIFEST ID 19 (Bars Wave Background pattern).
 */
export function BarsWaveCanvas({ className }: BarsWaveCanvasProps) {
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
    const barCount = 48;
    const bars: { phase: number; speed: number; heightFactor: number }[] = [];

    for (let i = 0; i < barCount; i++) {
      bars.push({
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.2,
        heightFactor: 0.35 + Math.random() * 0.65,
      });
    }

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
      const t = reduceMotion ? 0 : time * 0.001;
      const gap = width / (barCount + 1);
      const barWidth = Math.max(2, gap * 0.42);

      bars.forEach((bar, index) => {
        const x = gap * (index + 1) - barWidth / 2;
        const wave =
          0.5 +
          0.5 *
            Math.sin(t * bar.speed + bar.phase + index * 0.18) *
            bar.heightFactor;
        const barHeight = height * 0.08 + wave * height * 0.72;
        const y = height - barHeight;
        const alpha = 0.04 + wave * 0.12;

        ctx.fillStyle = `rgba(125, 211, 252, ${alpha})`;
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.35})`;
        ctx.fillRect(x, y, barWidth, 2);
      });

      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? canvas);

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("bars-wave-canvas", className)}
      aria-hidden="true"
      style={{ background: CANVAS_TOKENS.void }}
    />
  );
}
