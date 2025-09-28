"use client";
import React, { useEffect, useState } from "react";
import HeroMiniTrends from "./HeroMiniTrends";

/**
 * HeroValueIndex + MiniTrends
 * - Donut gauge: Value per £ animates from 1.00x -> 1.35x
 * - KPI chips: Predictable / Allocated / Resilient
 * - Mini sparklines: Outcomes up, Spend flat-to-down
 */
export default function HeroValueIndex() {
  const baseline = 1.00;
  const target = 1.35;

  const [value, setValue] = useState<number>(baseline);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = baseline + (target - baseline) * eased;
      setValue(Number(v.toFixed(2)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const size = 220;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = Math.max(0, Math.min(1, (value - baseline) / (target - baseline)));
  const dash = circumference * progress;

  return (
    <section aria-labelledby="hero-value-index-title" className="flex flex-col md:flex-row items-center gap-8 rounded-2xl p-6 bg-gradient-to-br from-sky-50 to-emerald-50">
      {/* Gauge */}
      <div className="relative" role="img" aria-label="Value per pound increases with Zyorix">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id="gauge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#10b981" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>

        {/* Track */}
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={stroke} fill="none" />

        {/* Progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gauge)"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference - dash}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />

          {/* Center label */}
          <g>
            <text x="50%" y="48%" textAnchor="middle" className="fill-slate-900"
              style={{ fontWeight: 800, fontSize: "28px", fontFamily: "ui-sans-serif, system-ui" }}>
              {value.toFixed(2)}x
            </text>
            <text x="50%" y="62%" textAnchor="middle" className="fill-emerald-700"
              style={{ fontWeight: 600, fontSize: "14px", fontFamily: "ui-sans-serif, system-ui" }}>
              Business value per £</text>
          </g>
        </svg>
      </div>

      {/* Copy + outcome KPIs */}
      <div className="max-w-xl">
        <h2 id="hero-value-index-title" className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Predictable, Efficient Cloud — With Zyorix
        </h2>
        <p className="mt-3 text-slate-600">
          We align compute with business outcomes so you get <span className="font-semibold">more value per £</span> —
          not just lower bills, but predictable budgets, accountable allocation, and resilient services.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <KPI label="Predictable" value="±5–10%" hint="Forecast variance" />
          <KPI label="Allocated" value="90–95%" hint="Allocation & tagging" />
          <KPI label="Resilient" value="99.9%+" hint="Availability & SLO" />
        </div>

        {/* Mini trends */}
        <HeroMiniTrends />

        <p className="mt-4 text-xs text-slate-500">
          Value per £ = outcomes (throughput or revenue proxies) divided by cloud spend.
        </p>
      </div>
    </section>
  );
}

type KPIProps = { label: string; value: string; hint: string };

function KPI({ label, value, hint }: KPIProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-slate-900 font-semibold">{label}</div>
      <div className="mt-1 text-emerald-600 text-xl font-bold">{value}</div>
      <div className="mt-1 text-slate-500 text-xs">{hint}</div>
    </div>
  );
}



