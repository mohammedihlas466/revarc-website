"use client";

import { useEffect, useRef } from "react";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type RevArcMeteorOrbitProps = {
  className?: string;
};

/**
 * RevArc canvas orbital visual (manifest ID 08 fallback — Design System §09).
 */
export function RevArcMeteorOrbit({ className }: RevArcMeteorOrbitProps) {
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

    const orbits = [
      { rx: 0.38, ry: 0.24, speed: 0.35, phase: 0 },
      { rx: 0.48, ry: 0.32, speed: -0.22, phase: 1.2 },
      { rx: 0.28, ry: 0.18, speed: 0.48, phase: 2.4 },
    ];

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
      const cx = width * 0.55;
      const cy = height * 0.48;
      const t = reduceMotion ? 0 : time * 0.001;

      orbits.forEach((orbit, index) => {
        const rx = width * orbit.rx;
        const ry = height * orbit.ry;

        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(125, 211, 252, ${0.08 + index * 0.04})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        const angle = orbit.phase + t * orbit.speed;
        const mx = cx + Math.cos(angle) * rx;
        const my = cy + Math.sin(angle) * ry;

        const trailSteps = reduceMotion ? 0 : 6;
        for (let i = trailSteps; i >= 0; i--) {
          const trailAngle = angle - i * 0.12;
          const tx = cx + Math.cos(trailAngle) * rx;
          const ty = cy + Math.sin(trailAngle) * ry;
          const alpha = (0.35 - i * 0.05) * (1 - i / (trailSteps + 1));
          ctx.beginPath();
          ctx.arc(tx, ty, 2.5 - i * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(125, 211, 252, ${alpha})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(mx, my, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = CANVAS_TOKENS.accent;
        ctx.shadowColor = CANVAS_TOKENS.accent;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
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
      className={cn("meteor-orbit-canvas", className)}
      aria-hidden="true"
    />
  );
}
