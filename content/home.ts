const home = {
  hero: {
    title: "Predictable, Efficient Cloud — With Zyorix",
    sub: "Independent FinOps that aligns engineering and finance to deliver measurable savings, reliable forecasts, and sustainable governance across AWS, Azure, and GCP.",
    proof: "Typical programs: 20-30% savings, ±5-10% forecast accuracy, 90-95% allocation in year one."
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
    { title: "FinOps Assessment / Health Check", desc: "Baseline spend, tagging, and waste. 90-day plan.", icon: "audit" },
    { title: "Cost Optimization & Commitment Strategy", desc: "Rightsizing and commitments (RIs, SPs, CUDs).", icon: "optimize" },
    { title: "Cloud Allocation & Governance", desc: "Tag strategy, cost model, showback/chargeback.", icon: "govern" },
    { title: "Forecasting & Budget Governance", desc: "Forecasts, variance control, anomaly detection.", icon: "forecast" }
  ]
} as const;

export default home;
