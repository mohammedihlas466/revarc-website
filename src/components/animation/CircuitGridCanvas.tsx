"use client";

import { useEffect, useRef } from "react";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type CircuitGridCanvasProps = {
  className?: string;
  dormant?: boolean;
};

/**
 * Circuit grid with firing nodes — Design System §09 (data/verification pattern).
 */
export function CircuitGridCanvas({
  className,
  dormant = false,
}: CircuitGridCanvasProps) {
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
    const nodes: { x: number; y: number; phase: number; speed: number }[] = [];

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

      nodes.length = 0;
      const cols = 10;
      const rows = 7;
      const gapX = width / (cols + 1);
      const gapY = height / (rows + 1);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          nodes.push({
            x: gapX * (col + 1),
            y: gapY * (row + 1),
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.8,
          });
        }
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = reduceMotion ? 0 : time * 0.001;

      nodes.forEach((node) => {
        const pulse = 0.35 + Math.sin(t * node.speed + node.phase) * 0.35;
        const baseAlpha = dormant ? 0.03 : 0.06;
        const pulseAlpha = dormant ? 0.06 : 0.14;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 211, 252, ${baseAlpha + pulse * pulseAlpha})`;
        ctx.fill();

        if (!dormant && pulse > 0.55) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = CANVAS_TOKENS.accentBright;
          ctx.globalAlpha = (pulse - 0.55) * 1.8;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
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
  }, [dormant]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("circuit-grid-canvas", className)}
      aria-hidden="true"
    />
  );
}
