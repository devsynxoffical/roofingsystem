import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ICONS } from "@/components/landing/LandingPage";
import { LeadForm } from "@/components/landing/LeadForm";
import { allServices, serviceGroups } from "@/lib/servicesCatalog";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Roofing Marketing Services: Ads, Leads, CRM & Funnels",
  description:
    "30 roofing marketing services in one system: Facebook and Instagram ads, verified leads, landing pages, CRM and AI follow-up, for roofing companies doing $1M+.",
  path: "/services",
});

const PROOF = [
  { value: "$127.5K", label: "Closed in ~60 days (Dallas)", href: "/case-studies/dallas-roofer-127500-closed-34-installs" },
  { value: "686", label: "Leads in 8 days at $5.31", href: "/case-studies/texas-roofer-686-leads-8-days-0-down-offer" },
  { value: "1,480", label: "Leads at $4.77 each", href: "/case-studies/1480-roofing-leads-4-77-cpl" },
  { value: "365", label: "OTP-verified leads, 4 locations", href: "/case-studies/florida-365-otp-verified-leads-4-locations" },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roofing marketing services",
    serviceType: "Client acquisition for roofing companies",
    url: `${site.url}/services`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing marketing services",
      itemListElement: serviceGroups.map((g) => ({
        "@type": "OfferCatalog",
        name: g.title,
        itemListElement: g.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, description: s.text, url: `${site.url}${s.href}` } })),
      })),
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <main className="relative overflow-x-clip bg-white text-zinc-900">
        {/* HERO */}
        <section className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="jobber-grid-light absolute inset-0" />
            <div className="absolute -top-24 left-1/3 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.16),transparent_70%)] blur-3xl" />
          </div>
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <nav aria-label="Breadcrumb" className="text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                <Link href="/" className="hover:text-[#ed1c24]">Home</Link> <span aria-hidden>/</span> <span className="text-zinc-700">Services</span>
              </nav>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d4151c]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" /> {allServices.length} services, one system
              </span>
              <h1 className="mt-5 text-balance text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight">
                Roofing marketing services for companies doing <span className="text-[#ed1c24]">$1M+</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
                Ads, offers, creative, landing pages, CRM, AI follow-up and lead qualification, installed as one done-for-you client acquisition system. Pick a service to see how it works and the results behind it.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {serviceGroups.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ed1c24]/40 hover:text-[#ed1c24]">
                      {g.title} <span className="rounded-full bg-zinc-100 px-2 text-xs font-bold text-zinc-500">{g.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm id="get-started" form="services-hero" title="Get your free growth plan" />
          </div>
        </section>

        {/* PROOF STRIP */}
        <section aria-label="Results" className="border-y border-zinc-200 bg-zinc-50 py-10">
          <ul className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PROOF.map((p) => (
              <li key={p.label}>
                <Link href={p.href} className="group block h-full rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#ed1c24]/40 hover:shadow-[0_20px_50px_-30px_rgba(237,28,36,0.6)]">
                  <p className="text-3xl font-extrabold sm:text-4xl">{p.value}</p>
                  <p className="mt-2 text-sm text-zinc-500">{p.label}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#d4151c]">Case study <ArrowUpRight className="h-3 w-3" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* SERVICE GROUPS */}
        {serviceGroups.map((g, gi) => (
          <section key={g.id} id={g.id} className={`scroll-mt-24 py-16 md:py-20 ${gi % 2 ? "bg-zinc-50" : "bg-white"}`}>
            <div className="container-x">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4151c]">0{gi + 1} · {g.items.length} services</p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{g.title}</h2>
                  <p className="mt-3 text-lg text-zinc-600">{g.intro}</p>
                </div>
              </div>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => {
                  const Icon = ICONS[s.icon];
                  return (
                    <li key={s.name}>
                      <Link href={s.href} className="group flex h-full gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#ed1c24]/40 hover:shadow-[0_20px_50px_-30px_rgba(237,28,36,0.6)]">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24] transition group-hover:bg-[#ed1c24] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-bold leading-snug group-hover:text-[#d4151c]">{s.name}</span>
                          <span className="mt-1.5 block text-sm leading-relaxed text-zinc-500">{s.text}</span>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900">
                            Learn more <ArrowRight className="h-3.5 w-3.5 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ))}

        {/* WHY ONE SYSTEM */}
        <section className="py-16 md:py-20">
          <div className="container-x grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Why one system beats five vendors</h2>
              <p className="mt-4 text-lg text-zinc-600">
                When ads, landing pages, CRM and follow-up are built by different people, leads leak between them. We build and run all of it together, so every lead moves from the first click to a booked inspection.
              </p>
              <Link href="/roofing-lead-generation" className="mt-6 inline-flex items-center gap-2 font-bold text-zinc-900 hover:text-[#d4151c]">
                See how the system works <ArrowRight className="h-4 w-4 text-[#ed1c24]" />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Offer and creative", "Meta ads management", "Landing pages", "Verification and qualification", "CRM and AI follow-up", "Weekly optimisation"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ed1c24]" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#a3101a] py-20 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(237,28,36,0.7),transparent_70%)]" aria-hidden />
          <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">For roofers doing $1M+ a year</p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Not sure which service you need?</h2>
              <p className="mt-5 max-w-lg text-lg text-white/85">Tell us about your company. On a free call we&apos;ll show you which parts of the system would make the biggest difference.</p>
            </div>
            <LeadForm id="final-form" form="services-final" title="Book your free strategy call" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
