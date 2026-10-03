"use client";

import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const trustItems = [
  "15+ Years Roofing Experience",
  "$50M+ Managed in Roofing Ads",
  "25+ Roofing Niches",
  "Proven Roofing Client Acquisition Framework",
  "100% Done-For-You",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-line bg-ink/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      <div className="container-x">
        <Reveal y={20} stagger={0.06}>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 py-7">
            {trustItems.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 text-[13px] font-medium text-mist transition-colors duration-300 hover:text-fog sm:text-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
                  <BadgeCheck className="h-3.5 w-3.5" />
                </span>
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
