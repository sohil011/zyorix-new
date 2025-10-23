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
          </motion.div>
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
                  <div className="text-slate-600">fixed price</div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  Typical ROI: ≈ 8-12 weeks to payback
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
                >
                  Book Free Discovery Call
                  <Calendar className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg flex-1"
                >
                  View Sprint Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ongoing support and specialist engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Quarterly Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Quarterly Reviews
                </h3>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Ongoing FinOps support to maintain maturity, catch new waste, and
                adapt governance as you scale
              </p>

              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-3xl font-bold text-blue-600">£2,500</div>
                  <div className="text-slate-600">per quarter</div>
                </div>
                <div className="text-sm text-slate-500">
                  Available after completing the Sprint
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Quarterly spend review & benchmarking",
                  "Governance policy updates",
                  "New waste identification",
                  "Forecast accuracy tuning",
                  "Ad-hoc consultation (4 hours)",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Custom Engagements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Custom Projects
                </h3>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Specialist engagements for specific challenges beyond the standard
                Sprint scope
              </p>

              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-3xl font-bold text-amber-600">Custom</div>
                  <div className="text-slate-600">pricing</div>
                </div>
                <div className="text-sm text-slate-500">
                  Based on scope & complexity
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Kubernetes cost optimisation",
                  "Data pipeline cost analysis",
                  "FinOps platform implementation",
                  "Multi-account architecture review",
                  "Team training & enablement",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Calculate Your Potential Value
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Example: If you're spending <strong>£50K/month</strong> on cloud and identify
              just <strong>25% optimisable spend</strong>:*
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

            <p className="text-sm text-slate-500 mb-6">
              These are illustrative figures. Your actual results depend on your
              current FinOps maturity, architecture, and usage patterns.*
            </p>

            <Link
              href="/contact"
              onClick={() => trackCta("book_consultation", "pricing_roi")}
              className="btn-primary inline-flex items-center gap-2"
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
                q: "Is the £12.5K fixed or could it increase?",
                a: "Fixed. The Sprint is a defined scope covering AWS, Azure, and/or GCP for a typical startup/SME cloud environment (£5K-£200K monthly spend). If your environment is unusually complex (100+ accounts, heavily regulated industry), we'll quote a custom price upfront — no surprises mid-engagement.",
              },
              {
                q: "What if I spend less than £5K/month on cloud?",
                a: "The Sprint may be overkill. At that spend level, self-service tools (AWS Cost Explorer, Savings Plans Calculator) and basic tagging may suffice. We'll give you an honest assessment in the discovery call.",
              },
              {
                q: "Can I pay in installments?",
                a: "Yes. Standard terms: 50% upfront, 50% at Week 3 kickoff. Other arrangements available for UK companies upon request.",
              },
              {
                q: "What if the Sprint doesn't deliver value?",
                a: "We offer a transparent discovery call where we'll audit your environment and give you an honest projection of optimisation potential. If we don't think you'll see meaningful ROI, we'll tell you upfront — before you commit. Our track record shows most clients identify 15-35% optimisable spend.*",
              },
              {
                q: "Is there a discount for multiple Sprints (different teams/accounts)?",
                a: "Yes. For multi-Sprint engagements or enterprise-scale clients, contact us for volume pricing.",
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
            >
              Book Free Discovery Call
              <Calendar className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
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
            * Based on Zyorix Sprint methodology applied to UK startups and SMEs, 2024-25. Results vary depending on environment complexity, current FinOps maturity, and implementation.
          </p>
        </div>
      </section>
    </main>
  );
}
