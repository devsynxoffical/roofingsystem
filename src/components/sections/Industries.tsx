"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/data";

export function Industries() {
  return (
    <Section id="industries" className="bg-ink">
      <SectionHeading
        eyebrow="Proven across niches"
        title={
          <>
            Roofing niches we&apos;ve{" "}
            <em className="font-semibold not-italic text-lime">worked with.</em>
          </>
        }
        subtitle="The Roofing Systems™ engine is engineered per niche — same engine, different fuel. These are just some of the roofing verticals we've scaled."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industries.map((name, i) => (
          <Reveal key={name} delay={(i % 4) * 0.04} y={16}>
            <div className="group flex items-center gap-3 rounded-2xl border border-line bg-panel/60 px-5 py-4 transition-colors duration-300 hover:border-lime/30 hover:bg-elevated">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-mist transition-colors duration-300 group-hover:text-fog">
                {name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
