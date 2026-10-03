"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { BOOKING_PATH } from "@/lib/offer";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Target, TrendingUp } from "lucide-react";

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500",
        "border border-zinc-200 bg-white shadow-sm hover:border-[#ed1c24]/40 hover:shadow-xl",
        "data-[dark]:border-white/10 data-[dark]:bg-[#0c0c0e] data-[dark]:text-white data-[dark]:shadow-none data-[dark]:hover:border-[#ed1c24]/50"
      )}
    >
      <div className="relative h-[22rem] sm:h-[26rem] shrink-0 overflow-hidden">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent group-data-[dark]:from-[#0c0c0e] group-data-[dark]:via-[#0c0c0e]/40 opacity-90" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-data-[dark]:from-[#0c0c0e] group-data-[dark]:via-[#0c0c0e]/80 opacity-95" />
        )}
      </div>

      <div className="relative p-7 sm:p-9 z-20 isolate mt-[-120px] backdrop-blur-xl bg-white/90 group-data-[dark]:bg-[#0c0c0e]/90 group-data-[dark]:text-white text-zinc-900 border-t border-zinc-100 group-data-[dark]:border-white/10 flex flex-col justify-between flex-1">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#ed1c24]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24]" />
            {eyebrow}
          </div>
          <p className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 group-data-[dark]:text-white">
            {title}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-zinc-600 group-data-[dark]:text-zinc-400 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FUIBentoGridDark() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa] border-y border-zinc-200/80 text-zinc-900">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/20 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ed1c24]">
              <Sparkles className="h-3.5 w-3.5 text-[#ed1c24]" />
              <span>Full-Funnel Sales Architecture</span>
            </div>
            <h2 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Sales & Lead <span className="not-italic text-gradient-animated">Acquisition</span>
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-zinc-600 mt-3 leading-relaxed">
              Know more about your roofing leads than your competitors do before your sales team ever makes the call.
            </p>
          </div>

          <Link
            href={BOOKING_PATH}
            className="group inline-flex items-center gap-2 rounded-full bg-[#ed1c24] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#ff2a1f] hover:shadow-lg shrink-0"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Lead Insight"
            title="Get Perfect Lead Clarity"
            description="Our custom funnels capture complete property details, roof age, insurance provider, and replacement timeline so your crew lands pre-qualified appointments."
            graphic={
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=1000&q=80')",
                }}
              />
            }
            fade={["bottom"]}
            className="max-lg:rounded-t-3xl lg:col-span-3"
          />

          <BentoCard
            eyebrow="Market Analysis"
            title="Outposition Local Competitors"
            description="Target homeowners searching for roof replacements with exclusive offers and creative positioning that outperforms generic agency ad templates."
            graphic={
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1755114203680-d39d95efa82c?w=1000&q=80')",
                }}
              />
            }
            fade={["bottom"]}
            className="lg:col-span-3"
          />

          <BentoCard
            eyebrow="Response Speed"
            title="Automated Instant AI Follow-Up"
            description="Leads are contacted via SMS and AI sequence within 60 seconds 24/7 so no quote request or storm damage inspection ever goes cold."
            graphic={
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80')",
                }}
              />
            }
            fade={["bottom"]}
            className="lg:col-span-2"
          />

          <BentoCard
            eyebrow="Territory Reach"
            title="Dominant Omnichannel Reach"
            description="Combine Meta Ads, Instagram Reels, and Google Search campaigns into one unified engine built specifically for roofing contractors."
            graphic={
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1673645652350-6a4c31c1c78f?w=900&q=80')",
                }}
              />
            }
            fade={["bottom"]}
            className="lg:col-span-2"
          />

          <BentoCard
            eyebrow="Scale & Volume"
            title="Scale Across Markets"
            description="Expand seamlessly from local residential replacements into commercial roofing and multi-state storm restoration opportunities."
            graphic={
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=900&q=80')",
                }}
              />
            }
            fade={["bottom"]}
            className="max-lg:rounded-b-3xl lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
