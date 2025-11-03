"use client";
import { useEffect } from "react";

export default function CalOpenButton({
  children,
  className = "rounded-xl px-4 py-2 bg-emerald-600 text-white",
}: { children: React.ReactNode; className?: string }) {
  useEffect(() => {
    if (!window.Cal) {
      const s = document.getElementById("cal-embed-js");
      if (!s) {
        const el = document.createElement("script");
        el.id = "cal-embed-js";
        el.src = "https://app.cal.com/embed/embed.js";
        el.async = true;
        document.head.appendChild(el);
      }
    }
    // init namespace if needed
    // @ts-expect-error - Cal is loaded dynamically
    if (window.Cal && !window.Cal.ns?.["30min"]) { Cal("init", "30min", { origin: "https://app.cal.com" }); }
  }, []);

  return (
    <button
      type="button"
      data-cal-link="zyorix.com/30min"               // Cal listens for this
      aria-label="Book a 30-minute call"
      className={className}
    >
      {children}
    </button>
  );
}
