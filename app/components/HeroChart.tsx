"use client";
import React from "react";

export default function HeroChart() {
  const css = `
    @keyframes growBar { from { transform: scaleY(0.1); } to { transform: scaleY(1); } }
    @keyframes drawLine { from { stroke-dashoffset: 1100; } to { stroke-dashoffset: 0; } }
    .bar { transform-origin: 50% 100%; animation: growBar 900ms ease forwards; }
    .line { stroke-dasharray: 1100; stroke-dashoffset: 1100; animation: drawLine 1.4s ease forwards 0.2s; }
  `;
  return (
    <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-6">
      <svg viewBox="0 0 800 520" role="img" aria-label="Animated chart showing costs trending down" className="w-full h-auto">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#10b981" stopOpacity="0.15"/>
            <stop offset="1" stopColor="#10b981" stopOpacity="0"/>
          </linearGradient>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </defs>

        {/* chart frame */}
        <rect x="40" y="40" width="720" height="440" rx="16" fill="#ffffff" stroke="#e5e7eb"/>

        {/* bars trending down to the right */}
        {Array.from({length:8}).map((_,i)=> {
          const x = 100 + i*70;
          const h = [260, 240, 220, 180, 200, 160, 150, 120][i];
          return <rect key={i} x={x} y={420-h} width="36" height={h} rx="6" fill="#e2e8f0" className="bar" style={{animationDelay:`${i*80}ms`}}/>;
        })}

        {/* line trend */}
        <path d="M90,360 L170,345 L240,330 L310,300 L380,315 L450,285 L520,270 L590,240 L650,220 L740,200"
              fill="none" stroke="#10b981" strokeWidth="6" className="line" strokeLinecap="round"/>

        {/* soft area */}
        <path d="M90,360 L170,345 L240,330 L310,300 L380,315 L450,285 L520,270 L590,240 L650,220 L740,200 L740,420 L90,420 Z"
              fill="url(#g)"/>
      </svg>
    </div>
  );
}
