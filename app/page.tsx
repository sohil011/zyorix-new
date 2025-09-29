import Image from "next/image";
import HeroValueIndex from "./components/HeroValueIndex";
import ServiceIcon, { IconName } from "./components/ServiceIcon";
import home from "../content/home";

export const metadata = { title: "Zyorix | Independent FinOps Consultancy for AWS, Azure & GCP" };

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* HERO: Value per £ */}
      <HeroValueIndex />

      {/* Trust strip */}

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
        <p className="mt-2 text-slate-700">Independent expertise, tailored to your scale - faster savings and sustainable cloud governance.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3 text-left">
          {[
            ["Client-Centric Approach","Tailored strategies, not SaaS templates."],
            ["Fast Time-to-Value","<30 days to first savings."],
            ["Proven ROI","Average ROI 5-10x engagement cost."]
          ].map(([t,d])=>(
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
          <p className="mt-2 text-slate-700">Lab tests show rightsizing non-prod can reduce EC2/S3 by ~23%.</p>
          <a href="/case-studies" className="mt-3 inline-block text-emerald-700 text-sm font-semibold">Learn More &rarr;</a>
        </div>
        <div className="rounded-2xl border p-6 bg-emerald-50">
          <div className="text-3xl font-bold text-emerald-600">95%</div>
          <p className="mt-2 text-slate-700">Benchmark programs typically reach ~95% cost allocation accuracy.</p>
          <a href="/case-studies" className="mt-3 inline-block text-emerald-700 text-sm font-semibold">Learn More &rarr;</a>
        </div>
      </section>

      {/* CTA form */}
      <section className="bg-gradient-to-b from-emerald-50/40 to-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    {/* Ring card centered */}
    <div className="mx-auto max-w-3xl">
      <HeroValueIndex />
    </div>

    {/* Headline + copy */}
    <h1 className="mt-8 text-center text-3xl sm:text-4xl md:text-[40px] font-extrabold leading-tight tracking-tight text-slate-900">
      Predictable, Efficient Cloud
      <span className="block">— With Zyorix</span>
    </h1>

    <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
      We align compute with business outcomes so you get <strong>more value per £</strong> —
      not just lower bills, but predictable budgets, accountable allocation, and resilient services.
    </p>

    {/* KPI chips */}
    <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur">
        <div className="text-xs uppercase tracking-wide text-slate-500">Predictable</div>
        <div className="mt-1 text-2xl font-bold text-emerald-700">±5–10%</div>
        <div className="text-[11px] text-slate-500">Forecast variance</div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur">
        <div className="text-xs uppercase tracking-wide text-slate-500">Allocated</div>
        <div className="mt-1 text-2xl font-bold text-emerald-700">90–95%</div>
        <div className="text-[11px] text-slate-500">Allocation &amp; tagging</div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur">
        <div className="text-xs uppercase tracking-wide text-slate-500">Resilient</div>
        <div className="mt-1 text-2xl font-bold text-emerald-700">99.9%+</div>
        <div className="text-[11px] text-slate-500">Availability &amp; SLO</div>
      </div>
    </div>

    {/* Footnote */}
    <p className="mx-auto mt-5 max-w-2xl text-center text-[12px] leading-snug text-slate-500">
      Value per £ = outcomes (throughput or revenue proxies) divided by cloud spend.
    </p>
  </div>
</section>
    </main>
  );
}

// === analytics helper (typed, no any) ===
declare global {
  interface Window {
    gtag?: (event: string, name: string, params?: Record<string, unknown>) => void;
  }
}
export {};
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const trackCta = (name: 'book' | 'learn_more'): void => {
  try { window.gtag?.('event', 'cta_click', { location: 'hero', cta: name }); } catch {}
};
// === end analytics helper ===






