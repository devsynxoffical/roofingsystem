"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const masterminds = [
  {
    title: "The Audience Segmentation Playbook Behind Higher-Quality Roofing Calls",
    meta: "Private Mastermind · 35 Min Breakdown",
    image: "/media/video/masterclass-poster-2.png",
    href: "/privatemastermind",
    badge: "Free Mastermind",
  },
  {
    title: "The “Hidden Facebook Interest” Framework Behind 300–500 Roofing Calls",
    meta: "Ads Copy Mastermind · Deep Dive",
    image: "/media/covers/cover-ads-copy.jpeg",
    href: "/privatemastermind-504306",
    badge: "Free Mastermind",
  },
];

export function Masterminds() {
  return (
    <Section id="masterminds" className="bg-[#070709] border-b border-white/10 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] blur-[130px] opacity-15"
        style={{ background: "radial-gradient(circle, #ed1c24 0%, transparent 70%)" }}
      />

      <SectionHeading
        eyebrow="Free Masterminds"
        title={
          <>
            Watch the private{" "}
            <em className="not-italic text-gradient-animated">recordings...</em>
          </>
        }
        subtitle="No email walls — just the complete framework breakdown, then book if it fits."
      />

      <div className="grid gap-8 lg:grid-cols-2 mt-12">
        {masterminds.map((m, i) => (
          <Reveal key={m.href} delay={i * 0.1} y={36}>
            <Link
              href={m.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md transition-all duration-500 hover:border-[#ed1c24]/50 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_-15px_rgba(237,28,36,0.3)] hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  {m.badge}
                </span>

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-[#ed1c24]/80 text-white backdrop-blur-md shadow-[0_0_30px_rgba(237,28,36,0.8)] transition-all duration-500 group-hover:scale-115 group-hover:bg-[#ed1c24]">
                    <Play className="h-6 w-6 fill-current translate-x-0.5" />
                  </span>
                </span>

                <span className="absolute bottom-3.5 left-4 font-mono text-[11px] uppercase tracking-widest text-white/90 font-semibold drop-shadow-md">
                  {m.meta}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-gradient-animated sm:text-2xl">
                  {m.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-extrabold uppercase tracking-wider text-[#ed1c24] transition-colors duration-300 group-hover:text-white">
                  Watch Recording Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5 text-[#ed1c24]" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
