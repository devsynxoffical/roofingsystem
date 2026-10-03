import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { BackToTop } from "./BackToTop";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "The System", href: "#different" },
      { label: "Client Results", href: "#results" },
      { label: "Client Success", href: "#success" },
      { label: "Industries", href: "#industries" },
      { label: "Guarantee", href: "#guarantee" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Book Your Call", href: site.bookCallUrl },
      { label: "Private Masterminds", href: "/privatemastermind" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "DMCA Policy", href: "/dmca" },
      { label: "Income Disclosure", href: "/income-disclosure" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050507] text-white" id="footer">
      {/* Top glowing ambient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/60 to-transparent" />
      <div className="container-x relative z-10">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center" aria-label="Roofing Systems Co. home">
              <Image
                src="/logo.png"
                alt="Roofing Systems Co."
                width={300}
                height={100}
                className="h-12 w-auto object-contain sm:h-14 drop-shadow-[0_2px_12px_rgba(237,28,36,0.3)]"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
              The done-for-you roofing client acquisition system for $1M+ contractors who want to
              double revenue in 90 days — backed in writing.
            </p>
            <div className="mt-6 flex gap-2.5">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:border-[#ed1c24]/60 hover:bg-[#ed1c24]/10 hover:text-white hover:scale-110"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#ed1c24]">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      <span>{l.label}</span>
                      {l.href.startsWith("http") && (
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#ed1c24] opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#ed1c24]">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-zinc-400 transition-colors hover:text-[#ed1c24]"
                >
                  <Mail className="h-4 w-4 text-[#ed1c24]" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-zinc-400 transition-colors hover:text-[#ed1c24]"
                >
                  <Phone className="h-4 w-4 text-[#ed1c24]" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <a
              href={site.bookCallUrl}
              className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ed1c24] to-[#c4181e] px-6 py-3 text-sm font-bold text-white shadow-[0_0_25px_-5px_rgba(237,28,36,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_-2px_rgba(237,28,36,0.9)]"
            >
              <span>Book Free Strategy Call</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            Results vary. Not a guarantee of income.
          </p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}

