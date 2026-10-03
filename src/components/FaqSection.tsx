"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { BOOKING_PATH } from "../lib/offer";
import { HelpCircle, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What exactly is Roofing Systems™?",
    a: "It's a complete done-for-you client acquisition system built for roofing companies. We handle offer positioning, Meta ads, ad creatives, landing pages, the full sales funnel, CRM setup, AI follow-up, email and SMS sequences, and lead qualification — all managed for you.",
  },
  {
    q: "Who is this for?",
    a: "Roofing contractors doing $1M+ in annual revenue who want predictable, repeatable growth instead of lead-dependent chaos. If you're tired of overpaying for marketing with nothing to show for it, this is built for you.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable lead growth within 30–45 days of launch. Every engagement is backed by mutually agreed growth milestones we commit to hitting within the first 90 days.",
  },
  {
    q: "What happens if it doesn't work?",
    a: "We continue working for you at no management fee until we help you hit the agreed milestones. Everything is backed by a written agreement, so the risk sits on us, not you.",
  },
  {
    q: "Do I actually own the assets?",
    a: "Yes. Landing pages, sales funnel, CRM, automations, ad creatives, copy, follow-up sequences, and your customer data are 100% yours — permanently. It becomes a business asset you own outright.",
  },
  {
    q: "Is there a long-term contract lock-in?",
    a: "No. We don't lock you in with long-term contracts. We earn the renewal by delivering results, not by trapping you in a commitment.",
  },
  {
    q: "How is this different from a traditional agency?",
    a: "Agencies run ads and hand you raw, unqualified leads. We build and operate the entire acquisition engine end-to-end — and our proprietary qualification process filters leads before they ever reach your sales team, so your crew spends time closing roofing projects, not chasing tire-kickers.",
  },
];

function FaqItem({
  index,
  q,
  a,
  open,
  onToggle,
}: {
  index: number;
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-all duration-400 ${
        open
          ? "border-[#ed1c24]/70 bg-gradient-to-r from-[#ed1c24]/10 via-[#0e0f15] to-[#0e0f15] shadow-[0_10px_35px_-10px_rgba(237,28,36,0.3)]"
          : "border-white/10 bg-[#0d0e14]/90 hover:border-white/20 hover:bg-[#12131b]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <div className="flex items-center gap-3.5">
          <span
            className={`font-mono text-xs font-bold transition-colors ${
              open ? "text-[#ed1c24]" : "text-zinc-500 group-hover:text-zinc-300"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base sm:text-lg font-bold text-white leading-snug">
            {q}
          </span>
        </div>

        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "border-[#ed1c24] bg-[#ed1c24] text-white rotate-45 shadow-[0_0_15px_rgba(237,28,36,0.6)]"
              : "border-white/15 bg-white/[0.04] text-zinc-400 group-hover:border-white/30 group-hover:text-white"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-zinc-300 border-t border-white/5">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#070709] py-20 sm:py-28 border-b border-zinc-800">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="jobber-grid-dark absolute inset-0 opacity-40" />
        <div className="absolute left-1/4 top-1/2 h-[35rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-x relative z-10 mx-auto max-w-[1240px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left: Heading + CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#ed1c24]/10 border border-[#ed1c24]/30 px-4 py-1.5 shadow-[0_0_20px_rgba(237,28,36,0.2)]">
                <HelpCircle className="h-4 w-4 text-[#ed1c24]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
                  Clear Answers
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Questions? <br />
                <span className="text-gradient-animated">
                  We&apos;ve got answers.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 text-base text-zinc-300 leading-relaxed">
                Everything roofing companies ask us before installing the system. If your question isn&apos;t here, book a call and ask us directly.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href={BOOKING_PATH}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ed1c24] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_35px_-5px_rgba(237,28,36,0.6)] transition-all duration-300 hover:bg-[#ff2a1f] hover:shadow-[0_0_50px_-5px_rgba(237,28,36,0.85)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Book Your Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                  <MessageSquare className="h-4 w-4 text-[#ed1c24]" />
                  <span>1:1 Custom Strategy Session included free</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="space-y-3.5">
                {faqs.map((item, i) => (
                  <FaqItem
                    key={item.q}
                    index={i}
                    q={item.q}
                    a={item.a}
                    open={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
