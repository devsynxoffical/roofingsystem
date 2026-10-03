import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";

const owned = [
  "Landing Pages",
  "Sales Funnel",
  "CRM",
  "Automations",
  "Roofing Ad Creatives",
  "Copy",
  "Follow-Up Sequences",
  "Customer Data",
];

export function Ownership() {
  return (
    <section id="ownership" className="section-shell bg-[var(--fog)]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">No lock-ins · No hidden ownership</p>
          <h2 className="display mx-auto mt-3 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] text-[var(--ink)]">
            Everything
            <br />
            <span className="text-[var(--purple)]">Belongs To You</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
            Unlike most roofing marketing agencies... you own everything. When
            we build your Roofing Systems™, it becomes a permanent business
            asset.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-[var(--ink-soft)] px-6 py-12 text-white shadow-[var(--shadow)] md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 70% at 85% 15%, rgba(237,28,36,0.25), transparent 55%), radial-gradient(ellipse 45% 60% at 10% 90%, rgba(255,255,255,0.08), transparent 55%)",
              }}
            />
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h3 className="display text-2xl leading-snug md:text-3xl">
                  You own every single
                  <br />
                  <span className="text-[var(--red-bright)]">
                    asset we build.
                  </span>
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                  No lock-ins. No hidden ownership. No dependence on another
                  marketing agency.
                </p>
                <Link
                  href={BOOKING_PATH}
                  className="cta-btn mt-8 min-w-[260px]"
                >
                  <span className="display text-lg tracking-normal md:text-xl">
                    Book Your Free Strategy Call
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                    Keep everything you build
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {owned.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-sm transition hover:bg-white/[0.12]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--lime)] text-[11px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
