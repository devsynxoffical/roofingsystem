"use client";

import { TrendingDown, CalendarX2, CalendarOff, Banknote } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { AuroraBg } from "./AuroraBg";

const paragraphs = [
  "Most marketing agencies dump ad leads on your desk and call it a job done. But if your sales team can't book them, your money is wasted.",
  "You're losing projects to competitors because your whole marketing process is disconnected, ads, funnel, CRM, follow-up, and booking are all working against each other.",
];

const pains = [
  { icon: TrendingDown, title: "Expensive Leads", text: "Ad budget that goes up in smoke" },
  { icon: CalendarX2, title: "Missed Inspections", text: "Hot homeowners never get a call" },
  { icon: CalendarOff, title: "Empty Calendars", text: "Crews sitting idle between jobs" },
  { icon: Banknote, title: "Lost Revenue", text: "Profit leaking from the funnel" },
];

const painTicker = [
  "Expensive leads",
  "Missed inspections",
  "Empty calendars",
  "Lost revenue",
  "Disconnected funnels",
  "Wasted ad spend",
];

export function Problem() {
  const ticker = [...painTicker, ...painTicker];

  return (
    <section id="problem" className="section-shell bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="pill-badge-red mb-3 mx-auto">
            <span className="dot-red animate-pulse" />
            <span>SECTION 2, THE PROBLEM</span>
          </div>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Most Roofing Companies Don&apos;t Have A Lead Problem…
            <br />
            <span className="text-gradient-animated">
              They Have A Client Acquisition System Problem.
            </span>
          </h2>
        </Reveal>

        {/* Intro paragraphs */}
        <div className="mt-10 mx-auto max-w-3xl space-y-6">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={120 + i * 110}>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-500">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Pain-point tilt cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <TiltCard max={10} className="border border-zinc-200 bg-white shadow-sm group-hover:shadow-[0_20px_45px_-14px_rgba(237,28,36,0.4)]">
                <div className="flex h-full flex-col gap-3 p-6">
                  <span className="bob-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef2f2] text-[var(--accent)] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[var(--accent)] group-hover:text-white">
                    <p.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="text-base font-extrabold text-zinc-950">{p.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{p.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Pain ticker marquee */}
        <Reveal delay={120} className="mt-12">
          <div className="marquee-wrap rounded-full border border-zinc-200 bg-zinc-50 py-3">
            <div className="marquee-track items-center gap-10 px-5">
              {ticker.map((t, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-zinc-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Closing statement */}
        <Reveal delay={200} className="mt-10">
          <div className="gradient-ring rounded-3xl">
            <div className="ring-card relative overflow-hidden rounded-3xl bg-[#09090b] px-6 py-10 text-center text-white md:px-12 md:py-12">
              <AuroraBg />
              <p className="relative text-xl sm:text-2xl font-extrabold tracking-tight">
                But here&apos;s the thing… You don&apos;t need more leads.{" "}
                <span className="text-gradient-animated">
                  You need a complete client acquisition system.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
