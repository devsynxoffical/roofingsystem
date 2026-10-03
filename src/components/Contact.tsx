import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { BookingForm } from "./BookingForm";
import { Reveal } from "./Reveal";

const info = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          d="M3 5h18v14H3V5zm2 3l7 5 7-5M5 19h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Application call",
    value: "Book your call now",
    href: BOOKING_PATH,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    label: "Live access",
    value: "Check everything live",
    href: "/#results",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Qualification",
    value: "$1M+ roofers only",
    href: BOOKING_PATH,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-[var(--ink-soft)] px-5 py-12 shadow-[var(--shadow)] md:px-10 md:py-16">
            <div className="mx-auto mb-10 max-w-3xl text-center text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--red-bright)]">
                Contact us
              </p>
              <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.2rem)]">
                Book your application call
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                Only for $1M+ roofing companies. Funnel, creatives, ads, and
                follow-up handled for you, you just take the sales calls.
              </p>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
              <div className="rounded-[1.5rem] bg-white p-1 shadow-[0_30px_80px_rgba(21,21,40,0.2)]">
                <BookingForm />
              </div>

              <div className="space-y-4">
                {info.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--purple)]">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                    </div>
                  </Link>
                ))}

                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                  <div
                    className="h-52"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), radial-gradient(ellipse 80% 60% at 30% 30%, rgba(237,28,36,0.24), transparent 60%)",
                      backgroundSize: "44px 44px, 44px 44px, auto",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--red-bright)]" />
                      Serving roofers nationwide
                    </span>
                  </div>
                  <div className="border-t border-white/15 px-6 py-4 text-white">
                    <p className="display text-lg">Roofing Systems Co.</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">
                      Vaishali Media Productions LLC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
