import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { MASTERCLASS_COVER, MASTERCLASS_VIDEO } from "../lib/video";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";

const bullets = [
  "Funnel built to book qualified roofing sales calls",
  "Creatives designed for high-ticket close rates",
  "Daily ad management + optimization",
  "Follow-up handled so you don’t chase leads",
];

export function Masterclass() {
  return (
    <section id="masterclass" className="section-shell bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal className="relative">
          <div className="spin-ring-reverse pointer-events-none absolute -inset-8 z-0 rounded-full border-2 border-dashed border-[var(--purple)]/30" />
          <div
            className="pointer-events-none absolute -inset-12 -z-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(237,28,36,0.14), transparent 70%)",
            }}
          />

          <div className="relative z-10 overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[0_40px_100px_rgba(21,21,40,0.12)]">
            <div className="absolute left-0 top-0 z-20 flex">
              <div className="bg-white px-4 py-2">
                <p className="display text-sm text-[var(--purple)] md:text-base">
                  Systems Breakdown
                </p>
              </div>
              <div className="bg-[var(--lime)] px-4 py-2">
                <p className="display text-sm text-[var(--ink)] md:text-base">
                  Watch Now
                </p>
              </div>
            </div>

            <VideoPlayer src={MASTERCLASS_VIDEO} cover={MASTERCLASS_COVER} title="Systems breakdown" />
          </div>

          <div className="float-icon-soft absolute -left-4 top-16 z-10 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--purple)] shadow-[var(--shadow)]">
            ● Live access
          </div>
          <div
            className="float-icon-soft absolute -right-3 bottom-16 z-10 rounded-full bg-[var(--purple)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[var(--shadow)]"
            style={{ animationDelay: "0.8s" }}
          >
            Results included
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">See the machine</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,4vw,2.8rem)] text-[var(--ink)]">
              Let&apos;s make something
              <br />
              <span className="text-[var(--purple)]">awesome together</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              You just take the sales call. We fill the calendar with qualified
              roofing prospects.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-7 grid gap-3">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-[var(--fog)] p-4 text-sm text-[var(--ink)]/75"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--purple)] text-xs font-bold text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <Link href={BOOKING_PATH} className="cta-btn-dark mt-8 w-full sm:w-auto">
              <span className="display text-lg tracking-normal">
                Book Application Call
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                Live access included
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
