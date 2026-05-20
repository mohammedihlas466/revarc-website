"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

export type MetallicOrbVariant = "dormant" | "fractured" | "active" | "stable";

type RevArcMetallicOrbProps = {
  className?: string;
  variant?: MetallicOrbVariant;
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0.5, 0.8, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uPointer;
uniform float uEnergy;
uniform float uRim;
uniform float uRoughness;
uniform vec3 uAccent;
uniform vec3 uAccentBright;
out vec4 fragColor;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
    f.z);
}

mat3 rotY(float a) {
  float c = cos(a), s = sin(a);
  return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
}

mat3 rotX(float a) {
  float c = cos(a), s = sin(a);
  return mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
}

void main() {
  vec2 uv = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
  uv.x *= uResolution.x / uResolution.y;

  vec3 ro = vec3(0.0, 0.0, 3.2);
  vec3 rd = normalize(vec3(uv, -1.65));

  float yaw = uPointer.x * 0.55 + uTime * 0.15;
  float pitch = uPointer.y * 0.35 + sin(uTime * 0.4) * 0.08;
  rd = rotY(yaw) * rotX(pitch) * rd;

  float t = 0.0;
  vec3 col = vec3(0.02);
  bool hit = false;

  for (int i = 0; i < 64; i++) {
    vec3 p = ro + rd * t;
    float n = noise(p * 4.0 + uTime * 0.2) * uRoughness;
    float d = length(p) - (0.72 + n * 0.06);
    if (d < 0.002) {
      hit = true;
      vec3 nrm = normalize(p);
      vec3 light = normalize(vec3(0.35, 0.85, 1.2));
      vec3 view = normalize(ro - p);
      vec3 halfDir = normalize(light + view);
      float diff = max(dot(nrm, light), 0.0);
      float spec = pow(max(dot(nrm, halfDir), 0.0), 48.0 * (1.0 - uRoughness * 0.5));
      float fres = pow(1.0 - max(dot(nrm, view), 0.0), 3.0);
      vec3 base = mix(vec3(0.04), vec3(0.14), diff);
      vec3 rim = uAccent * uRim * fres;
      vec3 specCol = uAccentBright * spec * uEnergy;
      vec3 ground = uAccent * 0.35 * uEnergy * smoothstep(0.5, -1.2, nrm.y);
      col = base + rim + specCol + ground;
      break;
    }
    t += d;
    if (t > 6.0) break;
  }

  if (!hit) {
    float glow = smoothstep(0.9, 0.0, length(uv - vec2(0.0, 0.35)));
    col += uAccent * glow * 0.08 * uEnergy;
  }

  col = pow(col, vec3(0.92));
  fragColor = vec4(col, 1.0);
}
`;

const VARIANT_PARAMS: Record<
  MetallicOrbVariant,
  { energy: number; rim: number; roughness: number }
> = {
  dormant: { energy: 0.45, rim: 0.35, roughness: 0.55 },
  fractured: { energy: 0.55, rim: 0.5, roughness: 0.85 },
  active: { energy: 0.95, rim: 0.85, roughness: 0.25 },
  stable: { energy: 0.8, rim: 0.7, roughness: 0.18 },
};

/**
 * RevArc metallic orb — Resend-style WebGL sphere (OGL), accent-token driven.
 */
export function RevArcMetallicOrb({
  className,
  variant = "stable",
}: RevArcMetallicOrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    const { gl } = renderer;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const accent = hexToRgb(CANVAS_TOKENS.accent);
    const accentBright = hexToRgb(CANVAS_TOKENS.accentBright);
    const params = VARIANT_PARAMS[variant];

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uResolution: { value: [1, 1] },
        uTime: { value: 0 },
        uPointer: { value: [0, 0] },
        uEnergy: { value: params.energy },
        uRim: { value: params.rim },
        uRoughness: { value: params.roughness },
        uAccent: { value: accent },
        uAccentBright: { value: accentBright },
      },
    });

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 1 || h < 1) return;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    };

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pointerRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      };
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) {
      container.addEventListener("mousemove", onMove);
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const t = (now - start) * 0.001;
      program.uniforms.uTime.value = reduceMotion ? 0 : t;
      program.uniforms.uPointer.value = [
        pointerRef.current.x,
        pointerRef.current.y,
      ];
      renderer.render({ scene: mesh });
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMove);
      gl.canvas.remove();
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className={cn("revarc-metallic-orb", className)}
      aria-hidden="true"
    />
  );
}
