import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK FinOps Consultancy Pricing | Fixed-Fee Sprint - Zyorix",
  description: "Transparent fixed-price FinOps Sprint (£12.5K). Typically identifies 15-35% optimisable spend within 6 weeks. No hourly rates, no scope creep.",
  openGraph: {
    title: "UK FinOps Consultancy Pricing | Fixed-Fee Sprint - Zyorix",
    description: "Transparent fixed-price FinOps Sprint (£12.5K). Typically identifies 15-35% optimisable spend within 6 weeks. No hourly rates, no scope creep.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
