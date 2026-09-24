import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wealth in Whispers",
    template: "%s | Wealth in Whispers",
  },
  description:
    "Where fortunes grow in silence. Clear thinking on money, investing, business, behaviour and long-term wealth.",
  keywords: [
    "personal finance",
    "investing",
    "wealth",
    "money psychology",
    "business",
    "Bangladesh finance",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#12180d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
