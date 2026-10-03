"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import type { FunnelConfig } from "../lib/funnels";
import { Footer } from "./Footer";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";
import { AuroraBg } from "./AuroraBg";
import { TiltCard } from "./TiltCard";
import { Counter } from "./ui/Counter";
import { Button } from "./ui/Button";
import { TestimonialsSection } from "./TestimonialsSection";

function CtaButtons({ funnel }: { funnel: FunnelConfig }) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href={funnel.bookingPath}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#ed1c24] via-[#ff2a1f] to-[#c4181e] px-9 py-4 font-bold text-white shadow-[0_10px_40px_-5px_rgba(237,28,36,0.7)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_-2px_rgba(237,28,36,0.9)] sm:w-auto"
      >
        <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
        <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="flex items-center gap-2 text-sm uppercase tracking-wider font-extrabold">
            {funnel.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
            {funnel.ctaPrimarySub}
          </span>
        </div>
      </Link>

      <Link
        href={funnel.bookingPath}
        className="group relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-[1.02] sm:w-auto"
      >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="text-sm text-zinc-200 group-hover:text-white font-bold">
            {funnel.ctaSecondary}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
            {funnel.ctaSecondarySub}
          </span>
        </div>
      </Link>
    </div>
  );
}

// Interactive Mastermind Takeaways Carousel/Slider (Sleek Dark Theme)
function InteractiveLearnSection({ funnel }: { funnel: FunnelConfig }) {
  const [activeTab, setActiveTab] = useState(0);

  const prevTab = () => {
    setActiveTab((prev) => (prev === 0 ? funnel.learnItems.length - 1 : prev - 1));
  };

  const nextTab = () => {
    setActiveTab((prev) => (prev === funnel.learnItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-[#090a0f] py-20 md:py-28 border-b border-white/10 text-white">
      {/* Background radial highlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] opacity-20 blur-[120px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(237,28,36,0.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ed1c24] shadow-[0_0_15px_rgba(237,28,36,0.2)]">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#ed1c24]" />
            <span>Mastermind Breakdown</span>
          </div>
          <h2 className="font-heading mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {funnel.learnTitle.includes("inside") || funnel.learnTitle.includes("Inside") ? (
              funnel.learnTitle
            ) : (
              <>
                Inside The <em className="not-italic text-gradient-animated">Recording</em>
              </>
            )}
          </h2>
          <p className="mt-4 text-sm text-zinc-400 sm:text-base max-w-xl leading-relaxed">
            Key breakdowns and actionable frameworks covered in this private session.
          </p>
        </Reveal>

        {/* Interactive Slider / Carousel Controls */}
        <div className="mt-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {funnel.learnItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                    activeTab === i
                      ? "bg-gradient-to-r from-[#ed1c24] to-[#c4181e] text-white shadow-[0_0_20px_rgba(237,28,36,0.6)] scale-105"
                      : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] font-mono opacity-80">0{i + 1}</span>
                  <span>Part {i + 1}</span>
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                onClick={prevTab}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white hover:scale-110 shadow-md"
                aria-label="Previous takeaway"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTab}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white hover:scale-110 shadow-md"
                aria-label="Next takeaway"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Active Featured Card Display */}
          <div className="relative">
            <TiltCard max={3} className="border border-white/15 bg-gradient-to-b from-[#12131a] to-[#0c0d12] shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-white rounded-3xl">
              <div className="p-8 md:p-12 relative overflow-hidden">
                <div className="absolute right-6 top-6 text-7xl md:text-8xl font-black text-white/5 pointer-events-none select-none font-mono">
                  {String(activeTab + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-[#ed1c24] to-[#c4181e] text-sm font-black text-white shadow-lg">
                    {String(activeTab + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#ed1c24] font-bold">
                      Mastermind Core Takeaway
                    </span>
                    <p className="mt-0.5 text-base md:text-lg font-bold text-white max-w-2xl leading-snug">
                      {funnel.learnItems[activeTab]}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl font-normal">
                  {funnel.learnDetails[activeTab]}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-zinc-400">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#ed1c24]" />
                    Tested in $50M+ roofing ad campaigns
                  </span>
                  <button
                    onClick={nextTab}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ed1c24] hover:text-white transition-colors"
                  >
                    Next Takeaway <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Grid of All Takeaway Badges */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {funnel.learnItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activeTab === i
                    ? "border-[#ed1c24]/80 bg-[#ed1c24]/10 shadow-[0_0_25px_rgba(237,28,36,0.25)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-extrabold transition-transform duration-300 group-hover:scale-110 ${
                    activeTab === i
                      ? "bg-[#ed1c24] text-white"
                      : "bg-white/10 text-zinc-400 group-hover:bg-[#ed1c24] group-hover:text-white"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 line-clamp-2 font-medium">
                  {item}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackSection({ funnel }: { funnel: FunnelConfig }) {
  return (
    <section className="relative overflow-hidden bg-[#070709] py-20 md:py-28 text-white border-b border-white/10">
      <AuroraBg />
      <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ed1c24] mb-5 shadow-[0_0_15px_rgba(237,28,36,0.2)]">
              <Zap className="h-3.5 w-3.5 fill-current text-[#ed1c24]" />
              <span>PROVEN ACQUISITION ECOSYSTEM</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {funnel.trackTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              {funnel.trackBody}
            </p>
            <Link
              href={funnel.bookingPath}
              className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-9 py-4 font-bold text-white shadow-[0_10px_40px_-5px_rgba(237,28,36,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_50px_-2px_rgba(237,28,36,0.9)]"
            >
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider font-extrabold">
                {funnel.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const resultStats = [
  { value: 40, suffix: "+", label: "Booked inspections in 60 days" },
  { value: 635, prefix: "$", suffix: "K", label: "Roofing booked from $29K spend" },
  { value: 50, prefix: "-", suffix: "%", label: "Average cost-per-lead drop" },
  { value: 86, suffix: "%+", label: "Inspection show rate" },
];

// Stats Strip (Sleek Dark Theme)
function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-[#090a0f] py-16 border-b border-white/10 text-white">
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {resultStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <TiltCard max={6} className="h-full border border-white/10 bg-white/[0.03] p-6 text-center shadow-lg backdrop-blur-xl hover:border-[#ed1c24]/50 hover:shadow-[0_0_30px_rgba(237,28,36,0.3)] transition-all duration-300 rounded-2xl">
                <p className="font-heading text-4xl font-extrabold tracking-tight text-[#ed1c24] sm:text-5xl drop-shadow-[0_0_20px_rgba(237,28,36,0.4)]">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">
                  {s.label}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const aboutFacts = [
  { value: "12+", label: "Years in roofing marketing" },
  { value: "$50M+", label: "Managed in Meta Ads" },
  { value: "25+", label: "Roofing niches served" },
  { value: "100%", label: "Done-for-you delivery" },
];

// About Section (Sleek Dark Theme)
function AboutSection({ funnel }: { funnel: FunnelConfig }) {
  return (
    <section className="relative overflow-hidden bg-[#070709] py-20 md:py-28 border-b border-white/10 text-white">
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ed1c24] mb-5 shadow-[0_0_15px_rgba(237,28,36,0.2)]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#ed1c24]" />
              <span>WHY IT&apos;S FREE</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              No pitch. No email wall.{" "}
              <span className="not-italic text-gradient-animated">Just the recording.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              We record these masterminds for serious roofing owners who want to see how the system
              actually works before they ever get on a call. Watch it. If it fits, book the free 1:1
              and we&apos;ll show you exactly what we&apos;d install for your market.
            </p>
            <Link
              href={funnel.bookingPath}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24] hover:bg-[#ed1c24] hover:scale-105 mt-8 shadow-lg"
            >
              <span>{funnel.ctaSecondary}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {aboutFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 90}>
                <TiltCard max={8} className="border border-white/10 bg-white/[0.03] p-6 sm:p-8 shadow-lg backdrop-blur-xl hover:border-[#ed1c24]/50 hover:shadow-[0_0_25px_rgba(237,28,36,0.25)] transition-all duration-300 rounded-2xl">
                  <p className="font-heading text-3xl font-extrabold text-[#ed1c24] sm:text-4xl drop-shadow-[0_0_15px_rgba(237,28,36,0.4)]">
                    {f.value}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">
                    {f.label}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection({ funnel }: { funnel: FunnelConfig }) {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-t border-white/10 bg-[#070709] py-20 sm:py-28 lg:py-32 text-white"
    >
      <div className="container-x relative z-10">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="eyebrow-xl justify-center text-[#ed1c24]">READY TO SCALE</span>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build your{" "}
            <em className="not-italic font-bold text-gradient-animated">sales call machine?</em>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Watch the mastermind. Then book if you&apos;re ready to install the full acquisition
            system for your roofing company.
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-12 flex flex-col items-center gap-5 text-center">
          <Button
            href={funnel.bookingPath}
            size="xl"
            icon="up-right"
            className="px-12 bg-gradient-to-r from-[#ed1c24] via-[#ff2a1f] to-[#c4181e] shadow-[0_10px_40px_-5px_rgba(237,28,36,0.8)] hover:scale-105"
            ariaLabel="Book your application call"
          >
            Book Application Call
          </Button>
          <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            Free 1:1 · Roofers only
          </p>
        </Reveal>
      </div>

      {/* Subtle glowing accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/50 to-transparent" />
    </section>
  );
}

export function MastermindPage({ funnel }: { funnel: FunnelConfig }) {
  return (
    <main className="bg-[#070709] min-h-screen text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#070709] pt-32 pb-20 md:pt-40 md:pb-28 text-white border-b border-white/10">
        <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <AuroraBg />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(237,28,36,0.25), transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ed1c24] mb-6 shadow-[0_0_20px_rgba(237,28,36,0.25)]">
                <span className="h-2 w-2 rounded-full bg-[#ed1c24] animate-ping" />
                <span>{funnel.eyebrow}</span>
              </div>
            </Reveal>

            <h1 className="font-heading text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold tracking-tight leading-[1.08] text-white">
              <Reveal delay={80}>
                <>
                  {funnel.title}{" "}
                  <span className="not-italic text-gradient-animated">{funnel.titleAccent}</span>
                  {funnel.titleEnd ? (
                    <>
                      <br />
                      {funnel.titleEnd}
                    </>
                  ) : null}
                </>
              </Reveal>
            </h1>

            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
                {funnel.subtitle}
              </p>
            </Reveal>
          </div>

          {/* High-Tech Glowing Video Player Frame */}
          <Reveal delay={240}>
            <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#090a0f] shadow-[0_30px_100px_rgba(0,0,0,0.95)] transition-all duration-500 hover:border-[#ed1c24]/60 hover:shadow-[0_40px_120px_rgba(237,28,36,0.3)]">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 rounded-full bg-[#ed1c24] animate-pulse" />
                  <p className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                    Private Mastermind Session
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#ed1c24]/20 border border-[#ed1c24]/40 px-3.5 py-1 text-[11px] font-bold text-[#ed1c24] uppercase tracking-wider shadow-[0_0_10px_rgba(237,28,36,0.3)]">
                    {funnel.videoLabel}
                  </span>
                </div>
              </div>

              <VideoPlayer
                src={funnel.videoSrc}
                cover={funnel.videoCover}
                title={funnel.videoLabel}
                autoPlay
              />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <CtaButtons funnel={funnel} />
          </Reveal>
        </div>
      </section>

      {/* Sleek Dark Interactive Breakdown */}
      <InteractiveLearnSection funnel={funnel} />

      {/* Dark System Track Section */}
      <TrackSection funnel={funnel} />

      {/* Sleek Dark Stats Strip */}
      <StatsStrip />

      {/* Sleek Dark About Section */}
      <AboutSection funnel={funnel} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final Closing CTA */}
      <FinalCtaSection funnel={funnel} />

      <Footer />
    </main>
  );
}

