import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

import InteractiveBars from "@/components/InteractiveBars";
import JsonLd, { SITE_URL } from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { breakdowns, getBreakdown } from "@/lib/breakdowns";

export function generateStaticParams() {
  return breakdowns.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = getBreakdown(slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.dek,
    alternates: { canonical: `/breakdowns/${b.slug}` },
    openGraph: {
      type: "article",
      title: b.title,
      description: b.dek,
      publishedTime: b.date,
      ...(b.youtubeId ? { images: [`https://i.ytimg.com/vi/${b.youtubeId}/hqdefault.jpg`] } : {}),
    },
  };
}

export default async function BreakdownPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBreakdown(slug);
  if (!b) notFound();
  const url = `${SITE_URL}/breakdowns/${b.slug}`;

  const ld: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: b.title,
      description: b.dek,
      datePublished: b.date,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Wealth in Whispers", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Wealth in Whispers", url: SITE_URL },
      about: { "@type": "Organization", name: b.company },
      citation: b.sources.map((s) => s.url),
    },
  ];
  if (b.youtubeId) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: b.title,
      description: b.dek,
      uploadDate: b.date,
      thumbnailUrl: `https://i.ytimg.com/vi/${b.youtubeId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${b.youtubeId}`,
      contentUrl: `https://www.youtube.com/shorts/${b.youtubeId}`,
    });
  }

  return (
    <main>
      <JsonLd data={ld} />
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-12 md:py-16">
          <Link href="/breakdowns" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="size-4" /> All breakdowns
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/5">{b.company}</Badge>
            <Badge className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/5">
              {new Date(b.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </Badge>
          </div>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{b.title}</h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/60">{b.dek}</p>
        </section>
      </div>

      <section className="container grid gap-10 py-10 md:py-14 lg:grid-cols-[1fr_360px]">
        <article className="max-w-3xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {b.keyNumbers.map((k) => (
              <div key={k.label} className="rounded-xl border bg-card p-4">
                <p className="text-2xl font-semibold tracking-tight">{k.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{k.label}</p>
              </div>
            ))}
          </div>

          {b.chart ? <InteractiveBars title={b.chart.title} note={b.chart.note} bars={b.chart.bars} /> : null}

          {b.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-8 text-foreground/80">{p}</p>
              ))}
            </section>
          ))}

          <Card className="mt-10 border-limebrand/40 bg-limebrand/10">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">The takeaway</p>
              <p className="mt-2 text-lg font-medium leading-7">{b.takeaway}</p>
            </CardContent>
          </Card>

          <section className="mt-10">
            <h2 className="text-lg font-semibold">Sources</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {b.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                    {s.title} <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">For education only, not financial advice. Calculations marked “our math” are ours, not the company's.</p>
          </section>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          {b.youtubeId ? (
            <div className="overflow-hidden rounded-2xl border bg-black">
              <iframe
                className="aspect-[9/16] w-full"
                src={`https://www.youtube-nocookie.com/embed/${b.youtubeId}`}
                title={b.title}
                loading="lazy"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : null}
          <Card>
            <CardContent className="p-6">
              <Mail className="size-5" />
              <p className="mt-3 font-semibold">Get one quiet breakdown a week.</p>
              <p className="mt-1 text-sm text-muted-foreground">The Whisper Letter — free, no hype.</p>
              <Button asChild className="mt-4 w-full bg-limebrand text-olive-950 hover:bg-limebrand-soft">
                <a href="https://wealthinwhispers.substack.com/" target="_blank" rel="noreferrer">Join the letter</a>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
