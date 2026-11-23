import { ImageResponse } from "next/og";
import { breakdowns, getBreakdown } from "@/lib/breakdowns";

export const alt = "Wealth in Whispers breakdown";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return breakdowns.map((b) => ({ slug: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBreakdown(slug);
  const k = b?.keyNumbers?.[0];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0f1a12", color: "#f4f1e8" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, letterSpacing: 5 }}>
          <span style={{ color: "#c6f432" }}>WEALTH IN WHISPERS</span>
          <span style={{ color: "#a8b0a0" }}>{(b?.company ?? "").toUpperCase()}</span>
        </div>
        {k ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 150, fontWeight: 800, color: "#c6f432", lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 34, color: "#a8b0a0", marginTop: 8 }}>{k.label}</div>
          </div>
        ) : null}
        <div style={{ fontSize: 50, fontWeight: 800, lineHeight: 1.1 }}>{b?.title ?? "Business breakdown"}</div>
      </div>
    ),
    size,
  );
}
