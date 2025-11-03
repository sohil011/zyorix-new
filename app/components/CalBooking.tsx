"use client";
import Cal from "@calcom/embed-react";

export default function CalBooking() {
  const url = "https://cal.com/sohilbhayani/30min";
  return (
    <section className="mt-8">
      <Cal
        calLink="sohilbhayani/30min"
        style={{
          width: "100%",
          height: "700px",
          overflow: "scroll",
        }}
        config={{
          layout: "month_view",
        }}
      />
      <p className="mt-3 text-sm text-slate-600">
        If the widget fails to load, open directly:&nbsp;
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 underline"
        >
          cal.com/sohilbhayani/30min
        </a>{" "}
        or email{" "}
        <a href="mailto:info@zyorix.com" className="text-emerald-600 underline">
          info@zyorix.com
        </a>.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Scheduling is securely provided by Cal.com. Minimal technical data
        (browser, timezone) is transmitted to load available slots. See our
        Privacy Policy for details.
      </p>
    </section>
  );
}
