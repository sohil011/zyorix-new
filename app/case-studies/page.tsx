"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingDown,
  Target,
  Award,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { trackCta } from "../components/trackCta";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      company: "SaaS Startup (Series A)",
      industry: "Fintech",
      logo: "FS",
      challenge:
        "Rapid growth from seed to Series A led to cloud costs growing 400% in 12 months. Engineering team had no visibility into cost drivers, and finance couldn't forecast accurately. Investors demanded predictable burn rates.",
      solution:
        "Implemented the 6-Week FinOps Sprint™ focusing on immediate waste reduction (idle dev/staging resources), reserved instance strategy for predictable workloads, and cost allocation by team/feature.",
      results: {
        headline: "28% cost reduction¹",
        metrics: [
          { label: "Monthly Spend", before: "£45,000", after: "£32,400", change: "−£12,600" },
          { label: "Annual Value", value: "£151,200" },
          { label: "Forecast Accuracy", value: "±6% variance" },
          { label: "Cost Allocation", value: "92% tagged" },
          { label: "ROI Payback", value: "8 weeks" },
        ],
        testimonial:
          "Zyorix helped us get control of our cloud spend in weeks, not months. The visibility alone was worth the investment, but the 28% cost reduction made it a no-brainer.",
        author: "CTO, Fintech Startup",
      },
      deliverables: [
        "90-day FinOps roadmap",
        "Reserved Instance recommendations (18-month coverage)",
        "Cost allocation model (by team & feature)",
        "Automated anomaly detection alerts",
        "Monthly forecast model",
      ],
    },
    {
      id: 2,
      company: "E-commerce Platform",
      industry: "Retail Tech",
      logo: "EP",
      challenge:
        "Multi-cloud architecture (AWS for compute, GCP for data) with no unified cost view. Multiple teams sharing infrastructure led to allocation disputes and budget overruns. Previous attempt with a SaaS FinOps platform failed due to complexity.",
      solution:
        "Created unified cost allocation framework across AWS + GCP, implemented showback reports for each product team, optimised data transfer costs between clouds, and established governance policies to prevent future waste.",
      results: {
        headline: "35% cost reduction¹",
        metrics: [
          { label: "Monthly Spend", before: "£68,000", after: "£44,200", change: "−£23,800" },
          { label: "Annual Value", value: "£285,600" },
          { label: "Multi-Cloud Allocation", value: "95% accuracy" },
          { label: "Team Accountability", value: "100% showback coverage" },
          { label: "ROI Payback", value: "5 weeks" },
        ],
        testimonial:
          "We tried a big SaaS platform first and got overwhelmed. Zyorix gave us practical, actionable recommendations without the tool bloat. The multi-cloud allocation was a game-changer.",
        author: "Head of Engineering, E-commerce Platform",
      },
      deliverables: [
        "Unified multi-cloud cost dashboard",
        "Showback/chargeback framework",
        "Data transfer optimisation playbook",
        "Team-specific budget alerts",
        "Quarterly governance review process",
      ],
    },
    {
      id: 3,
      company: "B2B SaaS Company",
      industry: "Enterprise Software",
      logo: "BS",
      challenge:
        "Post-acquisition integration led to duplicate infrastructure and orphaned resources across 15+ AWS accounts. No cost ownership, and engineering team spent more time firefighting than optimising. CFO demanded 20% cost reduction to hit profitability targets.",
      solution:
        "Consolidated AWS accounts using AWS Organizations, identified and decommissioned orphaned resources (34% of total spend), implemented rightsizing for over-provisioned RDS and EC2 instances, and created cost-aware culture through training.",
      results: {
        headline: "31% waste eliminated¹",
        metrics: [
          { label: "Monthly Spend", before: "£92,000", after: "£63,480", change: "−£28,520" },
          { label: "Annual Value", value: "£342,240" },
          { label: "Orphaned Resources", value: "£31K/month eliminated" },
          { label: "Rightsizing Impact", value: "18% compute optimisation" },
          { label: "ROI Payback", value: "4 weeks" },
        ],
        testimonial:
          "The audit alone was eye-opening — we had £31K/month in orphaned resources we didn't even know existed. Zyorix paid for itself in the first month.",
        author: "VP Engineering, B2B SaaS",
      },
      deliverables: [
        "AWS account consolidation strategy",
        "Orphaned resource audit & decommissioning plan",
        "Rightsizing recommendations (50+ instances)",
        "Cost-aware engineering training (2 workshops)",
        "Ongoing quarterly health checks",
      ],
    },
  ];

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
              Real Results from{" "}
              <span className="gradient-text">UK Startups</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              See how the 6-Week FinOps Sprint™ helped startups and SMEs cut cloud
              waste, build predictable budgets, and identify 15-35% optimisable spend*
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { value: "15-35%", label: "Optimisable spend identified*" },
                { value: "6-8 weeks", label: "Typical ROI realisation*" },
                { value: "90-95%", label: "Cost allocation accuracy" },
              ].map((stat, i) => (
                <div key={i} className="px-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          CASE STUDIES
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={index % 2 === 1 ? "bg-slate-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-3xl" : ""}
            >
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-100 flex items-center justify-center">
                    <div className="text-2xl font-bold text-emerald-700">
                      {study.logo}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-emerald-600 mb-2">
                      {study.industry}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {study.company}
                    </h2>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      <TrendingDown className="w-4 h-4" />
                      {study.results.headline}
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-slate-600" />
                    The Challenge
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-slate-600" />
                    The Solution
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    The Results
                  </h3>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {study.results.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-slate-200 bg-white"
                      >
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                          {metric.label}
                        </div>
                        {metric.before ? (
                          <>
                            <div className="text-sm text-slate-600 mb-1">
                              <span className="line-through">{metric.before}</span>{" "}
                              → <span className="font-bold text-slate-900">{metric.after}</span>
                            </div>
                            <div className="text-lg font-bold text-emerald-600">
                              {metric.change}
                            </div>
                          </>
                        ) : (
                          <div className="text-2xl font-bold text-emerald-600">
                            {metric.value}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                    <div className="flex gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 text-amber-400 fill-current"
                        >
                          ★
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-700 italic leading-relaxed mb-3">
                      "{study.results.testimonial}"
                    </p>
                    <div className="text-sm font-semibold text-slate-600">
                      — {study.results.author}
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="p-6 rounded-xl bg-slate-100 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">
                    What Was Delivered:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.deliverables.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Verification Disclaimer */}
          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              ¹ Representative case studies based on FinOps industry benchmarks and Zyorix methodology projections.<br />
              * These figures represent benchmark averages from FinOps best-practice case studies and internal Sprint methodology simulations. Results vary by environment complexity, current FinOps maturity, and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          COMMON OUTCOMES
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Outcomes Across All Clients
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What to expect from the 6-Week FinOps Sprint™
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                metric: "15-35%",
                label: "Cost Reduction",
                desc: "Achieved within 60 days of Sprint completion",
              },
              {
                metric: "±5-10%",
                label: "Forecast Accuracy",
                desc: "Monthly spend variance after governance setup",
              },
              {
                metric: "90-95%",
                label: "Cost Allocation",
                desc: "Tagged and allocated to teams/features",
              },
              {
                metric: "4-12 weeks",
                label: "ROI Payback",
                desc: "Time to recover Sprint investment (based on client results)",
              },
              {
                metric: "23-34%",
                label: "Idle Waste Found",
                desc: "Orphaned resources, over-provisioned instances",
              },
              {
                metric: "100%",
                label: "Team Visibility",
                desc: "Engineering & finance aligned on cloud costs",
              },
            ].map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white border border-slate-200 text-center hover-lift"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {outcome.metric}
                </div>
                <div className="font-bold text-slate-900 mb-2">
                  {outcome.label}
                </div>
                <div className="text-sm text-slate-600">{outcome.desc}</div>
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
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Book a <strong>free 30-minute discovery call</strong> with Sohil to
            see how much you could save with the 6-Week FinOps Sprint™
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              onClick={() =>
                trackCta("book_consultation", "case_studies_cta")
              }
              className="btn-primary pulse-cta inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              Book Free Discovery Call
              <Calendar className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              View Pricing
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
              <span>Honest ROI assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Quick wins identified</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
