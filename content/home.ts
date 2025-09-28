const home = {
  hero: {
    title: "Optimize Your Cloud Spend with Zyorix",
    sub: "Independent FinOps consultancy for AWS, Azure, and GCP - from assessment to ongoing governance.",
    proof: "Clients typically save 20-30% within 90 days."
  },
  trust: [
    "/img/trust/logo1.svg",
    "/img/trust/logo2.svg",
    "/img/trust/logo3.svg",
    "/img/trust/logo4.svg",
    "/img/trust/logo5.svg",
    "/img/trust/logo6.svg"
  ],
  services: [
    { title: "FinOps Assessment / Health Check", desc: "A rapid baseline of spend, tagging, and waste. 90-day plan.", icon: "audit" },
    { title: "Cost Optimization & Commitment Strategy", desc: "Rightsizing and commitments (RIs, SPs, CUDs).", icon: "optimize" },
    { title: "Cloud Allocation & Governance", desc: "Tag strategy, cost model, showback/chargeback.", icon: "govern" },
    { title: "Forecasting & Budget Governance", desc: "Forecasts, variance control, anomaly detection.", icon: "forecast" }
  ]
} as const;

export default home;
