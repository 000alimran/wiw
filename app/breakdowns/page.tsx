import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { breakdowns } from "@/lib/breakdowns";

export const metadata: Metadata = {
  title: "Business Breakdowns",
  description: "How companies actually make money — revenue, costs and the numbers behind the headlines, explained from their filings.",
  alternates: { canonical: "/breakdowns" },
};

export default function BreakdownsPage() {
  const items = [...breakdowns].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-14 md:py-20">
          <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
            <PlayCircle className="mr-1 size-3.5" />
            Breakdowns
          </Badge>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            How companies actually make money.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            Short, sourced breakdowns of the numbers behind the headlines. No hype, no stock picks — just the business.
          </p>
        </section>
      </div>

      <section className="container py-10 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((b) => (
            <Card key={b.slug} className="group flex flex-col transition hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary">{b.company}</Badge>
                  {b.youtubeId ? <span className="text-xs text-muted-foreground">Video + article</span> : null}
                </div>
                <CardTitle className="pt-4 text-2xl leading-tight tracking-[-0.035em]">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm leading-6 text-muted-foreground">{b.dek}</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {b.keyNumbers.slice(0, 2).map((k) => (
                    <div key={k.label} className="rounded-lg bg-secondary p-3">
                      <p className="text-lg font-semibold tracking-tight">{k.value}</p>
                      <p className="text-[11px] leading-4 text-muted-foreground">{k.label}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/breakdowns/${b.slug}`} className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold">
                  Read the breakdown
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
