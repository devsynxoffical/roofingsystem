import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { ProgressCircle } from "./ProgressCircle";
import { Reveal } from "./Reveal";

const rules = [
  {
    title: "Roofers only",
    body: "Built specifically for roofing companies. Not agencies. Not other trades.",
  },
  {
    title: "$1M+ minimum",
    body: "Under $1M a year? Don’t apply. We only partner with operators ready to scale hard.",
  },
  {
    title: "Written agreement",
    body: "90-day revenue doubling terms are spelled out clearly before you start.",
  },
];

const phases = [
  {
    step: "01",
    window: "Days 1–30",
    title: "Build",
    body: "Funnel, creatives and offer, live, tracked and validated.",
  },
  {
    step: "02",
    window: "Days 31–60",
    title: "Scale",
    body: "Ad spend ramps on data, not guesses. Calls book daily.",
  },
  {
    step: "03",
    window: "Days 61–90",
    title: "Double",
    body: "Optimize to the exact target written in your agreement.",
  },
];

function Roadmap() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--ink-soft)] p-7 shadow-[0_40px_100px_rgba(21,21,40,0.25)] md:p-9">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(237,28,36,0.28), transparent 70%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="rounded-full bg-[var(--lime)] px-4 py-1.5">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--ink)]">
            Qualification gate
          </p>
        </span>
        <span className="display text-2xl text-white md:text-3xl">
          90 <span className="text-base text-white/50">days</span>
        </span>
      </div>

      <svg
        viewBox="0 0 400 170"
        className="mt-6 h-auto w-full"
        role="img"
        aria-label="Revenue doubling from 1x to 2x over 90 days"
      >
        <defs>
          <linearGradient id="roof-trajectory" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ED1C24" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="roof-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff3b43" />
            <stop offset="100%" stopColor="#ED1C24" />
          </linearGradient>
        </defs>

        {[30, 80, 130].map((y) => (
          <line
            key={y}
            x1="10"
            x2="390"
            y1={y}
            y2={y}
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="3 5"
          />
        ))}

        <path
          d="M10 130 L130 96 L270 58 L390 26 L390 130 Z"
          fill="url(#roof-trajectory)"
        />
        <path
          d="M10 130 L130 96 L270 58 L390 26"
          fill="none"
          stroke="url(#roof-line)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {[
          { x: 10, y: 130, label: "1×", align: "start" },
          { x: 130, y: 96, label: "", align: "start" },
          { x: 270, y: 58, label: "", align: "start" },
          { x: 390, y: 26, label: "2×", align: "end" },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r="4.5" fill="#ED1C24" stroke="#fff" strokeWidth="1.5" />
            {pt.label && (
              <text
                x={pt.x + (pt.align === "end" ? -10 : 12)}
                y={pt.y + 5}
                fill="#fff"
                fontSize="14"
                fontWeight="700"
                textAnchor={pt.align === "end" ? "end" : "start"}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pt.label}
              </text>
            )}
          </g>
        ))}

        <text
          x="10"
          y="152"
          fill="rgba(255,255,255,0.4)"
          fontSize="11"
          fontWeight="600"
        >
          DAY 1
        </text>
        <text
          x="390"
          y="152"
          fill="rgba(255,255,255,0.4)"
          fontSize="11"
          fontWeight="600"
          textAnchor="end"
        >
          DAY 90
        </text>
      </svg>

      <div className="relative mt-6 space-y-2.5">
        {phases.map((phase, i) => (
          <div
            key={phase.step}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[var(--red)]/40 hover:bg-white/[0.06]"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className="display text-2xl text-[var(--red-bright)] md:text-3xl">
              {phase.step}
            </span>
            <div className="min-w-0">
              <p className="flex flex-wrap items-baseline gap-x-2 text-sm font-bold text-white">
                {phase.title}
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--red-bright)]">
                  {phase.window}
                </span>
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                {phase.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Qualification() {
  return (
    <section className="section-shell bg-[var(--fog)]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="relative">
          <div
            className="pointer-events-none absolute -inset-8 -z-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 40% 40%, rgba(237,28,36,0.18), transparent 65%)",
            }}
          />

          <Roadmap />

          <div className="float-icon-soft absolute -bottom-5 right-6 z-10 rounded-2xl border border-white/10 bg-white px-6 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <p className="display text-3xl text-[var(--red)]">2×</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink)]/60">
              Revenue target · 90 days
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About the program</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.2rem)] text-[var(--ink)]">
              Skills to improve your
              <br />
              <span className="text-[var(--purple)]">company brand</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--muted)]">
              Serious roofers only. If you&apos;re not at $1M yet, come back
              when you are. We handle the acquisition machine so you can focus
              on closing.
            </p>
          </Reveal>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-8">
            <Reveal delay={80}>
              <ProgressCircle
                value={90}
                unit=""
                label="90 Days"
                sub="To double revenue"
                size={130}
              />
            </Reveal>
            <Reveal delay={200}>
              <ProgressCircle
                value={100}
                label="Handled"
                sub="System run for you"
                size={130}
              />
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-10 space-y-3">
            {rules.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-white p-4 transition hover:border-[var(--purple)]/40 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--purple)] text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <p className="font-bold text-[var(--ink)]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={180}>
            <Link href={BOOKING_PATH} className="cta-btn-dark mt-8 inline-flex">
              <span className="display text-base tracking-normal">
                I Qualify, Book My Call
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
