"use client";

import { motion } from "framer-motion";
import { Megaphone, FileText, Users, MessageCircle, ShieldCheck, X, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { AuroraBg } from "./AuroraBg";
import { SplitReveal } from "./ui/SplitReveal";

const fragments = [
  { icon: Megaphone, label: "Runs Ads", sub: "Then stops there" },
  { icon: FileText, label: "Builds Landing Pages", sub: "But no pipeline" },
  { icon: Users, label: "Generates Leads", sub: "Raw & unqualified" },
  { icon: MessageCircle, label: "Handles Follow-Up", sub: "No single owner" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
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

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#09090b] py-20 md:py-24 text-white border-b border-zinc-800"
    >
      <AuroraBg />
      <div
        className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <Reveal className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff6b70]">
              <span className="inline-block h-px w-8 bg-[#ed1c24]" />
              The Problem
            </span>
            <SplitReveal as="h2" mode="lines" className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-fog sm:text-4xl lg:text-5xl">
              Most Roofing Companies Don&apos;t Have A{" "}
              <span className="text-mist">Lead Problem...</span>
              <br />
              <span className="text-gradient-red">
                Client Acquisition System Problem.
              </span>
            </SplitReveal>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist lg:mx-0">
              Most marketing agencies only run ads. Some build landing pages.
              Others generate leads. Someone else handles follow-up. Nobody
              owns the entire customer journey. That&apos;s exactly why roofing
              companies struggle to scale consistently. At{" "}
              <span className="font-bold text-fog">Roofing Systems™</span>, we
              build one complete client acquisition ecosystem where every part
              works together — from the first click to a qualified homeowner
              sitting on your sales calendar.
            </p>
          </Reveal>

          {/* Creative 3D card grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {fragments.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label} variants={item} className="h-full">
                  <TiltCard
                    max={8}
                    className="hover-card border border-line bg-panel"
                  >
                    <div className="flex h-full flex-col p-5">
                      <div className="flex items-center justify-between">
                        <span className="tilt-icon flex h-9 w-9 items-center justify-center rounded-xl border border-line-strong bg-ink text-mist transition-colors duration-300 group-hover:border-[#ed1c24]/50 group-hover:text-[#ff6b70]">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ed1c24]/15 text-[#ff6b70]">
                          <X className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                      </div>
                      <p className="mt-4 text-sm font-extrabold text-fog">
                        {f.label}
                      </p>
                      <p className="mt-0.5 text-xs text-dim">{f.sub}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}

            {/* Unified system card */}
            <motion.div variants={item} className="sm:col-span-2 h-full">
              <TiltCard
                max={4}
                scale={1.01}
                className="hover-card border border-[#ed1c24]/40 bg-panel"
              >
                <div className="flex h-full items-center gap-4 p-5 sm:p-6">
                  <span className="tilt-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed1c24] text-white shadow-md">
                    <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-fog sm:text-base">
                      One Complete Ecosystem. Every Part Works Together.
                    </p>
                    <p className="mt-0.5 text-xs text-mist sm:text-sm">
                      From the first click to a qualified homeowner on your
                      calendar.
                    </p>
                  </div>
                  <span className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ed1c24] text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
