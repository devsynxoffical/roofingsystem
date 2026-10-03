"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_PATH } from "../lib/offer";
import { cn } from "../lib/utils";

const links = [
  { href: "/#why", label: "Why Us" },
  { href: "/#results", label: "Results" },
  { href: "/#roofing-work", label: "Industries" },
  { href: "/#process", label: "Process" },
  { href: "/#training", label: "Academy" },
];

const mastermindLinks = [
  { href: "/privatemastermind", label: "Audience Segmentation" },
  { href: "/privatemastermind-504306", label: "Ads Copy Creation" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerHidden, setBannerHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY > 320) setBannerHidden(true);
      else setBannerHidden(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#070709]/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-[#070709]/90 via-[#070709]/40 to-transparent"
      )}
    >
      {/* Top Announcement Banner Notice */}
      <div
        className={cn(
          "flex h-9 items-center justify-center gap-2 bg-gradient-to-r from-[#ed1c24] via-[#ff2a1f] to-[#ed1c24] px-4 text-center text-[11px] font-bold tracking-wide text-white transition-all duration-500 shadow-sm",
          bannerHidden && "max-h-0 overflow-hidden opacity-0 py-0 border-none"
        )}
      >
        <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
        <span className="font-semibold">For Roofing Companies Doing $1M+/Year</span>
        <span className="hidden text-white/90 md:inline font-medium">
          · Double revenue in 90 days or work free.
        </span>
      </div>

      <div className="mx-auto flex h-18 max-w-[88rem] items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-[1.02]" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Roofing Systems Co."
            width={300}
            height={100}
            priority
            className="h-10 w-auto object-contain md:h-12 drop-shadow-[0_2px_12px_rgba(237,28,36,0.3)]"
          />
        </Link>

        {/* Navigation Pills */}
        <nav className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-[#0c0d12]/80 p-1.5 backdrop-blur-xl shadow-2xl lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-4 py-2 text-[13px] font-semibold text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/5"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1.5 h-0.5 origin-center scale-x-0 bg-[#ed1c24] rounded-full transition-transform duration-300 group-hover:scale-x-100 shadow-[0_0_8px_#ed1c24]" />
            </a>
          ))}

          {/* Mastermind Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/5"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="relative flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24] animate-pulse" />
                Mastermind
              </span>
              <svg
                className="h-3.5 w-3.5 text-zinc-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-white"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#090a0f]/95 p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                <p className="px-3 pb-2 pt-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ed1c24]">
                  Private Masterminds
                </p>
                {mastermindLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group/item block rounded-xl p-3 text-[13px] font-medium text-zinc-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span>{link.label}</span>
                      <span className="translate-x-0.5 text-[#ed1c24] opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100">
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href={BOOKING_PATH}
            data-cursor="book"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_-5px_rgba(237,28,36,1)] sm:inline-flex"
          >
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide text-xs font-extrabold">
              Get Free Demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md lg:hidden transition-colors hover:bg-white/10"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[-1] h-screen overflow-y-auto bg-[#070709]/98 pt-32 backdrop-blur-3xl transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
      >
        <nav className="mx-auto flex max-w-[88rem] flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-semibold text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="my-2 h-px bg-white/10" />
          <p className="px-4 pt-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ed1c24]">
            Private masterminds
          </p>
          {mastermindLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={BOOKING_PATH}
            onClick={() => setOpen(false)}
            data-cursor="book"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-6 py-4 text-base font-bold text-white shadow-lg"
          >
            Get Free Demo →
          </Link>
        </nav>
      </div>
    </header>
  );
}

