"use client";

import { useMemo, useState } from "react";
import { Calculator, CircleDollarSign, Clock3, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const money = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function Field({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="relative">
        <Input
          type="number"
          min="0"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-11 bg-background pr-12 text-base font-semibold"
        />
        {suffix ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

function Result({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-olive-950 p-5 text-white">
      <p className="text-xs uppercase tracking-[0.14em] text-white/35">{label}</p>
      <strong className="mt-3 block break-words text-3xl tracking-[-0.04em] text-limebrand sm:text-4xl">
        {value}
      </strong>
      {note ? <p className="mt-3 text-xs leading-5 text-white/45">{note}</p> : null}
    </div>
  );
}

export default function ToolKit() {
  const [initial, setInitial] = useState(100000);
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(8);

  const futureValue = useMemo(() => {
    const r = rate / 100 / 12;
    const n = Math.max(0, Math.round(years * 12));
    if (r === 0) return initial + monthly * n;
    return initial * Math.pow(1 + r, n) + monthly * ((Math.pow(1 + r, n) - 1) / r);
  }, [initial, monthly, years, rate]);

  const contributed = initial + monthly * years * 12;
  const growth = Math.max(0, futureValue - contributed);

  const [monthlyExpense, setMonthlyExpense] = useState(80000);
  const [withdrawal, setWithdrawal] = useState(4);
  const freedomNumber =
    withdrawal > 0 ? (monthlyExpense * 12) / (withdrawal / 100) : 0;

  const [cash, setCash] = useState(1200000);
  const [inflow, setInflow] = useState(350000);
  const [outflow, setOutflow] = useState(500000);
  const burn = outflow - inflow;
  const runway = burn > 0 ? cash / burn : Infinity;

  const tools = [
    {
      id: "compound",
      icon: TrendingUp,
      label: "Compound Wealth",
      title: "What could patient money become?",
      copy: "A simple projection, not a promise. Change the assumptions and watch how time changes the curve.",
      form: (
        <>
          <Field label="Starting amount" value={initial} onChange={setInitial} />
          <Field label="Monthly contribution" value={monthly} onChange={setMonthly} />
          <Field label="Years" value={years} onChange={setYears} />
          <Field label="Annual return" value={rate} onChange={setRate} suffix="%" />
        </>
      ),
      result: (
        <div className="grid gap-3">
          <Result
            label="Projected value"
            value={money.format(futureValue)}
            note="Illustrative only. Markets do not deliver fixed returns."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-secondary p-4">
              <span className="text-xs text-muted-foreground">Contributed</span>
              <strong className="mt-1 block text-lg">{money.format(contributed)}</strong>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <span className="text-xs text-muted-foreground">Estimated growth</span>
              <strong className="mt-1 block text-lg">{money.format(growth)}</strong>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "freedom",
      icon: CircleDollarSign,
      label: "Freedom Number",
      title: "How much capital supports your current life?",
      copy: "A rough model that annualises your spending and divides it by a chosen withdrawal rate.",
      form: (
        <>
          <Field label="Monthly expenses" value={monthlyExpense} onChange={setMonthlyExpense} />
          <Field label="Withdrawal rate" value={withdrawal} onChange={setWithdrawal} suffix="%" />
        </>
      ),
      result: (
        <Result
          label="Illustrative freedom number"
          value={money.format(freedomNumber)}
          note="A shortcut for exploration, not a retirement recommendation."
        />
      ),
    },
    {
      id: "runway",
      icon: Clock3,
      label: "Business Runway",
      title: "How many months can the business breathe?",
      copy: "Turn cash, monthly inflow and monthly outflow into one uncomfortable but useful number.",
      form: (
        <>
          <Field label="Cash available" value={cash} onChange={setCash} />
          <Field label="Monthly inflow" value={inflow} onChange={setInflow} />
          <Field label="Monthly outflow" value={outflow} onChange={setOutflow} />
        </>
      ),
      result: (
        <Result
          label="Estimated runway"
          value={Number.isFinite(runway) ? `${runway.toFixed(1)} months` : "∞"}
          note={
            burn > 0
              ? `Net monthly burn: ${money.format(burn)}`
              : "Current inflow covers or exceeds outflow."
          }
        />
      ),
    },
  ];

  return (
    <div className="grid gap-5">
      {tools.map(({ id, icon: Icon, label, title, copy, form, result }) => (
        <Card key={id} id={id} className="overflow-hidden">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <CardHeader className="border-b bg-secondary/35 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-olive-950 text-limebrand">
                  <Icon className="size-5" />
                </span>
                <Badge variant="outline">{label}</Badge>
              </div>
              <CardTitle className="pt-8 text-2xl leading-tight tracking-[-0.035em] sm:text-3xl">
                {title}
              </CardTitle>
              <p className="max-w-lg pt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
            </CardHeader>

            <CardContent className="grid gap-6 p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">{form}</div>
              {result}
            </CardContent>
          </div>
        </Card>
      ))}

      <div className="flex items-start gap-3 rounded-xl border bg-card p-4 text-sm text-muted-foreground">
        <Calculator className="mt-0.5 size-4 shrink-0 text-foreground" />
        <p>
          These tools are for learning and scenario testing. They do not account
          for taxes, fees, inflation, regulation or your individual circumstances.
        </p>
      </div>
    </div>
  );
}
