"use client";
import React from "react";

export default function HeroChart() {
  const css = `
    :root {
      --grid: #e5e7eb;       /* slate-200 */
      --axis: #94a3b8;       /* slate-400 */
      --bar:  #e2e8f0;       /* slate-100 */
      --line: #10b981;       /* emerald-500 */
      --title:#0f172a;       /* slate-900 */
    }
    @keyframes growBar { from { transform: scaleY(0.1); } to { transform: scaleY(1); } }
    @keyframes drawLine { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
    .bar  { transform-origin: 50% 100%; animation: growBar 2.0s cubic-bezier(.2,.7,.2,1) forwards; }
    .line { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: drawLine 2.4s cubic-bezier(.2,.7,.2,1) forwards 0.2s; }
    .tick { fill: var(--axis); font: 12px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; }
    .label{ fill: var(--title); font: 12px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-weight:600; }
    .badge{ fill: #ecfdf5; stroke: var(--line); }
    @media (prefers-reduced-motion: reduce) { .bar, .line { animation: none !important; } }
  `;
  const bars = [300, 270, 245, 220, 200, 175, 150, 130];

  return (
    <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-6">
      <svg viewBox="0 0 860 520" role="img" aria-labelledby="chartTitle chartDesc" className="w-full h-auto">
        <title id="chartTitle">Zyorix reduces monthly cloud cost over time</title>
        <desc id="chartDesc">Chart with labelled axes showing monthly cloud cost trending down after Zyorix engagement.</desc>

        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#10b981" stopOpacity="0.18"/>
            <stop offset="1" stopColor="#10b981" stopOpacity="0"/>
          </linearGradient>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0,0 L12,6 L0,12 Z" fill="#10b981"/>
          </marker>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </defs>

        {/* plot area */}
        <rect x="60" y="40" width="740" height="420" rx="16" fill="#fff" stroke="#e5e7eb" />

        {/* grid lines */}
        {[0,1,2,3,4].map(i => {
          const y = 80 + i*84;
          return <line key={i} x1="60" x2="800" y1={y} y2={y} stroke="var(--grid)" />;
        })}

        {/* axes */}
        <line x1="60" x2="60" y1="40" y2="460" stroke="var(--axis)" strokeWidth="1.5" />
        <line x1="60" x2="800" y1="460" y2="460" stroke="var(--axis)" strokeWidth="1.5" />

        {/* axis labels */}
        <text x="14" y="250" className="label" transform="rotate(-90 14 250)">Monthly Cloud Cost (£)</text>
        <text x="420" y="492" className="label" textAnchor="middle">Time</text>

        {/* x-axis ticks */}
        {["Q1","Q2","Q3","Q4","Q1","Q2","Q3","Q4"].map((t,i)=>{
          const x = 120 + i*80;
          return <text key={i} x={x} y="480" className="tick" textAnchor="middle">{t}</text>;
        })}

        {/* bars */}
        {bars.map((h,i)=>{
          const x = 100 + i*80;
          return (
            <rect
              key={i}
              x={x}
              y={460-h}
              width="32"
              height={h}
              rx="6"
              fill="var(--bar)"
              className="bar"
              style={{ animationDelay: (i*120) + "ms" }}
            />
          );
        })}

        {/* downward trend line */}
        <path
          d="M100,360 L180,340 L260,320 L340,300 L420,280 L500,250 L580,230 L660,210 L740,190"
          fill="none" stroke="#10b981" strokeWidth="6" className="line" strokeLinecap="round" markerEnd="url(#arrow)"
        />
        <path
          d="M100,360 L180,340 L260,320 L340,300 L420,280 L500,250 L580,230 L660,210 L740,190 L740,460 L100,460 Z"
          fill="url(#area)"
        />

        {/* Savings badge */}
        <g transform="translate(520,232)">
          <rect x="0" y="0" width="110" height="28" rx="14" className="badge"/>
          <circle cx="16" cy="14" r="6" fill="#10b981"/>
          <text x="32" y="18" className="label" fill="#065f46">Savings</text>
        </g>
      </svg>
    </div>
  );
}
