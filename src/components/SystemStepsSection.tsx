"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { SplitReveal } from "./ui/SplitReveal";
import { Button } from "./ui/Button";

const systemSteps = [
  { title: "Market Research & Homeowner Analysis", text: "We identify exactly which homeowners are most likely to invest in a roof replacement and what motivates them to buy." },
  { title: "Roofing Offer Positioning", text: "We position your roofing company so homeowners choose you over competing contractors." },
  { title: "Roofing Messaging & Creative Development", text: "We create roofing-specific ads, messaging, and creatives that attract premium homeowners, not price shoppers." },
  { title: "Landing Pages & Sales Funnel", text: "We build high-converting landing pages and sales funnels that turn roofing traffic into booked inspections and estimates." },
  { title: "Meta Ads Management", text: "We launch, manage, and optimize your roofing campaigns daily." },
  { title: "CRM & AI Automations", text: "Every roofing lead automatically enters your CRM with email, SMS, reminders, and automated follow-up." },
  { title: "Lead Qualification", text: "Our proprietary multi-validation process filters every roofing lead before it reaches your sales team, improving booking rates, show rates, and close rates." },
  { title: "Close More Roof Replacement Projects", text: "Your team simply runs the appointments, performs inspections, and closes profitable roofing projects while Roofing Systems™ works in the background." },
];

export function SystemStepsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.72", "end 0.45"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 26 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(
      Math.min(
        systemSteps.length - 1,
        Math.max(0, Math.round(v * (systemSteps.length - 1)))
      )
    );
  });

  return (
    <section id="system" className="section-shell bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ed1c24]">
            <span className="inline-block h-px w-8 bg-[#ed1c24]" />
            The 8-Step System
          </span>
          <SplitReveal as="h2" mode="lines" className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
            Our 8-Step Roofing{" "}
            <span className="text-[#ed1c24]">Client Acquisition System</span>
          </SplitReveal>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed">
            Everything stays the same except for roofing terminology.
          </p>
        </Reveal>

        <div ref={ref} className="mx-auto mt-14 max-w-3xl">
          <div className="relative">
            {/* Static rail */}
            <div
              aria-hidden
              className="absolute bottom-4 left-[26px] top-2 w-[3px] rounded-full bg-zinc-200"
            />
            {/* Flowing connector line */}
            <div
              aria-hidden
              className="connector-line absolute bottom-4 left-[26px] top-2 w-[3px] rounded-full opacity-40"
            />
            {/* Scroll progress beam */}
            <motion.div
              aria-hidden
              style={{ scaleY }}
              className="absolute bottom-4 left-[26px] top-2 w-[3px] origin-top rounded-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[#ff5c5c] shadow-[0_0_14px_rgba(237,28,36,0.6)]"
            />

            <div className="space-y-6">
              {systemSteps.map((step, i) => {
                const isActive = i <= active;
                return (
                  <Reveal key={step.title} delay={(i % 4) * 80}>
                    <div className="relative flex items-start gap-5 pl-[60px]">
                      <div className="absolute left-0 top-0">
                        <span
                          className={`relative flex h-14 w-14 items-center justify-center rounded-full border shadow-sm transition-all duration-500 ${
                            isActive
                              ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                              : "border-zinc-200 bg-white text-[var(--accent)]"
                          } ${isActive ? "pulse-ring" : ""}`}
                        >
                          <span className="text-sm font-extrabold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </span>
                      </div>
                      <div className="flex-1 pt-1">
                        <TiltCard max={3} scale={1.01} className="hover-card border border-zinc-200 bg-white shadow-sm">
                          <div className="p-5 sm:p-6">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-950">
                                {step.title}
                              </h3>
                              <span
                                className={`ml-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black transition-all duration-500 ${
                                  isActive
                                    ? "scale-100 bg-[#ed1c24] text-white"
                                    : "scale-0 bg-zinc-200 text-zinc-500"
                                }`}
                              >
                                ✓
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                              {step.text}
                            </p>
                          </div>
                        </TiltCard>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <Button href={BOOKING_PATH} variant="primary" size="lg">
            Install The System
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
