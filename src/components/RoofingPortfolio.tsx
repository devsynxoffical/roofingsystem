"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Flame, Eye, Volume2, VolumeX, Play, ImageIcon, Film } from "lucide-react";
import { Reveal } from "./Reveal";

/* ─────────────────────────────────────────────────────────
   CONTENT LIBRARY — all files from /public/roofing-content
   ───────────────────────────────────────────────────────── */
type ContentItem = {
  id: string;
  type: "video" | "gif" | "image";
  src: string;
  poster?: string;       // thumbnail for video cards
  title: string;
  tag: string;
  category: string;
};

const CONTENT: ContentItem[] = [
  // ── VIDEOS ──────────────────────────────────────────────────────────────
  {
    id: "equi-1",
    type: "video",
    src: "/roofing-content/videos/equinox 1.mp4",
    title: "Equinox Roofing Ad 1",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "equi-2",
    type: "video",
    src: "/roofing-content/videos/equinox 2.mp4",
    title: "Equinox Roofing Ad 2",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "equi-3",
    type: "video",
    src: "/roofing-content/videos/equinox 3.mp4",
    title: "Equinox Roofing Ad 3",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "equi-4",
    type: "video",
    src: "/roofing-content/videos/equinox 4.mp4",
    title: "Equinox Roofing Ad 4",
    tag: "FACEBOOK",
    category: "Videos",
  },
  {
    id: "equi-5",
    type: "video",
    src: "/roofing-content/videos/equinox 5.mp4",
    title: "Equinox Roofing Ad 5",
    tag: "FACEBOOK",
    category: "Videos",
  },
  {
    id: "equi-6",
    type: "video",
    src: "/roofing-content/videos/equinox 6(1).mp4",
    title: "Equinox Roofing Ad 6",
    tag: "INSTAGRAM",
    category: "Videos",
  },
  {
    id: "equnox-vid-1",
    type: "video",
    src: "/roofing-content/videos/equnox vid 1 (1).mp4",
    title: "Equinox Vision Ad",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "equinox-1f",
    type: "video",
    src: "/roofing-content/videos/EQUINOX 1F.mp4",
    title: "Equinox Full Ad 1",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "equinox-2f",
    type: "video",
    src: "/roofing-content/videos/EQUINOX 2F(1).mp4",
    title: "Equinox Full Ad 2",
    tag: "FACEBOOK",
    category: "Videos",
  },
  {
    id: "equi-vid-2",
    type: "video",
    src: "/roofing-content/videos/EQUINOX VID 2 (1).mp4",
    title: "Short-Form Roofing Ad",
    tag: "SHORT FORM",
    category: "Videos",
  },
  {
    id: "equi-vid-3",
    type: "video",
    src: "/roofing-content/videos/EQUINOX VID 3.mp4",
    title: "Roofing Hook Ad",
    tag: "HOOK AD",
    category: "Videos",
  },
  {
    id: "leaking-1",
    type: "video",
    src: "/roofing-content/videos/LEAKING VID 1.mp4",
    title: "Storm Damage Hook Ad",
    tag: "HOOK AD",
    category: "Videos",
  },
  {
    id: "top-roof-3",
    type: "video",
    src: "/roofing-content/videos/TOP ROOF 3.mp4",
    title: "Top Roof Replacement Ad",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "video-3",
    type: "video",
    src: "/roofing-content/videos/VIDEO 3.mp4",
    title: "Roofing Creative 3",
    tag: "INSTAGRAM",
    category: "Videos",
  },
  {
    id: "equi-june-2",
    type: "video",
    src: "/roofing-content/videos/EQUI 9 JUNE 2.mp4",
    title: "June Campaign Ad 2",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "equi-june-3",
    type: "video",
    src: "/roofing-content/videos/EQUI 9 JUNE 3.mp4",
    title: "June Campaign Ad 3",
    tag: "META ADS",
    category: "Videos",
  },
  {
    id: "equi-june-4",
    type: "video",
    src: "/roofing-content/videos/EQUI 9 JUNE 4.mp4",
    title: "June Campaign Ad 4",
    tag: "FACEBOOK",
    category: "Videos",
  },
  {
    id: "equi-june-6",
    type: "video",
    src: "/roofing-content/videos/EQUI 9 JUNE 6.mp4",
    title: "June Campaign Ad 6",
    tag: "FACEBOOK",
    category: "Videos",
  },
  {
    id: "gif2-vid",
    type: "video",
    src: "/roofing-content/videos/Gif 2.mp4",
    title: "Quick Roofing Reel",
    tag: "REEL",
    category: "Videos",
  },
  // ── GIFs ────────────────────────────────────────────────────────────────
  {
    id: "gif-1",
    type: "gif",
    src: "/roofing-content/gif-img/roof 1.gif",
    title: "Roof Install GIF 1",
    tag: "GIF AD",
    category: "GIFs",
  },
  {
    id: "gif-2",
    type: "gif",
    src: "/roofing-content/gif-img/roof 2.gif",
    title: "Roof Install GIF 2",
    tag: "GIF AD",
    category: "GIFs",
  },
  {
    id: "gif-3",
    type: "gif",
    src: "/roofing-content/gif-img/gif 3.gif",
    title: "Roofing GIF",
    tag: "GIF AD",
    category: "GIFs",
  },
  // ── IMAGES ──────────────────────────────────────────────────────────────
  {
    id: "img-1",
    type: "image",
    src: "/roofing-content/images/1 (1).jpg",
    title: "Roofing Creative 1",
    tag: "STATIC AD",
    category: "Images",
  },
  {
    id: "img-2",
    type: "image",
    src: "/roofing-content/images/1f.jpg",
    title: "Roofing Creative 2",
    tag: "STATIC AD",
    category: "Images",
  },
  {
    id: "img-3",
    type: "image",
    src: "/roofing-content/images/2 (2).jpg",
    title: "Roofing Creative 3",
    tag: "STATIC AD",
    category: "Images",
  },
  {
    id: "img-4",
    type: "image",
    src: "/roofing-content/images/3.png",
    title: "Roofing Creative 4",
    tag: "STATIC AD",
    category: "Images",
  },
  {
    id: "img-5",
    type: "image",
    src: "/roofing-content/images/3f.jpg",
    title: "Roofing Creative 5",
    tag: "STATIC AD",
    category: "Images",
  },
  {
    id: "img-6",
    type: "image",
    src: "/roofing-content/images/4.jpg",
    title: "Roofing Creative 6",
    tag: "STATIC AD",
    category: "Images",
  },
];

const FILTERS = [
  { label: "Videos", value: "Videos", icon: Film },
  { label: "GIFs", value: "GIFs", icon: Flame },
  { label: "Images", value: "Images", icon: ImageIcon },
];

/* ─── Video Card ──────────────────────────────────────── */
function VideoCard({ item, index }: { item: ContentItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // IntersectionObserver — autoplay muted when in view
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.muted = true;
          el.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !muted;
    setMuted(!muted);
  };

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e14] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ed1c24]/60 hover:shadow-[0_20px_50px_-12px_rgba(237,28,36,0.4)]">
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-zinc-950">
          <video
            ref={videoRef}
            src={item.src}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loop
            muted
            playsInline
            preload="metadata"
          />

          {/* Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          {/* Tag */}
          <div className="absolute left-3 top-3 right-3 z-20 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
              <Flame className="h-3 w-3 text-[#ed1c24]" />
              {item.tag}
            </span>
            {playing && (
              <button
                type="button"
                onClick={toggleMute}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white backdrop-blur transition hover:scale-110"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-[#ed1c24]" />}
              </button>
            )}
          </div>

          {/* Play pulse when not yet playing */}
          {!playing && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#ed1c24] shadow-[0_0_30px_rgba(237,28,36,0.8)] transition-all duration-300 group-hover:scale-110">
                <span className="absolute inset-0 rounded-full bg-[#ed1c24] animate-ping opacity-50" />
                <Play className="relative z-10 ml-0.5 h-6 w-6 fill-white text-white" />
              </div>
            </div>
          )}

          {/* Bottom info */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10 p-4">
            <p className="text-sm font-bold text-white leading-snug">{item.title}</p>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400">
              <Eye className="h-3 w-3 text-[#ed1c24]" />
              Roofing Portfolio
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── GIF Card ───────────────────────────────────────── */
function GifCard({ item, index }: { item: ContentItem; index: number }) {
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e14] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ed1c24]/60 hover:shadow-[0_20px_50px_-12px_rgba(237,28,36,0.4)]">
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-zinc-950">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          {/* Tag */}
          <div className="absolute left-3 top-3 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
              <Flame className="h-3 w-3 text-[#ed1c24]" />
              {item.tag}
            </span>
          </div>

          {/* GIF badge */}
          <div className="absolute right-3 top-3 z-20">
            <span className="rounded-full bg-[#ed1c24] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white">GIF</span>
          </div>

          <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10 p-4">
            <p className="text-sm font-bold text-white leading-snug">{item.title}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Image Card ─────────────────────────────────────── */
function ImageCard({ item, index }: { item: ContentItem; index: number }) {
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e14] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ed1c24]/60 hover:shadow-[0_20px_50px_-12px_rgba(237,28,36,0.4)]">
        <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

          {/* Tag */}
          <div className="absolute left-3 top-3 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
              <ImageIcon className="h-3 w-3 text-[#ed1c24]" />
              {item.tag}
            </span>
          </div>

          <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10 p-4">
            <p className="text-sm font-bold text-white leading-snug">{item.title}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section ───────────────────────────────────── */
export function RoofingPortfolio() {
  const [activeFilter, setActiveFilter] = useState("Videos");

  const filtered = CONTENT.filter((c) => c.category === activeFilter);

  return (
    <section id="roofing-work" className="relative overflow-hidden bg-[#070709] py-20 sm:py-28 border-b border-zinc-800">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="jobber-grid-dark absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(237,28,36,0.12), transparent 75%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#ed1c24]">
              <span className="flex h-2 w-2 rounded-full bg-[#ed1c24] animate-pulse" />
              High-Converting Creative Ads
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Live Ads — Videos, GIFs &{" "}
              <span className="text-gradient-animated">Creatives That Convert</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
              Real creatives running across Meta, TikTok, and YouTube Shorts for roofing contractors nationwide.
            </p>
          </Reveal>

          {/* Filter Tabs */}
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {FILTERS.map(({ label, value, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setActiveFilter(value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold transition-all duration-300 ${
                    activeFilter === value
                      ? "border-[#ed1c24] bg-[#ed1c24] text-white shadow-[0_0_20px_rgba(237,28,36,0.5)]"
                      : "border-white/15 bg-white/5 text-zinc-400 hover:border-white/30 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                    activeFilter === value ? "bg-white/20 text-white" : "bg-white/10 text-zinc-400"
                  }`}>
                    {value === "All" ? CONTENT.length : CONTENT.filter(c => c.category === value).length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-start">
          {filtered.map((item, idx) => {
            if (item.type === "video") return <VideoCard key={item.id} item={item} index={idx} />;
            if (item.type === "gif")   return <GifCard   key={item.id} item={item} index={idx} />;
            return <ImageCard key={item.id} item={item} index={idx} />;
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center text-zinc-500 font-semibold">No items in this category yet.</div>
        )}
      </div>
    </section>
  );
}
