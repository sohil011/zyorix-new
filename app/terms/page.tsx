export const metadata = {
  title: "Terms of Service | Zyorix",
  description: "Terms and conditions governing the use of Zyorix services and website.",
};

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-8">
          <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            By accessing or using the Zyorix website (zyorix.com) or engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use our website or services.
          </p>
          <p className="text-slate-700 leading-relaxed">
            These Terms apply to all visitors, users, and clients of Zyorix, operated by Sohil Bhayani (UK-based FinOps consultancy).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Provided</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Zyorix provides FinOps consultancy services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>The 6-Week FinOps Sprint™ programme</li>
            <li>Cloud cost analysis and optimisation recommendations</li>
            <li>FinOps governance frameworks and dashboard development</li>
            <li>Full-time, contract, or consulting FinOps engagements</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            Services are provided "as is" and tailored to each client's specific environment and requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of Website</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            You may use our website for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Use the site in any way that violates UK laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems or data</li>
            <li>Transmit malicious code, viruses, or harmful content</li>
            <li>Scrape, harvest, or collect data without permission</li>
            <li>Misrepresent your identity or affiliation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Service Engagement and Fees</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>4.1 Engagement Process:</strong> Services are provided under a written Statement of Work (SOW) or contract agreed upon by both parties. The 6-Week FinOps Sprint™ has a fixed price of £12,500 (subject to change; check our Pricing page for current rates).
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>4.2 Payment Terms:</strong> Payment terms are specified in the SOW. Typically, payment is required 50% upfront and 50% upon completion, unless otherwise agreed.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>4.3 Cancellation:</strong> Cancellations must be made in writing. Refunds are subject to the terms of the SOW. Upfront payments may be non-refundable once work has commenced.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>4.4 Late Payment:</strong> Late payments may incur interest at a rate of 4% above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. No Guarantees; Modelled Outcomes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All outcome ranges (e.g., "15–35% optimisation potential") are <strong>modelled estimates</strong> based on FinOps Foundation benchmarks, industry best practices, and lab-validated methodologies. They are not guarantees of actual results.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Actual cost savings, forecast accuracy, and other outcomes depend on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Your organisation's implementation of recommendations</li>
            <li>Current FinOps maturity and cloud architecture</li>
            <li>Changes made to cloud workloads and commitments</li>
            <li>External factors beyond our control (e.g., cloud provider pricing changes)</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            We will provide data-driven analysis and recommendations, but cannot guarantee specific financial results. You are responsible for implementing changes and managing your cloud environment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>6.1 Our IP:</strong> All content on this website, including text, graphics, logos, frameworks, and methodologies (e.g., the 6-Week FinOps Sprint™), is the intellectual property of Zyorix/Sohil Bhayani and is protected by UK copyright and intellectual property laws.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>6.2 Client Deliverables:</strong> Upon full payment, clients receive a license to use deliverables (reports, dashboards, frameworks) for their internal business purposes. Zyorix retains ownership of underlying methodologies and templates.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>6.3 Client Data:</strong> You retain ownership of your data. We may use anonymized/aggregated data for benchmarking and service improvement, with your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Confidentiality</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Both parties agree to keep confidential information disclosed during the engagement confidential and not disclose it to third parties without prior written consent, except as required by law.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Confidentiality obligations survive termination of the engagement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            To the fullest extent permitted by UK law:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Zyorix's total liability arising from any engagement is limited to the fees paid by the client for that engagement.</li>
            <li>We are not liable for indirect, consequential, or incidental damages (e.g., lost profits, lost savings, business interruption).</li>
            <li>We do not guarantee specific cost savings or financial outcomes.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            <strong>Exception:</strong> Nothing in these Terms excludes or limits our liability for fraud, death or personal injury caused by negligence, or any other liability that cannot be excluded under UK law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
          <p className="text-slate-700 leading-relaxed">
            You agree to indemnify and hold Zyorix harmless from any claims, damages, or expenses arising from your misuse of our services or breach of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Services</h2>
          <p className="text-slate-700 leading-relaxed">
            Our services may involve integration with third-party tools (e.g., AWS, Azure, Power BI). We are not responsible for the performance, security, or availability of third-party services. You are responsible for maintaining necessary licenses and access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Termination</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>11.1 By Client:</strong> You may terminate an engagement in accordance with the SOW. Early termination may result in forfeiture of upfront payments.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>11.2 By Zyorix:</strong> We may terminate or suspend services if you breach these Terms, fail to make payment, or engage in conduct that harms our reputation or interests.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>11.3 Effect of Termination:</strong> Upon termination, you must pay all outstanding fees. Confidentiality and intellectual property provisions survive termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Disclaimer of Warranties</h2>
          <p className="text-slate-700 leading-relaxed">
            Our services are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our services will be uninterrupted, error-free, or secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law and Jurisdiction</h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Changes to Terms</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update these Terms periodically. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services after changes constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Entire Agreement</h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms, together with any SOW or contract, constitute the entire agreement between you and Zyorix regarding the use of our services and supersede any prior agreements or understandings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Severability</h2>
          <p className="text-slate-700 leading-relaxed">
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Contact Information</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            For questions about these Terms, contact us at:
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Email:</strong> <a href="mailto:hello@zyorix.com" className="text-emerald-600 hover:text-emerald-700 underline">hello@zyorix.com</a><br />
            <strong>Website:</strong> <a href="https://zyorix.com" className="text-emerald-600 hover:text-emerald-700 underline">zyorix.com</a>
          </p>
        </section>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> These Terms of Service are designed to comply with UK law and protect both Zyorix and its clients. For specific legal advice regarding contracts or engagements, consult a qualified solicitor.
          </p>
        </div>
      </div>
    </main>
  );
}
