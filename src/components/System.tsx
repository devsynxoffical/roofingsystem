import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";

const services = [
  {
    step: "01",
    title: "Funnel",
    body: "High-converting roofing funnel built to book qualified sales calls, not tire-kickers.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          d="M3 4h18l-7 9v6l-4 2v-8L3 4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Creatives",
    body: "Ads, angles, and offers designed for roofers who close high-ticket jobs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Ad management",
    body: "We run and optimize campaigns daily so leads keep flowing into your calendar.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 0v3.5M12 20.5V24M0 12h3.5M20.5 12H24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Follow-up",
    body: "We handle follow-up so prospects get worked, you don’t chase them yourself.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          d="M4 5h16a1 1 0 011 1v11a1 1 0 01-1 1H9l-5 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function System() {
  return (
    <section id="system" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">The operating system</p>
            <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.4rem)] text-[var(--ink)]">
              Use our system to drive
              <br />
              growth at your roofing business
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Four moves. One machine. We run the full acquisition engine, your
              job is simple: close the job on the sales call.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <Reveal key={item.step} delay={index * 100}>
              <article className="group soft-card flex h-full flex-col border border-[var(--line)] p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--purple-light)] text-[var(--purple)] transition duration-300 group-hover:bg-[var(--purple)] group-hover:text-white">
                    {item.icon}
                  </span>
                  <span className="display text-3xl text-[var(--purple)]/20 transition duration-300 group-hover:text-[var(--purple)]">
                    {item.step}
                  </span>
                </div>
                <h3 className="display mt-6 text-xl text-[var(--ink)] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
                <Link
                  href={BOOKING_PATH}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--purple)] transition group-hover:gap-3"
                >
                  Learn More
                  <span>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12 flex justify-center">
          <Link href={BOOKING_PATH} className="cta-btn-dark min-w-[260px]">
            <span className="display text-lg tracking-normal md:text-xl">
              Put This On My Business
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
              Book application call
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
