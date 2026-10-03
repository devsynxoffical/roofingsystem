import { Reveal } from "./Reveal";

const included = [
  "Roofing Offer Positioning",
  "Roofing Messaging Strategy",
  "Meta Ads",
  "Roofing Ad Creatives",
  "Landing Pages",
  "Complete Roofing Sales Funnel",
  "CRM Setup",
  "AI Automations",
  "Email Sequences",
  "SMS Follow-Up",
  "Appointment Reminders",
  "Roofing Lead Qualification System",
  "Calendar Booking System",
  "Ongoing Campaign Optimisation",
];

export function Included() {
  return (
    <section id="included" className="section-shell bg-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">Everything included</p>
          <h2 className="display mx-auto mt-3 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] text-[var(--ink)]">
            Everything You Need.
            <br />
            <span className="text-[var(--purple)]">Nothing Extra To Pay For.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            The complete roofing client acquisition system, installed, managed,
            and optimized for you.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--fog)] px-5 py-4 transition hover:-translate-y-1 hover:border-[var(--purple)]/40 hover:bg-white hover:shadow-[var(--shadow-soft)]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--purple)] text-[11px] font-bold text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-[var(--ink)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
