import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Manifesto",
  description: "The thinking behind Wealth in Whispers.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-14 md:py-20">
          <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
            <ShieldCheck className="mr-1 size-3.5" />
            Manifesto
          </Badge>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Private. Quiet. Insightful.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            Wealth in Whispers exists for people who want to understand money
            without turning money into a personality.
          </p>
        </section>
      </div>

      <section className="container py-14 md:py-20">
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_.8fr] lg:p-10">
            <div>
              <p className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                We are not interested in looking rich, chasing every market story
                or pretending a difficult subject can be reduced to one viral rule.
              </p>
            </div>
            <div className="grid content-start gap-5 text-sm leading-7 text-muted-foreground">
              <p>
                We care about resilient finances, productive ownership, patient
                compounding, better businesses, risk awareness and the psychology
                behind financial decisions.
              </p>
              <p>
                WIW is built as an independent educational publication. The goal is
                clearer thinking, not financial signals, flexing or false certainty.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="bg-olive-950 text-white">
        <div className="container py-14 md:py-20">
          <Badge className="border border-limebrand/20 bg-limebrand/10 text-limebrand hover:bg-limebrand/10">
            Quiet wealth principles
          </Badge>
          <div className="mt-8 grid gap-3">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:items-center sm:p-5"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-limebrand text-xs font-bold text-olive-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">{principle}</p>
                <Check className="ml-auto hidden size-5 text-limebrand sm:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
