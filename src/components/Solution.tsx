"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, HardHat, Trophy, ShieldCheck, Package } from "lucide-react";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

const advantages = [
  {
    icon: Wrench,
    title: "100% Done-For-You",
    text: "Our system is built, managed, and optimized for you. You don't lift a finger.",
    tag: "01",
  },
  {
    icon: HardHat,
    title: "Roofing-Specific",
    text: "Built for the roofing industry. Not a repackaged generic marketing funnel.",
    tag: "02",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    text: "$50M+ managed in Meta ads and a proven 8-step growth framework.",
    tag: "03",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Written Guarantee",
    text: "If we don't double your revenue in 90 days, we work for free.",
    tag: "04",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Solution() {
  return (
    <section id="solution" className="section-shell relative overflow-hidden bg-zinc-100 border-b border-zinc-200/80">
      <div className="jobber-grid-light pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px]">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="pill-badge-red mb-3">
            <span className="dot-red animate-pulse" />
            <span>SECTION 3, THE SOLUTION</span>
          </div>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            We Don&apos;t Just Generate Roofing Leads…
            <br />
            <span className="text-[var(--accent)]">
              We Build A Complete Roofing Client Acquisition System.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
            A system that finds homeowners who want to work with you, attracts
            them through Meta Ads, books inspections automatically, and gets
            them to show up.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((a) => (
            <motion.div key={a.title} variants={item} className="h-full">
              <TiltCard max={9} className="border border-zinc-200 bg-white shadow-sm group-hover:shadow-[0_24px_50px_-16px_rgba(237,28,36,0.35)]">
                <div className="relative flex h-full flex-col p-6">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60"
                  />
                  <span className="pointer-events-none absolute right-5 top-4 text-4xl font-black text-zinc-100 transition-colors duration-300 group-hover:text-[var(--accent)]/15">
                    {a.tag}
                  </span>
                  <span className="bob-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef2f2] text-[var(--accent)] transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-white">
                    <a.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-zinc-950">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{a.text}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-4"
        >
          <TiltCard max={4} scale={1.01} className="border border-zinc-200 bg-white shadow-sm">
            <div className="relative p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                <span className="bob-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-md">
                  <Package className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
                    Everything Included
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-zinc-950">
                    The complete system, one flat investment.
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
                    Ads, landing pages, CRM, AI follow-up, lead qualification,
                    booking system. Built, managed, and optimized for you.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <Link
                  href={BOOKING_PATH}
                  className="btn btn-accent breathe px-7 py-3.5 text-sm font-bold shadow-md"
                >
                  Install The System →
                </Link>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
