import { ImageResponse } from "next/og";

// Social share image (Facebook, LinkedIn, X, iMessage, WhatsApp…), in the site's red/black theme.
export const alt = "Roofing Systems Co.: Double your roofing revenue in 90 days";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 85% 20%, rgba(237,28,36,0.35), transparent 55%), #09090b",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#ed1c24" }} />
          <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#ed1c24", fontWeight: 700 }}>
            Only for $1M+ roofing companies
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Double your roofing revenue
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#ed1c24" }}>
            in 90 days.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#a1a1aa", maxWidth: 950 }}>
            Done-for-you client acquisition: Meta ads, funnels, CRM & AI follow-up. Backed in writing.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 40, fontWeight: 800, letterSpacing: 4 }}>
            <span>ROOFING</span>
            <span style={{ fontWeight: 400, marginLeft: 16, color: "#d4d4d8" }}>SYSTEMS™ Co.</span>
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>roofingsystems.co</div>
        </div>
      </div>
    ),
    size
  );
}
