"use client";

import {
  BarChart3,
  Palette,
  Funnel,
  Megaphone,
  Target,
  Database,
  Bot,
  Mail,
  MessageSquare,
  CalendarCheck2,
  ShieldCheck,
  TrendingUp,
  Play,
  type LucideIcon,
} from "lucide-react";

const BENEFITS_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4";

/* ── Left card services (Full-Funnel Roofing Ads - 6 items) ── */
const adServices: { icon: LucideIcon; label: string }[] = [
  { icon: Target, label: "Offer Positioning" },
  { icon: Megaphone, label: "Messaging Strategy" },
  { icon: BarChart3, label: "Meta Ads" },
  { icon: Palette, label: "Ad Creatives" },
  { icon: Funnel, label: "Sales Funnel" },
  { icon: TrendingUp, label: "Ongoing Optimisation" },
];

/* ── Right card services (Done-For-You Lead Management - 6 items) ── */
const leadServices: { icon: LucideIcon; label: string }[] = [
  { icon: Database, label: "CRM Setup" },
  { icon: Bot, label: "AI Automations" },
  { icon: Mail, label: "Email Sequences" },
  { icon: MessageSquare, label: "SMS Follow-Up" },
  { icon: CalendarCheck2, label: "Appointment Reminders" },
  { icon: ShieldCheck, label: "Lead Qualification" },
];

function ServiceCard({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="group/pill flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24]/50 hover:bg-[#ed1c24]/10 hover:shadow-[0_8px_25px_-6px_rgba(237,28,36,0.35)] hover:-translate-y-0.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#ed1c24]/30 bg-[#ed1c24]/15 text-[#ed1c24] transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:border-[#ed1c24]/60">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-xs font-bold tracking-wide text-zinc-200 transition-colors group-hover/pill:text-white">
        {label}
      </span>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative w-full bg-[#070709] px-4 py-16 sm:px-6 sm:py-24 md:px-10 overflow-hidden border-b border-zinc-800"
    >
      {/* Background ambient lighting */}
      <div className="jobber-grid-dark absolute inset-0 pointer-events-none opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.1),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="mb-14 text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
            Proprietary Architecture
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight">
            The <span className="text-gradient-animated">Roofing Advantage</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-zinc-400">
            A complete 360° client acquisition engine installed into your roofing business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {/* Card 1 — Full-Funnel Roofing Ads */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0e12] p-7 sm:p-9 shadow-2xl transition-all duration-300 hover:border-white/20">
            <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[#ed1c24] opacity-25 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ed1c24]">
                Phase 01 · Traffic & Funnel
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Full-Funnel <br />
                <span className="text-gradient-animated">Roofing Ads</span>
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                Your ads run on proven, roofing-specific offer positioning and
                creatives that attract premium homeowners — not price shoppers.
              </p>

              {/* Service boxes grid */}
              <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {adServices.map((svc) => (
                  <ServiceCard key={svc.label} icon={svc.icon} label={svc.label} />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Video (center card) */}
          <div
            onClick={() => {
              const vid = document.getElementById("benefits-center-video") as HTMLVideoElement;
              if (!vid) return;
              if (vid.paused) {
                vid.play();
              } else {
                vid.muted = !vid.muted;
              }
            }}
            className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl cursor-pointer hover:border-[#ed1c24]/50 transition-all duration-300"
          >
            <div className="relative w-full overflow-hidden flex-1" style={{ height: "75%" }}>
              <video
                id="benefits-center-video"
                className="block h-full w-full object-cover"
                src={BENEFITS_VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950" />
            </div>
            <div className="flex items-center justify-between p-6 sm:p-8 bg-neutral-950 relative z-10">
              <h3 className="text-left text-xl font-extrabold leading-tight text-white sm:text-2xl">
                Proven Creative
                <br />
                <span className="text-gradient-animated">& Campaigns</span>
              </h3>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ed1c24] text-white shadow-[0_0_25px_rgba(237,28,36,0.6)] transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </div>
            </div>
          </div>

          {/* Card 3 — Done-For-You Lead Management */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0e12] p-7 sm:p-9 shadow-2xl transition-all duration-300 hover:border-white/20">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#ed1c24] opacity-25 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ed1c24]">
                Phase 02 · CRM & Conversion
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Done-For-You <br />
                <span className="text-gradient-animated">Lead Management</span>
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                Every roofing lead lands in your CRM with email, SMS, and AI
                follow-up running automatically — then gets qualified before it
                ever reaches your sales team.
              </p>

              {/* Service boxes grid */}
              <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {leadServices.map((svc) => (
                  <ServiceCard key={svc.label} icon={svc.icon} label={svc.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
