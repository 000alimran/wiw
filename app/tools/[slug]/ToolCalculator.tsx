"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  Clock3,
  Gauge,
  PiggyBank,
  ShieldCheck,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const fmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const pct = (value: number) => (Number.isFinite(value) ? value.toFixed(1) : "0.0");

function Field({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="relative">
        <Input
          type="number"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-11 bg-background pr-14 text-base font-semibold"
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
  tone = "lime",
}: {
  label: string;
  value: string;
  note?: string;
  tone?: "lime" | "neutral" | "warning";
}) {
  const valueClass =
    tone === "lime"
      ? "text-limebrand"
      : tone === "warning"
        ? "text-amber-300"
        : "text-white";

  return (
    <Card className="border-white/10 bg-olive-950 text-white">
      <CardContent className="p-5">
        <p className="text-xs uppercase tracking-[0.14em] text-white/35">{label}</p>
        <strong className={`mt-3 block break-words text-3xl tracking-[-0.04em] sm:text-4xl ${valueClass}`}>
          {value}
        </strong>
        {note ? <p className="mt-3 text-xs leading-5 text-white/45">{note}</p> : null}
      </CardContent>
    </Card>
  );
}

function Stat({
  label,
  value,
  good,
}: {
  label: string;
  value: string;
  good?: boolean;
}) {
  return (
    <div className="rounded-xl bg-secondary p-4">
      <span className="text-xs text-muted-foreground">{label}</span>
      <strong className={`mt-1 block text-lg ${good === true ? "text-emerald-700" : good === false ? "text-rose-700" : ""}`}>
        {value}
      </strong>
    </div>
  );
}

export default function ToolCalculator({ slug }: { slug: string }) {
  if (slug === "emergency-fund") return <EmergencyFund />;
  if (slug === "inflation-calculator") return <InflationReality />;
  if (slug === "net-worth") return <NetWorth />;
  if (slug === "savings-goal") return <SavingsGoal />;
  if (slug === "cost-of-waiting") return <CostOfWaiting />;
  if (slug === "lifestyle-inflation") return <LifestyleInflation />;
  return null;
}

function EmergencyFund() {
  const [expenses, setExpenses] = useState(70000);
  const [dependents, setDependents] = useState(1);
  const [stability, setStability] = useState("stable");

  const months = useMemo(() => {
    const base = stability === "stable" ? 3 : stability === "variable" ? 6 : 9;
    return Math.min(12, base + Math.max(0, dependents));
  }, [stability, dependents]);

  const target = expenses * months;

  return (
    <ToolShell
      icon={ShieldCheck}
      title="Emergency Fund"
      eyebrow="Protect wealth"
      description="Estimate a practical cash buffer from essential monthly spending, income stability and dependents."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Essential monthly expenses" value={expenses} onChange={setExpenses} />
        <Field label="Dependents" value={dependents} onChange={setDependents} />
        <label className="grid gap-2 sm:col-span-2">
          <span className="text-xs font-medium text-muted-foreground">Income stability</span>
          <select
            value={stability}
            onChange={(e) => setStability(e.target.value)}
            className="h-11 rounded-md border border-input bg-background px-3 text-sm font-medium outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="stable">Stable salary / predictable income</option>
            <option value="variable">Variable income / commission-heavy</option>
            <option value="self">Founder / self-employed / highly variable</option>
          </select>
        </label>
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
        <Result
          label="Suggested emergency reserve"
          value={`৳${fmt.format(target)}`}
          note={`${months} months of essential expenses based on the selected stability profile.`}
        />
        <div className="grid gap-3">
          <Stat label="Target months" value={String(months)} />
          <Stat label="Monthly essentials" value={`৳${fmt.format(expenses)}`} />
        </div>
      </div>
    </ToolShell>
  );
}

function InflationReality() {
  const [amount, setAmount] = useState(1000000);
  const [inflation, setInflation] = useState(7);
  const [years, setYears] = useState(10);

  const futurePower = amount / Math.pow(1 + inflation / 100, years);
  const erosion = amount - futurePower;
  const lostPct = amount > 0 ? (erosion / amount) * 100 : 0;

  return (
    <ToolShell
      icon={Banknote}
      title="Inflation Reality Check"
      eyebrow="Build wealth"
      description="See how much purchasing power today's money may lose if prices keep rising."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Amount today" value={amount} onChange={setAmount} />
        <Field label="Inflation rate" value={inflation} onChange={setInflation} suffix="%" step={0.1} />
        <Field label="Years" value={years} onChange={setYears} />
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
        <Result
          label="Future purchasing power"
          value={`৳${fmt.format(futurePower)}`}
          note="Equivalent buying power in today's money, using a constant inflation assumption."
          tone="warning"
        />
        <div className="grid gap-3">
          <Stat label="Purchasing power lost" value={`${pct(lostPct)}%`} good={false} />
          <Stat label="Value eroded" value={`৳${fmt.format(erosion)}`} />
        </div>
      </div>
    </ToolShell>
  );
}

function NetWorth() {
  const [cash, setCash] = useState(300000);
  const [investments, setInvestments] = useState(500000);
  const [property, setProperty] = useState(0);
  const [business, setBusiness] = useState(0);
  const [otherAssets, setOtherAssets] = useState(100000);
  const [loans, setLoans] = useState(200000);
  const [credit, setCredit] = useState(50000);
  const [otherDebt, setOtherDebt] = useState(0);

  const assets = cash + investments + property + business + otherAssets;
  const liabilities = loans + credit + otherDebt;
  const netWorth = assets - liabilities;
  const debtRatio = assets > 0 ? (liabilities / assets) * 100 : 0;

  return (
    <ToolShell
      icon={Gauge}
      title="Net Worth Snapshot"
      eyebrow="Protect wealth"
      description="Add what you own, subtract what you owe and see your financial position without the noise."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold">Assets</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Cash" value={cash} onChange={setCash} />
            <Field label="Investments" value={investments} onChange={setInvestments} />
            <Field label="Property equity" value={property} onChange={setProperty} />
            <Field label="Business value" value={business} onChange={setBusiness} />
            <Field label="Other assets" value={otherAssets} onChange={setOtherAssets} />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Liabilities</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Loans" value={loans} onChange={setLoans} />
            <Field label="Credit cards" value={credit} onChange={setCredit} />
            <Field label="Other debt" value={otherDebt} onChange={setOtherDebt} />
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
        <Result
          label="Net worth"
          value={`৳${fmt.format(netWorth)}`}
          note="Assets minus liabilities. This is a snapshot, not a measure of income."
          tone={netWorth >= 0 ? "lime" : "warning"}
        />
        <div className="grid gap-3">
          <Stat label="Total assets" value={`৳${fmt.format(assets)}`} />
          <Stat label="Total liabilities" value={`৳${fmt.format(liabilities)}`} />
          <Stat label="Debt / asset ratio" value={`${pct(debtRatio)}%`} good={debtRatio < 30} />
        </div>
      </div>
    </ToolShell>
  );
}

function SavingsGoal() {
  const [target, setTarget] = useState(2000000);
  const [current, setCurrent] = useState(200000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(7);

  const monthly = useMemo(() => {
    const n = Math.max(1, Math.round(years * 12));
    const r = rate / 100 / 12;
    const futureCurrent = current * Math.pow(1 + r, n);
    const gap = Math.max(0, target - futureCurrent);
    if (r === 0) return gap / n;
    return gap * r / (Math.pow(1 + r, n) - 1);
  }, [target, current, years, rate]);

  const noGrowthMonthly = Math.max(0, target - current) / Math.max(1, years * 12);
  const savedByGrowth = Math.max(0, noGrowthMonthly - monthly);

  return (
    <ToolShell
      icon={Target}
      title="Savings Goal Planner"
      eyebrow="Build wealth"
      description="Work backwards from a target amount and estimate the monthly contribution needed."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Goal amount" value={target} onChange={setTarget} />
        <Field label="Already saved" value={current} onChange={setCurrent} />
        <Field label="Years" value={years} onChange={setYears} />
        <Field label="Expected annual return" value={rate} onChange={setRate} suffix="%" step={0.1} />
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
        <Result
          label="Estimated monthly contribution"
          value={`৳${fmt.format(monthly)}`}
          note="Assumes monthly contributions and a constant illustrative return."
        />
        <div className="grid gap-3">
          <Stat label="Without growth" value={`৳${fmt.format(noGrowthMonthly)}/mo`} />
          <Stat label="Monthly difference from growth" value={`৳${fmt.format(savedByGrowth)}`} good />
        </div>
      </div>
    </ToolShell>
  );
}

function CostOfWaiting() {
  const [monthly, setMonthly] = useState(10000);
  const [horizon, setHorizon] = useState(20);
  const [delay, setDelay] = useState(5);
  const [rate, setRate] = useState(8);

  const futureValue = (months: number) => {
    const r = rate / 100 / 12;
    if (r === 0) return monthly * months;
    return monthly * ((Math.pow(1 + r, months) - 1) / r);
  };

  const startNow = futureValue(horizon * 12);
  const delayedYears = Math.max(0, horizon - delay);
  const startLater = futureValue(delayedYears * 12);
  const cost = Math.max(0, startNow - startLater);
  const gapPct = startNow > 0 ? (cost / startNow) * 100 : 0;

  return (
    <ToolShell
      icon={Clock3}
      title="Cost of Waiting"
      eyebrow="Build wealth"
      description="Compare starting now with delaying the same monthly investing habit."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Monthly contribution" value={monthly} onChange={setMonthly} />
        <Field label="Total horizon" value={horizon} onChange={setHorizon} suffix="years" />
        <Field label="Delay before starting" value={delay} onChange={setDelay} suffix="years" />
        <Field label="Annual return" value={rate} onChange={setRate} suffix="%" step={0.1} />
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <Result label="Start now" value={`৳${fmt.format(startNow)}`} note={`${horizon} years contributing`} />
        <Result label={`Wait ${delay} years`} value={`৳${fmt.format(startLater)}`} note={`${delayedYears} years contributing`} tone="neutral" />
        <Result label="Illustrative cost of waiting" value={`৳${fmt.format(cost)}`} note={`${pct(gapPct)}% lower ending value`} tone="warning" />
      </div>
    </ToolShell>
  );
}

function LifestyleInflation() {
  const [oldIncome, setOldIncome] = useState(80000);
  const [newIncome, setNewIncome] = useState(120000);
  const [oldExpenses, setOldExpenses] = useState(55000);
  const [newExpenses, setNewExpenses] = useState(90000);

  const incomeGrowth = oldIncome > 0 ? ((newIncome - oldIncome) / oldIncome) * 100 : 0;
  const expenseGrowth = oldExpenses > 0 ? ((newExpenses - oldExpenses) / oldExpenses) * 100 : 0;
  const oldMargin = oldIncome > 0 ? ((oldIncome - oldExpenses) / oldIncome) * 100 : 0;
  const newMargin = newIncome > 0 ? ((newIncome - newExpenses) / newIncome) * 100 : 0;
  const marginChange = newMargin - oldMargin;
  const healthy = expenseGrowth <= incomeGrowth && marginChange >= 0;

  return (
    <ToolShell
      icon={PiggyBank}
      title="Lifestyle Inflation Detector"
      eyebrow="Life decisions"
      description="Check whether expenses are growing faster than income and squeezing your wealth-building margin."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Previous income" value={oldIncome} onChange={setOldIncome} />
        <Field label="Current income" value={newIncome} onChange={setNewIncome} />
        <Field label="Previous expenses" value={oldExpenses} onChange={setOldExpenses} />
        <Field label="Current expenses" value={newExpenses} onChange={setNewExpenses} />
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
        <Result
          label={healthy ? "Current pattern" : "Lifestyle warning"}
          value={healthy ? "Margin improving" : "Expenses outrunning progress"}
          note={
            healthy
              ? "Your spending is not growing faster than income, based on these inputs."
              : "Expense growth is consuming too much of the income increase."
          }
          tone={healthy ? "lime" : "warning"}
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
          <Stat label="Income growth" value={`${pct(incomeGrowth)}%`} good />
          <Stat label="Expense growth" value={`${pct(expenseGrowth)}%`} good={expenseGrowth <= incomeGrowth} />
          <Stat label="Savings margin change" value={`${marginChange >= 0 ? "+" : ""}${pct(marginChange)} pts`} good={marginChange >= 0} />
        </div>
      </div>
    </ToolShell>
  );
}

function ToolShell({
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6">
      <div>
        <Badge variant="outline">
          <Icon className="mr-1 size-3.5" />
          {eyebrow}
        </Badge>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>

      <Card>
        <CardHeader className="border-b bg-secondary/30">
          <CardTitle className="text-base">Your inputs</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 p-5 sm:p-6">
          {children}
        </CardContent>
      </Card>

      <div className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
        <ArrowDownRight className="mt-0.5 size-3.5 shrink-0" />
        <span>
          Educational estimate only. Real outcomes can differ because of taxes,
          fees, inflation, market returns, regulation and personal circumstances.
        </span>
      </div>
    </div>
  );
}
