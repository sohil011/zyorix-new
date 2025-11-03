"use client";
import { useEffect, useState } from "react";

export default function CalBooking() {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    const t = setTimeout(() => {
      if (!ready) setFailed(true);
    }, 3000);

    return () => {
      clearTimeout(t);
      document.head.removeChild(script);
    };
  }, [ready]);

  return (
    <section className="mt-8">
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <iframe
          src="https://cal.com/embed/zyorix.com/30mins"
          width="100%"
          height="700"
          frameBorder="0"
          allow="camera; microphone; display-capture"
          onLoad={() => setReady(true)}
          style={{ minHeight: '700px' }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-600">
        If the widget is blocked, open directly:{" "}
        <a className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer"
           href="https://cal.com/zyorix.com/30mins">cal.com/zyorix.com/30mins</a>
        {" "}or email{" "}
        <a className="text-emerald-600 underline" href="mailto:info@zyorix.com">info@zyorix.com</a>.
      </p>

      {failed && (
        <p className="mt-2 text-xs text-amber-600">
          Widget failed to load (blocked by browser or network). Please use the booking link above.
        </p>
      )}

      <noscript>
        <p className="mt-2 text-sm">
          JavaScript is disabled. Book directly at{" "}
          <a href="https://cal.com/zyorix.com/30mins" className="text-emerald-600 underline">
            cal.com/zyorix.com/30mins
          </a>
          .
        </p>
      </noscript>
    </section>
  );
}
