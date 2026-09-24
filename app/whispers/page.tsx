import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpenText } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whispers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Whispers",
  description: "Short notes on money, behaviour, business, risk and investing.",
};

export default function WhispersPage() {
  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-14 md:py-20">
          <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
            <BookOpenText className="mr-1 size-3.5" />
            Whispers
          </Badge>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Short notes. Long consequences.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            Ideas about money that are useful enough to keep and quiet enough to
            think about slowly.
          </p>
        </section>
      </div>

      <section className="container py-10 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whispers.map((item) => (
            <Card key={item.slug} className="group flex min-h-[320px] flex-col transition hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary">#{item.number}</Badge>
                  <span className="text-xs text-muted-foreground">{item.readTime}</span>
                </div>
                <p className="pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.category}
                </p>
                <CardTitle className="pt-2 text-2xl leading-tight tracking-[-0.035em]">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
                <Link
                  href={`/whispers/${item.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold"
                >
                  Read whisper
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
