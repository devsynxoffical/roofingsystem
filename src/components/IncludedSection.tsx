"use client";

import { motion } from "framer-motion";
import {
  Crosshair,
  MessageSquare,
  Target,
  Palette,
  FileText,
  Funnel,
  Database,
  Cpu,
  Mail,
  MessageCircle,
  Bell,
  Filter,
  CalendarCheck,
  TrendingUp,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { SplitReveal } from "./ui/SplitReveal";

type IncludedItem = { icon: LucideIcon; label: string };

const includedList: IncludedItem[] = [
  { icon: Crosshair, label: "Roofing Offer Positioning" },
  { icon: MessageSquare, label: "Roofing Messaging Strategy" },
  { icon: Target, label: "Meta Ads" },
  { icon: Palette, label: "Roofing Ad Creatives" },
  { icon: FileText, label: "Landing Pages" },
  { icon: Funnel, label: "Complete Roofing Sales Funnel" },
  { icon: Database, label: "CRM Setup" },
  { icon: Cpu, label: "AI Automations" },
  { icon: Mail, label: "Email Sequences" },
  { icon: MessageCircle, label: "SMS Follow-Up" },
  { icon: Bell, label: "Appointment Reminders" },
  { icon: Filter, label: "Roofing Lead Qualification System" },
  { icon: CalendarCheck, label: "Calendar Booking System" },
  { icon: TrendingUp, label: "Ongoing Campaign Optimisation" },
];

const featuredIndexes = new Set([0, 5]);

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function IncludedSection() {
  return (
    <section id="included" className="section-shell bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ed1c24]">
            <span className="inline-block h-px w-8 bg-[#ed1c24]" />
            Everything Included
          </span>
          <SplitReveal as="h2" mode="lines" className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
            Everything You Need.{" "}
            <span className="text-[#ed1c24]">Nothing Extra To Pay For.</span>
          </SplitReveal>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed">
            The complete roofing client acquisition system, installed, managed,
            and optimized for you.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {includedList.map((data, i) => {
            const featured = featuredIndexes.has(i);
            return (
              <motion.div
                key={data.label}
                variants={item}
                className={featured ? "md:col-span-2" : ""}
              >
                <TiltCard
                  max={featured ? 5 : 8}
                  className="hover-card border border-zinc-200 bg-white shadow-sm"
                >
                  <div className="flex h-full flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className={`tilt-icon flex items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24] transition-colors duration-300 group-hover:bg-[#ed1c24] group-hover:text-white ${
                          featured ? "h-11 w-11" : "h-10 w-10"
                        }`}
                      >
                        <data.icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                    </div>
                    <h3
                      className={`mt-4 font-extrabold leading-snug text-zinc-900 ${
                        featured ? "text-base sm:text-lg" : "text-sm"
                      }`}
                    >
                      {data.label}
                    </h3>
                    <span
                      aria-hidden
                      className="mt-auto block pt-5"
                    >
                      <span className="block h-px w-full bg-gradient-to-r from-zinc-100 via-zinc-200 to-transparent transition-colors duration-300 group-hover:from-[#ed1c24]/40" />
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
