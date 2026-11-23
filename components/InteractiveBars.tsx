"use client";

import { useEffect, useRef, useState } from "react";

export type ChartBar = { label: string; value: number; display: string; tone?: "good" | "bad" | "mut" };

const toneClass = { good: "bg-limebrand", bad: "bg-rose-400", mut: "bg-white/35" } as const;

// Bars grow in when scrolled into view; hover or tap a bar to see its share of the total.
export default function InteractiveBars({ title, note, bars }: { title: string; note?: string; bars: ChartBar[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...bars.map((b) => Math.abs(b.value)), 1);
  const total = bars.reduce((s, b) => s + Math.max(b.value, 0), 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cur = active !== null ? bars[active] : null;

  return (
    <figure ref={ref} className="mt-10 rounded-2xl bg-olive-950 p-5 text-white sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <figcaption className="text-sm font-semibold">{title}</figcaption>
        <p className="min-h-5 text-xs text-white/60">
          {cur ? (
            <>
              <span className="font-semibold text-limebrand">{cur.label}: {cur.display}</span>
              {cur.value > 0 && total > 0 && bars.length > 1 ? ` · ${((cur.value / total) * 100).toFixed(0)}% of total` : ""}
            </>
          ) : (
            "Hover or tap a bar"
          )}
        </p>
      </div>
      <div className="mt-6 flex h-56 items-end gap-3" onMouseLeave={() => setActive(null)}>
        {bars.map((b, i) => (
          <button
            key={b.label}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`group flex h-full flex-1 flex-col items-center justify-end gap-2 transition-opacity ${active !== null && active !== i ? "opacity-45" : ""}`}
            aria-label={`${b.label}: ${b.display}`}
          >
            <span className="text-xs font-semibold text-white/80 sm:text-sm">{b.display}</span>
            <span
              className={`w-full rounded-t-lg ${toneClass[b.tone ?? (b.value < 0 ? "bad" : "good")]} transition-[height] duration-1000 ease-out`}
              style={{ height: shown ? `${Math.max((Math.abs(b.value) / max) * 100, 2)}%` : "0%", transitionDelay: `${i * 120}ms` }}
            />
          </button>
        ))}
      </div>
      <div className="mt-2 flex gap-3 border-t border-white/15 pt-2">
        {bars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[11px] leading-4 text-white/55">{b.label}</span>
        ))}
      </div>
      {note ? <p className="mt-4 text-xs text-white/40">{note}</p> : null}
    </figure>
  );
}
