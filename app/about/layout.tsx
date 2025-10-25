import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Independent FinOps Consultancy UK | About Zyorix – FOCP Certified Cloud Cost Experts",
  description: "Zyorix is a UK-based FinOps consultancy helping startups and SMEs reduce 15–35% of cloud waste and build predictable cloud spend through the 6-Week FinOps Sprint™.",
  openGraph: {
    title: "Independent FinOps Consultancy UK | About Zyorix – FOCP Certified Cloud Cost Experts",
    description: "Zyorix is a UK-based FinOps consultancy helping startups and SMEs reduce 15–35% of cloud waste and build predictable cloud spend through the 6-Week FinOps Sprint™.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
