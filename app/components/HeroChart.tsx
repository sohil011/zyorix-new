"use client";
import React, { useEffect, useState } from "react";

/**
 * HeroChart (final)
 * - Donut gauge for Value per £ (1.00x -> 1.35x)
 * - Two sparklines below: Outcomes/Throughput (up), Cloud Spend (flat-to-down)
 * - Calm ~1.6s animation; labels inside bounds; AA contrast
 */
export default function HeroChart() {
  const baseline = 1.0;
  const target = 1.35;
  const [value, setValue] = useState<number>(baseline);

  useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const v = baseline + (target - baseline) * eased;
      setValue(Number(v.toFixed(2)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="rounded-2xl p-6 bg-gradient-to-br from-sky-50 to-emerald-50 border border-slate-100"
      aria-label="Zyorix increases business value per pound by raising outcomes while managing cloud spend"
      role="img"
    >
      <div className="flex items-center justify-center">
        <ValueGauge value={value} baseline={baseline} target={target} />
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SparkCard
          title="Outcomes / Throughput"
          subtitle="Value driver"
          color="#10b981"
          aria="Business outcomes trending up"
          points={[10, 12, 14, 15, 17, 19, 22, 25]}
          up
        />
        <SparkCard
          title="Cloud Spend"
          subtitle="Managed cost"
          color="#64748b"
          aria="Cloud spend trending flat to down"
          points={[30, 30, 29, 29, 28, 28, 27, 27]}
        />
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Value per £ = outcomes (throughput/revenue proxies) ÷ cloud spend.
      </p>
    </div>
  );
}

function ValueGauge({ value, baseline, target }: { value: number; baseline: number; target: number }) {
  const size = 220;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(1, (value - baseline) / (target - baseline)));
  const dash = circ * progress;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="gauge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* Track */}
      <circle cx={size/2} cy={size/2} r={radius} stroke="#e5e7eb" strokeWidth={stroke} fill="none" />
      {/* Progress */}
      <circle
        cx={size/2} cy={size/2} r={radius}
        stroke="url(#gauge)" strokeWidth={stroke} fill="none"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ - dash}`}
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />

      {/* Center text */}
      <text x="50%" y="47%" textAnchor="middle"
        style={{ fontWeight: 800, fontSize: 28, fontFamily: "ui-sans-serif,system-ui" }}
        className="fill-slate-900">
        {value.toFixed(2)}x
      </text>
      <text x="50%" y="62%" textAnchor="middle"
        style={{ fontWeight: 600, fontSize: 14, fontFamily: "ui-sans-serif,system-ui" }}
        className="fill-emerald-700">
        Value per £
      </text>
    </svg>
  );
}

type SparkProps = {
  title: string;
  subtitle: string;
  color: string;
  aria: string;
  points: number[];
  up?: boolean;
};

function SparkCard({ title, subtitle, color, aria, points, up }: SparkProps) {
  const w = 260, h = 64, pad = 6;
  const max = Math.max(...points), min = Math.min(...points);
  const xStep = (w - pad*2) / (points.length - 1);

  const path = points.map((v, i) => {
    const x = pad + i * xStep;
    const y = pad + (h - pad*2) * (1 - (v - min) / Math.max(1, max - min));
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");

  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-slate-900 font-semibold">{title}</div>
          <div className="text-slate-500 text-xs">{subtitle}</div>
        </div>
        <div className={"text-xs font-semibold " + (up ? "text-emerald-600" : "text-slate-600")} aria-hidden="true">
          {up ? "Trend ↑" : "Trend ↘"}
        </div>
      </div>

      <svg className="mt-3 w-full h-20" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={aria}>
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.16" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width={w} height={h} rx="8" fill="#fff" />
        <path d={path} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d={`${path} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`} fill="url(#fill)" />
      </svg>
    </div>
  );
}
