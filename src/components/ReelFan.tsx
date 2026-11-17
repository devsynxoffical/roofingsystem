"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Pause, Play } from "lucide-react";

/*
  "Fanned hand" of video cards, modelled on the Million Dollar Media reels section:
  4 tilted, slightly overlapping cards per row (2 on phones), a title + arrow above
  each, flip-in when the row scrolls into view, straighten + lift on hover, muted
  autoplay with an "Unmute" pill and a pause button.
*/

export type Reel = {
  id: string;
  label: string;
  href: string;
  /** "vimeo" (default) plays a Vimeo video; "image" shows a still image or GIF */
  kind?: "vimeo" | "image";
  /** Vimeo video ID (kind "vimeo") */
  vimeoId?: string;
  /** image or GIF path (kind "image") */
  src?: string;
  /** shape of the video, so it can fill the card edge to edge */
  shape?: "vertical" | "square";
};

// Per-column pose: rotation (deg), horizontal nudge (%), vertical offset (px), stacking
const POSE_4 = [
  { rot: -7, fx: 5, fy: 34, z: 2 },
  { rot: -4, fx: 2, fy: 0, z: 3 },
  { rot: 6, fx: -2, fy: -14, z: 4 },
  { rot: 4, fx: -5, fy: 26, z: 1 },
];
const POSE_2 = [
  { rot: -3, fx: 0, fy: 12, z: 2 },
  { rot: 3, fx: 0, fy: 0, z: 3 },
];

const vimeoSrc = (id: string, sound: boolean) =>
  sound
    ? `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=0&autopause=0&title=0&byline=0&portrait=0&dnt=1`
    : `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1`;

function postVimeo(frame: HTMLIFrameElement | null, method: "play" | "pause") {
  frame?.contentWindow?.postMessage(JSON.stringify({ method }), "https://player.vimeo.com");
}

function ReelCard({ reel, col, cols, inView, square }: { reel: Reel; col: number; cols: number; inView: boolean; square: boolean }) {
  const isImage = reel.kind === "image";
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [sound, setSound] = useState(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const pose = (cols === 4 ? POSE_4 : POSE_2)[col % cols];

  // Pause when scrolled away (saves bandwidth), resume when back
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "150px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // Vimeo tells us (via postMessage) when the video is really playing
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== "https://player.vimeo.com" || e.source !== frameRef.current?.contentWindow) return;
      let d: { event?: string } = {};
      try {
        d = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (d.event === "ready") {
        for (const value of ["play", "timeupdate"]) {
          frameRef.current?.contentWindow?.postMessage(JSON.stringify({ method: "addEventListener", value }), "https://player.vimeo.com");
        }
      }
      if (d.event === "play" || d.event === "timeupdate") setReady(true);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    postVimeo(frameRef.current, visible && !paused ? "play" : "pause");
  }, [visible, paused]);

  return (
    <div
      ref={cardRef}
      className="group relative min-w-0"
      style={{
        zIndex: pose.z,
        transform: `translate3d(${pose.fx}%, ${pose.fy}px, 0) rotate(${pose.rot}deg)`,
      }}
    >
      {/* Title + arrow above the card, kept level */}
      <Link
        href={reel.href}
        className={`relative z-10 mb-2.5 flex items-center justify-between gap-3 px-1 text-[13px] font-semibold text-[#111114] transition-all duration-500 hover:text-[#ed1c24] sm:text-[15px] ${
          inView ? "opacity-100" : "translate-y-2 opacity-0"
        } group-hover:-translate-y-3`}
        style={{ transform: `rotate(${-pose.rot}deg)`, transformOrigin: "left center", transitionDelay: inView ? `${300 + col * 110}ms` : "0ms" }}
      >
        <span className="truncate">{reel.label}</span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>

      <div style={{ perspective: "1400px" }}>
        <div
          className={`relative w-full ${square ? "aspect-square" : "aspect-[9/14.6]"} transition-[transform,opacity] duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:duration-500`}
          style={{
            transformStyle: "preserve-3d",
            transitionDelay: inView ? `${col * 110}ms` : "0ms",
            opacity: inView ? 1 : 0,
            transform: inView ? undefined : "translateY(80px) rotateY(180deg) scale(0.86)",
          }}
        >
          {/* front */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[clamp(18px,2.2vw,32px)] border border-black/[0.06] bg-[#1b1b22] shadow-[0_40px_70px_-34px_rgba(17,17,20,0.55),0_10px_24px_-14px_rgba(17,17,20,0.3)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.06] group-hover:border-[#ed1c24]/40 group-hover:shadow-[0_40px_70px_-25px_rgba(237,28,36,0.35)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            {isImage ? (
              <Image
                src={reel.src!}
                alt={reel.label}
                fill
                sizes="(max-width: 767px) 50vw, 25vw"
                unoptimized={reel.src!.endsWith(".gif")}
                className="object-cover"
              />
            ) : (
              <>
            {/* cover image, shown until the video is actually playing */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/reels/${reel.vimeoId}.jpg`}
              alt={reel.label}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}
            />
            {(visible || sound) && (
              <iframe
                ref={frameRef}
                key={sound ? "sound" : "muted"}
                src={vimeoSrc(reel.vimeoId!, sound)}
                title={reel.label}
                allow="autoplay; fullscreen; picture-in-picture"
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700 ${
                  reel.shape === "square" ? "aspect-square h-full" : "aspect-[9/16] w-full"
                } ${
                  ready ? "opacity-100" : "opacity-0"
                } ${sound ? "pointer-events-auto" : "pointer-events-none"}`}
              />
            )}
              </>
            )}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black/65 to-transparent" />

            {!isImage && (
            <>
            <button
              type="button"
              onClick={() => {
                setReady(false);
                setPaused(false);
                setSound((s) => !s);
              }}
              className={`absolute left-1/2 top-[clamp(10px,1.3vw,20px)] z-10 -translate-x-1/2 whitespace-nowrap rounded-xl px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-black sm:px-4 sm:py-2 sm:text-sm ${
                sound ? "bg-[#ed1c24]" : "bg-black/80"
              }`}
              aria-label={sound ? "Mute video" : "Unmute video"}
            >
              {sound ? "Mute" : "Unmute"}
            </button>

            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="absolute bottom-[clamp(10px,1.3vw,20px)] right-[clamp(10px,1.3vw,20px)] z-10 grid h-[clamp(30px,3vw,44px)] w-[clamp(30px,3vw,44px)] place-items-center rounded-full bg-[#141418]/60 text-white backdrop-blur transition hover:bg-black active:scale-90"
              aria-label={paused ? "Play video" : "Pause video"}
            >
              {paused ? <Play className="h-4 w-4 fill-current" /> : <Pause className="h-4 w-4 fill-current" />}
            </button>
            </>
            )}
          </div>
          {/* back (seen while flipping in) */}
          <div
            className="absolute inset-0 grid place-items-center rounded-[clamp(18px,2.2vw,32px)] bg-[radial-gradient(120%_80%_at_30%_0%,#ff4d55,transparent_65%),#ed1c24] text-center font-extrabold uppercase text-white"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <span className="px-4 text-sm sm:text-lg">{reel.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ reels, cols, square }: { reels: Reel[]; cols: number; square: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex justify-center">
      {reels.map((r, i) => {
        // short last rows are centred; poses still follow the column position
        const offset = Math.floor((cols - reels.length) / 2);
        return (
          <div key={r.id} className="px-[clamp(4px,0.8vw,13px)]" style={{ width: `${100 / cols}%` }}>
            <ReelCard reel={r} col={i + offset} cols={cols} inView={inView} square={square} />
          </div>
        );
      })}
    </div>
  );
}

export function ReelFan({ reels, square = false }: { reels: Reel[]; square?: boolean }) {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCols(mq.matches ? 2 : 4);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const rows: Reel[][] = [];
  for (let i = 0; i < reels.length; i += cols) rows.push(reels.slice(i, i + cols));

  return (
    <div className="mx-auto max-w-[1280px] space-y-[clamp(40px,5vw,80px)] px-[clamp(8px,3vw,48px)] pb-10 pt-6">
      {rows.map((r, i) => (
        <Row key={`${cols}-${i}`} reels={r} cols={cols} square={square} />
      ))}
    </div>
  );
}
