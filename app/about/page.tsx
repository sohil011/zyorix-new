"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Target,
  Users,
  Shield,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Globe,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { trackCta } from "../components/trackCta";

export default function About() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-100 border border-emerald-200">
              <Globe className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-700">
                UK-Based FinOps Consultancy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Independent FinOps{" "}
              <span className="gradient-text">Built for Startups</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Zyorix is a UK-based FinOps consultancy helping startups and SMEs
              transform unpredictable cloud costs into predictable, efficient
              value — without vendor conflicts or expensive SaaS tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          FOUNDER SECTION - Sohil Bhayani
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Photo placeholder + badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Profile card */}
                <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-white p-8 border border-emerald-100 shadow-xl">
                  {/* Placeholder for profile photo */}
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-100 flex items-center justify-center">
                    <div className="text-6xl font-bold text-emerald-700">SB</div>
                  </div>

                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Sohil Bhayani
                    </h2>
                    <p className="text-lg text-emerald-600 font-semibold mb-4">
                      Founder & FinOps Practitioner
                    </p>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-emerald-100">
                      <Award className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          FinOps Certified Practitioner (FOCP)
                        </div>
                        <div className="text-xs text-slate-500">
                          FinOps Foundation
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-emerald-100">
                      <Award className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          FOCUS Analyst Certified
                        </div>
                        <div className="text-xs text-slate-500">
                          FinOps Open Cost & Usage Specification
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-emerald-100">
                      <Globe className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          Multi-Cloud Expertise
                        </div>
                        <div className="text-xs text-slate-500">
                          AWS, Azure, GCP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Bio + Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Why Zyorix Exists
                  </h3>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      After years working with startups struggling to understand
                      their cloud bills, I saw the same pattern: unpredictable
                      costs, surprise invoices, and finance teams at odds with
                      engineering.
                    </p>
                    <p>
                      Most FinOps solutions are built for enterprises — expensive
                      SaaS platforms, 6-month consulting engagements, or generic
                      DevOps contractors who don't understand cost governance.
                    </p>
                    <p>
                      <strong className="text-slate-900">
                        Zyorix was created to give UK startups and SMEs access to
                        certified FinOps expertise
                      </strong>{" "}
                      — without the enterprise price tag, long-term contracts, or
                      vendor conflicts.
                    </p>
                    <p>
                      The <strong>6-Week FinOps Sprint™</strong> delivers what
                      took me years to learn: how to see your spend clearly,
                      optimise fast, and build governance that lasts.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">
                      15-35%
                    </div>
                    <div className="text-sm text-slate-600">
                      Average client savings
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">
                      60 days
                    </div>
                    <div className="text-sm text-slate-600">
                      Time to full ROI
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">
                      42 days
                    </div>
                    <div className="text-sm text-slate-600">
                      Sprint duration
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">
                      £5K-£200K
                    </div>
                    <div className="text-sm text-slate-600">
                      Ideal monthly spend
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    onClick={() => trackCta("book_consultation", "about_page")}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Book a Discovery Call with Sohil
                    <Calendar className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          MISSION & VALUES
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What drives every engagement and guides our approach to FinOps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Predictability Over Savings",
                desc: "Cutting costs is easy. Building predictable budgets that scale with your business is the real win. We optimise for long-term value, not one-time reductions.",
                color: "emerald",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Independent & Unbiased",
                desc: "No SaaS vendor kickbacks, no tool upsells. We recommend what's best for your business — whether that's AWS native tools, open-source, or a third-party platform.",
                color: "blue",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Accessible Expertise",
                desc: "FinOps shouldn't be reserved for enterprises. UK startups and SMEs deserve certified expertise at fair prices with transparent ROI.",
                color: "amber",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover-lift"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-${value.color}-100 flex items-center justify-center text-${value.color}-600 mb-4`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          HOW WE WORK
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our approach to every FinOps engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Data-Driven, Not Opinion-Driven",
                desc: "Every recommendation is backed by your actual spend data, industry benchmarks, and FinOps best practices — not gut feelings or vendor sales pitches.",
              },
              {
                title: "Collaborative, Not Directive",
                desc: "We work with your engineering and finance teams, not around them. You'll understand every decision and be equipped to maintain FinOps maturity long-term.",
              },
              {
                title: "Quick Wins + Long-Term Strategy",
                desc: "Implement immediate savings in weeks 1-2, then build sustainable governance that prevents waste from creeping back in.",
              },
              {
                title: "Transparent ROI",
                desc: "You'll see exactly what you're getting: savings projections, time-to-value estimates, and payback periods. No vague consulting promises.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          WHO WE SERVE
          ======================================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We Serve Best
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The ideal Zyorix client profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "UK Startups (Seed to Series B)",
                points: [
                  "Spending £5K-£200K/month on cloud",
                  "Growing fast, cloud costs growing faster",
                  "No dedicated FinOps engineer (yet)",
                  "Need predictable budgets for investors",
                ],
              },
              {
                title: "SMEs with Complex Cloud",
                points: [
                  "Multi-cloud (AWS + Azure + GCP)",
                  "Multiple teams/projects sharing infra",
                  "Finance wants allocation, engineering wants speed",
                  "Previous optimisation attempts failed",
                ],
              },
            ].map((segment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-slate-800 border border-slate-700"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-bold">{segment.title}</h3>
                </div>
                <ul className="space-y-3">
                  {segment.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-6">
              Not sure if you're a fit?{" "}
              <strong className="text-white">
                Book a free discovery call
              </strong>{" "}
              — we'll give you an honest assessment.
            </p>
            <Link
              href="/contact"
              onClick={() => trackCta("book_consultation", "about_cta")}
              className="btn-primary inline-flex items-center gap-2"
            >
              Book Free Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          TRUST INDICATORS
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Clients Choose Zyorix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                label: "FOCP Certified",
                desc: "Industry-recognised FinOps expertise",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                label: "UK-Based",
                desc: "Understand UK business needs",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                label: "Proven Results",
                desc: "15-35% savings within 60 days",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                label: "Independent",
                desc: "No vendor conflicts or kickbacks",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-50"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  {item.icon}
                </div>
                <div className="font-bold text-slate-900 mb-1">{item.label}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
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
            Ready to Take Control of Your Cloud Spend?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Book a <strong>free 30-minute discovery call</strong> with Sohil to
            discuss your cloud spend challenges and see if the 6-Week FinOps
            Sprint™ is right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              onClick={() => trackCta("book_consultation", "about_footer")}
              className="btn-primary pulse-cta inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              Book Free Discovery Call
              <Calendar className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              Learn About the Sprint
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>No sales pitch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Honest assessment</span>
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
