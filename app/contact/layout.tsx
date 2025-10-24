import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Free FinOps Discovery Call | Zyorix UK – 30-Min Cloud Cost Assessment",
  description: "Schedule a free 30-minute consultation with Zyorix to review your cloud spend and explore FinOps optimisation potential — no obligation, no sales pitch.",
  openGraph: {
    title: "Book Free FinOps Discovery Call | Zyorix UK",
    description: "Schedule a free 30-minute consultation with Zyorix to review your cloud spend and explore FinOps optimisation potential — no obligation, no sales pitch.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
