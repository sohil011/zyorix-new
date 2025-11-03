"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Info,
} from "lucide-react";
import Link from "next/link";
import { trackCta } from "../components/trackCta";

export default function Pricing() {
  return (
    <main>
      {/* Subtle banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600 text-center">
            Pricing is provided for consulting context; Sohil also works directly with FinOps teams in full-time or contract roles.
          </p>
        </div>
      </div>

      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Transparent <span className="gradient-text">FinOps Pricing</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Fixed-price engagement with clear ROI projections — no hourly rates,
              no scope creep, no surprises
            </p>

            <div className="flex gap-4 justify-center mt-6">
              <Link
                href="/contact"
                onClick={() => trackCta("book_consultation", "pricing_hero")}
                className="btn-primary inline-flex items-center gap-2"
                aria-label="Get custom FinOps Sprint estimate from Zyorix"
              >
                Get Custom Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#roi-calculator"
                className="btn-secondary inline-flex items-center gap-2"
                aria-label="View illustrative ROI example calculator"
              >
                See ROI Example
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          UPFRONT DISCLAIMER
          ======================================== */}
      <section className="py-8 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-200">
            <p className="text-sm text-amber-900 font-semibold">
              <span className="text-base mr-2">⚠️</span>
              <strong>Important:</strong> ROI projections and optimisation ranges shown (15–35%, 8-12 week payback) are based on FinOps Foundation benchmarks and Zyorix Sprint methodology simulations, not verified client engagements. Actual results vary by environment complexity and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          PRIMARY OFFERING - 6-Week Sprint
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Primary card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-gradient-to-br from-emerald-50 to-white p-8 md:p-12 border-2 border-emerald-200 shadow-2xl relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold">
                Most Popular
              </div>

              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  The 6-Week FinOps Sprint™
                </h2>
                <p className="text-lg text-slate-600">
                  Complete FinOps transformation — from chaos to predictable cloud
                  in 42 days
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-8 pb-8 border-b border-emerald-200">
                <div className="flex items-baseline gap-3 mb-4">
                  <div className="text-5xl font-bold text-emerald-600">
                    £12,500
                  </div>
                  <div className="text-slate-600">fixed price (GBP)</div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  Representative ROI range (modelled): ≈ 8-12 weeks to payback
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  What's Included:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Comprehensive cloud spend audit",
                    "Tagging & allocation assessment",
                    "Waste identification (quick wins)",
                    "90-day FinOps roadmap",
                    "Rightsizing recommendations",
                    "Commitment strategy (RIs/SPs/CUDs)",
                    "Cost anomaly detection setup",
                    "Architecture review & playbook",
                    "Cost allocation model (90-95% accuracy)",
                    "Predictive forecasting framework",
                    "Governance policies & runbooks",
                    "2x team training workshops",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  onClick={() =>
                    trackCta("book_consultation", "pricing_sprint")
                  }
                  className="btn-primary pulse-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-lg flex-1"
                  aria-label="Book free 30-minute FinOps discovery call with Zyorix"
                >
                  Book Free Discovery Call
                  <Calendar className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg flex-1"
                  aria-label="View full FinOps Sprint service details"
                >
                  View Sprint Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-slate-500 mt-4 text-sm italic">
                  Ideal for organisations spending £10 K – £250 K per month on AWS, Azure or GCP.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          ADDITIONAL OPTIONS
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              For organisations seeking continued FinOps governance or fractional analyst roles after a Sprint,
              extended engagements are available on request.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          PRICING COMPARISON
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compare Your Options
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Zyorix vs. alternatives: hiring, SaaS platforms, or doing it yourself
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">
                    Option
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">
                    Cost
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">
                    Time to Value
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">
                    Risk
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 bg-emerald-50">
                  <td className="py-4 px-4">
                    <div className="font-bold text-emerald-700">
                      Zyorix 6-Week Sprint™
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    £12.5K fixed
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    30 days (quick wins)
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-700">
                      Low
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-slate-900">
                      Hire FinOps Engineer
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    £60-90K/year + benefits
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    6+ months (hiring + ramp)
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700">
                      High
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-slate-900">
                      FinOps SaaS Platform
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    £2-5K/month + onboarding
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    2-3 months (setup + learning)
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-amber-100 text-amber-700">
                      Medium
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-slate-900">
                      DIY (Internal Team)
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    Opportunity cost (high)
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    6-12 months (trial & error)
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-amber-100 text-amber-700">
                      Medium
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-start gap-3 max-w-3xl mx-auto p-6 rounded-xl bg-blue-50 border border-blue-100">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-slate-900 mb-2">
                Why Zyorix Wins:
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Immediate certified expertise, fixed cost, proven methodology,
                and 8-12 week payback. Hiring takes 6+ months with risk of bad
                fit. SaaS platforms require expertise to use effectively. DIY
                means your engineers aren't building product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          ROI CALCULATOR PREVIEW
          ======================================== */}
      <section id="roi-calculator" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Illustrative ROI Example (Modelled)
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Example: If you're spending <strong>£50K/month</strong> on cloud and identify
              just <strong>≈25% optimisable spend</strong>:*
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  label: "Monthly Value",
                  value: "£12,500",
                  desc: "£50K × 25% optimisation",
                },
                {
                  label: "Annual Value",
                  value: "£150K",
                  desc: "First-year potential",
                },
                {
                  label: "Potential ROI",
                  value: "12x",
                  desc: "£150K ÷ £12.5K investment",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-slate-200"
                >
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    {stat.label}
                  </div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-200 mb-6">
              <p className="text-sm text-amber-900 font-semibold">
                <strong>Important:</strong> This is an illustrative example based on typical FinOps benchmarks. Your actual results depend on your current FinOps maturity, architecture, and usage patterns. We measure against a documented baseline per the Zyorix Methodology.*
              </p>
            </div>

            <Link
              href="/contact"
              onClick={() => trackCta("book_consultation", "pricing_roi")}
              className="btn-primary inline-flex items-center gap-2"
              aria-label="Get your custom FinOps Sprint ROI estimate"
            >
              Get Your Custom Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pricing Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What exactly happens during the 6-Week FinOps Sprint?",
                a: "The Sprint is structured in three phases: Weeks 1-2 focus on visibility (spend audit, tagging assessment, waste identification). Weeks 3-4 focus on optimisation (rightsizing, commitment strategy, cost anomaly detection). Weeks 5-6 focus on innovation (governance policies, forecasting models, team training). You receive comprehensive deliverables at each phase, culminating in a complete FinOps foundation.",
              },
              {
                q: "Who is the Sprint designed for?",
                a: "Organisations spending £10K–£250K per month on AWS, Azure, or GCP. It's ideal for UK startups and SMEs that need structured FinOps governance but aren't ready to hire a full-time FinOps engineer. If you spend below £10K/month, self-service tools may suffice.",
              },
              {
                q: "How soon can results be seen?",
                a: "Quick wins are typically identified within the first 30 days. Full ROI is usually realised within 8-12 weeks based on FinOps benchmarks. Most engagements identify 15-35% optimisable spend by day 60.",
              },
              {
                q: "What tools or access are needed?",
                a: "We leverage your existing cloud provider tools (AWS Cost Explorer, Azure Cost Management, GCP Billing) plus open-source solutions. No additional SaaS purchases required. We'll need read-only billing access and collaboration with your engineering lead (~2-4 hours/week).",
              },
              {
                q: "What certifications does Sohil hold?",
                a: "Sohil Bhayani is FOCP (FinOps Certified Practitioner) and FOCUS Certified, with hands-on expertise in AWS CUR, Athena, Power BI, Excel, Supabase, and Next.js/TypeScript for building custom FinOps dashboards and reporting solutions.",
              },
              {
                q: "Do you also take on contract or full-time FinOps roles?",
                a: "Yes — while Zyorix operates as an independent FinOps consultancy, Sohil Bhayani (FOCP + FOCUS Certified) is also open to hybrid engagements or fixed-term FinOps roles for UK or remote teams.",
              },
              {
                q: "Can we continue working together after the Sprint?",
                a: "Absolutely. Many clients choose to extend the collaboration for ongoing cost reviews, forecasting accuracy checks, and governance support — tailored to their budget and needs.",
              },
              {
                q: "How is success measured?",
                a: "Each Sprint begins with a clearly defined baseline of your current cloud spend, usage patterns, and forecast accuracy. At completion, you receive a verified improvement report detailing: • spend and efficiency trends compared against the baseline • forecast variance, typically maintained within ±5–10% • optimisation, tagging, and governance actions implemented. All results are evidence-based and traceable to your initial data — reflecting measurable operational improvements rather than guaranteed savings.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
          ======================================== */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Book a <strong>free 30-minute discovery call</strong> — we'll audit
            your spend, identify quick wins, and give you a custom ROI projection
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              onClick={() => trackCta("book_consultation", "pricing_cta")}
              className="btn-primary pulse-cta inline-flex items-center gap-2 px-8 py-4 text-lg"
              aria-label="Book free 30-minute FinOps discovery call with Zyorix"
            >
              Book Free Discovery Call
              <Calendar className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
              aria-label="View representative FinOps case study outcomes"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>No obligations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Honest assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Custom ROI estimate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FOOTNOTE DISCLAIMER
          ======================================== */}
      <section className="py-8 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            * These figures represent benchmark averages from FinOps best-practice case studies and internal Sprint methodology simulations. Results vary by environment complexity, current FinOps maturity, and implementation.
          </p>
        </div>
      </section>
    </main>
  );
}
