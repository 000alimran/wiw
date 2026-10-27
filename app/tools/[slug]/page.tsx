import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calculator } from "lucide-react";
import { notFound } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getTool, toolCatalog } from "@/lib/tool-catalog";
import ToolCalculator from "./ToolCalculator";

export function generateStaticParams() {
  return toolCatalog.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) return {};

  return {
    title: tool.title,
    description: tool.description,
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) notFound();

  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-10 md:py-14">
          <Button
            asChild
            variant="ghost"
            className="-ml-3 text-white/55 hover:bg-white/5 hover:text-white"
          >
            <Link href="/tools">
              <ArrowLeft />
              Money Lab
            </Link>
          </Button>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge className="border border-limebrand/20 bg-limebrand/10 text-limebrand hover:bg-limebrand/10">
              <Calculator className="mr-1 size-3.5" />
              WIW Money Lab
            </Badge>
            <Badge className="border border-white/10 bg-white/5 text-white/55 hover:bg-white/5">
              {tool.category}
            </Badge>
          </div>

          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {tool.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            {tool.description}
          </p>
        </section>
      </div>

      <section className="container py-10 md:py-16">
        <ToolCalculator slug={slug} />

        <div className="mt-12 rounded-xl border bg-card p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Keep exploring
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {toolCatalog
              .filter((item) => item.slug !== slug)
              .slice(0, 4)
              .map((item) => (
                <Button key={item.slug} asChild variant="outline" size="sm">
                  <Link href={`/tools/${item.slug}`}>
                    {item.title}
                    <ArrowUpRight />
                  </Link>
                </Button>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
