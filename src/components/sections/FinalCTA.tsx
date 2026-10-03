"use client";

import { ShieldCheck, KeyRound, CalendarCheck2, ArrowRight } from "lucide-react";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const benefits = [
  { icon: ShieldCheck, title: "90-Day Written Guarantee", desc: "Mutually agreed growth milestones or we keep working free" },
  { icon: KeyRound, title: "You Own Everything", desc: "Every asset, account, and audience transfers to you day one" },
  { icon: CalendarCheck2, title: "Qualified Inspections In Weeks", desc: "Not raw leads — booked appointments with homeowners ready to buy" },
  { icon: ArrowRight, title: "No Cold Outreach Ever", desc: "Inbound system brings homeowners to you, not the other way around" },
];

export function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-white border-t border-zinc-100">
      <div className="container-x relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="eyebrow-xl justify-center">The next step is yours</span>
          <SplitReveal
            as="h2"
            className="mt-6 text-balance text-3xl font-bold leading-[1.05] tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
          >
            Ready to build a{" "}
            <em className="font-bold not-italic text-[#ed1c24]">
              predictable roofing client acquisition system?
            </em>
          </SplitReveal>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-500">
            Stop guessing. Stop relying on referrals. Stop switching agencies. Install a complete
            system that attracts, qualifies, nurtures and books premium roofing clients — so you
            can focus on closing jobs and scaling your business.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <article
                key={b.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-500 hover:border-[#ed1c24]/50 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24] transition-all duration-300 group-hover:bg-[#ed1c24] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-bold text-zinc-950">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{b.desc}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#ed1c24]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            );
          })}
        </Reveal>

        <Reveal delay={0.25} className="mt-16 flex flex-col items-center gap-5 text-center">
          <Button
            href={site.bookCallUrl}
            size="xl"
            icon="up-right"
            className="px-12"
            ariaLabel="Book your free strategy call"
          >
            Book Your Free Strategy Call
          </Button>
          <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
            Free · No pressure · 90-day written guarantee
          </p>
        </Reveal>
      </div>

      {/* Subtle accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/50 to-transparent" />
    </section>
  );
}