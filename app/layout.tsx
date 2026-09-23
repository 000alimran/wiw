import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
