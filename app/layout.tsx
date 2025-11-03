import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Sohil Bhayani | FinOps Analyst & Advisor (FOCP + FOCUS) — Zyorix",
  description: "Zyorix — a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations eliminate waste and build predictable cloud spend with the 6-Week FinOps Sprint™.",
  metadataBase: new URL("https://www.zyorix.com"),
  openGraph: {
    title: "Sohil Bhayani | FinOps Analyst & Advisor (FOCP + FOCUS) — Zyorix",
    description: "Zyorix — a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations eliminate waste and build predictable cloud spend with the 6-Week FinOps Sprint™.",
    images: ["/img/og/social-share.webp"],
    url: "https://www.zyorix.com",
    siteName: "Zyorix"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohil Bhayani | FinOps Analyst & Advisor (FOCP + FOCUS)",
    description: "Helping organisations eliminate waste and build predictable cloud spend with the 6-Week FinOps Sprint™."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only p-2 bg-white">Skip to content</a>

        <Navigation />

        <main id="main" className="flex-1">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-4 text-sm">
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="space-y-1">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Services</div>
              <ul className="space-y-1">
                <li><Link href="/services">FinOps Assessment</Link></li>
                <li><Link href="/services#optimization">Cost Optimization</Link></li>
                <li><Link href="/services#governance">Governance</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Resources</div>
              <ul className="space-y-1">
                <li><Link href="/labs">Labs & Demos</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Legal</div>
              <ul className="space-y-1">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-6">
            <p className="text-center text-xs text-slate-500 max-w-3xl mx-auto mb-3">
              Zyorix by Sohil Bhayani — FinOps Analyst & Advisor (FOCP + FOCUS Certified). Open to full-time, contract, and consulting engagements.
            </p>
            <p className="text-center text-xs text-slate-500 max-w-3xl mx-auto mb-4">
              Zyorix operates as an independent consultancy and FinOps lab. No claims of prior enterprise delivery; frameworks are validated in lab settings.
            </p>
            <div className="text-center text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Zyorix.com. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}










