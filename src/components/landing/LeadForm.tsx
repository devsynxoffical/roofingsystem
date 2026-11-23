"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { leadMailto, submitLead, type Lead } from "@/lib/lead";

type Status = "idle" | "sending" | "done" | "failed";

const input =
  "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-[0.95rem] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-[#ed1c24]/15";

/** Short lead form card used on landing pages. Delivers through submitLead (email + CRM webhook). */
export function LeadForm({
  form,
  title = "Get your free market breakdown",
  subtitle = "We look at your market, offer and lead flow and show you what we would build. For roofing companies doing $1M+ a year.",
  market,
  id,
}: {
  form: string;
  title?: string;
  subtitle?: string;
  market?: string;
  id?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [lead, setLead] = useState<Lead>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Lead;
    setLead(data);
    setStatus((await submitLead(data, form)) ? "done" : "failed");
  }

  if (status === "done")
    return (
      <div id={id} className="rounded-3xl border border-zinc-200 bg-white p-8 text-center text-zinc-900 shadow-[0_30px_80px_-30px_rgba(237,28,36,0.55)]">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
        <p className="mt-4 text-2xl font-extrabold tracking-tight">Request received</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">We&apos;ll review your details and reach out within one business day to book your call.</p>
      </div>
    );

  if (status === "failed")
    return (
      <div id={id} className="rounded-3xl border border-zinc-200 bg-white p-8 text-center text-zinc-900">
        <p className="text-xl font-extrabold tracking-tight">We couldn&apos;t send that automatically</p>
        <p className="mt-2 text-sm text-zinc-500">Your details are ready in an email. Tap below to send it.</p>
        <a href={leadMailto(lead)} className="mt-5 inline-flex rounded-full bg-[#d4151c] px-6 py-3 text-sm font-bold text-white hover:bg-[#b3111a]">
          Send by email
        </a>
        <button type="button" onClick={() => setStatus("idle")} className="mt-3 block w-full text-sm font-semibold text-zinc-500 hover:text-zinc-900">
          Try again
        </button>
      </div>
    );

  return (
    <form id={id} onSubmit={onSubmit} className="scroll-mt-28 rounded-3xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-[0_30px_80px_-30px_rgba(237,28,36,0.45)] sm:p-7">
      <p className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{subtitle}</p>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {market && <input type="hidden" name="market" value={market} />}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor={`${form}-name`}>Full name</label>
        <input id={`${form}-name`} name="name" required placeholder="Full name" autoComplete="name" className={input} />
        <label className="sr-only" htmlFor={`${form}-company`}>Company</label>
        <input id={`${form}-company`} name="company" required placeholder="Roofing company" autoComplete="organization" className={input} />
        <label className="sr-only" htmlFor={`${form}-email`}>Email</label>
        <input id={`${form}-email`} name="email" type="email" required placeholder="Email" autoComplete="email" className={input} />
        <label className="sr-only" htmlFor={`${form}-phone`}>Phone</label>
        <input id={`${form}-phone`} name="phone" type="tel" required placeholder="Phone" autoComplete="tel" className={input} />
        <label className="sr-only" htmlFor={`${form}-revenue`}>Annual revenue</label>
        <select id={`${form}-revenue`} name="revenue" required defaultValue="" className={`${input} sm:col-span-2`}>
          <option value="" disabled>Annual revenue</option>
          <option value="under-1m">Under $1M</option>
          <option value="1-3m">$1M – $3M</option>
          <option value="3-5m">$3M – $5M</option>
          <option value="5m-plus">$5M+</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4151c] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_35px_-8px_rgba(237,28,36,0.8)] transition hover:bg-[#b3111a] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Get my breakdown"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
        <Lock className="h-3.5 w-3.5" /> No spam. We only use this to contact you about your call.
      </p>
    </form>
  );
}
