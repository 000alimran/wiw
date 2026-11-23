import { ImageResponse } from "next/og";

export const alt = "Wealth in Whispers — business breakdowns in plain English";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0f1a12", color: "#f4f1e8" }}>
        <div style={{ fontSize: 30, letterSpacing: 6, color: "#c6f432" }}>WEALTH IN WHISPERS</div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>How big companies really make (and lose) money.</div>
        <div style={{ fontSize: 30, color: "#a8b0a0" }}>Sourced breakdowns · Free money tools · wealthinwhisper.com</div>
      </div>
    ),
    size,
  );
}
