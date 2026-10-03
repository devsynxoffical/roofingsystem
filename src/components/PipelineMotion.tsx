"use client";

import { useEffect, useRef, useState } from "react";
import { Megaphone, Funnel, Cpu, PhoneCall, Home } from "lucide-react";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./ui/SplitReveal";

const STAGES = [
  { icon: Megaphone, label: "Meta Ads", sub: "Target high-value homeowners" },
  { icon: Funnel, label: "Landing Funnel", sub: "Capture & qualify every lead" },
  { icon: Cpu, label: "CRM + AI", sub: "Instant follow-up & reminders" },
  { icon: PhoneCall, label: "Booked Inspections", sub: "Qualified calls fill your calendar" },
  { icon: Home, label: "Closed Roofs", sub: "Revenue you own forever" },
];

const WIDTH = 1200;
const HEIGHT = 240;
const X0 = 90;
const X1 = 1110;
const MID = HEIGHT / 2;
const AMP = 56;

function waveY(p: number): number {
  return MID + AMP * Math.sin(p * Math.PI * 2);
}

function buildWavePath(): string {
  const SEG = 72;
  const parts: string[] = [];
  for (let i = 0; i <= SEG; i++) {
    const p = i / SEG;
    const x = X0 + p * (X1 - X0);
    const y = waveY(p);
    parts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return parts.join(" ");
}

const WAVE_PATH = buildWavePath();

export function PipelineMotion() {
  const hostRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Draw-in transition for the gradient wave
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const L = path.getTotalLength();
    path.style.strokeDasharray = `${L}`;
    path.style.strokeDashoffset = `${L}`;
    const raf = requestAnimationFrame(() => {
      if (inView) path.style.strokeDashoffset = "0";
    });
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  // Traveling energy pulse along the wave
  useEffect(() => {
    if (!inView) return;
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;
    const L = path.getTotalLength();
    const DUR = 3200;
    let offset = 0;
    let t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = now - t0;
      t0 = now;
      offset = (offset + dt) % DUR;
      const p = offset / DUR;
      const pt = path.getPointAtLength(L * p);
      dot.setAttribute("cx", `${pt.x}`);
      dot.setAttribute("cy", `${pt.y}`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <section id="pipeline" className="relative overflow-hidden bg-[#09090b] py-20 md:py-24 text-white border-b border-zinc-800">
      {/* Animated aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="aurora-blob aurora-blob-a -top-24 left-[5%] h-[340px] w-[340px] bg-[var(--accent)]/20" />
        <div className="aurora-blob aurora-blob-b top-1/3 right-[-5%] h-[320px] w-[320px] bg-[#ff5c5c]/15" />
        <div className="aurora-blob aurora-blob-c bottom-[-12%] left-1/3 h-[360px] w-[360px] bg-white/[0.04]" />
        <div className="jobber-grid-dark absolute inset-0 opacity-40" />
      </div>

      <div ref={hostRef} className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff6b70]">
            <span className="inline-block h-px w-8 bg-[#ed1c24]" />
            The Client Flow
          </span>
          <SplitReveal as="h2" mode="lines" className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-fog sm:text-4xl lg:text-5xl">
            From cold ad to{" "}
            <span className="text-gradient-red">closed roof.</span>
          </SplitReveal>
          <p className="mt-4 text-base text-mist leading-relaxed">
            Every roofing lead moves through the same pipeline — automatically. Nothing falls through the cracks.
          </p>
        </Reveal>

        {/* Desktop / tablet: animated wave pipeline */}
        <div className="mt-8 hidden md:block">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            fill="none"
            className="w-full"
            aria-hidden="true"
          >
            <path d={WAVE_PATH} stroke="rgba(255,255,255,0.08)" strokeWidth={2} />
            {/* Gradient wave — draws itself in on scroll into view */}
            <path
              ref={pathRef}
              d={WAVE_PATH}
              stroke="url(#pipeGradient)"
              strokeWidth={2.5}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 2.4s cubic-bezier(0.22,1,0.36,1)" }}
            />
            {/* Flowing energy dashes on top */}
            <path
              d={WAVE_PATH}
              stroke="rgba(255,255,255,0.6)"
              strokeWidth={1.5}
              strokeLinecap="round"
              className="flow-line"
              opacity={inView ? 0.9 : 0}
              style={{ transition: "opacity 0.8s ease 0.6s" }}
            />
            <circle
              ref={dotRef}
              r={7}
              fill="#fff"
              opacity={inView ? 1 : 0}
              style={{
                filter: "drop-shadow(0 0 8px var(--accent)) drop-shadow(0 0 16px var(--accent))",
                transition: "opacity 0.6s ease",
              }}
            />
            <defs>
              <linearGradient id="pipeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="55%" stopColor="#ff6b70" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative -mt-3 grid grid-cols-5 gap-3">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.label}
                  className="group flex flex-col items-center text-center"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-[var(--accent)] shadow-lg transition-all duration-500 group-hover:border-[var(--accent)] group-hover:-translate-y-1 ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className={`mt-3 text-sm font-extrabold text-white transition-opacity duration-500 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 120 + 100}ms` }}>
                    {stage.label}
                  </h3>
                  <p className={`mt-1 text-[11px] leading-snug text-zinc-400 transition-opacity duration-500 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 120 + 180}ms` }}>
                    {stage.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical animated timeline */}
        <div className="mt-10 md:hidden">
          <div className="relative ml-5 border-l border-zinc-800 pl-6 space-y-8">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div key={stage.label} className="relative">
                  <span
                    className={`absolute -left-[31px] top-0 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-[#09090b] ${
                      inView ? "pulse-ring" : ""
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </span>
                  <div className={`flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: `${i * 120}ms` }}>
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <div>
                      <h3 className="text-sm font-extrabold text-white">{stage.label}</h3>
                      <p className="mt-0.5 text-xs text-zinc-400">{stage.sub}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
