import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const posts = [
  {
    image: "/media/video/masterclass-poster.png",
    meta: "Private Mastermind · Free",
    title: "The Audience Segmentation Playbook Behind Higher-Quality Roofing Calls",
    author: "RSC",
    href: "/privatemastermind",
  },
  {
    image: "/media/covers/cover-ads-copy.jpeg",
    meta: "Ads Copy Mastermind · Free",
    title: "The “Hidden Facebook Interest” Framework Behind 300–500 Roofing Calls",
    author: "RSC",
    href: "/privatemastermind-504306",
  },
  {
    image: "/media/video/masterclass-poster-2.png",
    meta: "Video Breakdown · Watch Now",
    title: "Systems Breakdown: You Just Take The Sales Calls",
    author: "RSC",
    href: "/#masterclass",
  },
];

export function LatestMasterminds() {
  return (
    <section className="relative overflow-hidden bg-[#070709] py-20 border-b border-white/10 text-white">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ed1c24] mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#ed1c24]" />
              <span>Free Masterminds</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Latest{" "}
              <span className="not-italic text-gradient-animated">Recordings</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:justify-self-end md:text-base">
              Watch the private recordings before you apply. No email walls,
              just the breakdown, then book if it fits.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((item, index) => (
            <Reveal key={item.href} delay={index * 120}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md transition-all duration-500 hover:border-[#ed1c24]/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_-10px_rgba(237,28,36,0.3)] hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-[#ed1c24] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    Free
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ed1c24]/80 text-white backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                      <Play className="h-5 w-5 fill-current translate-x-0.5" />
                    </span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#ed1c24]">
                    {item.meta}
                  </p>
                  <h3 className="font-heading mt-2.5 flex-1 text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#ed1c24] md:text-lg">
                    {item.title}
                  </h3>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ed1c24] text-[10px] font-extrabold text-white">
                        {item.author}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">Roofing Systems Co.</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#ed1c24]">
                      Watch <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
