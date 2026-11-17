"use client";

import { useState } from "react";
import { ArrowUpRight, BookOpen, Play, Radio, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const VIMEO_ID = "1245761641";
const APPLY_URL = "https://www.qualifiedleadsx.com/book-your-call#book";
const CURRICULUM_URL = "https://www.qualifiedleadsx.com/mastermind/hidden-facebook-interest#curriculum";

const STATS = [
  { value: "6", label: "Weeks" },
  { value: "12", label: "Live classes" },
  { value: "14", label: "Implementation resources" },
];

/** Homepage section: AI Client Acquisition Mastermind, with the free Class 1 preview video. */
export function MastermindVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="mastermind" className="relative overflow-hidden border-b border-white/10 bg-[#09090b] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="jobber-grid-dark absolute inset-0 opacity-25" />
        <div className="absolute -right-40 top-10 h-[34rem] w-[46rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.16),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff4d55]">
              <Radio className="h-3.5 w-3.5" />
              VSL System Breakdown · 100% Free Masterclass
            </span>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              QualifiedLeadsX™ <span className="text-gradient-animated">System Breakdown</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="flex items-center gap-2 text-sm text-zinc-400 sm:text-[0.95rem]">
              <Sparkles className="h-4 w-4 text-[#ed1c24]" />
              Free preview of Class 1 · 1.5+ hours of strategy
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-14">
          {/* Left: the mastermind */}
          <Reveal>
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                AI Client Acquisition Mastermind <span className="text-[#ed1c24]">·</span> by QualifiedLeadsX
              </p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-[2rem]">
                Build a predictable client acquisition system.
              </h3>
              <p className="mt-2 text-lg font-bold text-[#ff4d55]">Attract ideal clients. Scale profitably.</p>
              <p className="mt-5 leading-relaxed text-zinc-300">
                Learn how to build, optimize and scale a predictable client acquisition system using Meta ads,
                AI-powered advertising, qualified lead generation, conversion tracking, funnels and advanced scaling
                strategies.
              </p>

              <ul className="mt-7 grid grid-cols-3 gap-3">
                {STATS.map((s) => (
                  <li key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-extrabold leading-none text-white sm:text-4xl">{s.value}</p>
                    <p className="mt-2 text-xs leading-snug text-zinc-400 sm:text-sm">{s.label}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-[#ed1c24]/25 bg-[#ed1c24]/[0.06] p-5">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff4d55]">In short</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-zinc-300">
                  The AI Client Acquisition Mastermind is a 6-week, 12-class implementation program covering Meta ads
                  audience research, AI advertising, lead qualification, Pixel and CAPI tracking, scaling, manual
                  bidding, retargeting and unit economics. You apply each class to your own campaigns, with 14
                  implementation resources.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          {/* Right: the free preview video */}
          <Reveal delay={0.1}>
            <div>
              <div className="relative aspect-video overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#121215] shadow-[0_40px_90px_-40px_rgba(237,28,36,0.45)]">
                {playing ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
                    title="Free preview, Class 1: Hidden Facebook interest targeting"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play the free Class 1 preview"
                    className="group absolute inset-0 text-left"
                  >
                    {/* designed cover */}
                    <span className="absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_100%,rgba(237,28,36,0.75),transparent_55%),radial-gradient(90%_70%_at_0%_0%,rgba(120,10,20,0.9),transparent_60%),linear-gradient(135deg,#1a0b10,#2a0d14_45%,#09090b)]" />
                    <span className="jobber-grid-dark absolute inset-0 opacity-30" />

                    <span className="absolute right-4 top-4 rounded-lg bg-black/70 px-3 py-1.5 font-mono text-xs font-bold sm:right-6 sm:top-6 sm:text-sm">
                      1:33:56
                    </span>

                    <span className="absolute bottom-4 left-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed1c24] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider sm:text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" /> Free preview
                      </span>
                      <span className="rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider sm:text-xs">
                        Class 1
                      </span>
                    </span>

                    <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#09090b] shadow-[0_0_0_10px_rgba(237,28,36,0.35),0_20px_40px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                      <Play className="ml-1 h-7 w-7 fill-current sm:h-10 sm:w-10" />
                    </span>
                  </button>
                )}
              </div>

              <div className="mt-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff4d55]">Free preview · Class 1</p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  Hidden Facebook interest targeting.
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
                  A taste of week 1: how hidden interest research, buyer-intent segmentation and creative rotation work
                  together to reach high-ticket buyers on Meta.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
