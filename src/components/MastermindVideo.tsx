"use client";

import { useState } from "react";
import { ArrowUpRight, BookOpen, Play } from "lucide-react";
import { Reveal } from "./Reveal";

const YOUTUBE_ID = "jjq9-FSD4iA";
const APPLY_URL = "https://www.qualifiedleadsx.com/book-your-call#book";
const CURRICULUM_URL = "https://www.qualifiedleadsx.com/mastermind/hidden-facebook-interest#curriculum";

const STATS = [
  { value: "6", label: "Weeks" },
  { value: "12", label: "Live classes" },
  { value: "14", label: "Implementation resources" },
];

/** Homepage section: AI Client Acquisition Mastermind (6-week implementation program) with a video. */
export function MastermindVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="mastermind" className="relative overflow-hidden border-b border-white/10 bg-[#09090b] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="jobber-grid-dark absolute inset-0 opacity-25" />
        <div className="absolute -right-40 top-10 h-[34rem] w-[46rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.16),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-14">
        {/* Left: the mastermind */}
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff4d55]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" />
              6-week implementation mastermind
            </span>
            <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              AI Client Acquisition Mastermind <span className="text-[#ed1c24]">·</span> by QualifiedLeadsX
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.8rem]">
              Roofing contractor marketing that builds a <span className="text-gradient-animated">predictable client acquisition system.</span>
            </h2>
            <p className="mt-3 text-lg font-bold text-[#ff4d55]">Attract ideal clients. Scale profitably.</p>
            <p className="mt-5 leading-relaxed text-zinc-300">
              A predictable roofing business needs three things working together: steady demand, fast follow-up and a clear
              booking process. We build all three. You get a lead flow you can forecast, an inspection calendar you can staff
              for, and weekly numbers that show cost per lead, cost per inspection and closed revenue.
            </p>

            <ul className="mt-7 grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <li key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-3xl font-extrabold leading-none text-white sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-xs leading-snug text-zinc-400 sm:text-sm">{s.label}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:shadow-[0_0_45px_-5px_rgba(237,28,36,1)]"
              >
                Apply for the Mastermind
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={CURRICULUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/40 hover:bg-white/5"
              >
                <BookOpen className="h-4 w-4" />
                Explore the curriculum
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right: the video */}
        <Reveal delay={0.1}>
          <div className="relative aspect-video overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#121215] shadow-[0_40px_90px_-40px_rgba(237,28,36,0.45)]">
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="AI Client Acquisition Mastermind"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button type="button" onClick={() => setPlaying(true)} aria-label="Play the mastermind video" className="group absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/reels/mastermind-yt.jpg" alt="AI Client Acquisition Mastermind session" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/15" />
                <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ed1c24] text-white shadow-[0_0_0_10px_rgba(237,28,36,0.3),0_20px_40px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                  <Play className="ml-1 h-7 w-7 fill-current sm:h-10 sm:w-10" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
