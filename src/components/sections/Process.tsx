"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { acquisitionSteps } from "@/lib/data";

export function Process() {
  return (
    <Section id="process" className="bg-ink">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            Our 8-step{" "}
            <em className="font-semibold not-italic text-lime">roofing client acquisition process.</em>
          </>
        }
        subtitle="One complete system. Eight proven steps — from market research to premium homeowners on your calendar. Everything handled for you."
      />

      <div className="relative">
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-14 hidden h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent lg:block" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {acquisitionSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.06} y={32}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-panel p-7 transition-all duration-500 hover:border-lime/30 hover:bg-elevated">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/[0.06] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-5xl font-bold tracking-tight text-fog/[0.08]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-fog">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{s.body}</p>
                  <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
