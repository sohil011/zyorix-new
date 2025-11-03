"use client";
import { useEffect } from "react";

export default function CalPopupButton({
  children,
  className = "rounded-xl px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
}: { children: React.ReactNode; className?: string }) {
  useEffect(() => {
    const id = "cal-embed";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://app.cal.com/embed/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <button
      type="button"
      data-cal-link="zyorix.com/30mins"
      data-cal-config='{"layout":"month_view"}'
      aria-label="Book a 30-minute call"
      className={className}
    >
      {children}
    </button>
  );
}
