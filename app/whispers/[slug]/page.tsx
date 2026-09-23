import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
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
      <SiteHeader />
      <article className="article-shell shell">
        <div className="article-topline">
          <span>WHISPER {item.number}</span>
          <span>{item.category}</span>
          <span>{item.readTime}</span>
        </div>
        <h1>{item.title}</h1>
        <p className="article-deck">{item.excerpt}</p>

        <div className="article-body">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote>
            The useful financial question is rarely “What looks impressive?”
            It is “What makes the next decade easier to survive and easier to
            choose?”
          </blockquote>
          <p>
            WIW treats this as a thinking framework, not a prescription.
            Personal circumstances, taxes, regulation, risk tolerance and time
            horizon can materially change what a sensible decision looks like.
          </p>
        </div>

        <div className="article-end">
          <p>Keep the signal. Ignore the theatre.</p>
          <a
            href="https://wealthinwhispers.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Get future whispers by email ↗
          </a>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
