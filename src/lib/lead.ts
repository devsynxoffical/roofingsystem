"use client";
/*
  Lead delivery. A submission counts as delivered only when at least one
  channel confirms it:
  1. Email via FormSubmit to NEXT_PUBLIC_LEAD_EMAIL (or the site email). The
     first submission sends a one-time activation email to that inbox; after
     the owner clicks it, every lead arrives by email.
  2. The CRM webhook (e.g. a GoHighLevel inbound webhook),
     forwarded server-side by /api/lead.php (Hostinger, PHP), once the owner sets it in lead-config.php.
  If neither confirms, the form shows a pre-filled email link instead of a
  fake "received" message, so no lead is silently lost.
*/
import { site } from "./site";
import { track } from "./track";

export type Lead = Record<string, string>;

const LEAD_EMAIL = process.env.NEXT_PUBLIC_LEAD_EMAIL || site.email;

async function viaEmail(lead: Lead, source: string) {
  try {
    const r = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(LEAD_EMAIL)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...lead,
        source_page: source,
        _subject: `New roofing lead: ${lead.company || lead.name || "website"} (${source})`,
        _template: "table",
        _captcha: "false",
      }),
    });
    const j = (await r.json().catch(() => ({}))) as { success?: string | boolean };
    return r.ok && String(j.success) === "true";
  } catch {
    return false;
  }
}

async function viaWebhook(lead: Lead, source: string) {
  try {
    const r = await fetch("/api/lead.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, source_page: source }),
    });
    const j = (await r.json().catch(() => ({}))) as { forwarded?: boolean };
    return r.ok && j.forwarded === true;
  } catch {
    return false;
  }
}

export async function submitLead(lead: Lead, form: string): Promise<boolean> {
  if (lead._honey) return true; // bot filled the hidden field
  const source = typeof window !== "undefined" ? window.location.pathname : "";
  const results = await Promise.all([viaEmail(lead, source), viaWebhook(lead, source)]);
  const ok = results.some(Boolean);
  track(ok ? "generate_lead" : "lead_delivery_failed", { form });
  return ok;
}

/** mailto: link with the lead's details, used when automatic delivery fails. */
export function leadMailto(lead: Lead) {
  const body = Object.entries(lead)
    .filter(([k, v]) => v && !k.startsWith("_"))
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent("Strategy call request")}&body=${encodeURIComponent(body)}`;
}
