import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Globe } from "lucide-react";
import { site } from "@/lib/site";
import { BackToTop } from "./BackToTop";
import { OfficeClock, LoopForm } from "./FooterClient";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/#results" },
  { label: "Testimonials", href: "/#reviews" },
  { label: "Guarantee", href: "/#guarantee" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book a Call", href: site.bookCallUrl },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Income Disclosure", href: "/income-disclosure" },
  { label: "Masterminds", href: "/privatemastermind", muted: true },
];

const socialRows = [
  ...site.socials.map((s) => ({ label: s.label, href: s.href, external: true })),
  { label: "Email", href: `mailto:${site.email}`, external: false },
];

function UnderlineLink({ href, label, muted }: { href: string; label: string; muted?: boolean }) {
  return (
    <Link
      href={href}
      className={`group relative inline-block pb-1.5 text-xl font-medium tracking-tight transition-colors sm:text-[1.35rem] ${
        muted ? "text-zinc-500 hover:text-white" : "text-zinc-100 hover:text-white"
      }`}
    >
      {label}
      <span className="absolute bottom-0 left-0 h-[2px] w-3 bg-[#ed1c24] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-[#050507] text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(237,28,36,0.12),transparent_65%)] blur-2xl" />

      {/* ── Top: wordmark + location/clock ───────────────────────── */}
      <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.7fr_1fr] lg:items-start">
        <div>
          <h2 className="relative inline-block text-[clamp(3.5rem,13vw,12rem)] font-extrabold leading-[0.85] tracking-[-0.05em] text-[#ed1c24]">
            Roofing
            <span className="absolute -right-6 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#ed1c24] text-[10px] font-bold sm:-right-10 sm:h-9 sm:w-9 sm:text-sm">
              TM
            </span>
          </h2>
          <p className="mt-4 text-right font-serif text-3xl font-light italic leading-[1] text-zinc-400 sm:mr-[18%] sm:text-5xl">
            Systems Co.
            <br />
            <span className="pl-16">for Roofers—</span>
          </p>
        </div>

        <div className="lg:pt-8">
          <p className="flex gap-3 text-2xl font-medium leading-snug tracking-tight text-white sm:text-[1.75rem]">
            <span className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full border-[3px] border-[#ed1c24]" />
            We&apos;re based in {site.location.addressLocality}, {site.location.addressRegion} and install systems for
            roofers nationwide.
          </p>
          <div className="mt-5 pl-6">
            <OfficeClock />
            <p className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
              <Globe className="h-4 w-4" /> Timezone (MST · GMT-7)
            </p>
          </div>
        </div>
      </div>

      {/* ── Middle grid: links / newsletter / socials ─────────────── */}
      <div className="relative border-t border-white/10">
        <div className="container-x grid !px-0 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_0.8fr]">
          <div className="grid grid-cols-2 gap-8 px-5 py-12 sm:px-8 lg:px-10">
            <ul className="space-y-4">
              {mainLinks.map((l) => (
                <li key={l.label}>
                  <UnderlineLink {...l} />
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <UnderlineLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 bg-white/[0.035] px-5 py-12 sm:px-8 md:border-l md:border-t-0 lg:px-10">
            <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-[2.6rem]">Stay in the Loop</h3>
            <p className="mt-4 max-w-sm text-[1rem] leading-relaxed text-zinc-300">
              Roofing ad breakdowns, funnel teardowns and new mastermind drops — straight to your inbox.
            </p>
            <p className="mt-4 text-sm text-zinc-500">We respect your inbox. No spam, just valuable updates.</p>
            <LoopForm />
          </div>

          <ul className="border-t border-white/10 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0">
            {socialRows.map((s) => (
              <li key={s.label} className="border-b border-white/10 last:border-b-0">
                <a
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between px-5 py-5 text-xl font-medium text-zinc-100 transition-colors hover:bg-[#ed1c24]/10 hover:text-white sm:px-8 sm:text-[1.35rem]"
                >
                  {s.label}
                  <ChevronRight className="h-5 w-5 text-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom row ─────────────────────────────────────────── */}
      <div className="relative border-t border-white/10">
        <div className="container-x grid !px-0 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_0.8fr]">
          <div className="grid gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:px-10">
            <div>
              <p className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Online
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <strong className="font-bold text-white">{site.name}</strong> · {site.location.addressLocality},{" "}
                {site.location.addressRegion}
              </p>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="mt-3 block text-3xl font-bold tracking-tight text-white transition-colors hover:text-[#ed1c24]"
              >
                {site.phone}
              </a>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              {site.name} is operated by {site.legalName}. Results vary and are not a guarantee of income — see our{" "}
              <Link href="/income-disclosure" className="text-zinc-200 underline decoration-[#ed1c24] underline-offset-2">
                income disclosure
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 border-t border-white/10 px-5 py-10 sm:px-8 md:border-l md:border-t-0 lg:px-10">
            <p className="text-sm text-zinc-400">
              © {year} {site.legalName} — All rights reserved.
            </p>
            <a href={`mailto:${site.email}`} className="text-sm font-semibold text-zinc-200 transition-colors hover:text-[#ed1c24]">
              {site.email}
            </a>
          </div>

          <div className="flex items-center justify-center border-t border-white/10 py-10 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0">
            <Link href="/" aria-label="Roofing Systems Co. home">
              <Image src="/logo.png" alt="Roofing Systems Co." width={300} height={100} className="h-12 w-auto opacity-90 transition-opacity hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
