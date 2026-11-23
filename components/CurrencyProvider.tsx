"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const currencies = [
  { code: "USD", sym: "$" },
  { code: "CAD", sym: "C$" },
  { code: "GBP", sym: "£" },
  { code: "EUR", sym: "€" },
  { code: "BDT", sym: "৳" },
] as const;

export type CurrencyCode = (typeof currencies)[number]["code"];

const Ctx = createContext<{ code: CurrencyCode; sym: string; setCode: (c: CurrencyCode) => void }>({
  code: "USD",
  sym: "$",
  setCode: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [code, setCodeState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wiw-currency") as CurrencyCode | null;
      if (saved && currencies.some((c) => c.code === saved)) setCodeState(saved);
    } catch {}
  }, []);

  const setCode = (c: CurrencyCode) => {
    setCodeState(c);
    try {
      localStorage.setItem("wiw-currency", c);
    } catch {}
  };

  const sym = currencies.find((c) => c.code === code)?.sym ?? "$";
  return <Ctx.Provider value={{ code, sym, setCode }}>{children}</Ctx.Provider>;
}

export const useCurrency = () => useContext(Ctx);
export const useCurrencySymbol = () => useContext(Ctx).sym;

export function CurrencySwitch({ className = "" }: { className?: string }) {
  const { code, setCode } = useCurrency();
  return (
    <label className={`inline-flex items-center gap-2 text-xs font-medium text-muted-foreground ${className}`}>
      Currency
      <select
        value={code}
        onChange={(e) => setCode(e.target.value as CurrencyCode)}
        className="h-9 rounded-lg border border-input bg-background px-2 text-sm font-semibold text-foreground"
        aria-label="Currency"
      >
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} ({c.sym})
          </option>
        ))}
      </select>
    </label>
  );
}
