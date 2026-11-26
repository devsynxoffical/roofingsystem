import Link from "next/link";
import { ArrowRight, CheckCircle2, LineChart, Megaphone, Search, XCircle } from "lucide-react";

/*
  Homepage SEO section for the roofing marketing agency keyword set (roofing marketing
  company, roofing SEO company, SEO services for roofers, digital marketing for roofing
  companies, Facebook ads for roofing companies, best roofer marketing). Figures come
  from published case studies.
*/
const PILLARS = [
  {
    icon: Search,
    title: "Roofing SEO services",
    text: "Roofer SEO services for local search: Google Business Profile, a page for every service and city, technical fixes and reviews, tracked in your own Search Console.",
    href: "/roofing-seo",
    cta: "Roofing company SEO",
  },
  {
    icon: Megaphone,
    title: "Facebook ads for roofing companies",
    text: "Facebook and Instagram campaigns under your company name, with landing pages, phone-verified forms and follow-up within minutes.",
    href: "/facebook-ads-for-roofers",
    cta: "How the ads work",
  },
  {
    icon: LineChart,
    title: "Digital marketing for roofing companies",
    text: "Ads, SEO, landing pages and CRM in one system, reported on booked inspections and signed jobs, not clicks.",
    href: "/blog/digital-marketing-for-roofing-companies",
    cta: "Read the guide",
  },
];

export function RoofingLeadsSection() {
  return (
    <section id="roofing-marketing-company" className="relative scroll-mt-24 overflow-hidden bg-white py-20 text-zinc-900 md:py-28">
      <div className="jobber-grid-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b3111a]">Roofing marketing company</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            A roofing marketing company that builds assets you own
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Most roofing marketing companies rent you results: their ad account, their pages, their data. We work the other way. As a roofing SEO
            company and ads partner, we build the campaigns, the website pages and the Google Business Profile inside your own accounts, so if you
            stop working with us, everything stays yours. See our{" "}
            <Link href="/roofing-seo" className="font-semibold text-zinc-900 underline decoration-[#ed1c24]/50 underline-offset-4 hover:text-[#d4151c]">SEO services for roofing companies</Link>,{" "}
            <Link href="/roofing-marketing" className="font-semibold text-zinc-900 underline decoration-[#ed1c24]/50 underline-offset-4 hover:text-[#d4151c]">roofing marketing services</Link> and{" "}
            <Link href="/case-studies" className="font-semibold text-zinc-900 underline decoration-[#ed1c24]/50 underline-offset-4 hover:text-[#d4151c]">published results</Link>.
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
            <h3 className="text-xl font-extrabold">Typical roofing marketing companies</h3>
            <ul className="mt-5 space-y-3">
              {["Ads and SEO run in the agency's accounts", "Leads sometimes shared or resold", "Reports on clicks and rankings, not jobs", "The agency keeps the pages and data"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-zinc-700"><XCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#ed1c24]/40 bg-gradient-to-br from-[#fff1f2] to-white p-7">
            <h3 className="text-xl font-extrabold">The best roofer marketing: a system you own</h3>
            <ul className="mt-5 space-y-3">
              {["Your ad account, website and Google Business Profile", "Median $13.40 per lead across 18 published campaigns", "Phone-verified leads with instant follow-up", "Reporting on booked inspections and signed jobs"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-zinc-800"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ed1c24]" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
