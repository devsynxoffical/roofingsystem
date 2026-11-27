"use client";

import { useEffect, useRef, useState } from "react";

/*
  Background video for the homepage hero, built for speed:
  - The poster image (about 20 KB) paints first and is the visible background on load.
  - The Vimeo player starts as soon as the page is interactive (connections to Vimeo are
    opened in the <head> by Hero.tsx), and it never blocks the headline or the buttons.
  - It is skipped for visitors who ask for reduced motion or data saving; they keep the poster.
  - The iframe is sized to cover the hero at any screen ratio and fades in only once the
    video is really playing, so nobody sees a spinner or a black box.
*/
const VIMEO_ID = "1250581890";
const ORIGIN = "https://player.vimeo.com";
const SRC = `${ORIGIN}/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1&playsinline=1&api=1&title=0&byline=0&portrait=0&badge=0`;

export function HeroVideo() {
  const boxRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    let cancelled = false;
    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      if (reduce || conn?.saveData || conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g") return;
    } catch {
      /* keep going */
    }
    // Start right after the page becomes interactive (during the intro on first visits),
    // not after every image has loaded, so the video is ready as soon as the hero shows.
    const raf = requestAnimationFrame(() => !cancelled && setLoad(true));
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  // Cover sizing: keep 16:9 and fill the hero whatever its height.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const fit = () => {
      const { width, height } = el.getBoundingClientRect();
      const w = Math.max(width, height * (16 / 9));
      setSize({ w: Math.ceil(w) + 2, h: Math.ceil(w * (9 / 16)) + 2 });
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fade in only once Vimeo reports real playback (time moving).
  useEffect(() => {
    if (!load) return;
    const send = (method: string, value?: string) =>
      iframeRef.current?.contentWindow?.postMessage(JSON.stringify(value ? { method, value } : { method }), ORIGIN);
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== ORIGIN) return;
      let data: { event?: string; data?: { seconds?: number } } = {};
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (data.event === "ready") {
        send("addEventListener", "timeupdate");
        send("play");
      }
      if (data.event === "timeupdate" && (data.data?.seconds ?? 0) > 0.2) setReady(true);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [load]);

  return (
    <div ref={boxRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {load && size.w > 0 && (
        <iframe
          ref={iframeRef}
          src={SRC}
          title="Roofing Systems Co. dashboard walkthrough"
          tabIndex={-1}
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-1000"
          style={{ width: size.w, height: size.h, opacity: ready ? 1 : 0 }}
        />
      )}
    </div>
  );
}
