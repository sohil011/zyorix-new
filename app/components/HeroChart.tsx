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
      --hint: #64748b;       /* slate-500 */
    }
    @keyframes growBar { from { transform: scaleY(0.1); } to { transform: scaleY(1); } }
    @keyframes drawLine { from { stroke-dashoffset: 1400; } to { stroke-dashoffset: 0; } }
    .bar  { transform-origin: 50% 100%; animation: growBar 2.0s cubic-bezier(.2,.7,.2,1) forwards; }
    .line { stroke-dasharray: 1400; stroke-dashoffset: 1400; animation: drawLine 2.8s cubic-bezier(.2,.7,.2,1) forwards .2s; }
    .tick { fill: var(--axis); font: 12px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; }
    .label{ fill: var(--title); font: 12px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-weight:600; }
    .hint { fill: var(--hint);  font: 11px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; }
    .badge{ fill: #ecfdf5; stroke: var(--line); }
    @media (prefers-reduced-motion: reduce) { .bar, .line { animation: none !important; } }
    @media (max-width:420px){ .tick{font-size:13px} .hint{font-size:12px} }
  `;

  // Tall bars on the left → shorter bars on the right
  const bars = [300, 280, 255, 230, 205, 180, 160, 140];

  return (
    <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-6 overflow-hidden">
      <svg viewBox="0 0 860 520" role="img" aria-labelledby="chartTitle chartDesc" className="w-full h-auto">
        <title id="chartTitle">Zyorix reduces monthly cloud cost over time</title>
        <desc id="chartDesc">Downward trend line and decreasing bars; Y axis labelled Monthly Cloud Cost with note that lower is better.</desc>

        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#10b981" stopOpacity="0.18"/>
            <stop offset="1" stopColor="#10b981" stopOpacity="0"/>
          </linearGradient>

          {/* Smaller arrow and adjusted refX so the tip does not overshoot */}
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#10b981"/>
          </marker>

          {/* Clip to the inner rounded plot area so nothing escapes */}
          <clipPath id="plotClip">
            <rect x="60" y="40" width="740" height="420" rx="16" />
          </clipPath>

          <style dangerouslySetInnerHTML={{ __html: css }} />
        </defs>

        {/* Plot area frame */}
        <rect x="60" y="40" width="740" height="420" rx="16" fill="#fff" stroke="#e5e7eb" />

        {/* Grid lines */}
        {[0,1,2,3,4].map(i => {
          const y = 80 + i*84;
          return <line key={i} x1="60" x2="800" y1={y} y2={y} stroke="var(--grid)" />;
        })}

        {/* Axes */}
        <line x1="60" x2="60" y1="40" y2="460" stroke="var(--axis)" strokeWidth="1.5" />
        <line x1="60" x2="800" y1="460" y2="460" stroke="var(--axis)" strokeWidth="1.5" />

        {/* Axis labels */}
        <text x="14" y="250" className="label" transform="rotate(-90 14 250)">Monthly Cloud Cost (£)</text>
        <text x="28" y="64" className="hint" transform="rotate(-90 28 64)">Lower is better</text>
        <text x="420" y="492" className="label" textAnchor="middle">Time</text>

        {/* X ticks */}
        {["Q1","Q2","Q3","Q4","Q1","Q2","Q3","Q4"].map((t,i)=>{
          const x = 120 + i*80;
          return <text key={i} x={x} y="480" className="tick" textAnchor="middle">{t}</text>;
        })}

        {/* CLIPPED plot contents so nothing can bleed outside */}
        <g clipPath="url(#plotClip)">
          {/* Bars: high → low */}
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
                style={{ animationDelay: (i*160) + "ms" }}
              />
            );
          })}

          {/* Downward trend line, end point kept well inside the plot */}
          <path
            d="M100,190 L180,215 L260,245 L340,275 L420,300 L500,320 L580,340 L650,350 L720,360"
            fill="none" stroke="#10b981" strokeWidth="6" className="line" strokeLinecap="round" markerEnd="url(#arrow)"
          />
          <path
            d="M100,190 L180,215 L260,245 L340,275 L420,300 L500,320 L580,340 L650,350 L720,360 L720,460 L100,460 Z"
            fill="url(#area)"
          />
        </g>

        {/* Badge positioned safely inside the plot */}
        <g transform="translate(560,338)">
          <rect x="0" y="-22" width="160" height="26" rx="13" className="badge"/>
          <circle cx="16" cy="-9" r="6" fill="#10b981"/>
          <text x="32" y="-5" className="label" fill="#065f46">Value Delivered</text>
        </g>
      </svg>
    </div>
  );
}
