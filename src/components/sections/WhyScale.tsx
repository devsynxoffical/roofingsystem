"use client";

import { Megaphone, Layers, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const PAIN_CARDS = [
  {
    num: "01",
    icon: Megaphone,
    title: "Ads Without A Funnel",
    body: "Agencies run ads and call it marketing. Raw clicks don't book roof inspections — only a pre-sold journey does.",
    stat: "94%",
    statLabel: "Clicks wasted",
  },
  {
    num: "02",
    icon: Layers,
    title: "Funnels Nobody Owns",
    body: "One vendor builds pages, another runs traffic. Handoffs break and roofing leads drop through the cracks.",
    stat: "70%",
    statLabel: "Pipeline leaked",
  },
  {
    num: "03",
    icon: Clock,
    title: "Copy Without Follow-Up",
    body: "Great copy gets attention, but follow-up is where storm deals are won. 80% of sales require 5+ touchpoints.",
    stat: "80%",
    statLabel: "Sales need 5+ follow-ups",
  },
  {
    num: "04",
    icon: ShieldAlert,
    title: "No Single Ecosystem",
    body: "When customer journeys are fragmented across tools & freelancers, nothing compounds into scalable growth.",
    stat: "0",
    statLabel: "Unified system ownership",
  },
];

export function WhyScale() {
  return (
    <Section id="why" className="relative overflow-hidden bg-[#09090b] py-20 sm:py-28 border-b border-white/10">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="jobber-grid-dark absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-1/3 h-[35rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
              Why Growth Stalls
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Most roofing companies don&apos;t have a lead problem... <br />
              they have a{" "}
              <span className="text-gradient-animated">
                client acquisition system problem.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
              When agencies only run ads or freelancers only build pages, nobody owns the customer journey. Here are the 4 critical leaks draining your ad spend.
            </p>
          </Reveal>
        </div>

        {/* Compact 4-Card Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.07} y={20} className="h-full">
                <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-[#121215] p-6 transition-all duration-300 hover:border-[#ed1c24]/50 hover:bg-[#16161b] hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(237,28,36,0.25)]">
                  <div>
                    {/* Header: Icon & Step Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ed1c24]/30 bg-[#ed1c24]/10 text-[#ed1c24] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-[#ed1c24] transition-colors">
                        {card.num}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="mt-5 text-lg font-bold text-white group-hover:text-[#ed1c24] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      {card.body}
                    </p>
                  </div>

                  {/* Stat Footer Pill */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xl font-extrabold text-[#ed1c24]">
                        {card.stat}
                      </span>
                      <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        {card.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Banner Solution */}
        <Reveal delay={0.3}>
          <div className="mt-10 rounded-2xl border border-[#ed1c24]/30 bg-[#ed1c24]/10 p-6 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24] text-white shadow-lg">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                  At <strong className="text-white font-bold">Roofing Systems Co.</strong>, we build one complete ecosystem where every part works together — from the first click to a <span className="text-white font-bold underline decoration-[#ed1c24]">qualified homeowner sitting on your calendar.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
