"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOKING_PATH } from "../lib/offer";

type Category = "The system" | "Results" | "Working together";

type Faq = { q: string; a: string; cat: Category; tags: string[] };

const faqs: Faq[] = [
  {
    q: "What exactly is Roofing Systems™?",
    a: "It's a complete done-for-you client acquisition system built for roofing companies. We handle offer positioning, Meta ads, ad creatives, landing pages, the full sales funnel, CRM setup, AI follow-up, email and SMS sequences, and lead qualification — all managed for you.",
    cat: "The system",
    tags: ["Ads", "Funnels", "CRM"],
  },
  {
    q: "Who is this for?",
    a: "Roofing contractors doing $1M+ in annual revenue who want predictable, repeatable growth instead of lead-dependent chaos. If you're tired of overpaying for marketing with nothing to show for it, this is built for you.",
    cat: "Working together",
    tags: ["$1M+ roofers"],
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable lead growth within 30–45 days of launch. Every engagement is backed by mutually agreed growth milestones we commit to hitting within the first 90 days.",
    cat: "Results",
    tags: ["30–45 days", "90-day milestones"],
  },
  {
    q: "What happens if it doesn't work?",
    a: "We continue working for you at no management fee until we help you hit the agreed milestones. Everything is backed by a written agreement, so the risk sits on us, not you.",
    cat: "Results",
    tags: ["Guarantee", "Written agreement"],
  },
  {
    q: "Do I actually own the assets?",
    a: "Yes. Landing pages, sales funnel, CRM, automations, ad creatives, copy, follow-up sequences, and your customer data are 100% yours — permanently. It becomes a business asset you own outright.",
    cat: "The system",
    tags: ["Ownership", "Your data"],
  },
  {
    q: "Is there a long-term contract lock-in?",
    a: "No. We don't lock you in with long-term contracts. We earn the renewal by delivering results, not by trapping you in a commitment.",
    cat: "Working together",
    tags: ["No lock-in"],
  },
  {
    q: "How is this different from a traditional agency?",
    a: "Agencies run ads and hand you raw, unqualified leads. We build and operate the entire acquisition engine end-to-end — and our proprietary qualification process filters leads before they ever reach your sales team, so your crew spends time closing roofing projects, not chasing tire-kickers.",
    cat: "The system",
    tags: ["End-to-end", "Qualified leads"],
  },
];

const CATEGORIES: ("All" | Category)[] = ["All", "The system", "Results", "Working together"];

type Message =
  | { from: "you"; text: string }
  | { from: "team"; text: string; tags?: string[]; cta?: boolean };

const STOP = new Set(["the", "a", "an", "is", "do", "does", "i", "you", "my", "it", "to", "of", "and", "what", "how", "can", "for", "in", "this", "we", "are"]);
const words = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9$+ ]/g, " ").split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w));

/** Best keyword match among the FAQs, or null when nothing fits. */
function findAnswer(question: string): Faq | null {
  const qWords = words(question);
  let best: Faq | null = null;
  let bestScore = 0;
  for (const f of faqs) {
    const hay = new Set(words(`${f.q} ${f.a} ${f.tags.join(" ")}`));
    const score = qWords.filter((w) => hay.has(w) || [...hay].some((h) => h.startsWith(w) || w.startsWith(h))).length;
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }
  return bestScore >= 1 ? best : null;
}

function TeamBubble({ msg }: { msg: Extract<Message, { from: "team" }> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[92%] rounded-2xl rounded-tl-md border border-white/10 bg-[#141418] p-5 sm:max-w-[80%] sm:p-6"
    >
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed1c24]">RS Team</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200 sm:text-[1rem]">{msg.text}</p>
      {msg.tags && msg.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {msg.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">
              {t}
            </span>
          ))}
        </div>
      )}
      {msg.cta && (
        <Link
          href={BOOKING_PATH}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ed1c24] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#c4181e]"
        >
          Book a free strategy call <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </motion.div>
  );
}

function YouBubble({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-gradient-to-br from-[#ed1c24] to-[#c4181e] px-5 py-3.5 text-[0.95rem] font-semibold leading-snug text-white shadow-[0_10px_30px_-10px_rgba(237,28,36,0.6)] sm:max-w-[75%] sm:text-lg"
    >
      {text}
    </motion.div>
  );
}

function Typing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inline-flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-white/10 bg-[#141418] px-4 py-3"
      aria-label="Typing"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-zinc-400"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </motion.div>
  );
}

export function FaqSection() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState(0); // index into faqs
  const [thread, setThread] = useState<Message[]>(() => [
    { from: "you", text: faqs[0].q },
    { from: "team", text: faqs[0].a, tags: faqs[0].tags },
  ]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .map((f, i) => ({ f, i }))
      .filter(({ f }) => (cat === "All" || f.cat === cat) && (!q || `${f.q} ${f.a}`.toLowerCase().includes(q)));
  }, [query, cat]);

  const countFor = (c: (typeof CATEGORIES)[number]) => (c === "All" ? faqs.length : faqs.filter((f) => f.cat === c).length);

  useEffect(() => {
    const el = chatRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [thread, typing]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const reply = (question: string, answer: Extract<Message, { from: "team" }>, reset: boolean) => {
    window.clearTimeout(timer.current);
    setThread((t) => (reset ? [{ from: "you", text: question }] : [...t, { from: "you", text: question }]));
    setTyping(true);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      setThread((t) => [...t, answer]);
    }, 650);
  };

  const ask = (i: number, fromList = false) => {
    setActive(i);
    // On phones the chat sits below the list — bring the answer into view
    if (fromList && window.innerWidth < 1024) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    reply(faqs[i].q, { from: "team", text: faqs[i].a, tags: faqs[i].tags }, true);
  };

  const step = (dir: 1 | -1) => ask((active + dir + faqs.length) % faqs.length);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    const match = findAnswer(text);
    if (match) {
      setActive(faqs.indexOf(match));
      reply(text, { from: "team", text: match.a, tags: match.tags }, false);
    } else {
      reply(
        text,
        {
          from: "team",
          text: "Great question — that one deserves a real answer from our team, not a canned reply. Book a free strategy call and we'll walk you through it for your roofing company specifically.",
          cta: true,
        },
        false
      );
    }
  };

  const suggestions = [1, 2].map((d) => (active + d) % faqs.length);

  return (
    <section id="faq" className="relative overflow-hidden border-b border-zinc-800 bg-[#070709] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="jobber-grid-dark absolute inset-0 opacity-40" />
        <div className="absolute right-0 top-1/3 h-[35rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-x relative z-10 mx-auto max-w-[1340px]">
        {/* Header row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#ed1c24]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" />
              FAQ
            </span>
            <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Questions? <span className="text-gradient-animated">Ask us anything.</span>
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400 sm:text-lg">
              Pick a question and get a straight answer, the same way we would answer on a call.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-3">
              {[
                ["90", "day milestones"],
                ["<24h", "reply time"],
                ["100%", "assets you own"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-2xl font-extrabold text-white sm:text-3xl">{n}</p>
                  <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Chat card */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0e] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            {/* Left: question list */}
            <div className="border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r">
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 focus-within:border-[#ed1c24]/60">
                <Search className="h-4 w-4 text-zinc-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                />
              </label>

              <div className="mt-4 flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCat(c)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                      cat === c
                        ? "bg-[#ed1c24] text-white shadow-[0_0_20px_-4px_rgba(237,28,36,0.8)]"
                        : "bg-white/[0.05] text-zinc-300 hover:bg-white/10"
                    }`}
                  >
                    {c} <span className={cat === c ? "text-white/70" : "text-zinc-500"}>{countFor(c)}</span>
                  </button>
                ))}
              </div>

              <ul className="mt-4 max-h-[22rem] space-y-1 overflow-y-auto pr-1 lg:max-h-[30rem]" data-lenis-prevent>
                {visible.map(({ f, i }) => (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => ask(i, true)}
                      className={`group relative flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-colors ${
                        active === i ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"
                      }`}
                    >
                      {active === i && <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#ed1c24]" />}
                      <span className={`font-mono text-xs ${active === i ? "text-[#ed1c24]" : "text-zinc-600"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 text-[0.95rem] ${active === i ? "text-white" : "text-zinc-300"}`}>{f.q}</span>
                      <ArrowRight
                        className={`h-4 w-4 text-[#ed1c24] transition-all ${
                          active === i ? "opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  </li>
                ))}
                {visible.length === 0 && (
                  <li className="px-4 py-8 text-center text-sm text-zinc-500">
                    No matching questions — ask it in the chat instead.
                  </li>
                )}
              </ul>
            </div>

            {/* Right: chat */}
            <div ref={panelRef} className="flex min-h-[34rem] scroll-mt-24 flex-col">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3.5">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ed1c24] to-[#c4181e] text-sm font-extrabold text-white">
                    RS
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0b0b0e] bg-emerald-500" />
                  </span>
                  <span>
                    <span className="block font-bold text-white">Roofing Systems Co.</span>
                    <span className="block text-sm text-zinc-500">Usually replies within a day</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden font-mono text-sm text-zinc-500 sm:block">
                    <span className="text-white">{String(active + 1).padStart(2, "0")}</span> / {String(faqs.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous question"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#ed1c24] hover:bg-[#ed1c24]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next question"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#ed1c24] hover:bg-[#ed1c24]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div
                ref={chatRef}
                data-lenis-prevent
                className="relative flex max-h-[30rem] flex-1 flex-col gap-4 overflow-y-auto bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px] px-5 py-6 sm:px-7"
              >
                <div className="flex-1" />
                {thread.map((m, i) =>
                  m.from === "you" ? <YouBubble key={i} text={m.text} /> : <TeamBubble key={i} msg={m} />
                )}
                <AnimatePresence>{typing && <Typing />}</AnimatePresence>
              </div>

              <div className="border-t border-white/10 px-5 py-4 sm:px-7">
                <div className="mb-3 flex flex-wrap gap-2">
                  {suggestions.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => ask(i)}
                      className="rounded-full border border-white/15 px-4 py-2 text-left text-sm text-zinc-200 transition hover:border-[#ed1c24]/60 hover:bg-[#ed1c24]/10"
                    >
                      {faqs[i].q}
                    </button>
                  ))}
                </div>
                <form onSubmit={send} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 pl-5 focus-within:border-[#ed1c24]/60">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Ask your own question..."
                    aria-label="Ask your own question"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 sm:text-[1rem]"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#ed1c24] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#c4181e]"
                  >
                    Send <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
