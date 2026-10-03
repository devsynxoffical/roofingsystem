import type { Metadata } from "next";
import { BookingForm } from "../../components/BookingForm";
import { Footer } from "../../components/Footer";
import { VideoPlayer } from "../../components/VideoPlayer";
import { MASTERCLASS_COVER, MASTERCLASS_VIDEO } from "../../lib/video";

export const metadata: Metadata = {
  title: "Book Application Call | Roofing Systems Co.",
  description:
    "Apply for Roofing Systems Co. Only for roofers doing $1M+. Double your revenue in 90 days, or you don't pay.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[var(--fog)]">
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 10% 0%, rgba(237,28,36,0.2), transparent 55%), radial-gradient(ellipse 40% 40% at 90% 20%, rgba(255,255,255,0.14), transparent 50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8 md:pb-14 md:pt-28">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--purple)] bg-[var(--purple-light)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--purple)]">
                Booking funnel · roofers only
              </p>
              <h1 className="display mt-5 text-[clamp(2.2rem,4.5vw,3.6rem)] text-[var(--ink)]">
                Apply to double
                <br />
                your revenue
                <br />
                <span className="text-[var(--purple)]">in 90 days</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--muted)]">
                Book your application call. We confirm you&apos;re a $1M+
                roofing company, walk through the agreement, and show live
                access to the system.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-zinc-200 shadow-sm">
                <VideoPlayer
                  src={MASTERCLASS_VIDEO}
                  cover={MASTERCLASS_COVER}
                  title="Application briefing"
                  autoPlay
                />
              </div>

              <ul className="mt-8 space-y-4 text-sm text-[var(--ink)]/75">
                {[
                  "Only for roofers, $1M minimum or don’t apply",
                  "Funnel + creatives + ads + follow-up handled for you",
                  "You just take the sales call",
                  "Live access to everything, full transparency",
                  "If we don’t perform, you don’t pay",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--purple)] text-[10px] font-bold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
