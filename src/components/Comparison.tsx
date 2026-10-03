import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";

const traditional = [
  "Runs Ads",
  "Delivers Leads",
  "Limited Follow-Up",
  "No CRM",
  "No Automation",
  "No Ownership",
  "No Guarantee",
];

const system = [
  "Complete Roofing Client Acquisition System",
  "Premium Homeowner Acquisition",
  "AI Follow-Up",
  "CRM Included",
  "Full Automation",
  "You Own Everything",
  "90-Day Written Guarantee",
];

export function Comparison() {
  return (
    <section id="comparison" className="section-shell bg-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why roofing companies choose us</p>
          <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.4rem)] text-[var(--ink)]">
            Traditional Roofing Marketing Agencies
            <br />
            <span className="text-[var(--purple)]">Generate Leads.</span>
            <br />
            Roofing Systems™
            <br />
            <span className="text-[var(--purple)]">Builds Predictable Growth.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--fog)]">
              <div className="px-8 py-6 md:px-10">
                <h3 className="display text-2xl text-[var(--ink)]">
                  Traditional Agency
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Generate leads, then stop.
                </p>
              </div>
              <ul className="flex-1 space-y-3 px-8 pb-10 md:px-10">
                {traditional.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[var(--ink)]/60"
                  >
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-black/30" aria-hidden>
                      <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={150}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-[var(--purple)] bg-white shadow-[var(--shadow)] md:-translate-y-2">
              <div className="bg-[var(--purple)] px-8 py-6 text-white md:px-10">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="display text-2xl">Roofing Systems™</h3>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--purple)]">
                    Featured
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/80">
                  Builds predictable growth, end to end.
                </p>
              </div>
              <ul className="flex-1 space-y-3 px-8 py-8 md:px-10">
                {system.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-[var(--purple-light)] px-4 py-3 text-sm font-semibold text-[var(--ink)]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--purple)] text-[10px] font-bold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="px-8 pb-8 md:px-10">
                <Link href={BOOKING_PATH} className="cta-btn-dark w-full">
                  <span className="display text-lg tracking-normal md:text-xl">
                    Get This Running
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                    Book your free strategy call
                  </span>
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
