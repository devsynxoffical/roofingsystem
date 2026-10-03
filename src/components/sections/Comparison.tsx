"use client";

import { Check, X, Minus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { comparisonRows } from "@/lib/data";
import { cn } from "@/lib/utils";

function Value({ v }: { v: string | boolean }) {
  if (v === true) {
    return (
      <span className="inline-flex items-center gap-2 font-semibold text-fog">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime text-white">
          <Check className="h-3 w-3" strokeWidth={3.5} />
        </span>
        Included
      </span>
    );
  }
  if (v === false) {
    return (
      <span className="inline-flex items-center gap-2 text-dim">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-rose/40 bg-rose/10 text-rose">
          <X className="h-3 w-3" strokeWidth={3} />
        </span>
        Not offered
      </span>
    );
  }
  if (typeof v === "string") {
    const isWeak = v.toLowerCase().startsWith("yes") || v.toLowerCase().includes("fee") || v.toLowerCase().includes("lock") || v.toLowerCase() === "limited";
    const isStrong =
      v.toLowerCase().includes("complete") ||
      v.toLowerCase().includes("premium") ||
      v.toLowerCase().includes("ai") ||
      v.toLowerCase().includes("weeks") ||
      v.toLowerCase() === "never";
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2",
          isWeak && "text-rose",
          isStrong && "font-semibold text-lime",
          !isWeak && !isStrong && "text-dim"
        )}
      >
        {isWeak && <Minus className="h-4 w-4" />}
        {v}
      </span>
    );
  }
  return null;
}

export function Comparison() {
  return (
    <Section id="comparison" className="theme-light">
      <SectionHeading
        eyebrow="Why roofing companies choose us"
        title={
          <>
            Traditional agencies generate leads.{" "}
            <em className="font-semibold not-italic text-lime">
              Roofing Systems™ builds predictable growth.
            </em>
          </>
        }
        subtitle="Here's exactly where the system wins — line by line."
      />

      <Reveal y={32}>
        <div className="overflow-hidden rounded-[1.8rem] border border-line bg-panel">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-line lg:grid-cols-[1.2fr_1fr_1fr]">
            <div className="hidden items-center px-7 py-6 lg:flex">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
                What you get
              </span>
            </div>
            <div className="px-6 py-6 lg:px-7">
              <p className="text-sm font-semibold text-mist">Traditional agency</p>
            </div>
            <div className="relative bg-lime/[0.05] px-6 py-6 lg:px-7">
              <span className="absolute left-0 top-0 h-full w-px bg-lime/30" />
              <p className="flex items-center gap-2 text-sm font-bold text-lime">
                Roofing Systems™
                <span className="hidden rounded-full border border-lime/40 bg-lime/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest sm:inline">
                  The system
                </span>
              </p>
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <Reveal key={row.label} delay={Math.min(i * 0.04, 0.3)} y={20}>
              <div
                className={cn(
                  "grid grid-cols-2 border-b border-line last:border-b-0 lg:grid-cols-[1.2fr_1fr_1fr]",
                  row.highlight && "bg-lime/[0.03]"
                )}
              >
                <div className="flex items-center px-6 py-5 lg:px-7">
                  <p className={cn("text-sm", row.highlight ? "font-semibold text-fog" : "text-mist")}>
                    {row.label}
                    {row.highlight && (
                      <span className="ml-2 hidden rounded-full bg-lime/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-lime sm:inline">
                        Key
                      </span>
                    )}
                  </p>
                </div>
                <div className="px-6 py-5 lg:px-7">
                  <Value v={row.agency} />
                </div>
                <div className="relative border-l border-lime/20 bg-lime/[0.05] px-6 py-5 transition-colors duration-300 hover:bg-lime/[0.08] lg:px-7">
                  <Value v={row.qlx} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
