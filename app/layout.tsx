import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wealth in Whisper",
  description: "Quiet money. Clear thinking. Essays and tools for building wealth with patience, clarity, and discipline.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
