import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Calculator,
  CircleDollarSign,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import HeroWealthSimulator from "@/components/HeroWealthSimulator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whispers } from "@/lib/content";

const moneyTopics = [
  {
    icon: CircleDollarSign,
    title: "Earn",
    copy: "Income, skills and business economics.",
  },
  {
    icon: ShieldCheck,
    title: "Keep",
    copy: "Cash flow, spending and financial resilience.",
  },
  {
    icon: Landmark,
    title: "Own",
    copy: "Assets, investing and productive ownership.",
  },
  {
    icon: Sparkles,
    title: "Wait",
    copy: "Compounding, patience and long-term thinking.",
  },
];

export default function Home() {
  const featured = whispers.slice(0, 3);

  return (
    <main>
      <section className="noise bg-olive-950 text-white">
        <SiteHeader />
        <div className="container grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/5">
                Investing
              </Badge>
              <Badge className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/5">
                Mindset
              </Badge>
              <Badge className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/5">
                Strategy
              </Badge>
            </div>

            <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.6rem] xl:leading-[.96]">
              Wealth grows quieter than people think.
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-white/58 sm:text-lg">
              Clear thinking on money, business, risk and behaviour for people
              who would rather build quietly than perform wealth publicly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-limebrand text-olive-950 hover:bg-limebrand-soft">
                <Link href="/whispers">
                  Read the whispers
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/tools">
                  Open money tools
                  <Calculator />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {[
                ["No hype", "Signal over noise"],
                ["No flexing", "Behaviour over image"],
                ["No shortcuts", "Systems over tricks"],
              ].map(([title, copy]) => (
                <div key={title}>
                  <p className="text-sm font-semibold text-limebrand">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/38">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroWealthSimulator />
        </div>
      </section>

      <section className="border-b border-border bg-limebrand">
        <div className="container grid gap-8 py-12 md:grid-cols-[220px_1fr] md:items-center md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive-950/60">
              The thesis
            </p>
          </div>
          <h2 className="max-w-5xl text-balance text-3xl font-semibold tracking-[-0.04em] text-olive-950 sm:text-4xl lg:text-5xl">
            The goal is not to look rich. The goal is to become financially difficult to break.
          </h2>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="outline" className="mb-4">Latest thinking</Badge>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Whispers worth keeping.
            </h2>
          </div>
          <Button asChild variant="ghost" className="w-fit px-0 hover:bg-transparent">
            <Link href="/whispers">
              View all whispers
              <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {featured.map((item) => (
            <Card key={item.slug} className="group flex min-h-[340px] flex-col overflow-hidden bg-card/80 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary">Whisper {item.number}</Badge>
                  <span className="text-xs text-muted-foreground">{item.readTime}</span>
                </div>
                <CardTitle className="pt-8 text-2xl leading-tight tracking-[-0.03em]">
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

      <section className="bg-olive-950 text-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <Badge className="border border-limebrand/20 bg-limebrand/10 text-limebrand hover:bg-limebrand/10">
              A quiet operating system
            </Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Four verbs for quieter wealth.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moneyTopics.map(({ icon: Icon, title, copy }) => (
              <Card key={title} className="border-white/10 bg-white/[0.045] text-white">
                <CardHeader>
                  <span className="grid size-10 place-items-center rounded-xl bg-limebrand/10 text-limebrand">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="pt-8 text-3xl tracking-[-0.04em] text-limebrand">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-white/48">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:py-24">
        <div>
          <Badge variant="outline">Money tools</Badge>
          <h2 className="mt-5 max-w-lg text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Make the numbers visible.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            Test compounding, estimate a freedom number, or see how long a
            business can breathe before cash runs out.
          </p>
          <Button asChild className="mt-7">
            <Link href="/tools">
              Open the tools
              <Calculator />
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden border-olive-800/20 bg-olive-950 text-white shadow-xl">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/35">WIW Tools</p>
              <CardTitle className="mt-2 text-2xl">A tiny decision dashboard</CardTitle>
            </div>
            <Calculator className="size-5 text-limebrand" />
          </CardHeader>
          <CardContent className="grid gap-4 p-6 sm:grid-cols-3">
            {[
              ["Compound Wealth", "Time × consistency"],
              ["Freedom Number", "Lifestyle × capital"],
              ["Business Runway", "Cash ÷ burn"],
            ].map(([title, formula]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-8 text-xs text-white/35">{formula}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-limebrand" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="border-y border-border bg-secondary/55">
        <div className="container grid gap-8 py-16 lg:grid-cols-[1fr_.8fr] lg:items-end lg:py-20">
          <div>
            <Badge variant="outline">
              <Landmark className="mr-1 size-3.5" />
              Bangladesh Money
            </Badge>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Global principles. Local reality.
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              A growing library about cash, salary, business money, inflation,
              investing basics and financial systems in the context people here actually live in.
            </p>
            <Button asChild variant="link" className="mt-3 h-auto px-0">
              <Link href="/bangladesh-money">
                Explore the library
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <Card className="overflow-hidden border-olive-800/10 bg-olive-900 text-white">
          <CardContent className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
                <BookOpenText className="mr-1 size-3.5" />
                The Whisper Letter
              </Badge>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                One useful note. No shouting.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/48">
                Essays, frameworks and money ideas delivered through the existing WIW Substack.
              </p>
            </div>
            <Button asChild size="lg" className="bg-limebrand text-olive-950 hover:bg-limebrand-soft">
              <a href="https://wealthinwhispers.substack.com/" target="_blank" rel="noreferrer">
                Join on Substack
                <ArrowUpRight />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <SiteFooter />
    </main>
  );
}
