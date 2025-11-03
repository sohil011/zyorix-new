import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zyorix | Founded by Sohil Bhayani (FOCP + FOCUS Certified FinOps Analyst)",
  description: "Zyorix is a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations improve spend visibility, forecasting accuracy, and governance through the 6-Week FinOps Sprint™.",
  openGraph: {
    title: "About Zyorix | Founded by Sohil Bhayani (FOCP + FOCUS Certified FinOps Analyst)",
    description: "Zyorix is a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations improve spend visibility, forecasting accuracy, and governance through the 6-Week FinOps Sprint™.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
