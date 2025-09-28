import Image from "next/image";

export const metadata = { title: "Zyorix | Independent FinOps Consultancy for AWS, Azure & GCP" };

export default function Home() {
  const trust = [
    "/img/trust/logo1.svg",
    "/img/trust/logo2.svg",
    "/img/trust/logo3.svg",
    "/img/trust/logo4.svg",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Optimize Your Cloud Spend with Zyorix</h1>
          <p className="mt-4 text-slate-700">
            Independent FinOps consultancy for AWS, Azure, and GCP - from assessment to ongoing governance.
          </p>
          <p className="mt-2 text-sm font-medium">Clients typically save 20-30% within 90 days.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="rounded-xl bg-emerald-500 text-white px-5 py-3 font-semibold">Book Consultation</a>
            <a href="#services" className="rounded-xl border px-5 py-3 font-semibold">Learn More</a>
          </div>
        </div>
        <div className="rounded-xl bg-slate-100">
          <Image
            src="/img/home/hero-analytics.svg"
            alt="Abstract FinOps analytics with charts and cloud"
            width={960}
            height={720}
            priority
            className="rounded-xl w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Trust strip */}
      <div className="mt-10 text-center text-sm text-slate-600">
        Trusted by engineering, finance, and platform teams
      </div>
      <div className="mt-4 flex flex-wrap gap-8 justify-center opacity-80">
        {trust.map((src,i)=>(
          <Image key={i} src={src} alt="Client logo placeholder" width={120} height={28} />
        ))}
      </div>

      {/* Services */}
      <div id="services" className="mt-14 grid gap-6 md:grid-cols-4">
        {[
          ["FinOps Assessment / Health Check","A rapid baseline of spend, tagging, and waste. 90-day plan."],
          ["Cost Optimization & Commitment Strategy","Rightsizing and commitments (RIs, SPs, CUDs)."],
          ["Cloud Allocation & Governance","Tag strategy, cost model, showback/chargeback."],
          ["Forecasting & Budget Governance","Forecasts, variance control, anomaly detection."]
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border p-5 bg-white shadow-sm">
            <div className="h-6 w-6 rounded bg-emerald-100 mb-3" />
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-700">{desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Zyorix?</h2>
        <p className="mt-2 text-slate-700">
          Independent expertise, tailored to your scale - faster savings and sustainable cloud governance.
        </p>
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
      </div>

      {/* Benchmark insights */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
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
      </div>

      {/* CTA form */}
      <div className="mt-16 rounded-2xl bg-slate-900 text-white p-8">
        <h2 className="text-center text-2xl font-semibold">Book Your Free Consultation</h2>
        <p className="text-center mt-2 text-slate-300">Take the first step toward predictable, efficient cloud spend.</p>
        <form action="/contact" method="GET" className="mx-auto mt-6 max-w-xl grid gap-3">
          <label className="sr-only" htmlFor="name">Full Name</label>
          <input id="name" name="name" required placeholder="Full Name" className="rounded-lg bg-white/10 px-4 py-3 outline-none focus:bg-white focus:text-slate-900" />
          <label className="sr-only" htmlFor="email">Work Email</label>
          <input id="email" name="email" type="email" required placeholder="Work Email" className="rounded-lg bg-white/10 px-4 py-3 outline-none focus:bg-white focus:text-slate-900" />
          <label className="sr-only" htmlFor="cloud">Primary Cloud Provider</label>
          <select id="cloud" name="cloud" required className="rounded-lg bg-white/10 px-4 py-3 outline-none focus:bg-white focus:text-slate-900">
            <option value="">Primary Cloud Provider</option>
            <option>AWS</option><option>Azure</option><option>GCP</option><option>Multi-cloud</option>
          </select>
          <button className="mt-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold">Schedule Consultation</button>
        </form>
        <p className="text-center mt-2 text-xs text-slate-400">
          By submitting this form, you agree to be contacted. See our <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
