import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6-Week FinOps Sprint™ | Zyorix UK Consultancy – Cut Cloud Costs 15–35% in 6 Weeks",
  description: "Eliminate cloud waste and build predictable budgets with Zyorix's 6-Week FinOps Sprint™ — FOCP certified UK experts.",
  openGraph: {
    title: "6-Week FinOps Sprint™ | Zyorix UK Consultancy",
    description: "Eliminate cloud waste and build predictable budgets with Zyorix's 6-Week FinOps Sprint™ — FOCP certified UK experts.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
