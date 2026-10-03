import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Market Research & Homeowner Analysis",
    text: "We identify exactly which homeowners are most likely to invest in a roof replacement and what motivates them to buy.",
  },
  {
    title: "Roofing Offer Positioning",
    text: "We position your roofing company so homeowners choose you over competing contractors.",
  },
  {
    title: "Roofing Messaging & Creative Development",
    text: "We create roofing-specific ads, messaging, and creatives that attract premium homeowners, not price shoppers.",
  },
  {
    title: "Landing Pages & Sales Funnel",
    text: "We build high-converting landing pages and sales funnels that turn roofing traffic into booked inspections and estimates.",
  },
  {
    title: "Meta Ads Management",
    text: "We launch, manage, and optimize your roofing campaigns daily.",
  },
  {
    title: "CRM & AI Automations",
    text: "Every roofing lead automatically enters your CRM with email, SMS, reminders, and automated follow-up.",
  },
  {
    title: "Lead Qualification",
    text: "Our proprietary multi-validation process filters every roofing lead before it reaches your sales team, improving booking rates, show rates, and close rates.",
  },
  {
    title: "Close More Roof Replacement Projects",
    text: "Your team simply runs the appointments, performs inspections, and closes profitable roofing projects while Roofing Systems™ works in the background.",
  },
];

export function Steps() {
  return (
    <section id="system" className="section-shell bg-[var(--fog)]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.4rem)] text-[var(--ink)]">
            Our 8-Step Roofing
            <br />
            <span className="text-[var(--purple)]">
              Client Acquisition System
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            Everything stays the same except for roofing terminology.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 2) * 120}>
              <article className="flex h-full gap-5 rounded-[1.5rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                <div className="flex flex-col items-center gap-2">
                  <span className="display flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--purple)] text-2xl text-white shadow-[0_10px_24px_rgba(237,28,36,0.3)]">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="h-full w-px bg-[var(--line)]" />
                  )}
                </div>
                <div>
                  <h3 className="display text-lg leading-snug text-[var(--ink)] md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {step.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <Link href={BOOKING_PATH} className="cta-btn-dark min-w-[280px]">
            <span className="display text-lg tracking-normal md:text-xl">
              Install The System
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
              Book your free strategy call
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
