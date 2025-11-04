"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Zap,
  Rocket,
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { trackCta } from "../components/trackCta";

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Subtle banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600 text-center">
            Consulting is available alongside full-time or contract FinOps roles.
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-100 border border-emerald-200">
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-700">
                6-Week FinOps Sprint™ — Pilot-Ready Programme
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              6-Week FinOps Sprint™ — <span className="gradient-text">Pilot-Ready Programme</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              A structured programme to establish spend visibility, governance guardrails, and actionable reporting. Designed and validated in the Zyorix FinOps Lab, ready to pilot with your teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                onClick={() => trackCta("book_consultation", "services_hero")}
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                Book Free Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                View Typical Savings
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          3-PHASE METHODOLOGY
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Visibility → Optimisation → Innovation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured sprint designed for UK startups and SMEs running AWS,
              Azure, or GCP
            </p>
          </div>

          {/* Phase 1: Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Search className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-emerald-600">
                      WEEKS 1-2
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Phase 1: Visibility
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 mb-2">
                  Establish full visibility into your cloud spend, architecture,
                  and waste opportunities. You can't optimise what you can't see.
                </p>

                <p className="text-sm text-emerald-700 font-semibold mb-6 italic">
                  Typical UK environments reveal 10–15% optimisation potential within the first 30 days (based on FinOps benchmarks).
                </p>

                <div className="space-y-4">
                  {[
                    "Audit current spend patterns across all services and regions",
                    "Assess tagging maturity and cost allocation readiness",
                    "Identify immediate waste (idle resources, over-provisioned instances)",
                    "Map architecture and data transfer costs",
                    "Benchmark against FinOps best practices",
                    "Deliver 90-day roadmap with prioritised quick wins",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="font-semibold text-slate-900 mb-2">
                    Deliverables:
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Comprehensive spend audit report</li>
                    <li>• Tagging and allocation assessment</li>
                    <li>• Waste identification matrix (quick wins)</li>
                    <li>• 90-day FinOps roadmap</li>
                  </ul>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-8 border border-emerald-100 shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-emerald-100">
                      <BarChart3 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Baseline Metrics
                        </div>
                        <div className="text-sm text-slate-600">
                          Establish current spend, allocation accuracy, and waste %
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-emerald-100">
                      <Shield className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Risk Assessment
                        </div>
                        <div className="text-sm text-slate-600">
                          Identify compliance gaps and architectural anti-patterns
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-emerald-100">
                      <FileText className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Strategic Roadmap
                        </div>
                        <div className="text-sm text-slate-600">
                          Prioritised action plan for next 90 days
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 2: Optimisation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white p-8 border border-emerald-100 shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-emerald-100">
                      <Zap className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Quick Wins
                        </div>
                        <div className="text-sm text-slate-600">
                          Identify 10-15% optimisable spend in first 30 days
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-emerald-100">
                      <TrendingUp className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Commitment Strategy
                        </div>
                        <div className="text-sm text-slate-600">
                          RIs, Savings Plans, CUDs for predictable workloads
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-emerald-100">
                      <Users className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Team Enablement
                        </div>
                        <div className="text-sm text-slate-600">
                          Train engineers on cost-aware architecture
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-emerald-600">
                      WEEKS 3-4
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Phase 2: Optimisation
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 mb-2">
                  Execute quick wins and implement long-term optimisation
                  strategies to reduce waste and lock in predictable pricing.
                </p>

                <p className="text-sm text-amber-700 font-semibold mb-6 italic">
                  Typical cumulative savings: 15–25% by end of Week 4.
                </p>

                <div className="space-y-4">
                  {[
                    "Implement rightsizing recommendations (compute, storage, databases)",
                    "Develop Reserved Instance / Savings Plan strategy",
                    "Optimise data transfer and egress costs",
                    "Review and refine autoscaling policies",
                    "Implement cost anomaly detection alerts",
                    "Train engineering team on cost-aware design",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-emerald-100">
                  <div className="font-semibold text-slate-900 mb-2">
                    Deliverables:
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Rightsizing and commitment recommendations</li>
                    <li>• Cost anomaly detection setup</li>
                    <li>• Architecture review and optimisation playbook</li>
                    <li>• Team training sessions (2x workshops)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 3: Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600">
                      WEEKS 5-6
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Phase 3: Innovation
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 mb-2">
                  Build sustainable governance processes, forecasting models, and
                  team accountability to maintain long-term FinOps maturity.
                </p>

                <p className="text-sm text-blue-700 font-semibold mb-6 italic">
                  This final phase turns your FinOps sprint into a lasting operating model.
                </p>

                <div className="space-y-4">
                  {[
                    "Implement cost allocation and tagging governance",
                    "Build predictive forecasting models (±5-10% accuracy)",
                    "Establish showback/chargeback frameworks",
                    "Create budget alerts and variance controls",
                    "Document FinOps policies and runbooks",
                    "Quarterly business review cadence setup",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="font-semibold text-slate-900 mb-2">
                    Deliverables:
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Cost allocation model (90-95% accuracy)</li>
                    <li>• Predictive forecasting framework</li>
                    <li>• Governance policies and runbooks</li>
                    <li>• Ongoing quarterly review cadence</li>
                  </ul>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 border border-blue-100 shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-blue-100">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Governance Framework
                        </div>
                        <div className="text-sm text-slate-600">
                          Policies, tagging standards, and accountability
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-blue-100">
                      <BarChart3 className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Forecasting Models
                        </div>
                        <div className="text-sm text-slate-600">
                          Predictable budgets with ±5-10% variance
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-blue-100">
                      <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Team Autonomy
                        </div>
                        <div className="text-sm text-slate-600">
                          Self-service dashboards and showback reports
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          RESULTS & PROOF
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What You'll Achieve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-4">
              Benchmarked outcomes from FinOps best-practice projects and Zyorix internal simulations show the following ranges:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "15-35%",
                label: "Cost Reduction",
                desc: "Within 60 days of engagement start",
                color: "emerald",
              },
              {
                metric: "±5-10%",
                label: "Forecast Accuracy",
                desc: "Predictable monthly spend variance",
                color: "blue",
              },
              {
                metric: "90-95%",
                label: "Allocation Success",
                desc: "Cost tagged and allocated to teams",
                color: "amber",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 text-center hover-lift"
              >
                <div
                  className={`text-5xl font-bold text-${stat.color}-600 mb-3`}
                >
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-slate-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ SECTION
          ======================================== */}
      <section id="faq" className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
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
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Start Your Sprint?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Book a <strong>free 30-minute discovery call</strong> with Sohil to
            audit your cloud spend and see if the Sprint is right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              onClick={() => trackCta("book_consultation", "services_cta")}
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
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>FOCP certified expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>UK-based support</span>
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
