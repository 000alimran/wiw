import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

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
  themeColor: "#213100",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
