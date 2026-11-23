import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { glossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Learn: Money & Business Terms Explained",
  description: "Plain-English definitions of finance and business terms — SAFEs, lock-ups, fair-value losses, compounding and more.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  const items = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-14 md:py-20">
          <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
            <GraduationCap className="mr-1 size-3.5" />
            Learn
          </Badge>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Money terms, in plain English.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            One clear definition first, then an example and why it matters.
          </p>
        </section>
      </div>
      <section className="container py-10 md:py-16">
        <div className="divide-y rounded-2xl border bg-card">
          {items.map((t) => (
            <Link key={t.slug} href={`/learn/${t.slug}`} className="group flex items-start justify-between gap-6 p-5 transition hover:bg-secondary/60 sm:p-6">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{t.term}</h2>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">{t.short}</p>
              </div>
              <ArrowUpRight className="mt-1 size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
