import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zyorix | UK FinOps Consultancy – FOCP Certified Independent Experts",
  description: "Meet the team behind Zyorix — FOCP certified FinOps practitioners helping UK startups and SMEs transform cloud chaos into predictable value.",
  openGraph: {
    title: "About Zyorix | UK FinOps Consultancy",
    description: "Meet the team behind Zyorix — FOCP certified FinOps practitioners helping UK startups and SMEs transform cloud chaos into predictable value.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
