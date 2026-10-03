"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { site } from "@/lib/site";

const STORAGE_KEY = "rs-announcement-dismissed";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem(STORAGE_KEY)) setDismissed(true);
    } catch {
      /* noop */
    }
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setDismissed(true);
  };

  useEffect(() => {
    if (!mounted) return;
    const el = document.getElementById("announcement-bar");
    if (!el) return;
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      el,
      { yPercent: -110 },
      { yPercent: 0, duration: 0.9, ease: "expo.out", delay: 0.4 }
    );
  }, [mounted]);

  if (!mounted) return <div className="h-10" aria-hidden />;
  if (dismissed) return null;

  return (
    <div
      id="announcement-bar"
      className="sticky top-0 z-[70] h-10"
      role="region"
      aria-label="Announcement"
    >
      <a
        href={site.bookCallUrl}
        className="group flex h-full w-full items-center justify-center gap-2.5 bg-lime px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-lime-soft sm:px-10 sm:text-[12px]"
        data-cursor="book"
      >
        <span className="whitespace-nowrap">Only for roofing companies doing $1M+ per year</span>
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
