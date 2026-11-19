/*
  Forwards a lead to the owner's CRM webhook (LEAD_WEBHOOK_URL, e.g. a
  GoHighLevel inbound webhook). Returns { forwarded: false } when no webhook
  is configured, so the client relies on email delivery instead.
*/
const MAX = 2000;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ forwarded: false, error: "invalid json" }, { status: 400 });
  }
  const lead: Record<string, string> = {};
  for (const [k, v] of Object.entries(data ?? {})) {
    if (typeof v === "string" && !k.startsWith("_")) lead[k.slice(0, 50)] = v.slice(0, MAX);
  }
  if (!lead.email && !lead.phone) return Response.json({ forwarded: false, error: "email or phone required" }, { status: 400 });

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return Response.json({ forwarded: false, reason: "no webhook configured" });
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, received_at: new Date().toISOString(), site: "roofingsystems.co" }),
    });
    return Response.json({ forwarded: r.ok });
  } catch {
    return Response.json({ forwarded: false, reason: "webhook unreachable" });
  }
}
