import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import { Separator } from "@/components/ui/separator";

const explore = [
  ["Whispers", "/whispers"],
  ["Money Tools", "/tools"],
  ["Bangladesh Money", "/bangladesh-money"],
  ["Manifesto", "/about"],
];

export default function SiteFooter() {
  return (
    <footer className="bg-olive-950 text-white">
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.6fr]">
          <div>
            <BrandLogo />
            <h2 className="mt-8 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
              Where fortunes grow in silence.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/55">
              Independent financial education about money, business, behaviour,
              risk and long-term thinking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="grid content-start gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-limebrand">Explore</p>
              {explore.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-white/60 transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
            <div className="grid content-start gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-limebrand">Elsewhere</p>
              {[
                ["Substack", "https://wealthinwhispers.substack.com/"],
                ["Facebook", "https://www.facebook.com/wealthinwhisper"],
                ["TikTok", "https://www.tiktok.com/@wealthinwhisper"],
              ].map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white">
                  {label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>No hype. No signals. No financial theatre.</p>
          <p>For education only, not personal financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
