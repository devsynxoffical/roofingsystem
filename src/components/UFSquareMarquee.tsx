"use client";

import React from "react";

const RANDOM_PHOTOS = [
  {
    src: "/images/random/cropped/anastasia.webp",
    alt: "Client funnel preview",
    tag: "Funnel Build",
    title: "Client Offer Architecture",
    tilt: "-rotate-1 sm:-rotate-2",
  },
  {
    src: "/images/random/cropped/ann.webp",
    alt: "Strategy call with Ann",
    tag: "Strategy Session",
    title: "Live Growth Breakdown",
    tilt: "rotate-1 sm:rotate-2",
  },
  {
    src: "/images/random/cropped/analytics.webp",
    alt: "Analytics dashboard proof",
    tag: "ROAS Verified",
    title: "Real-Time Tracking Core",
    tilt: "-rotate-1",
  },
  {
    src: "/images/random/cropped/george.webp",
    alt: "Team call with George",
    tag: "Scaling Audit",
    title: "Backend Conversion Review",
    tilt: "rotate-1 sm:rotate-1.5",
  },
  {
    src: "/images/random/cropped/edgar_jeermei.webp",
    alt: "Edgar & Jeremi",
    tag: "Deep-Dive",
    title: "Offer & Angle Mapping",
    tilt: "-rotate-1 sm:-rotate-2",
  },
  {
    src: "/images/random/cropped/guilia.webp",
    alt: "Client session with Giulia",
    tag: "Client Onboarding",
    title: "High-Ticket Pipeline Setup",
    tilt: "rotate-2",
  },
  {
    src: "/images/random/cropped/ig_shot.webp",
    alt: "Performance snapshot",
    tag: "Traffic Scale",
    title: "Paid Acquisition Proof",
    tilt: "-rotate-1.5",
  },
  {
    src: "/images/random/cropped/owne.webp",
    alt: "Client session with Owen",
    tag: "Growth Workshop",
    title: "Unit Economics Audit",
    tilt: "rotate-1",
  },
  {
    src: "/images/random/cropped/sina.webp",
    alt: "Client session with Sina",
    tag: "Pipeline Review",
    title: "Closing Optimization",
    tilt: "-rotate-2",
  },
];

/**
 * Landscape photo ribbon above the footer.
 * Distinct 3D glassmorphic window cards with live badges, subtle tilts, and hover glow,
 * aligned with the dark & red accent brand aesthetic of Roofing Systems™.
 */
export default function UFSquareMarquee() {
  return (
    <section className="marquee-row relative w-full overflow-hidden border-y border-white/[0.08] bg-[#070709] py-12 sm:py-16 md:py-20">
      {/* Background Grid Pattern */}
      <div className="jobber-grid-dark absolute inset-0 pointer-events-none opacity-30" />

      {/* Ambient background glow (Theme-aligned Red Accent Glow) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(237,28,36,0.12),transparent_70%)]" />

      {/* Top and Bottom Laser Hairline Accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/30 to-transparent" />

      {/* Left and Right Edge Fade Vignettes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#070709] via-[#070709]/80 to-transparent sm:w-36 md:w-56" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#070709] via-[#070709]/80 to-transparent sm:w-36 md:w-56" />

      <div
        className="marquee-track-left flex w-max hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": "48s" } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-6 py-4 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10"
            aria-hidden={copy === 1 || undefined}
          >
            {RANDOM_PHOTOS.map((p, idx) => (
              <div
                key={`${copy}-${idx}`}
                className={`group relative shrink-0 transition-all duration-500 ease-out hover:z-30 hover:scale-[1.06] hover:rotate-0 ${p.tilt}`}
              >
                {/* Outer Glass Frame */}
                <div className="relative w-[280px] sm:w-[340px] md:w-[400px] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-[#0c0d12]/95 p-2.5 sm:p-3 shadow-[0_16px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#ed1c24]/60 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(237,28,36,0.3)]">
                  
                  {/* Top Window Header with Mac Dots & Status Badge */}
                  <div className="mb-2.5 flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-emerald-400 transition-colors group-hover:border-[#ed1c24]/40">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      {p.tag}
                    </div>
                  </div>

                  {/* Image Display Area */}
                  <div className="relative h-[155px] sm:h-[190px] md:h-[225px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#060816]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src}
                      alt={copy === 0 ? p.alt : ""}
                      className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Subtle Glare Gradient Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.08]" />
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="mt-2.5 flex items-center justify-between px-1">
                    <span className="font-mono text-[10.5px] font-medium text-zinc-300 transition-colors group-hover:text-white">
                      {p.title}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] text-zinc-500 transition-colors group-hover:text-zinc-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/80" />
                      LIVE RECORDING
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export { UFSquareMarquee };
