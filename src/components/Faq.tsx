"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is this for?",
    a: "Only roofing companies doing $1M+ annual revenue. If you’re under $1M, don’t apply.",
  },
  {
    q: "What do you handle?",
    a: "Funnel, creatives, ad management, and follow-up. You focus on sales calls and closing jobs.",
  },
  {
    q: "What does “you don’t pay if we don’t perform” mean?",
    a: "Performance terms are written into the agreement. If we don’t perform as defined, you don’t pay for this.",
  },
  {
    q: "Can I see what’s happening live?",
    a: "Yes. You get complete live access to campaigns, performance, and system activity, full transparency.",
  },
  {
    q: "How do I start?",
    a: "Book an application call. We confirm fit, walk the agreement, and outline the 90-day plan.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-shell bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.4rem)] text-[var(--ink)]">
            Straight
            <br />
            answers
          </h2>
          <p className="mt-4 max-w-sm text-sm text-[var(--muted)] md:text-base">
            No fluff. Clear terms. Clear roles. Clear expectations.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? "border-[var(--purple)]/40 shadow-[var(--shadow-soft)]"
                    : "border-[var(--line)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                >
                  <span className="display text-lg text-[var(--ink)] md:text-xl">
                    {item.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--purple-light)] text-lg font-bold text-[var(--purple)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-[var(--line)] px-5 pb-5 pt-3 text-sm leading-relaxed text-[var(--muted)] md:px-6 md:text-base">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
