import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import JsonLd, { SITE_URL } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://wealthinwhisper.com"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Wealth in Whispers", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  title: {
    default: "Wealth in Whispers",
    template: "%s | Wealth in Whispers",
  },
  description:
    "Business breakdowns for quiet wealth builders: how companies make money, plain-English money explainers and free calculators.",
  keywords: [
    "personal finance",
    "investing",
    "wealth",
    "money psychology",
    "business",
    "business breakdowns",
    "how companies make money",
    "AI stocks",
    "IPO explained",
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
      <body className="min-h-screen overflow-x-hidden">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wealth in Whispers",
              url: SITE_URL,
              sameAs: [
                "https://www.youtube.com/@wealthinwhispers",
                "https://www.instagram.com/wealthinwhisper/",
                "https://www.tiktok.com/@wealthinwhisper",
                "https://www.facebook.com/wealthinwhisper",
                "https://www.linkedin.com/company/wealthinwhispers/",
                "https://wealthinwhispers.substack.com/",
              ],
            },
            { "@context": "https://schema.org", "@type": "WebSite", name: "Wealth in Whispers", url: SITE_URL },
          ]}
        />
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
