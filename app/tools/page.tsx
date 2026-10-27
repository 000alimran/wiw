import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Calculator,
  Gauge,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
} from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toolCatalog } from "@/lib/tool-catalog";
import ToolKit from "./ToolKit";

export const metadata: Metadata = {
  title: "Money Tools",
  description:
    "WIW Money Lab: calculators for compounding, emergency funds, inflation, net worth, savings goals, lifestyle inflation and business runway.",
};

const icons = {
  "emergency-fund": ShieldCheck,
  "inflation-calculator": TimerReset,
  "net-worth": Gauge,
  "savings-goal": Target,
  "cost-of-waiting": Sparkles,
  "lifestyle-inflation": PiggyBank,
} as const;

export default function ToolsPage() {
  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-14 md:py-20">
          <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
            <Calculator className="mr-1 size-3.5" />
            WIW Money Lab
          </Badge>
          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Make money decisions visible.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            Practical calculators for building wealth, protecting your downside
            and understanding what your financial choices may cost over time.
          </p>
        </section>
      </div>

      <section className="container py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="outline">New tools</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Six new ways to think clearly.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Each tool has its own shareable page so you can return to it,
            bookmark it or send it to someone else.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolCatalog.map((tool) => {
            const Icon = icons[tool.slug];

            return (
              <Card
                key={tool.slug}
                className="group flex min-h-[270px] flex-col transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-olive-950 text-limebrand">
                      <Icon className="size-5" />
                    </span>
                    <Badge variant="secondary">{tool.category}</Badge>
                  </div>
                  <CardTitle className="pt-7 text-2xl leading-tight tracking-[-0.035em]">
                    {tool.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {tool.description}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    className="mt-auto w-fit px-0 pt-8 hover:bg-transparent"
                  >
                    <Link href={`/tools/${tool.slug}`}>
                      Open tool
                      <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/35">
        <div className="container py-12 md:py-16">
          <div className="mb-8">
            <Badge variant="outline">Quick calculators</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              The original WIW tools, still here.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Compound wealth, freedom number and business runway remain
              available directly on this page.
            </p>
          </div>

          <ToolKit />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
