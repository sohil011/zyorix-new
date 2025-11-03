import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Zyorix | Sohil Bhayani – FinOps Roles & Projects",
  description: "Get in touch with Sohil Bhayani for full-time, contract, or consulting FinOps engagements. Schedule a free consultation to discuss your cloud cost challenges.",
  openGraph: {
    title: "Contact Zyorix | Sohil Bhayani – FinOps Roles & Projects",
    description: "Get in touch with Sohil Bhayani for full-time, contract, or consulting FinOps engagements. Schedule a free consultation to discuss your cloud cost challenges.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
