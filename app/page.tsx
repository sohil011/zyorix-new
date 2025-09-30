// app/page.tsx
import HeroValueIndex from "./components/HeroValueIndex";
import ServiceIcon, { IconName } from "./components/ServiceIcon";
import home from "../content/home";

export const metadata = {
  title: "Zyorix | Independent FinOps Consultancy for AWS, Azure & GCP",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">

      {/* ===================== HERO (pixel-locked) ===================== */}
      <section className="mt-0 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-12">
          {/* LEFT: headline + subtext + KPI chips + footnote */}
          <div className="md:col-span-6">
            <h1 className="text-slate-900 font-extrabold tracking-tight leading-[0.95]">
              <span className="block text-[44px] sm:text-[56px] md:text-[72px]">
                Predictable, Efficient
              </span>
              <span className="block text-[44px] sm:text-[56px] md:text-[72px]">
                Cloud — With Zyorix
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-slate-700 text-base sm:text-lg">
              We align compute with business outcomes so you get{" "}
              <strong>more value per £</strong> — not just lower bills, but
              predictable budgets, accountable allocation, and resilient
              services.
            </p>

            {/* KPI chips */}
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Predictable */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-500">
                  PREDICTABLE
                </div>
                <div className="mt-1 text-2xl font-bold text-emerald-700">
                  ±5–10%
                </div>
                <div className="text-[11px] text-slate-500">
                  Forecast variance
                </div>
              </div>

              {/* Allocated */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-500">
                  ALLOCATED
                </div>
                <div className="mt-1 text-2xl font-bold text-emerald-700">
                  90–95%
                </div>
                <div className="text-[11px] text-slate-500">
                  Allocation &amp; tagging
                </div>
              </div>

              {/* Resilient */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-500">
                  RESILIENT
                </div>
                <div className="mt-1 text-2xl font-bold text-emerald-700">
                  99.9%+
                </div>
                <div className="text-[11px] text-slate-500">
                  Availability &amp; SLO
                </div>
              </div>
            </div>

            {/* Footnote */}
            <p className="mt-5 max-w-xl text-[12px] leading-snug text-slate-500">
              Value per £ = outcomes (throughput or revenue proxies) divided by
              cloud spend.
            </p>
          </div>

          {/* RIGHT: gradient panel with ring + two cards + footnote */}
          <div className="md:col-span-6">
            <div className="relative rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50/70 to-emerald-50/30 p-6 sm:p-8 pt-8">
              {/* Use your ring component if you have it */}
              <div className="relative z-10 flex flex-col items-center">
                {/* If you don’t have the component, the fallback below shows a static ring */}
                <HeroValueIndex />
                {/* --- Fallback (keep only if you don’t have HeroValueIndex) ---
                <div className="h-[360px] flex items-center justify-center">
                  <div className="relative h-[320px] w-[320px] rounded-full border-[22px] border-emerald-500/80 flex items-center justify-center">
                    <div className="text-[44px] font-extrabold text-slate-900">1.35x</div>
                    <div className="absolute -bottom-8 w-full text-center text-sm text-emerald-700 font-medium">
                      Business value per £
                    </div>
                  </div>
                </div>
                -------------------------------------------------------------- */}
              </div>

              {/* Two stat cards (fixed height + SVG sparklines) */}
              <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
                {/* Outcomes / Throughput (up trend) */}
                <div className="rounded-xl border bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="text-slate-800 font-semibold">
                      Outcomes /<br />
                      Throughput
                    </div>
                    <div className="text-xs text-emerald-700">Trend ↑</div>
                  </div>
                  <div className="mt-1 text-slate-500 text-sm">Value driver</div>

                  <div className="mt-3 h-28 overflow-hidden rounded-lg border bg-gradient-to-b from-emerald-50 to-white p-2">
                    <svg
                      viewBox="0 0 120 36"
                      preserveAspectRatio="none"
                      className="h-full w-full"
                    >
                      <defs>
                        <linearGradient id="upFill" x1="0" x2="0" y1="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#34d399"
                            stopOpacity="0.35"
                          />
                          <stop
                            offset="100%"
                            stopColor="#34d399"
                            stopOpacity="0.05"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2 28 L22 26 L42 24 L62 23 L82 20 L102 16 L118 10"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path d="M2 36 L2 28 L118 10 L118 36 Z" fill="url(#upFill)" />
                    </svg>
                  </div>
                </div>

                {/* Cloud Spend (down trend) */}
                <div className="rounded-xl border bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="text-slate-800 font-semibold">Cloud Spend</div>
                    <div className="text-xs text-slate-500">Trend ↘</div>
                  </div>
                  <div className="mt-1 text-slate-500 text-sm">Managed cost</div>

                  <div className="mt-3 h-28 overflow-hidden rounded-lg border bg-gradient-to-b from-emerald-50 to-white p-2">
                    <svg
                      viewBox="0 0 120 36"
                      preserveAspectRatio="none"
                      className="h-full w-full"
                    >
                      <defs>
                        <linearGradient id="downFill" x1="0" x2="0" y1="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#64748b"
                            stopOpacity="0.30"
                          />
                          <stop
                            offset="100%"
                            stopColor="#64748b"
                            stopOpacity="0.05"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2 10 L22 14 L42 15 L62 18 L82 22 L102 27 L118 29"
                        fill="none"
                        stroke="#475569"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path d="M2 36 L2 10 L118 29 L118 36 Z" fill="url(#downFill)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Panel footnote */}
              <p className="relative z-10 mt-4 text-[12px] text-slate-500">
                Value per £ = outcomes (throughput/revenue proxies) ÷ cloud spend.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =================== END HERO =================== */}

      {/* Services */}
      <section id="services" className="grid gap-6 md:grid-cols-4">
        {home.services.map((s, i) => (
          <div key={i} className="rounded-2xl border p-5 bg-white shadow-sm">
            <div className="mb-3 inline-flex items-center justify-center rounded-md bg-emerald-50 p-2">
              <ServiceIcon name={s.icon as IconName} />
            </div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold">Why Choose Zyorix?</h2>
        <p className="mt-2 text-slate-700">
          Independent expertise, tailored to your scale - faster savings and sustainable cloud governance.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3 text-left">
          {[
            ["Client-Centric Approach", "Tailored strategies, not SaaS templates."],
            ["Fast Time-to-Value", "<30 days to first savings."],
            ["Proven ROI", "Average ROI 5-10x engagement cost."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border p-5 bg-white">
              <div className="h-6 w-6 rounded bg-emerald-100 mb-3" />
              <div className="font-semibold">{t}</div>
              <p className="mt-2 text-sm text-slate-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benchmark insights */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6 bg-emerald-50">
          <div className="text-3xl font-bold text-emerald-600">23%</div>
          <p className="mt-2 text-slate-700">
            Lab tests show rightsizing non-prod can reduce EC2/S3 by ~23%.
          </p>
          <a href="/case-studies" className="mt-3 inline-block text-emerald-700 text-sm font-semibold">
            Learn More &rarr;
          </a>
        </div>
        <div className="rounded-2xl border p-6 bg-emerald-50">
          <div className="text-3xl font-bold text-emerald-600">95%</div>
          <p className="mt-2 text-slate-700">
            Benchmark programs typically reach ~95% cost allocation accuracy.
          </p>
          <a href="/case-studies" className="mt-3 inline-block text-emerald-700 text-sm font-semibold">
            Learn More &rarr;
          </a>
        </div>
      </section>

      {/* ===================== Black CTA form (left as-is) ===================== */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center">
          Book Your Free Consultation
        </h3>
        <p className="mt-2 text-sm text-center text-slate-300">
          Take the first step toward predictable, efficient cloud spend.
        </p>

        <form className="mt-6 space-y-4 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-emerald-500"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-emerald-500"
          />
          <select
            className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-emerald-500"
            defaultValue=""
          >
            <option value="" disabled>
              Primary Cloud Provider
            </option>
            <option>AWS</option>
            <option>Azure</option>
            <option>GCP</option>
            <option>Multi-cloud</option>
          </select>

          <label className="mt-2 flex items-start gap-2 text-sm text-slate-300">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree to be contacted about this inquiry. See our{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500"
            >
              Schedule Consultation
            </button>
          </div>
        </form>
      </section>
      {/* =================== END Black CTA form =================== */}
    </main>
  );
}
