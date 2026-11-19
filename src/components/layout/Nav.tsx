"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { nav, navCta, site, socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const mastermindLinks = [
  {
    label: "Audience Segmentation",
    sub: "Higher-quality roofing calls at lower CPL",
    href: "/privatemastermind",
  },
];

// Preview image shown next to each menu link on hover (desktop)
const previews: Record<string, string> = {
  "#process": "/roofing-content/images/1f.jpg",
  "#results": "/roofing-content/images/3f.jpg",
  "#guarantee": "/roofing-content/images/1f.jpg.jpeg",
  "#faq": "/roofing-content/images/2%20(2).jpg",
};
const fallbackPreview = "/roofing-content/images/3.png";

const EASE = [0.76, 0, 0.24, 1] as const;

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
    <Link href="/" className="group relative z-[2] flex items-center" aria-label="Roofing Systems Co. home">
      <Image
        src="/logo.png"
        alt="Roofing Systems Co."
        width={300}
        height={100}
        priority
        className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 sm:h-11"
      />
    </Link>
  );
}

/** "Menu" ⇄ "Close" label that rolls vertically, with a 2-line icon morphing into an X. */
function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={cn(
        "relative z-[2] grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300",
        open ? "border-white/20 bg-white text-[#09090b]" : "border-white/15 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10"
      )}
    >
      <span className="flex flex-col items-center gap-[5px]">
        <span className={cn("block h-[2px] w-[18px] rounded bg-current transition-transform duration-500", open && "translate-y-[3.5px] rotate-45")} />
        <span className={cn("block h-[2px] w-[18px] rounded bg-current transition-transform duration-500", open && "-translate-y-[3.5px] -rotate-45")} />
      </span>
    </button>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [barOffset, setBarOffset] = useState(40); // px of announcement bar still on screen
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  // Hide header on scroll down, show on scroll up.
  // The header sits right under the announcement bar and slides up as the bar scrolls away.
  useEffect(() => {
    let last = window.scrollY;
    const measure = () => {
      const bar = document.getElementById("announcement-bar");
      // layout position (ignores the bar's slide-in transform)
      setBarOffset(bar ? Math.max(0, Math.round(bar.offsetTop + bar.offsetHeight - window.scrollY)) : 0);
    };
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 200 && y > last);
      last = y;
      measure();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("rs-bar-change", measure);
    // the bar mounts after hydration
    const t = window.setTimeout(measure, 50);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("rs-bar-change", measure);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
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
    if (pathname === "/" && (href.startsWith("#") || href.startsWith("/#"))) {
      e.preventDefault();
      setOpen(false);
      const target = href.startsWith("/#") ? href.slice(1) : href;
      // wait for the overlay to close before scrolling
      setTimeout(() => scrollToId(target), 450);
    } else {
      setOpen(false);
    }
  };

  const hrefFor = (href: string) => (pathname !== "/" && href.startsWith("#") ? `/${href}` : href);
  const preview = (hovered && previews[hovered]) || fallbackPreview;

  return (
    <>
      <header
        style={{ top: open ? 0 : barOffset }}
        className={cn(
          "fixed inset-x-0 z-[80] transition-[transform,background-color,border-color] duration-500",
          hidden && !open ? "-translate-y-[calc(100%+3rem)]" : "translate-y-0",
          scrolled && !open
            ? "border-b border-white/10 bg-[#070709]/95 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          className="container-x flex h-16 items-center justify-between md:h-20"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop links: proper pill buttons in one glass bar */}
          <ul
            className={cn(
              "hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-opacity duration-300 lg:flex",
              open && "pointer-events-none opacity-0"
            )}
          >
            {nav.map((item) => {
              const active = item.href.startsWith("/") && pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <a
                    href={hrefFor(item.href)}
                    onClick={(e) => go(e, item.href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-full px-4 py-2 text-[14px] font-semibold tracking-tight transition-all duration-300 xl:px-5",
                      active
                        ? "bg-white text-[#09090b] shadow-[0_6px_16px_-8px_rgba(255,255,255,0.6)]"
                        : "text-zinc-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={navCta.href}
              className={cn(
                "group relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] py-2.5 pl-5 pr-2.5 text-[14px] font-bold text-white shadow-[0_10px_30px_-8px_rgba(237,28,36,0.8)] ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(237,28,36,1)] sm:inline-flex",
                open && "pointer-events-none opacity-0"
              )}
              data-cursor="book"
            >
              Book a Strategy Call
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#ed1c24] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            {/* Mobile / tablet only: compact icon that opens the full-screen menu */}
            <div className="lg:hidden">
              <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </nav>
      </header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[75] overflow-y-auto bg-[#070709] text-white lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
            data-lenis-prevent
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="jobber-grid-dark absolute inset-0 opacity-20" />
              <div className="absolute -right-40 top-1/3 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(237,28,36,0.15),transparent_65%)] blur-2xl" />
            </div>

            <div className="container-x relative flex min-h-full flex-col pb-8 pt-28 md:pt-32">
              <div className="grid flex-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                {/* Big links */}
                <ul className="flex flex-col" onMouseLeave={() => setHovered(null)}>
                  {nav.map((item, i) => (
                    <li key={item.href} className="overflow-hidden border-b border-white/10">
                      <motion.a
                        href={hrefFor(item.href)}
                        onClick={(e) => go(e, item.href)}
                        onMouseEnter={() => setHovered(item.href)}
                        className="group flex items-center justify-between gap-4 py-3 md:py-4"
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "110%" }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.06 }}
                      >
                        <span className="flex items-baseline gap-4 md:gap-6">
                          <span className="font-mono text-xs text-[#ed1c24]">0{i + 1}</span>
                          <span
                            className={cn(
                              "text-[clamp(2.25rem,6.5vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight transition-all duration-500",
                              hovered && hovered !== item.href ? "text-zinc-700" : "text-white",
                              "group-hover:translate-x-3 group-hover:text-[#ed1c24]"
                            )}
                          >
                            {item.label}
                          </span>
                        </span>
                        <ArrowUpRight className="h-8 w-8 shrink-0 -translate-x-4 text-[#ed1c24] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:h-12 md:w-12" />
                      </motion.a>
                    </li>
                  ))}
                </ul>

                {/* Right column: preview + masterminds */}
                <motion.div
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
                >
                  <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#121215] lg:block">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={preview}
                        className="absolute inset-0"
                        initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.15 }}
                        animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                      >
                        <Image src={preview} alt="" fill sizes="40vw" className="object-cover object-center" />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                      {hovered ? nav.find((n) => n.href === hovered)?.label : "Roofing Systems Co."}
                    </span>
                  </div>

                  <div>
                    <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ed1c24]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" />
                      Private Masterminds
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {mastermindLinks.map((m) => (
                        <Link
                          key={m.href}
                          href={m.href}
                          onClick={() => setOpen(false)}
                          className="group/item flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-[#ed1c24]/50 hover:bg-[#ed1c24]/10"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/15 text-[#ed1c24]">
                            <Play className="h-3.5 w-3.5 fill-current" />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-white transition-colors group-hover/item:text-[#ed1c24]">
                              {m.label}
                            </span>
                            <span className="mt-0.5 block text-[11px] leading-snug text-zinc-400">{m.sub}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer row */}
              <motion.div
                className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">Get in touch</span>
                  <a href={`mailto:${site.email}`} className="text-lg font-semibold text-white transition-colors hover:text-[#ed1c24]">
                    {site.email}
                  </a>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#ed1c24]">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={navCta.href}
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ed1c24] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-all hover:bg-[#c4181e] sm:hidden"
                  data-cursor="book"
                >
                  {navCta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
