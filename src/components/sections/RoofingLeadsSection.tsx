import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, ShieldCheck, Users, XCircle } from "lucide-react";

/*
  Homepage SEO section for "roofing leads" and close variants (exclusive roofing
  leads, roofing leads near me, best roofing leads, roofing lead generation
  companies, roofing leads for sale). Figures come from published case studies.
*/
const PILLARS = [
  {
    icon: Users,
    title: "Exclusive roofing leads",
    text: "Every lead comes from ads run under your company name, so it goes to you alone. Never shared, never resold.",
    href: "/blog/shared-vs-exclusive-roofing-leads",
    cta: "Shared vs exclusive leads",
  },
  {
    icon: ShieldCheck,
    title: "Verified before you call",
    text: "Phone numbers confirmed with a one-time passcode and qualifying questions answered, so your team calls real homeowners.",
    href: "/verified-roofing-leads",
    cta: "How verification works",
  },
  {
    icon: MapPin,
    title: "Roofing leads near you",
    text: "Campaigns target your service area by metro, county, ZIP code or radius, anywhere in the US.",
    href: "/roofing-leads-texas",
    cta: "See Texas results",
  },
];

const LINKS = [
  { href: "/roofing-leads-texas", label: "Roofing leads in Texas" },
  { href: "/roofing-leads-florida", label: "Roofing leads in Florida" },
  { href: "/roof-replacement-leads", label: "Residential and replacement leads" },
  { href: "/storm-damage-leads", label: "Storm damage leads" },
  { href: "/commercial-roofing-leads", label: "Commercial roofing leads" },
  { href: "/verified-roofing-leads", label: "Verified roofing leads" },
  { href: "/roofing-marketing", label: "Roofing contractor marketing" },
  { href: "/google-ads-for-roofers", label: "Google Ads for roofers" },
  { href: "/roofing-ad-creatives", label: "Roofing ads" },
  { href: "/roofing-landing-pages", label: "Roofing websites and landing pages" },
  { href: "/blog/how-much-do-roofing-leads-cost", label: "How much do roofing leads cost?" },
];

export function RoofingLeadsSection() {
  return (
    <section id="roofing-leads" className="relative scroll-mt-24 overflow-hidden bg-white py-20 text-zinc-900 md:py-28">
      <div className="jobber-grid-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">Roofing leads</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Roofing leads that belong to you, not a lead seller
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            When you buy leads, you rent attention. When you own the campaign, you build an asset. The ad account, the creatives, the landing pages and
            the lead data stay with your company. If you stop working with us, the system stays yours. That is the main difference between us and a
            pay-per-lead roofing lead company. See how it works for{" "}
            <Link href="/verified-roofing-leads" className="font-semibold text-zinc-900 underline decoration-[#ed1c24]/50 underline-offset-4 hover:text-[#d4151c]">verified roofing leads</Link>,{" "}
            <Link href="/storm-damage-leads" className="font-semibold text-zinc-900 underline decoration-[#ed1c24]/50 underline-offset-4 hover:text-[#d4151c]">storm damage leads</Link> and{" "}
            <Link href="/commercial-roofing-leads" className="font-semibold text-zinc-900 underline decoration-[#ed1c24]/50 underline-offset-4 hover:text-[#d4151c]">commercial roofing leads</Link>, or read about our{" "}
            <Link href="/roofing-marketing" className="font-semibold text-zinc-900 underline decoration-[#ed1c24]/50 underline-offset-4 hover:text-[#d4151c]">roofing marketing</Link> system.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p) => (
            <li key={p.title}>
              <Link href={p.href} className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.3)] transition hover:-translate-y-1.5 hover:border-[#ed1c24]/40 hover:shadow-[0_30px_60px_-30px_rgba(237,28,36,0.5)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ed1c24]/10 text-[#ed1c24] transition group-hover:bg-[#d4151c] group-hover:text-white">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-zinc-600">{p.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 group-hover:text-[#d4151c]">
                  {p.cta} <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7">
            <h3 className="text-xl font-extrabold">Roofing leads for sale</h3>
            <ul className="mt-5 space-y-3">
              {["Often sold to several roofers at once", "Paid per lead, every month, forever", "Numbers not always verified", "The seller owns the pages and data"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-zinc-700"><XCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#ed1c24]/40 bg-gradient-to-br from-[#fff1f2] to-white p-7">
            <h3 className="text-xl font-extrabold">The best roofing leads: your own</h3>
            <ul className="mt-5 space-y-3">
              {["Exclusive: homeowners respond to your brand", "Our campaigns: median $11.41 per lead across 15 campaigns", "Phone-verified with instant follow-up", "You own the ads, pages, CRM and data"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-zinc-800"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ed1c24]" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="group inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ed1c24]/40 hover:text-[#d4151c]">
              {l.label} <ArrowUpRight className="h-3.5 w-3.5 text-[#ed1c24]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
