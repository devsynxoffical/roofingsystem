"use client";

import { ShieldCheck, BadgeCheck, CalendarCheck2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ProofGrid } from "@/components/ProofGrid";

const VSL_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4";

const DASHBOARDS = ["proof-695d97e2.png", "proof-695d9820.png"];

export function ClientSuccess() {
  return (
    <Section id="success" className="theme-light">
      <SectionHeading
        eyebrow="Watch the VSL"
        title={
          <>
            Watch how we install{" "}
            <em className="font-semibold not-italic text-lime">your roofing system</em> end-to-end.
          </>
        }
        subtitle="A full walkthrough of the roofing client acquisition system — the offer, the ads, the funnel and the AI follow-up — followed by live campaign screenshots from the exact same playbook."
      />

      {/* VSL */}
      <Reveal>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line shadow-soft">
          <VideoPlayer
            src={VSL_VIDEO}
            cover="/media/video/hero-thumb.jpg"
            title="Watch the full roofing VSL"
            aspect="aspect-video"
          />
        </div>
      </Reveal>

      {/* Results screenshots */}
      <Reveal delay={0.1}>
        <p className="eyebrow-xl mb-1 mt-16 text-center sm:mt-20">Live results screenshots</p>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm text-mist sm:mb-12">
          Real spend. Real leads. Real roofing campaigns — tap &quot;See more&quot; to scroll deeper,
          or &quot;View full&quot; for the complete dashboard.
        </p>
      </Reveal>

      <ProofGrid files={DASHBOARDS} />

      {/* Trust strip */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-line bg-panel px-6 py-5">
          {[
            { icon: CalendarCheck2, label: "Hundreds of inspections booked monthly" },
            { icon: ShieldCheck, label: "Backed by a written guarantee" },
            { icon: BadgeCheck, label: "Verified client proof" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-2 text-xs text-mist">
              <item.icon className="h-4 w-4 text-lime" />
              {item.label}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
