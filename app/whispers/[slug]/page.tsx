import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { whispers } from "@/lib/content";

export function generateStaticParams() {
  return whispers.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = whispers.find((whisper) => whisper.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
  };
}

const notes: Record<string, string[]> = {
  "wealth-is-what-you-dont-see": [
    "Visible consumption is easy to photograph. Financial resilience is mostly invisible.",
    "A person can have a modest lifestyle and a strong balance sheet, or a spectacular lifestyle financed by obligations.",
    "The useful question is not whether something looks expensive. It is what that choice does to future options.",
  ],
  "revenue-is-loud": [
    "Revenue measures activity. Cash flow reveals timing, collections, obligations and whether the business can keep operating.",
    "Growth can increase pressure when receivables expand faster than cash arrives.",
    "A quieter business with clean margins and cash discipline can be structurally stronger than a louder one.",
  ],
  "cost-of-always-needing-action": [
    "Activity creates feedback, which makes it emotionally satisfying even when it adds little value.",
    "Good financial systems reduce the number of decisions that need to be made under pressure.",
    "Patience is not passivity. It is the ability to wait when the expected reward for action is poor.",
  ],
  "first-100k-is-a-behaviour-problem": [
    "Early compounding is mathematically real but emotionally unimpressive.",
    "The first meaningful capital base is often built more by saving rate, income growth and consistency than investment brilliance.",
    "Once a base exists, returns begin to contribute more visibly, but the habits that built the base still matter.",
  ],
  "protect-the-downside": [
    "Avoiding ruin is different from avoiding all risk.",
    "Liquidity, insurance where appropriate, manageable debt and diversification create room to recover from mistakes.",
    "The objective is not to make life risk-free. It is to avoid one setback permanently removing your choices.",
  ],
  "income-is-not-wealth": [
    "Income is what arrives over a period. Wealth is what remains, is owned and can keep working.",
    "High income can accelerate wealth building, but only when some of that income becomes durable assets or financial resilience.",
    "The gap between earning and spending is where future optionality begins.",
  ],
};

export default async function WhisperDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = whispers.find((whisper) => whisper.slug === slug);
  if (!item) notFound();

  const body = notes[slug] ?? [item.excerpt];

  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-10 md:py-16">
          <Button asChild variant="ghost" className="-ml-3 text-white/55 hover:bg-white/5 hover:text-white">
            <Link href="/whispers">
              <ArrowLeft />
              All whispers
            </Link>
          </Button>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <Badge className="border border-white/10 bg-white/5 text-white/65 hover:bg-white/5">
              Whisper {item.number}
            </Badge>
            <Badge className="border border-limebrand/20 bg-limebrand/10 text-limebrand hover:bg-limebrand/10">
              {item.category}
            </Badge>
            <span className="text-xs text-white/35">{item.readTime}</span>
          </div>

          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {item.title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/52 sm:text-lg">
            {item.excerpt}
          </p>
        </section>
      </div>

      <article className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-7 text-[1.05rem] leading-8 text-foreground/85 sm:text-lg">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Card className="my-10 border-olive-800/15 bg-secondary/60">
            <CardContent className="p-6 sm:p-8">
              <p className="text-balance text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                The useful financial question is rarely “What looks impressive?”
                It is “What makes the next decade easier to survive and easier to choose?”
              </p>
            </CardContent>
          </Card>

          <p className="text-[1.05rem] leading-8 text-foreground/85 sm:text-lg">
            WIW treats this as a thinking framework, not a prescription.
            Personal circumstances, taxes, regulation, risk tolerance and time
            horizon can materially change what a sensible decision looks like.
          </p>

          <Separator className="my-10" />

          <div className="flex flex-col gap-4 rounded-xl border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Keep the signal. Ignore the theatre.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Get future whispers through the WIW letter.
              </p>
            </div>
            <Button asChild>
              <a href="https://wealthinwhispers.substack.com/" target="_blank" rel="noreferrer">
                <Mail />
                Join the letter
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
