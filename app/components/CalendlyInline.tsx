"use client";
import { useEffect } from "react";

type Props = { url: string; height?: number };

export default function CalendlyInline({ url, height = 700 }: Props) {
  useEffect(() => {
    // load widget script once
    const id = "calendly-widget";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.async = true;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="mt-6">
      <noscript>
        <p className="text-slate-600">
          Scheduling requires JavaScript. You can book directly at{" "}
          <a className="text-emerald-600 underline" href={url} target="_blank" rel="noopener noreferrer">
            Calendly
          </a>
          {" "}or email{" "}
          <a className="text-emerald-600 underline" href="mailto:info@zyorix.com">info@zyorix.com</a>.
        </p>
      </noscript>
      <div
        className="calendly-inline-widget rounded-xl border border-slate-200"
        data-url={url}
        style={{ minWidth: "320px", height }}
      />
      <div className="mt-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 underline"
        >
          Open in Calendly (fallback)
        </a>
      </div>
    </div>
  );
}
