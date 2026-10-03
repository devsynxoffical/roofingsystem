"use client";

import { useEffect, useRef, useState } from "react";

export function ProgressCircle({
  value,
  unit = "%",
  label,
  sub,
  size = 140,
  stroke = 9,
  light = true,
}: {
  value: number;
  unit?: string;
  label: string;
  sub: string;
  size?: number;
  stroke?: number;
  light?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setProgress(value);
          io.disconnect();
          return;
        }
        const t0 = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setProgress(value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <div ref={ref} className="flex flex-col items-center gap-4 text-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={stroke}
            className={light ? "fill-none stroke-[var(--purple-soft)]" : "fill-none stroke-white/15"}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={stroke}
            strokeLinecap="round"
            stroke="var(--purple)"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={c - (c * progress) / 100}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`display text-3xl ${light ? "text-[var(--ink)]" : "text-white"}`}>
            {Math.round(progress)}
            {unit}
          </span>
        </div>
      </div>
      <div>
        <p className={`display text-lg md:text-xl ${light ? "text-[var(--ink)]" : "text-white"}`}>
          {label}
        </p>
        <p
          className={`mt-1 text-xs uppercase tracking-[0.14em] ${
            light ? "text-[var(--ink)]/50" : "text-white/50"
          }`}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}
