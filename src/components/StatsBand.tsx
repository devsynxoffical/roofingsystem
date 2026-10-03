"use client";

import { FormEvent, useState } from "react";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { Counter } from "./ui/Counter";
import { AuroraBg } from "./AuroraBg";
import { SplitReveal } from "./ui/SplitReveal";

const stats = [
  { end: 50, prefix: "$", suffix: " Million+", label: "Managed in Roofing Ads", sub: "Tested & proven campaigns" },
  { end: 300, prefix: "", suffix: "+", label: "Roofing Contractors", sub: "Scaled across US & Canada" },
  { end: 90, prefix: "", suffix: " Days", label: "Revenue Guarantee", sub: "Backed by written agreement" },
  { end: 100, prefix: "", suffix: "% DFY", label: "Client Acquisition", sub: "Offer, Ads, CRM, AI, Funnels" },
];

export function StatsBand() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) {
      window.location.href = `${BOOKING_PATH}?email=${encodeURIComponent(email)}`;
    }
  }

  return (
    <section className="relative bg-ink py-16 text-fog md:py-20">
      <AuroraBg />
      <div className="jobber-grid-dark absolute inset-0 pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-[88rem] px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SplitReveal as="h2" mode="lines" className="font-heading text-2xl font-bold leading-[1.08] tracking-[-0.03em] text-fog sm:text-4xl">
            Join Over Roofing Contractors Who Trust{" "}
            <em className="not-italic text-gradient-animated">Roofing Systems™</em>
          </SplitReveal>
        </Reveal>



        {/* Quick Opt-in Bar, GetJobber Style */}
        <div className="mx-auto mt-10 max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 rounded-full border border-line bg-panel p-2 shadow-md sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Work Email..."
              className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-fog placeholder:text-dim outline-none"
            />
            <button type="submit" className="w-full shrink-0 rounded-full bg-[#ed1c24] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#ff2a1f] sm:w-auto">
              Get Free Demo
            </button>
          </form>
          <p className="mt-2 text-center text-[11px] font-medium text-dim">
            Strictly For Roofing Companies Doing $1M+/Year.
          </p>
        </div>
      </div>
    </section>
  );
}
