"use client";

import { useCallback, useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { TiltCard } from "./TiltCard";

const reviews = [
  {
    id: "edgar",
    title: "Client results walkthrough",
    subtitle: "High-ticket acquisition in the field",
    poster: "/media/reviews/poster-edgar.png",
    video:
      "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/69624f63f8a93b76e0751a55.mp4",
  },
  {
    id: "ibam",
    title: "System case study",
    subtitle: "Walkthrough + results",
    poster: "/media/reviews/poster-ibam.png",
    video:
      "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/69624f62f8a93b0480751a4e.mp4",
  },
  {
    id: "edgar-2",
    title: "After install",
    subtitle: "What changed once ads were live",
    poster: "/media/reviews/poster-edgar-2.png",
    video:
      "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/6978f116d560857126a4804c.mp4",
  },
];

export function Reviews() {
  const [active, setActive] = useState(0);
  const featured = reviews[active];

  const next = useCallback(() => {
    setActive((v) => (v + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setActive((v) => (v - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const t = window.setInterval(next, 9000);
    return () => window.clearInterval(t);
  }, [next]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-b border-zinc-800 bg-[#09090b] py-20 md:py-24"
    >
      <div
        className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl">
        <TiltCard className="border border-zinc-800 bg-zinc-900">
          <VideoPlayer
            key={featured.id}
            src={featured.video}
            cover={featured.poster}
            title={featured.title}
          />
        </TiltCard>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:scale-105 hover:border-[var(--accent)] hover:bg-[var(--accent)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M15 5l-7 7 7 7 1.4-1.4L10.8 12l5.6-5.6z" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-[var(--accent)]"
                    : "w-2 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:scale-105 hover:border-[var(--accent)] hover:bg-[var(--accent)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M9 5l7 7-7 7-1.4-1.4L13.2 12 7.6 6.4z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
