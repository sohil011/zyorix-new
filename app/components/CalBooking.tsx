"use client";
import { useEffect, useState } from "react";
import Cal from "@calcom/embed-react";

export default function CalBooking() {
  const url = "https://cal.com/zyorix.com/30mins";
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowFallback(true);
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mt-8">
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <Cal
          calLink="zyorix.com/30mins"
          style={{
            width: "100%",
            height: "700px",
            overflow: "scroll",
          }}
          config={{
            layout: "month_view",
          }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-600">
        If the widget is blocked by your browser, open directly:&nbsp;
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 underline"
        >
          cal.com/zyorix.com/30mins
        </a>{" "}
        or email{" "}
        <a
          href="mailto:info@zyorix.com"
          className="text-emerald-600 underline"
        >
          info@zyorix.com
        </a>.
      </p>

      <p className="mt-2 text-xs text-slate-500">
        Scheduling securely provided by Cal.com. Minimal technical data
        (browser, timezone) is processed to load available slots. See our
        Privacy Policy for details.
      </p>

      {showFallback && (
        <p className="mt-2 text-xs text-amber-600">
          If the widget hasn't loaded, you may have an ad blocker or strict
          tracking protection enabled. Please use the booking link above.
        </p>
      )}

      <noscript>
        <p className="mt-2 text-sm">
          JavaScript is disabled. Book directly at{" "}
          <a href={url} className="text-emerald-600 underline">
            cal.com/zyorix.com/30mins
          </a>
          .
        </p>
      </noscript>
    </section>
  );
}
