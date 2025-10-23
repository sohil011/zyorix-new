"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { trackCta } from "../components/trackCta";

export default function Contact() {
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
              Book Your <span className="gradient-text">Free Discovery Call</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              30-minute consultation with Sohil to audit your cloud spend, identify
              quick wins, and see if the 6-Week FinOps Sprint™ is right for you
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>No obligations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>No sales pitch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Honest assessment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          CALENDLY EMBED + CONTACT FORM
          ======================================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Prefer to message first? Fill out the form and we'll get back to
                  you within 24 hours (UK business days).
                </p>
              </div>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full"
                    placeholder="Acme Ltd"
                  />
                </div>

                {/* Monthly Cloud Spend */}
                <div>
                  <label
                    htmlFor="spend"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Approximate Monthly Cloud Spend *
                  </label>
                  <select id="spend" name="spend" required className="w-full">
                    <option value="">Select range...</option>
                    <option value="under-5k">Under £5K</option>
                    <option value="5k-20k">£5K - £20K</option>
                    <option value="20k-50k">£20K - £50K</option>
                    <option value="50k-100k">£50K - £100K</option>
                    <option value="100k-200k">£100K - £200K</option>
                    <option value="over-200k">Over £200K</option>
                  </select>
                </div>

                {/* Cloud Provider */}
                <div>
                  <label
                    htmlFor="provider"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Primary Cloud Provider *
                  </label>
                  <select id="provider" name="provider" required className="w-full">
                    <option value="">Select provider...</option>
                    <option value="aws">AWS</option>
                    <option value="azure">Azure</option>
                    <option value="gcp">GCP</option>
                    <option value="multi">Multi-cloud (AWS + Azure + GCP)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full"
                    placeholder="Tell us about your cloud cost challenges..."
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    I agree to be contacted about this inquiry. See our{" "}
                    <a
                      href="/privacy"
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    trackCta("submit_contact_form", "contact_page");
                    alert(
                      "Form submission coming soon! For now, please email info@zyorix.com"
                    );
                  }}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-slate-500 text-center">
                  We'll respond within 24 hours (UK business days)
                </p>
              </form>
            </motion.div>

            {/* RIGHT: Calendar Booking + Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Book a Discovery Call
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Schedule a 30-minute call with Sohil to discuss your cloud spend
                  challenges. We'll identify quick wins and give you an honest
                  assessment of potential savings.
                </p>
              </div>

              {/* Calendly Placeholder */}
              <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 text-center mb-8">
                <Calendar className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Calendar Booking
                </h3>
                <p className="text-slate-600 mb-6">
                  Calendly embed will go here. For now, email us to schedule:
                </p>
                <a
                  href="mailto:info@zyorix.com?subject=Discovery Call Request"
                  onClick={() =>
                    trackCta("email_discovery_call", "contact_page")
                  }
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email to Schedule
                </a>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm mb-1">
                          Email
                        </div>
                        <a
                          href="mailto:info@zyorix.com"
                          className="text-emerald-600 hover:text-emerald-700"
                        >
                          info@zyorix.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm mb-1">
                          Location
                        </div>
                        <div className="text-slate-600">London, United Kingdom</div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm mb-1">
                          Business Hours
                        </div>
                        <div className="text-slate-600">
                          Monday - Friday<br />
                          9:00 AM - 6:00 PM GMT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                  <h3 className="font-bold text-slate-900 mb-4">
                    What Happens Next?
                  </h3>

                  <ol className="space-y-3">
                    {[
                      "We'll review your cloud environment and spend patterns",
                      "Identify 2-3 immediate quick wins (10-15% savings potential)",
                      "Discuss whether the 6-Week FinOps Sprint™ is a good fit",
                      "Provide a custom ROI projection and engagement proposal",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                          {i + 1}
                        </div>
                        <div className="text-slate-700 text-sm leading-relaxed pt-0.5">
                          {step}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Ready to Book Yet?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Learn more about the 6-Week FinOps Sprint™ and see how we've helped
            UK startups cut cloud costs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Sprint Details
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/case-studies"
              className="btn-secondary inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border-slate-700"
            >
              Read Case Studies
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
