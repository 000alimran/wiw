"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

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
    <label className="tool-field">
      <span>{label}</span>
      <div className="input-wrap">
        <input
          type="number"
          min="0"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {suffix ? <em>{suffix}</em> : null}
      </div>
    </label>
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

  return (
    <div className="tool-stack">
      <section className="calculator" id="compound">
        <div className="calculator-copy">
          <p className="mini-label">01 / Compound Wealth</p>
          <h2>What could patient money become?</h2>
          <p>
            A simple projection, not a promise. Adjust the assumptions and
            notice how time changes the picture.
          </p>
        </div>
        <div className="calculator-panel">
          <div className="field-grid">
            <Field label="Starting amount" value={initial} onChange={setInitial} />
            <Field label="Monthly contribution" value={monthly} onChange={setMonthly} />
            <Field label="Years" value={years} onChange={setYears} />
            <Field label="Annual return" value={rate} onChange={setRate} suffix="%" />
          </div>
          <div className="result-box">
            <span>Projected value</span>
            <strong>{money.format(futureValue)}</strong>
            <div className="result-split">
              <p><small>Contributed</small>{money.format(contributed)}</p>
              <p><small>Estimated growth</small>{money.format(growth)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="calculator" id="freedom">
        <div className="calculator-copy">
          <p className="mini-label">02 / Freedom Number</p>
          <h2>How much capital supports your current life?</h2>
          <p>
            This rough model annualises your spending and divides it by a
            chosen withdrawal rate.
          </p>
        </div>
        <div className="calculator-panel">
          <div className="field-grid">
            <Field label="Monthly expenses" value={monthlyExpense} onChange={setMonthlyExpense} />
            <Field label="Withdrawal rate" value={withdrawal} onChange={setWithdrawal} suffix="%" />
          </div>
          <div className="result-box">
            <span>Illustrative freedom number</span>
            <strong>{money.format(freedomNumber)}</strong>
            <p className="result-note">This is an educational shortcut, not a retirement recommendation.</p>
          </div>
        </div>
      </section>

      <section className="calculator" id="runway">
        <div className="calculator-copy">
          <p className="mini-label">03 / Business Runway</p>
          <h2>How many months can the business breathe?</h2>
          <p>
            Runway turns cash, monthly inflow and monthly outflow into one
            uncomfortable but useful number.
          </p>
        </div>
        <div className="calculator-panel">
          <div className="field-grid">
            <Field label="Cash available" value={cash} onChange={setCash} />
            <Field label="Monthly inflow" value={inflow} onChange={setInflow} />
            <Field label="Monthly outflow" value={outflow} onChange={setOutflow} />
          </div>
          <div className="result-box">
            <span>Estimated runway</span>
            <strong>{Number.isFinite(runway) ? runway.toFixed(1) : "∞"} <i>months</i></strong>
            <p className="result-note">
              {burn > 0
                ? `Net monthly burn: ${money.format(burn)}`
                : "Current inflow covers or exceeds outflow."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
