import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zyorix | Founded by Sohil Bhayani (FOCP + FOCUS Certified FinOps Analyst)",
  description: "Zyorix is a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations eliminate waste and build predictable cloud spend with the 6-Week FinOps Sprint™.",
  openGraph: {
    title: "About Zyorix | Founded by Sohil Bhayani (FOCP + FOCUS Certified FinOps Analyst)",
    description: "Zyorix is a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations eliminate waste and build predictable cloud spend with the 6-Week FinOps Sprint™.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
