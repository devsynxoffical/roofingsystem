import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";

const pains = [
  "Stop guessing.",
  "Stop relying on referrals.",
  "Stop switching marketing agencies.",
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="section-shell">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--ink-soft)] px-6 py-14 text-white shadow-[var(--shadow)] md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 85% 20%, rgba(237,28,36,0.24), transparent 55%), radial-gradient(ellipse 50% 70% at 10% 90%, rgba(255,255,255,0.1), transparent 60%)",
              }}
            />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h2 className="display text-[clamp(2rem,5vw,3.6rem)]">
                Ready To Build A Predictable
                <br />
                Roofing{" "}
                <span className="text-[var(--red-bright)]">
                  Client Acquisition System?
                </span>
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {pains.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 text-sm font-semibold text-white/85 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/75">
                Install Roofing Systems™, a complete roofing client acquisition
                system that consistently attracts, qualifies, nurtures, and
                books high-value roof replacement opportunities, so your team
                can focus on running appointments, closing profitable projects,
                and scaling your roofing company.
              </p>

              <div className="mt-10 flex justify-center">
                <Link href={BOOKING_PATH} className="cta-btn min-w-[300px]">
                  <span className="display text-lg tracking-normal md:text-xl">
                    Book Your Free Strategy Call
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                    Only for $1M+ roofing companies
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
