"use client";
import React from "react";

/**
 * Two simple, accessible sparklines:
 *  - Left: Outcomes/Throughput (upward)
 *  - Right: Cloud Spend (flat-to-down)
 * Calm animation, no any-types, and ARIA labels.
 */
export default function HeroMiniTrends() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <SparkCard
        title="Outcomes / Throughput"
        subtitle="Value driver"
        color="#10b981"
        aria="Business outcomes trending up"
        points={[10,14,16,18,21,23,26,30]}
        up
      />
      <SparkCard
        title="Cloud Spend"
        subtitle="Managed cost"
        color="#64748b"
        aria="Cloud spend trending flat-to-down"
        points={[30,30,29,29,28,28,27,27]}
      />
    </div>
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
  const w = 260;
  const h = 64;
  const pad = 6;

  const max = Math.max(...points);
  const min = Math.min(...points);
  const xStep = (w - pad * 2) / (points.length - 1);

  const path = points
    .map((v, i) => {
      const x = pad + i * xStep;
      // invert y (SVG origin top-left)
      const y = pad + (h - pad * 2) * (1 - (v - min) / Math.max(1, max - min));
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-slate-900 font-semibold">{title}</div>
          <div className="text-slate-500 text-xs">{subtitle}</div>
        </div>
        <div
          className={"text-xs font-semibold " + (up ? "text-emerald-600" : "text-slate-600")}
          aria-hidden="true"
        >
          {up ? "Trend ↑" : "Trend ↘"}
        </div>
      </div>

      <svg
        className="mt-3 w-full h-20"
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        aria-label={aria}
      >
        <defs>
          <linearGradient id="gFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.18" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={w} height={h} rx="8" fill="#ffffff" />
        <path d={path} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d={`${path} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`} fill="url(#gFill)" />
      </svg>
    </div>
  );
}
