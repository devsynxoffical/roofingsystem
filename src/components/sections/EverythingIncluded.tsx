"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { includedServices } from "@/lib/data";
import { cn } from "@/lib/utils";

export function EverythingIncluded() {
  return (
    <Section id="included" className="theme-light">
      <SectionHeading
        eyebrow="Everything included"
        title={
          <>
            Here&apos;s everything{" "}
            <em className="font-semibold not-italic text-lime">we build for you.</em>
          </>
        }
        subtitle="No à-la-carte pricing, no 'upsell after the fact'. When you plug into the Roofing Systems™ system, the entire engine comes included."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {includedServices.map((s, i) => {
          const Icon = s.icon;
          const wide = i === 0;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.06} y={28}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-3xl border border-line bg-panel p-7 transition-all duration-500 hover:border-lime/30 hover:bg-elevated",
                  wide && "sm:col-span-2"
                )}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime/[0.08] blur-3xl" />
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime transition-all duration-500 group-hover:-rotate-6 group-hover:border-lime/40 group-hover:bg-lime/10">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-fog">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{s.body}</p>

                <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
