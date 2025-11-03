"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutSohil() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 text-center">
              Sohil Bhayani — FinOps Analyst & Advisor <span className="gradient-text">(FOCP + FOCUS Certified)</span>
            </h1>

            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p className="text-xl leading-relaxed">
                I help organisations gain clarity on their cloud spend and translate data into decisions. My focus is bridging finance and engineering through practical FinOps analysis, forecasting, and governance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Highlights */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Work Highlights</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>6-Week FinOps Sprint™</strong> — a benchmark-aligned framework to identify ≈15–35% optimisable spend and build predictable budgets (modelled).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Power BI FinOps Dashboards</strong> — spend vs savings KPIs, forecast variance (±5–10% modelled), and allocation coverage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Multi-cloud baselining</strong> — tagging, allocation readiness, and anomaly detection setup aligned to FinOps best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Tools */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications & Tools</h2>

            <div className="flex flex-wrap gap-3">
              {[
                "FOCP",
                "FOCUS",
                "AWS CUR",
                "Athena",
                "Supabase/Postgres",
                "Power BI",
                "Excel",
                "Next.js/TypeScript (internal tooling)"
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Let's Work Together
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              Collaborate or Hire Me
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
