import type { Metadata } from "next";
import { Calculator } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import ToolKit from "./ToolKit";

export const metadata: Metadata = {
  title: "Money Tools",
  description: "Simple calculators for compounding, financial freedom and business runway.",
};

export default function ToolsPage() {
  return (
    <main>
      <div className="bg-olive-950 text-white">
        <SiteHeader />
        <section className="container py-14 md:py-20">
          <Badge className="border border-white/10 bg-white/5 text-white/60 hover:bg-white/5">
            <Calculator className="mr-1 size-3.5" />
            Money tools
          </Badge>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Numbers without the noise.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/50 sm:text-base">
            Small calculators for thinking clearly about time, cash and trade-offs.
            Explore scenarios without pretending the future is certain.
          </p>
        </section>
      </div>

      <section className="container py-10 md:py-16">
        <ToolKit />
      </section>

      <SiteFooter />
    </main>
  );
}
