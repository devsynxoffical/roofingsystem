import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white shadow-[0_40px_100px_rgba(21,21,40,0.25)]">
        <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--fog)] px-4 py-3 md:px-5">
          <p className="display text-sm tracking-normal text-[var(--ink)] md:text-base">
            Sales Call Machine
          </p>
          <span className="rounded-full bg-[var(--purple)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            Live system
          </span>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-5">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--purple-light)]/70 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink)]/40">
              This week
            </p>
            <p className="display mt-2 text-4xl text-[var(--purple)]">48</p>
            <p className="mt-1 text-sm text-[var(--ink)]/70">Qualified sales calls booked</p>
            <div className="mt-4 space-y-2">
              {[
                "Tue · 11:00 · Storm repair consult",
                "Wed · 14:30 · Full roof estimate",
                "Thu · 09:15 · Insurance claim job",
              ].map((row) => (
                <div
                  key={row}
                  className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-xs text-[var(--ink)]/65"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--purple)]" />
                  {row}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink)]/40">
              90-day trajectory
            </p>
            <div className="mt-5 flex h-32 items-end gap-2">
              {[28, 36, 44, 52, 61, 74, 88, 100].map((h, i) => (
                <div key={h} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-md"
                    style={{
                      height: `${h}%`,
                      background:
                        i > 5
                          ? "linear-gradient(180deg,#ff3b43,#c4181e)"
                          : "rgba(237,28,36,0.15)",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-[var(--ink)]/45">Start</span>
              <span className="font-semibold text-[var(--purple)]">2× revenue</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-[var(--line)]">
          {[
            ["Funnel", "Built"],
            ["Ads", "Managed"],
            ["Follow-up", "Handled"],
          ].map(([k, v]) => (
            <div key={k} className="border-r border-[var(--line)] px-3 py-4 last:border-r-0 md:px-4">
              <p className="display text-base text-[var(--ink)] md:text-lg">{k}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--purple)]">
                {v}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--line)] bg-[var(--purple)] px-5 py-4 md:px-6">
          <p className="display text-lg text-white md:text-xl">
            You take the call. We fill the calendar.
          </p>
          <Link
            href={BOOKING_PATH}
            className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--lime)] underline-offset-4 hover:underline"
          >
            Book application call →
          </Link>
        </div>
      </div>
    </div>
  );
}
