"use client";

import { ReactNode } from "react";
import { ArrowRight, Bell, Calendar, FileText, Globe, Search, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { BOOKING_PATH } from "@/lib/offer";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-500",
      // light styles
      "bg-white border border-zinc-200/80 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_4px_16px_rgba(0,0,0,.05)] hover:border-[#ed1c24]/40 hover:shadow-xl",
      // dark styles
      "transform-gpu dark:bg-[#0c0c0e] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div className="absolute inset-0 overflow-hidden">{background}</div>

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-8 transition-all duration-500 group-hover:-translate-y-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ed1c24]/10 text-[#ed1c24] border border-[#ed1c24]/20 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-7 w-7 text-[#ed1c24]" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-2">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        {description}
      </p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-white via-white to-transparent dark:from-[#0c0c0e] dark:via-[#0c0c0e]",
      )}
    >
      <Button variant="default" asChild size="sm" className="pointer-events-auto shadow-md">
        <a href={href} className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs">
          {cta}
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02] group-hover:dark:bg-neutral-800/10" />
  </div>
);

const roofingFeatures = [
  {
    Icon: FileText,
    name: "Automated Qualified Lead Logs",
    description: "Every homeowner inquiry is organized in real time with roof age, insurance info, and inspection date.",
    href: BOOKING_PATH,
    cta: "Explore Lead Logs",
    background: (
      <div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=800&q=80')" }}
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Search,
    name: "Roofing Offer Positioning",
    description: "Target high-income homeowners ready for complete roof replacements rather than cheap price shoppers.",
    href: BOOKING_PATH,
    cta: "See Positioning",
    background: (
      <div
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-35 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1755114203680-d39d95efa82c?w=800&q=80')" }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Globe,
    name: "Exclusive Territory Coverage",
    description: "Your ads run exclusively in your zip codes so no local competitors steal your ready-to-book opportunities.",
    href: BOOKING_PATH,
    cta: "Check Territory",
    background: (
      <div
        className="absolute -right-14 -top-14 h-56 w-56 rounded-full opacity-35 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')" }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Calendar,
    name: "Auto Calendar Booking",
    description: "Qualified leads automatically choose inspection slots directly on your sales reps' Google/Outlook calendars.",
    href: BOOKING_PATH,
    cta: "View Workflow",
    background: (
      <div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-35 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1673645652350-6a4c31c1c78f?w=800&q=80')" }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Bell,
    name: "Speed-To-Lead Notifications",
    description: "Get instant SMS alerts the second a high-value roof replacement lead books their free inspection.",
    href: BOOKING_PATH,
    cta: "Get Instant Alerts",
    background: (
      <div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&q=80')" }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoDemo() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80 text-zinc-900">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/20 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ed1c24] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#ed1c24]" />
            <span>Turnkey Infrastructure</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Everything Built To <span className="not-italic text-gradient-animated">Scale Your Crew</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            From creative ad angles to CRM integration and instant speed-to-lead follow-up, every asset is managed completely for you.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {roofingFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export { BentoCard, BentoGrid };
