"use client";

import { BadgeCheck, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type FunnelProof = {
  name: string;
  niche: string;
  result: string;
  costPerAppt: string;
  color: string;
};

const funnelProofs: FunnelProof[] = [
  {
    name: "Daniel",
    niche: "Residential Roofing",
    result: "$38K in 4 months",
    costPerAppt: "$9",
    color: "#ff7a90",
  },
  {
    name: "Sarah",
    niche: "Commercial Roofing",
    result: "$635K booked from $29K",
    costPerAppt: "$11",
    color: "#ff2a1f",
  },
  {
    name: "Mike",
    niche: "Metal Roofing",
    result: "41 booked inspections",
    costPerAppt: "$9",
    color: "#ffb36b",
  },
  {
    name: "James",
    niche: "Insurance Claims",
    result: "22 claims signed",
    costPerAppt: "$8",
    color: "#ff6b70",
  },
  {
    name: "Chris",
    niche: "New Construction",
    result: "$18K in new projects",
    costPerAppt: "$6",
    color: "#ed1c24",
  },
  {
    name: "Tony",
    niche: "Storm Damage",
    result: "31 qualified calls",
    costPerAppt: "$10",
    color: "#ff2a1f",
  },
  {
    name: "Aaron",
    niche: "Flat Roofing",
    result: "$32K retainer MRR",
    costPerAppt: "$13",
    color: "#ff7a90",
  },
  {
    name: "Marie",
    niche: "Solar Roofing",
    result: "$21K new revenue",
    costPerAppt: "$8",
    color: "#ffb36b",
  },
  {
    name: "Tim",
    niche: "Roof Repair",
    result: "22 qualified calls",
    costPerAppt: "$7",
    color: "#ff6b70",
  },
  {
    name: "Ryan",
    niche: "Gutters",
    result: "$14K in 3 months",
    costPerAppt: "$9",
    color: "#ed1c24",
  },
];

export function FunnelProof() {
  return (
    <Section id="results" className="bg-ink">
      <SectionHeading
        eyebrow="Real client results"
        title={
          <>
            Don&apos;t take our word for it...{" "}
            <em className="font-semibold not-italic text-lime">see what our clients achieved.</em>
          </>
        }
        subtitle="Revenue dashboards, booked inspections, case studies and success stories from roofing funnels we've installed across different niches — the same system, proven over and over."
      />

      {/* Stat strip */}
      <Reveal>
        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4">
          {[
            { value: "25+", label: "Roofing niches proven" },
            { value: "$100K+", label: "Client months" },
            { value: "$8", label: "Avg. per booked appt" },
            { value: "86%+", label: "Show rate" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5 bg-panel px-5 py-7 text-center">
              <span className="font-mono text-2xl font-bold tracking-tight text-fog sm:text-3xl">
                {s.value}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-dim">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Client result grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
        {funnelProofs.map((p, i) => (
          <Reveal key={p.name} delay={(i % 5) * 0.06} y={40}>
            <figure className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-line bg-panel p-6 transition-colors duration-500 hover:border-line-strong sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundColor: p.color }}
              />
              <div className="relative flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-fog backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.niche}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-lime">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Live
                </span>
              </div>
              <div className="relative mt-auto pt-10">
                <p className="text-xl font-bold leading-tight tracking-tight sm:text-2xl" style={{ color: p.color }}>
                  {p.result}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-dim sm:text-sm">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {p.costPerAppt} / booked appt
                </p>
                <p className="mt-5 flex items-center gap-2 border-t border-line pt-5 text-base font-semibold text-fog">
                  {p.name}
                </p>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Footnote */}
      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-dim">
          Results are from real roofing clients. Individual results vary — every client below uses
          the exact same system we would install for you.
        </p>
      </Reveal>
    </Section>
  );
}
