"use client";

import { useState, useRef, useEffect } from "react";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";
import { SplitReveal } from "./ui/SplitReveal";
import { Button } from "./ui/Button";
import { gsap, prefersReducedMotion, EASE } from "../lib/motion";

const resources = [
  {
    id: "DVjcGrUEr1Y",
    src: "/media/training/DVjcGrUEr1Y.mp4",
    cover: "/media/training/DVjcGrUEr1Y-poster.jpg",
    category: "Podcast",
    tag: "Lowest-Cost Leads",
    title: "50% Drop In Cost Per Lead",
    quote: "Roofing agency client? 50% drop in his cost per lead.",
    body: "How we generate high-quality roofing leads at the lowest possible cost, and what changed in the account to get there.",
  },
  {
    id: "DQXUnRNkjR3",
    src: "/media/training/DQXUnRNkjR3.mp4",
    cover: "/media/training/DQXUnRNkjR3-poster.jpg",
    category: "Academy",
    tag: "System Strategy",
    title: "Why Most Programs Fail",
    quote: "I've spent over $10,000+ on different programs.",
    body: "The strategic thinking behind our client acquisition system, and why the way roofing companies buy marketing is usually the problem.",
  },
  {
    id: "DPHgI7fEuIA",
    src: "/media/training/DPHgI7fEuIA.mp4",
    cover: "/media/training/DPHgI7fEuIA-poster.jpg",
    category: "Live Training",
    tag: "Realistic Results",
    title: "Inside A Live Roofing Team Training",
    quote: "2-hour roofing team training, behind the scenes.",
    body: "What results you can realistically expect once we launch and optimize your campaigns, straight from a live training session with a roofing team.",
  },
];

const CATEGORY_COLORS = {
  Podcast: "bg-purple-500/90",
  Academy: "bg-[#ed1c24]",
  "Live Training": "bg-amber-500/90",
};

function VideoCard({ video, index }: { video: typeof resources[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        defaults: { ease: EASE.outExpo },
      });

      tl.fromTo(
        el,
        { y: 60, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 }
      );
    }, el);

    return () => ctx.revert();
  }, [index]);

  return (
    <Reveal delay={index * 100} className="h-full">
      <article
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xs transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        style={{ perspective: "1000px" }}
      >
        {/* Video Thumbnail with 3D tilt effect */}
        <div className="relative overflow-hidden rounded-t-2xl bg-black" style={{ transformStyle: "preserve-3d" }}>
          <VideoPlayer
            src={video.src}
            cover={video.cover}
            title={video.title}
            aspect="aspect-video"
            className="transition-all duration-500 group-hover:scale-[1.05]"
          />
          
          {/* Category badge */}
          <span className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-sm backdrop-blur transition-transform duration-300 hover:scale-105">
            <span className={`h-2 w-2 rounded-full ${CATEGORY_COLORS[video.category as keyof typeof CATEGORY_COLORS] || "bg-[#ed1c24]"}`} />
            {video.category}
          </span>
        </div>

        {/* Floating accent line on hover */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[calc(100%-120px)] h-px bg-gradient-to-r from-transparent via-[#ed1c24] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Card Content */}
        <div className="flex flex-1 flex-col gap-2 p-5 relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1">
            {video.tag}
          </p>
          <h3 className="text-base font-extrabold text-zinc-950 leading-snug group-hover:text-[#ed1c24] transition-colors duration-300">
            {video.title}
          </h3>
          <p className="text-sm italic leading-relaxed text-zinc-400 border-l-2 border-transparent pl-3 transition-all duration-300 group-hover:border-[#ed1c24]/50 group-hover:pl-4">
            &ldquo;{video.quote}&rdquo;
          </p>
          <p className="text-sm leading-relaxed text-zinc-500 mt-auto pt-2">
            {video.body}
          </p>
          
          {/* Progress indicator */}
          <div className="mt-4 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#ed1c24] to-[#ff7a90] transition-transform duration-500 group-hover:scale-x-100" />
        </div>
      </article>
    </Reveal>
  );
}

export function TrainingVideos() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Animate background elements
      gsap.fromTo(
        el.querySelector(".accent-blob-1"),
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 0.4, duration: 2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%" } }
      );
      
      gsap.fromTo(
        el.querySelector(".accent-blob-2"),
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 0.3, duration: 2.5, ease: "power3.out", delay: 0.3, scrollTrigger: { trigger: el, start: "top 80%" } }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="training"
      className="relative overflow-hidden section-shell bg-white border-b border-zinc-100"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="accent-blob-1 absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#ed1c24]/10 blur-3xl" />
        <div className="accent-blob-2 absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#ed1c24]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        {/* Header */}
        <Reveal className="flex flex-col items-start max-w-3xl">
          <span className="relative inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ed1c24]">
            <span className="relative inline-block h-px w-8 bg-[#ed1c24] overflow-hidden">
              <span className="absolute left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-[#ed1c24] to-transparent animate-[shimmer_2s_infinite]" />
            </span>
            Academy & Resources
          </span>
          <SplitReveal
            as="h2"
            mode="lines"
            className="font-heading mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl"
          >
            Our business is{" "}
            <span className="relative text-gradient-animated">
              helping yours succeed
              <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ed1c24]/40 to-transparent -skew-y-1" />
            </span>
          </SplitReveal>
          <p className="mt-4 max-w-2xl text-base text-zinc-500 leading-relaxed">
            Watch real case studies, training recordings, and strategy breakdowns from roofing companies scaling with our system.
          </p>
        </Reveal>

        {/* Video Cards Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        {/* CTA Prompt with entrance animation */}
        <Reveal delay={300} className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#ed1c24]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="mx-auto max-w-xl text-sm text-zinc-500 leading-relaxed">
              Seen enough? Book a free strategy call and we&apos;ll walk you through what this looks like for your roofing company.
            </p>
            <Button href={BOOKING_PATH} variant="primary" size="lg" className="mt-6 group relative overflow-hidden">
              <span className="relative z-10">Book Your Free Strategy Call</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff2a1f] to-[#ed1c24] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}