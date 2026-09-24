import type { Metadata } from "next";
import { ArrowUpRight, Landmark } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Bangladesh Money",
  description: "A growing library for understanding personal and business finance in Bangladesh.",
};

const topics = [
  ["01", "Cash & Safety", "Emergency funds, liquidity, savings products and the cost of being financially fragile."],
  ["02", "Salary & Lifestyle", "Income, budgeting, lifestyle inflation and building room between what comes in and what goes out."],
  ["03", "Business Money", "Cash flow, working capital, runway, receivables and the economics behind small businesses."],
  ["04", "Investing Basics", "Risk, diversification, compounding and a framework for learning before making decisions."],
  ["05", "Inflation & Purchasing Power", "Why nominal numbers can rise while real buying power quietly falls."],
  ["06", "Tax & Financial Systems", "Plain-language educational explainers with source links as the library grows."],
];

export default function BangladeshMoneyPage() {
  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-14 md:py-20">
          <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
            <Landmark className="mr-1 size-3.5" />
            Bangladesh Money
          </Badge>
          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Money, in the context we actually live in.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            Global principles, local reality. A growing educational library for
            Bangladeshi earners, founders and financially curious people.
          </p>
        </section>
      </div>

      <section className="container py-10 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map(([n, title, copy]) => (
            <Card key={title} className="group min-h-[280px] transition hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="secondary">{n}</Badge>
                  <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <CardTitle className="pt-8 text-2xl leading-tight tracking-[-0.035em]">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{copy}</p>
                <p className="mt-8 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  Library expanding
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-limebrand">
        <div className="container py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive-950/55">
            A rule for this section
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] text-olive-950 sm:text-4xl lg:text-5xl">
            Explain first. Source carefully. Never manufacture certainty.
          </h2>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
