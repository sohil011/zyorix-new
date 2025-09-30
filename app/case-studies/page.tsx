export const metadata = {
  title: "Case Studies | Zyorix",
  description: "Selected outcomes from FinOps engagements.",
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">Case Studies</h1>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>Allocation coverage to ~95% within 60 days</li>
        <li>23% non-prod rightsizing (EC2/S3)</li>
        <li>12–18 month commitment uplift with guardrails</li>
      </ul>
    </main>
  );
}
