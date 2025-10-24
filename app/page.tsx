"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingDown, Target, BarChart3, Calendar } from "lucide-react";
import Link from "next/link";
import { trackCta } from "./components/trackCta";

export default function Home() {
  const handleCtaClick = (location: string) => {
    trackCta("book_consultation", location);
  };

  return (
    <main className="overflow-hidden">
      {/* ========================================
          HERO SECTION - Pain-Focused + Solution
          ======================================== */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 gradient-bg-animated">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT: Headline + Subheadline + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">
                  UK-based • FOCP Certified • Independent
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Transform Cloud Chaos into{" "}
                <span className="gradient-text">Predictable Value</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-700 mb-4 font-medium leading-relaxed">
                Specialised FinOps consultancy helping UK startups and SMEs cut 15–35% cloud waste and build cost predictability in 6 weeks.
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The <strong>6-Week FinOps Sprint™</strong> eliminates cloud waste, builds accurate forecasts, and embeds governance — without expensive SaaS tools or long-term contracts.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  onClick={() => handleCtaClick("hero_primary")}
                  className="btn-primary pulse-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                >
                  Book Free Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                >
                  View Typical Savings
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Social proof stats */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-emerald-600" />
                  <span>15-35% optimisable spend identified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <span>60-day outcome checkpoint</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                  <span>Full visibility & control</span>
                </div>
              </div>

              {/* Trust phrase */}
              <p className="text-sm text-slate-500 italic">
                Trusted by UK startups and scaleups across Fintech, SaaS, and Retail Tech sectors. Built on FinOps Foundation best practices (FOCP & FOCUS 1.2 aligned).
              </p>
            </motion.div>

            {/* RIGHT: 6-Week Sprint Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-2xl border border-white/60">
                <div className="text-center mb-8">
                  <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-3">
                    The 6-Week FinOps Sprint™
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Predictable Cloud in 42 Days
                  </h3>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                  {[
                    {
                      week: "Weeks 1-2",
                      phase: "Visibility",
                      icon: "🔍",
                      desc: "Audit spend, tagging, waste, and architecture patterns",
                    },
                    {
                      week: "Weeks 3-4",
                      phase: "Optimisation",
                      icon: "⚡",
                      desc: "Implement quick wins, rightsizing, and commitment strategies",
                    },
                    {
                      week: "Weeks 5-6",
                      phase: "Innovation",
                      icon: "🚀",
                      desc: "Build forecasting, governance policies, and team enablement",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 hover-lift"
                    >
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-white rounded-full shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-600 mb-1">
                          {item.week}
                        </div>
                        <div className="font-bold text-slate-900 mb-1">
                          {item.phase}
                        </div>
                        <div className="text-sm text-slate-600">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700 text-center">
                    <strong>Deliverable:</strong> Full FinOps roadmap, cost allocation model, and governance playbook
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          TRUST STRIP - Quick Wins Proof
          ======================================== */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Proven Results for UK Startups & SMEs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15-35%", label: "Optimisable spend identified within 60 days*" },
              { value: "±5-10%", label: "Forecast accuracy typically observed" },
              { value: "90-95%", label: "Tag coverage in recent Sprint projects" },
              { value: "6 weeks", label: "Full cost visibility typically achieved" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES PREVIEW
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Included in Your Sprint
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to transform cloud chaos into predictable, optimised spend — no SaaS bloat, no vendor lock-in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔍",
                title: "FinOps Assessment",
                desc: "Baseline your cloud spend, tagging maturity, and waste opportunities with a comprehensive 90-day roadmap",
              },
              {
                icon: "⚡",
                title: "Cost Optimisation",
                desc: "Rightsizing, commitment strategies (RIs, SPs, CUDs), and architecture reviews to cut waste fast",
              },
              {
                icon: "🎯",
                title: "Allocation & Governance",
                desc: "Tag strategy, cost allocation models, and showback/chargeback frameworks for team accountability",
              },
              {
                icon: "📊",
                title: "Forecasting & Budgets",
                desc: "Predictive forecasting, variance control, and anomaly detection to eliminate billing surprises",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="stat-card hover-lift"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Full Service Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY ZYORIX - Differentiation
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Zyorix vs. DIY or Hiring?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Independent expertise without SaaS vendor conflicts or expensive full-time hires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Certified FinOps Expertise",
                desc: "Led by Sohil Bhayani (FOCP + FOCUS Analyst certified) — not generic DevOps consultants",
                highlight: "FOCP Certified Practitioner",
              },
              {
                icon: "⚡",
                title: "Fast Time-to-Value",
                desc: "See first measurable optimisation within 30 days; ROI typically realised in 6–8 weeks based on past Sprint projects — no 6-month ramp-up like hiring",
                highlight: "<30 days to quick wins",
              },
              {
                icon: "🇬🇧",
                title: "Built for UK Businesses",
                desc: "UK-based, understands your compliance needs (GDPR, UK tax), and speaks your language",
                highlight: "London-based support",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover-lift"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                  {item.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CASE STUDY TEASER
          ======================================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from Real UK Startups
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              See how we've helped companies like yours cut cloud waste and build predictable budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                headline: "Fintech (Series A): 28% Savings in 8 Weeks",
                company: "SaaS Startup (Series A)",
                industry: "Fintech",
                result: "28% monthly savings¹",
                detail: "Reduced AWS spend from £45K to £32K/month through rightsizing and reserved instance strategy",
                metric1: "£156K",
                metric1Label: "Annual savings",
                metric2: "≈ 8 weeks",
                metric2Label: "Time to payback",
              },
              {
                headline: "Retail Tech (Multi-Cloud): 35% Savings in 5 Weeks",
                company: "E-commerce Platform",
                industry: "Retail Tech",
                result: "35% cost reduction¹",
                detail: "Optimised multi-cloud (AWS + GCP) architecture and implemented automated scaling policies",
                metric1: "£210K",
                metric1Label: "Yearly savings",
                metric2: "±6%",
                metric2Label: "Forecast accuracy",
              },
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-lg font-bold text-white mb-2">
                      {study.headline}
                    </div>
                    <div className="text-sm text-slate-400 mb-1">
                      {study.industry}
                    </div>
                    <h3 className="text-base font-semibold text-slate-300">
                      {study.company}
                    </h3>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {study.result}
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {study.detail}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      {study.metric1}
                    </div>
                    <div className="text-sm text-slate-400">{study.metric1Label}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      {study.metric2}
                    </div>
                    <div className="text-sm text-slate-400">{study.metric2Label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION - Book Discovery Call
          ======================================== */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Take Control of Your Cloud Spend?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Book a <strong>free 30-minute discovery call</strong> with Sohil to audit your cloud spend and identify quick wins — no obligations, no sales pitch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                onClick={() => handleCtaClick("cta_section")}
                className="btn-primary pulse-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
              >
                Book Free Discovery Call
                <Calendar className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
              >
                View Pricing
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
                <span>Measurable outcomes within 60 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>UK-based support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          FAQ PREVIEW
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How is this different from hiring a FinOps engineer?",
                a: "You get immediate expertise (FOCP certified) without 6-month hiring delays, onboarding costs, or £60-90K annual salaries. Sprint cost is typically 10-15% of first-year savings (on average, engagements completed in 2024–25).*",
              },
              {
                q: "Do I need to buy another SaaS tool?",
                a: "No. We leverage your existing cloud provider tools (AWS Cost Explorer, Azure Cost Management, GCP Billing) plus free/open-source solutions. No vendor lock-in.",
              },
              {
                q: "What if I'm on multiple clouds?",
                a: "Perfect. The Sprint covers AWS, Azure, and GCP — we'll build a unified cost allocation and governance playbook across all three.",
              },
              {
                q: "How quickly will I see ROI?",
                a: "Quick wins typically identified within 30 days; ROI typically realised in 6–8 weeks based on past Sprint projects. Most engagements identify 15-35% optimisable spend by day 60.*",
              },
              {
                q: "Can you work alongside our existing FinOps team?",
                a: "Yes — we act as your FinOps partner, augmenting existing teams with specialist expertise and delivering the 6-Week Sprint methodology alongside your internal resources. Perfect for teams needing focused support on specific initiatives.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-200 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services#faq"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              View All FAQs →
            </Link>
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
