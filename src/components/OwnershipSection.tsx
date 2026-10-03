"use client";

import { motion } from "framer-motion";
import { FileText, Funnel, Database, Cpu, Palette, PenLine, Repeat, Users } from "lucide-react";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { AuroraBg } from "./AuroraBg";
import { SplitReveal } from "./ui/SplitReveal";
import { Button } from "./ui/Button";

const ownedItems = [
  { icon: FileText, label: "Landing Pages" },
  { icon: Funnel, label: "Sales Funnel" },
  { icon: Database, label: "CRM" },
  { icon: Cpu, label: "Automations" },
  { icon: Palette, label: "Roofing Ad Creatives" },
  { icon: PenLine, label: "Copy" },
  { icon: Repeat, label: "Follow-Up Sequences" },
  { icon: Users, label: "Customer Data" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function OwnershipSection() {
  const ticker = [...ownedItems.map((o) => o.label), ...ownedItems.map((o) => o.label)];

  return (
    <section id="ownership" className="section-shell bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ed1c24]">
            <span className="inline-block h-px w-8 bg-[#ed1c24]" />
            Everything Belongs To You
          </span>
          <SplitReveal as="h2" mode="lines" className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
            You Own{" "}
            <span className="text-[#ed1c24]">Everything We Build.</span>
          </SplitReveal>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed">
            Unlike most roofing marketing agencies... you own everything. When
            we build your Roofing Systems™, it becomes a permanent business
            asset.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="gradient-ring mt-12 rounded-[1.75rem]">
            <div className="ring-card relative overflow-hidden rounded-[1.75rem] bg-[#09090b] px-6 py-12 text-white md:px-12 md:py-16">
              <AuroraBg />
              <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

              <div className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                    You own every single{" "}
                    <span className="text-gradient-red">asset we build.</span>
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
                    No lock-ins. No hidden ownership. No dependence on another
                    marketing agency.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Button href={BOOKING_PATH} variant="primary" size="lg" className="breathe mt-8">
                      Book Your Free Strategy Call
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  className="grid grid-cols-2 gap-4"
                >
                  {ownedItems.map((owned) => (
                    <motion.div key={owned.label} variants={item} className="h-full">
                      <TiltCard
                        max={8}
                        className="hover-card border border-line bg-panel"
                      >
                        <div className="flex items-center gap-3 px-4 py-4">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ed1c24] text-[11px] font-bold text-white">
                            ✓
                          </span>
                          <span className="text-sm font-bold text-fog">{owned.label}</span>
                          <owned.icon
                            aria-hidden
                            className="ml-auto h-4 w-4 shrink-0 text-dim transition-all duration-300 group-hover:scale-125 group-hover:text-[#ff6b70]"
                            strokeWidth={2}
                          />
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Asset ticker */}
              <div className="relative mt-12 border-t border-zinc-800 pt-8">
                <div className="marquee-wrap">
                  <div className="marquee-track-reverse items-center gap-8">
                    {ticker.map((t, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-zinc-500"
                      >
                        {t}
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
