"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export default function HeroWealthSimulator() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(15);

  const value = useMemo(() => {
    const r = 0.08 / 12;
    const n = years * 12;
    return monthly * ((Math.pow(1 + r, n) - 1) / r);
  }, [monthly, years]);

  const points = useMemo(
    () => Array.from({ length: 14 }, (_, i) => Math.round(18 + Math.pow((i + 1) / 14, 2.2) * 82)),
    []
  );

  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/[0.055] text-white shadow-glow backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-limebrand/10 via-transparent to-transparent" />
      <CardHeader className="relative flex-row items-center justify-between space-y-0">
        <div>
          <Badge className="border border-limebrand/20 bg-limebrand/10 text-limebrand hover:bg-limebrand/10">
            <Sparkles className="mr-1 size-3" />
            Quiet compounding
          </Badge>
          <p className="mt-3 text-sm text-white/45">Illustrative projection</p>
        </div>
        <div className="grid size-10 place-items-center rounded-xl bg-limebrand text-olive-950">
          <TrendingUp className="size-5" />
        </div>
      </CardHeader>

      <CardContent className="relative">
        <p className="text-sm text-white/45">Projected value</p>
        <div className="mt-1 flex items-end gap-2">
          <strong className="text-4xl font-semibold tracking-[-0.04em] text-limebrand sm:text-5xl">
            {formatter.format(value)}
          </strong>
          <span className="pb-1 text-xs text-white/35">at 8% illustration</span>
        </div>

        <div className="mt-8 flex h-40 items-end gap-1.5 rounded-xl border border-white/10 bg-black/15 p-4">
          {points.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-limebrand/35 to-limebrand transition-all duration-300"
              style={{ height: `${Math.min(100, Math.max(8, height * (years / 20)))}%` }}
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <label className="rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="text-xs text-white/40">Monthly</span>
            <input
              className="mt-2 w-full accent-[#C7E75A]"
              type="range"
              min="3000"
              max="50000"
              step="1000"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
            />
            <strong className="mt-1 block text-sm">৳{formatter.format(monthly)}</strong>
          </label>

          <label className="rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="text-xs text-white/40">Time</span>
            <input
              className="mt-2 w-full accent-[#C7E75A]"
              type="range"
              min="5"
              max="25"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
            <strong className="mt-1 block text-sm">{years} years</strong>
          </label>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-xs text-white/45">
          <span>Patience changes the curve.</span>
          <ArrowUpRight className="size-4 text-limebrand" />
        </div>
      </CardContent>
    </Card>
  );
}
