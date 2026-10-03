"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown, Play } from "lucide-react";
import { nav, navCta, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const mastermindLinks = [
  {
    label: "Audience Segmentation",
    sub: "Higher-quality roofing calls at lower CPL",
    href: "/privatemastermind",
  },
  {
    label: "Hidden Facebook Interest",
    sub: "The framework behind 300–500 roofing calls",
    href: "/privatemastermind-504306",
  },
];

function scrollToId(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, o?: unknown) => void } }).__lenis;
  if (lenis) lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <Link href="/" className="group flex items-center" aria-label="Roofing Systems Co. home">
      <span className="flex items-center transition-opacity duration-300 group-hover:opacity-90">
        <Image
          src="/logo.png"
          alt="Roofing Systems Co."
          width={300}
          height={100}
          priority
          className="h-9 w-auto object-contain sm:h-11"
        />
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);
  const [dd, setDd] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      setBarDismissed(!!localStorage.getItem("rs-announcement-dismissed"));
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    setOpen(false);
    setDd(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      scrollToId(href);
    } else if (href.startsWith("/#")) {
      if (pathname === "/") {
        e.preventDefault();
        setOpen(false);
        scrollToId(href.slice(1));
      } else {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 z-[60] transition-all duration-500",
          barDismissed ? "top-0" : "top-10"
        )}
      >
        <nav
          className={cn(
            "container-x flex h-16 md:h-18 items-center justify-between transition-all duration-500",
            scrolled
              ? "border-b border-white/10 bg-[#070709]/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              : "bg-gradient-to-b from-[#070709]/90 via-[#070709]/40 to-transparent"
          )}
          aria-label="Main navigation"
        >
          <Logo />
          <ul className="hidden items-center gap-1.5 lg:flex rounded-full border border-white/10 bg-[#0c0d12]/80 p-1.5 backdrop-blur-xl shadow-2xl">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-semibold text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                  <span className="absolute inset-x-4 bottom-1.5 h-0.5 origin-center scale-x-0 bg-[#ed1c24] rounded-full transition-transform duration-300 group-hover:scale-x-100 shadow-[0_0_8px_#ed1c24]" />
                </a>
              </li>
            ))}
            <li
              className="group relative"
              onMouseEnter={() => setDd(true)}
              onMouseLeave={() => setDd(false)}
            >
              <button
                type="button"
                onClick={() => setDd((v) => !v)}
                aria-expanded={dd}
                aria-haspopup="true"
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300",
                  dd ? "text-white bg-white/10" : "text-zinc-300 hover:text-white hover:bg-white/5"
                )}
              >
                <span className="relative flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24] animate-pulse" />
                  Masterminds
                </span>
                <ChevronDown
                  className={cn("h-3.5 w-3.5 text-zinc-400 transition-transform duration-300", dd && "rotate-180 text-white")}
                />
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 transition-all duration-200",
                  dd ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#090a0f]/95 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                  <p className="px-3 pb-2 pt-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ed1c24]">
                    Private Masterminds
                  </p>
                  {mastermindLinks.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      onClick={() => {
                        setDd(false);
                        setOpen(false);
                      }}
                      className="group/item flex items-start gap-3 rounded-xl px-3.5 py-3 transition-all duration-200 hover:bg-white/10"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ed1c24]/15 text-[#ed1c24] border border-[#ed1c24]/30 shadow-[0_0_10px_rgba(237,28,36,0.2)]">
                        <Play className="h-3.5 w-3.5 fill-current" />
                      </span>
                      <span>
                        <span className="block text-xs font-bold text-white transition-colors group-hover/item:text-[#ed1c24]">
                          {m.label}
                        </span>
                        <span className="mt-0.5 block text-[11px] font-medium text-zinc-400 leading-snug">{m.sub}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_-5px_rgba(237,28,36,1)] sm:inline-flex"
              data-cursor="book"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide text-xs font-extrabold">
                {navCta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md lg:hidden transition-colors hover:bg-white/10"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-ink/95 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="mt-24 flex flex-1 flex-col justify-between px-6 pb-10">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={cn(
                    "block border-b border-line py-4 text-4xl font-semibold tracking-tight text-fog transition-all duration-700 hover:text-lime",
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="overflow-hidden border-b border-line">
              <p
                className={cn(
                  "pt-4 text-xs font-bold uppercase tracking-[0.25em] text-dim transition-all duration-700",
                  open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{
                  transitionDelay: open ? `${100 + nav.length * 60}ms` : "0ms",
                }}
              >
                Masterminds
              </p>
              {mastermindLinks.map((m, j) => (
                <Link
                  key={m.href}
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 py-3 text-xl font-semibold tracking-tight text-fog transition-all duration-700 hover:text-lime",
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{
                    transitionDelay: open
                      ? `${100 + (nav.length + 1 + j) * 60}ms`
                      : "0ms",
                  }}
                >
                  <Play className="h-4 w-4 shrink-0 fill-current text-lime" />
                  {m.label}
                </Link>
              ))}
            </li>
          </ul>
          <div
            className={cn(
              "flex flex-col gap-4 transition-all delay-500 duration-700",
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-[1rem] font-bold text-white"
              data-cursor="book"
            >
              {navCta.label}
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <p className="text-center text-xs text-dim">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
