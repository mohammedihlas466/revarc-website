"use client";

import { useEffect, useRef } from "react";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type NetworkNodesCanvasProps = {
  className?: string;
};

/**
 * Network nodes — Design System §09 (platform/system pattern).
 */
export function NetworkNodesCanvas({ className }: NetworkNodesCanvasProps) {
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

    type Node = { x: number; y: number; phase: number; speed: number };
    const nodes: Node[] = [];
    const edges: [number, number][] = [];

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
      edges.length = 0;

      const positions = [
        { x: 0.72, y: 0.28 },
        { x: 0.58, y: 0.42 },
        { x: 0.82, y: 0.48 },
        { x: 0.65, y: 0.62 },
        { x: 0.78, y: 0.72 },
        { x: 0.52, y: 0.55 },
        { x: 0.88, y: 0.35 },
      ];

      positions.forEach((pos, index) => {
        nodes.push({
          x: width * pos.x,
          y: height * pos.y,
          phase: index * 0.7,
          speed: 0.35 + (index % 3) * 0.15,
        });
      });

      edges.push(
        [0, 1],
        [1, 2],
        [1, 5],
        [2, 3],
        [2, 6],
        [3, 4],
        [5, 1],
        [3, 5]
      );
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = reduceMotion ? 0 : time * 0.001;

      edges.forEach(([a, b]) => {
        const nodeA = nodes[a];
        const nodeB = nodes[b];
        if (!nodeA || !nodeB) return;

        const pulse =
          0.5 +
          Math.sin(t * 0.8 + (nodeA.phase + nodeB.phase) * 0.5) * 0.5;
        ctx.beginPath();
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        ctx.strokeStyle = `rgba(125, 211, 252, ${0.04 + pulse * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      nodes.forEach((node) => {
        const pulse = 0.4 + Math.sin(t * node.speed + node.phase) * 0.35;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = CANVAS_TOKENS.accent;
        ctx.globalAlpha = 0.12 + pulse * 0.28;
        ctx.fill();
        ctx.globalAlpha = 1;
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
      className={cn("network-nodes-canvas", className)}
      aria-hidden="true"
    />
  );
}
