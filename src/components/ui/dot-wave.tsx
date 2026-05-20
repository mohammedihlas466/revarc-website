'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DotWaveProps {
  dotGap?: number;
  sphereRadius?: number;
  dotRadiusMax?: number;
  speed?: number;
  expansionSpeed?: number;
  repeatAnimation?: boolean;
  lightIntensity?: number;
  fadeIntensity?: number;
  followMouse?: boolean;
  className?: string;
  dotClassName?: string;
  children?: React.ReactNode;
  bgColor?: string;
  dotColor?: string;
  style?: React.CSSProperties;
}

class Ease {
  value: number;
  begin: number;
  end: number;
  pow: number;
  maxDuration: number;
  time: number;
  duration: number;

  constructor(value: number, pow: number, duration: number, timeBegin: number) {
    this.value = this.begin = this.end = value;
    this.pow = pow;
    this.maxDuration = duration;
    this.time = timeBegin;
    this.duration = 0;
    this.init();
  }

  init() {
    this.begin = this.end;
    this.end = Math.random();
    this.time = 0;
    this.duration =
      Math.sqrt(Math.abs(this.end - this.begin)) * this.maxDuration;
  }

  update(timeChange = 1) {
    let timeRatio = this.time / this.duration;

    if (timeRatio < 0.5) {
      timeRatio = 0.5 * Math.pow(timeRatio * 2, this.pow);
    } else {
      timeRatio = 1 - 0.5 * Math.pow((1 - timeRatio) * 2, this.pow);
    }

    this.value = this.begin + timeRatio * (this.end - this.begin);
    this.time += timeChange;
    if (this.time > this.duration) {
      this.init();
    }
  }
}

export function DotWave({
  dotGap = 20,
  sphereRadius = 200,
  dotRadiusMax = 3,
  speed = 0.15,
  expansionSpeed = 150,
  repeatAnimation = true,
  lightIntensity = 0.5,
  fadeIntensity = 0.15,
  followMouse = false,
  className,
  dotClassName,
  children,
  bgColor = '#000000',
  dotColor = '#ffffff',
  style,
}: DotWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    canvas: null as HTMLCanvasElement | null,
    ctx: null as CanvasRenderingContext2D | null,
    center: { x: 0, y: 0 },
    windowSize: { w: 0, h: 0 },
    circleNumber: { x: 0, y: 0 },
    posStart: { x: 0, y: 0 },
    easeX: new Ease(0.5, 2, 60, 0),
    easeY: new Ease(0.5, 2, 60, 0),
    animationId: 0,
    expansionRadius: 0,
    startTime: 0,
    bgColor: '#000000',
    dotColor: '#ffffff',
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = stateRef.current;
    state.canvas = canvas;
    state.ctx = ctx;
    state.startTime = Date.now();
    state.expansionRadius = 0;

    const updateColors = () => {
      const computedStyle = getComputedStyle(container);
      const containerBg = computedStyle.backgroundColor;
      const containerColor = computedStyle.color;

      const hasContainerBg =
        containerBg &&
        containerBg !== 'rgba(0, 0, 0, 0)' &&
        containerBg !== 'transparent';
      const hasContainerColor =
        containerColor &&
        containerColor !== 'rgba(0, 0, 0, 0)' &&
        containerColor !== 'transparent';

      state.bgColor = hasContainerBg ? containerBg : bgColor;
      state.dotColor = hasContainerColor ? containerColor : dotColor;
    };

    updateColors();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => updateColors();
    mediaQuery.addEventListener('change', handleThemeChange);

    const handleResize = () => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);

      state.windowSize = { w, h };

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      state.center = {
        x: w / 2,
        y: h / 2,
      };

      state.startTime = Date.now();
      state.expansionRadius = 0;

      setDotParams();
    };

    const setDotParams = () => {
      state.circleNumber = {
        x: Math.floor(state.windowSize.w / dotGap) + 2,
        y: Math.floor(state.windowSize.h / dotGap) + 1,
      };

      state.posStart = {
        x: Math.round(
          (state.windowSize.w - (state.circleNumber.x - 1) * dotGap) / 2,
        ),
        y: Math.round(
          (state.windowSize.h - (state.circleNumber.y - 1) * dotGap) / 2,
        ),
      };
    };

    const getDistance = (x: number, y: number) => {
      const distanceX = x - state.center.x;
      const distanceY = y - state.center.y;
      return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    };

    const drawDots = () => {
      ctx.beginPath();
      ctx.fillStyle = state.bgColor;
      ctx.rect(0, 0, state.windowSize.w, state.windowSize.h);
      ctx.fill();
      ctx.closePath();

      const elapsed = Date.now() - state.startTime;
      state.expansionRadius = (elapsed / 1000) * expansionSpeed;

      const maxScreenRadius =
        Math.sqrt(
          state.windowSize.w * state.windowSize.w +
            state.windowSize.h * state.windowSize.h,
        ) / 2;

      if (repeatAnimation && state.expansionRadius > maxScreenRadius + 100) {
        state.startTime = Date.now();
        state.expansionRadius = 0;
      }

      for (let i = 0; i < state.circleNumber.x; i++) {
        for (let j = 0; j < state.circleNumber.y; j++) {
          const gapX = j % 2 === 0 ? -dotGap / 2 : 0;
          const x = state.posStart.x + gapX + i * dotGap;
          const y = state.posStart.y + j * dotGap;

          const distance = getDistance(x, y);

          if (distance <= maxScreenRadius) {
            const baseAlpha = lightIntensity;
            const radius = dotRadiusMax;

            const waveFrontWidth = 80;
            const distanceFromWave = Math.abs(distance - state.expansionRadius);
            const fadeOutDistance = 150;

            let dotAlpha = 0;
            if (distance <= state.expansionRadius) {
              const behindWave = state.expansionRadius - distance;

              if (distanceFromWave < waveFrontWidth) {
                const glowIntensity = 1 - distanceFromWave / waveFrontWidth;
                dotAlpha = Math.min(baseAlpha + glowIntensity * 0.6, 1);
              } else if (behindWave < fadeOutDistance) {
                const fadeProgress = behindWave / fadeOutDistance;
                dotAlpha = baseAlpha * (1 - fadeProgress * (1 - fadeIntensity));
              } else {
                dotAlpha = baseAlpha * fadeIntensity;
              }
            }

            if (dotAlpha > 0) {
              ctx.save();
              ctx.globalAlpha = Math.min(dotAlpha, 1);

              if (
                distanceFromWave < waveFrontWidth &&
                distance <= state.expansionRadius
              ) {
                const glowIntensity = 1 - distanceFromWave / waveFrontWidth;
                ctx.shadowBlur = 15 * glowIntensity;
                ctx.shadowColor = state.dotColor;
              }

              ctx.beginPath();
              ctx.fillStyle = state.dotColor;
              ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
              ctx.fill();
              ctx.closePath();
              ctx.restore();
            }
          }
        }
      }
    };

    const moveCenter = (e: MouseEvent | null) => {
      if (e === null) {
        state.easeX.update(speed);
        state.easeY.update(speed);
        state.center.x = state.easeX.value * state.windowSize.w;
        state.center.y = state.easeY.value * state.windowSize.h;
      } else {
        state.center.x = e.pageX;
        state.center.y = e.pageY;
      }
    };

    const render = () => {
      if (!followMouse) {
        moveCenter(null);
      }
      drawDots();
    };

    const draw = () => {
      state.animationId = requestAnimationFrame(draw);
      render();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!followMouse) return;
      const rect = container.getBoundingClientRect();
      state.center.x = e.clientX - rect.left;
      state.center.y = e.clientY - rect.top;
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);

    draw();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleThemeChange);
      cancelAnimationFrame(state.animationId);
    };
  }, [
    dotGap,
    sphereRadius,
    dotRadiusMax,
    speed,
    expansionSpeed,
    repeatAnimation,
    lightIntensity,
    fadeIntensity,
    followMouse,
    bgColor,
    dotColor,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className={cn('absolute inset-0 w-full h-full', dotClassName)}
      />
      {children && <div className='relative z-10'>{children}</div>}
    </div>
  );
}
