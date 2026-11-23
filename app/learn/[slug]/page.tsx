import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import JsonLd, { SITE_URL } from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Card, CardContent } from "@/components/ui/card";
import { getTerm, glossary } from "@/lib/glossary";

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTerm(slug);
  if (!t) return {};
  return { title: `What is ${t.term}?`, description: t.short, alternates: { canonical: `/learn/${t.slug}` } };
}

export default async function TermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTerm(slug);
  if (!t) notFound();
  const related = (t.related ?? []).map(getTerm).filter(Boolean);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: t.term,
      description: t.short,
      url: `${SITE_URL}/learn/${t.slug}`,
      inDefinedTermSet: `${SITE_URL}/learn`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [{ "@type": "Question", name: `What is ${t.term}?`, acceptedAnswer: { "@type": "Answer", text: t.short } }],
    },
  ];

  return (
    <main>
      <JsonLd data={ld} />
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-12 md:py-16">
          <Link href="/learn" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="size-4" /> All terms
          </Link>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">What is {t.term}?</h1>
        </section>
      </div>
      <article className="container max-w-3xl py-10 md:py-14">
        <p className="text-xl font-medium leading-8">{t.short}</p>
        {t.body.map((p, i) => (
          <p key={i} className="mt-5 text-base leading-8 text-foreground/80">{p}</p>
        ))}
        {t.example ? (
          <Card className="mt-8 border-limebrand/40 bg-limebrand/10">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Example</p>
              <p className="mt-2 leading-7">{t.example}</p>
            </CardContent>
          </Card>
        ) : null}
        {related.length ? (
          <div className="mt-10">
            <p className="text-sm font-semibold">Related terms</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {related.map((r) => (
                <Link key={r!.slug} href={`/learn/${r!.slug}`} className="rounded-full border px-4 py-2 text-sm hover:bg-secondary">
                  {r!.term}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        <p className="mt-10 text-xs text-muted-foreground">For education only, not financial advice.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
