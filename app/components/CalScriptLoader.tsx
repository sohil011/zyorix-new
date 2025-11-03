"use client";
import { useEffect } from "react";

export default function CalScriptLoader() {
  useEffect(() => {
    if (document.getElementById("cal-embed-js")) return;
    const s = document.createElement("script");
    s.id = "cal-embed-js";
    s.src = "https://app.cal.com/embed/embed.js";
    s.async = true;
    document.head.appendChild(s);
    // namespace init happens in components below
  }, []);
  return null;
}
