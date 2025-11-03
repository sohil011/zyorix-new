export const metadata = {
  title: "Privacy Policy | Zyorix",
  description: "How Zyorix collects, uses, and protects your personal data in compliance with UK GDPR.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-8">
          <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Zyorix ("we", "us", or "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (zyorix.com) or engage our services.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data Controller</h2>
          <p className="text-slate-700 leading-relaxed">
            Zyorix, operated by Sohil Bhayani, is the data controller responsible for your personal data. For any data protection queries, contact us at: <a href="mailto:hello@zyorix.com" className="text-emerald-600 hover:text-emerald-700 underline">hello@zyorix.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information We Collect</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Contact Information:</strong> Name, email address, company name when you submit a contact form or book a consultation.</li>
            <li><strong>Cloud Spend Data:</strong> Approximate monthly cloud spend and primary cloud provider (AWS, Azure, GCP) for assessment purposes.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited via cookies and analytics.</li>
            <li><strong>Communications:</strong> Records of correspondence when you contact us.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Your Information</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We use your personal data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Service Delivery:</strong> To respond to inquiries, schedule consultations, and deliver the 6-Week FinOps Sprint™ or other services.</li>
            <li><strong>Communication:</strong> To send you relevant information about our services, with your consent.</li>
            <li><strong>Website Improvement:</strong> To analyze site usage and improve user experience via analytics (Google Analytics, if applicable).</li>
            <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Legal Basis for Processing</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We process your personal data under the following lawful bases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Consent:</strong> When you submit a form or agree to communications.</li>
            <li><strong>Contract:</strong> To fulfill our contractual obligations when you engage our services.</li>
            <li><strong>Legitimate Interest:</strong> To improve our website and services, provided your rights are not overridden.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Sharing and Third Parties</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Service Providers:</strong> Email hosting (e.g., Google Workspace), analytics tools (e.g., Google Analytics), and payment processors, all bound by data protection agreements.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            We ensure all third parties comply with UK GDPR and have adequate safeguards in place.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
          <p className="text-slate-700 leading-relaxed">
            We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law. Contact form data is typically retained for 2 years; client project data is retained for up to 7 years for accounting and legal compliance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Rights</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Under UK GDPR, you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Access:</strong> Request a copy of your personal data.</li>
            <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations).</li>
            <li><strong>Restriction:</strong> Limit how we process your data.</li>
            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interest.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            To exercise these rights, contact us at <a href="mailto:hello@zyorix.com" className="text-emerald-600 hover:text-emerald-700 underline">hello@zyorix.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookies</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our website uses essential cookies for functionality and analytics cookies (with consent) to understand site usage. You can manage cookie preferences in your browser settings.
          </p>
          <p className="text-slate-700 leading-relaxed">
            For more details, see our Cookie Policy (if separate) or contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Data Security</h2>
          <p className="text-slate-700 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. This includes encryption, secure hosting, and access controls.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. International Transfers</h2>
          <p className="text-slate-700 leading-relaxed">
            We primarily process data within the UK. If data is transferred outside the UK/EEA, we ensure adequate safeguards are in place (e.g., Standard Contractual Clauses).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Children's Privacy</h2>
          <p className="text-slate-700 leading-relaxed">
            Our services are not directed at individuals under 18. We do not knowingly collect data from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to This Policy</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy regularly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact and Complaints</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            For any questions or concerns about this Privacy Policy or how we handle your data, contact us at:
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Email:</strong> <a href="mailto:hello@zyorix.com" className="text-emerald-600 hover:text-emerald-700 underline">hello@zyorix.com</a>
          </p>
          <p className="text-slate-700 leading-relaxed">
            If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO): <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">ico.org.uk</a>
          </p>
        </section>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> This privacy policy is designed to be compliant with UK GDPR and applicable data protection laws. Zyorix operates as an independent consultancy. For specific legal advice, consult a qualified data protection professional.
          </p>
        </div>
      </div>
    </main>
  );
}
