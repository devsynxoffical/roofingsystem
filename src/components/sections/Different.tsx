"use client";

import { useRef } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/lib/data";
import { cn } from "@/lib/utils";

function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-colors duration-500 hover:border-line-strong",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(237,28,36,0.09), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}

export function Different() {
  return (
    <Section id="different" className="theme-light">
      <SectionHeading
        eyebrow="What makes us different"
        title={
          <>
            We don&apos;t just generate leads... we build a{" "}
            <em className="font-semibold not-italic text-lime">
              complete roofing client acquisition ecosystem.
            </em>
          </>
        }
        subtitle="Unlike traditional marketing agencies, we handle every step of your roofing customer journey — from attracting the right homeowners, to qualifying them, to nurturing them, to getting them booked onto your calendar. Everything works together inside one proven system."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.title} delay={(i % 3) * 0.08} y={36}>
              <SpotlightCard className={cn(i === 0 && "lg:col-span-1")}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-fog">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{d.body}</p>
                <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
