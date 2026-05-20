"use client";

import { useEffect, useRef } from "react";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type WaveformCanvasProps = {
  className?: string;
};

/**
 * Design System §09 — Waveform + conversion spike at 68% mark.
 */
export function WaveformCanvas({ className }: WaveformCanvasProps) {
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
    const spikeX = 0.68;

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

    const waveY = (x: number, phase: number) => {
      const base = height * 0.55;
      const spikeIndex = Math.floor(width * spikeX);
      const spikeBoost =
        Math.abs(x - spikeIndex) < 8
          ? (1 - Math.abs(x - spikeIndex) / 8) * height * 0.22
          : 0;
      const wave =
        Math.sin((x / width) * Math.PI * 4 + phase) * height * 0.08 +
        Math.sin((x / width) * Math.PI * 1.2 + phase * 0.5) * height * 0.04;
      return base + wave - spikeBoost;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const phase = reduceMotion ? 0 : time * 0.002;

      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const y = waveY(x, phase);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(125, 211, 252, 0.35)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const spikeIndex = Math.floor(width * spikeX);
      const spikeY = waveY(spikeIndex, phase);
      ctx.beginPath();
      ctx.moveTo(spikeIndex, height);
      ctx.lineTo(spikeIndex, spikeY);
      ctx.strokeStyle = CANVAS_TOKENS.accentBright;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.6;
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.beginPath();
      ctx.arc(spikeIndex, spikeY, 4, 0, Math.PI * 2);
      ctx.fillStyle = CANVAS_TOKENS.accent;
      ctx.fill();

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
      className={cn("waveform-canvas", className)}
      aria-hidden="true"
    />
  );
}
