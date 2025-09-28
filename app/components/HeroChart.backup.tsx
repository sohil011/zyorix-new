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
    @keyframes drawLine { from { stroke-dashoffset: 1600; } to { stroke-dashoffset: 0; } }
    .bar  { transform-origin: 50% 100%; animation: growBar 2.0s cubic-bezier(.2,.7,.2,1) forwards; }
    .line { stroke-dasharray: 1600; stroke-dashoffset: 1600; animation: drawLine 3.2s cubic-bezier(.2,.7,.2,1) forwards .2s; }
    .tick { fill: var(--axis); font: 12px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; }
    .label{ fill: var(--title); font: 12px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-weight:600; }
    .hint { fill: var(--hint);  font: 11px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; }
    .badge{ fill: #ecfdf5; stroke: var(--line); }
    @media (prefers-reduced-motion: reduce) { .bar, .line { animation: none !important; } }
    @media (max-width:420px){ .tick{font-size:13px} .hint{font-size:12px} }
  `;

  // High on left → lower on right (decreasing costs)
  const bars = [300, 280, 255, 230, 205, 180, 160, 140];

  // end point kept well inside the plot
  const endX = 720;
  const endY = 360;

  return (
    <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-6 overflow-hidden">
      <svg viewBox="0 0 860 520" role="img" aria-labelledby="chartTitle chartDesc" className="w-full h-auto">
        <title id="chartTitle">Zyorix reduces monthly cloud cost over time</title>
        <desc id="chartDesc">Downward trend line and decreasing bars; y-axis labeled “Monthly Cloud Cost (lower is better)”.</desc>

        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#10b981" stopOpacity="0.14"/>
            <stop offset="1" stopColor="#10b981" stopOpacity="0"/>
          </linearGradient>

          {/* Strict clip so nothing can escape the inner rounded rect */}
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

        {/* CLIPPED CONTENT */}
        <g clipPath="url(#plotClip)">
          {/* Bars (staggered) */}
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
                style={{ animationDelay: (i*200) + "ms" }}
              />
            );
          })}

          {/* Downward trend line: no arrow head; round caps */}
          <path
            d={`M100,190 L180,215 L260,245 L340,275 L420,300 L500,320 L580,340 L650,350 L${endX},${endY}`}
            fill="none" stroke="#10b981" strokeWidth="6" className="line" strokeLinecap="round"
          />

          {/* Soft area fill under the line */}
          <path
            d={`M100,190 L180,215 L260,245 L340,275 L420,300 L500,320 L580,340 L650,350 L${endX},${endY} L${endX},460 L100,460 Z`}
            fill="url(#area)"
          />

          {/* Endpoint dot (cleaner than an arrow) */}
          <circle cx={endX} cy={endY} r="6.5" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
        </g>

        {/* Small badge, anchored safely inside */}
        <g transform="translate(548,332)">
          <rect x="0" y="-18" width="144" height="24" rx="12" className="badge"/>
          <circle cx="14" cy="-6" r="5" fill="#10b981"/>
          <text x="28" y="-3" className="label" fill="#065f46">Value Delivered</text>
        </g>
      </svg>
    </div>
  );
}
