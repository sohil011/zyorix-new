import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6-Week FinOps Sprint™ | Zyorix UK – Cut Cloud Waste 15–35% in 6 Weeks",
  description: "Eliminate cloud waste and build predictable budgets with Zyorix's 6-Week FinOps Sprint™ — a benchmarked, transparent FinOps methodology for UK startups & SMEs.",
  openGraph: {
    title: "6-Week FinOps Sprint™ | Zyorix UK – Cut Cloud Waste 15–35% in 6 Weeks",
    description: "Eliminate cloud waste and build predictable budgets with Zyorix's 6-Week FinOps Sprint™ — a benchmarked, transparent FinOps methodology for UK startups & SMEs.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
