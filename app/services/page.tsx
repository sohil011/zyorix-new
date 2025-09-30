export const metadata = {
  title: "Services | Zyorix",
  description: "FinOps assessments, cost optimization, allocation governance, forecasting, commitment strategy.",
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">Services</h1>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>FinOps Assessment & Roadmap</li>
        <li>Cost Optimization & Commitment Strategy (SP/RI)</li>
        <li>Allocation & Tag Governance</li>
        <li>Forecasting, Budgets & Anomaly Response</li>
      </ul>
    </main>
  );
}
