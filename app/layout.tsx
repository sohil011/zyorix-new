import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";
import CalScriptLoader from "./components/CalScriptLoader";
import CalFloating from "./components/CalFloating";

export const metadata: Metadata = {
  title: "Sohil Bhayani | FinOps Analyst & Advisor (FOCP + FOCUS Certified) — Zyorix",
  description: "Zyorix — a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations improve spend visibility, forecasting accuracy, and governance through the 6-Week FinOps Sprint™.",
  metadataBase: new URL("https://www.zyorix.com"),
  openGraph: {
    title: "Sohil Bhayani | FinOps Analyst & Advisor (FOCP + FOCUS Certified) — Zyorix",
    description: "Zyorix — a UK FinOps consultancy founded by Sohil Bhayani (FOCP + FOCUS Certified). Helping organisations improve spend visibility, forecasting accuracy, and governance through the 6-Week FinOps Sprint™.",
    images: ["/img/og/social-share.webp"],
    url: "https://www.zyorix.com",
    siteName: "Zyorix"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohil Bhayani | FinOps Analyst & Advisor (FOCP + FOCUS Certified)",
    description: "Helping organisations improve spend visibility, forecasting accuracy, and governance through the 6-Week FinOps Sprint™."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only p-2 bg-white">Skip to content</a>

        <Navigation />

        <main id="main" className="flex-1">{children}</main>

        <footer className="mt-auto border-t bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-4 text-sm">
            <div>
              <div className="font-semibold mb-3 text-slate-900">Company</div>
              <ul className="space-y-2 text-slate-600">
                <li><Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-slate-900">Services</div>
              <ul className="space-y-2 text-slate-600">
                <li><Link href="/services" className="hover:text-emerald-600 transition-colors">FinOps Sprint™</Link></li>
                <li><Link href="/services#optimization" className="hover:text-emerald-600 transition-colors">Cost Optimization</Link></li>
                <li><Link href="/services#governance" className="hover:text-emerald-600 transition-colors">Governance</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-slate-900">Resources</div>
              <ul className="space-y-2 text-slate-600">
                <li><Link href="/labs" className="hover:text-emerald-600 transition-colors">Labs & Demos</Link></li>
                <li><Link href="/pricing" className="hover:text-emerald-600 transition-colors">Pricing</Link></li>
                <li><Link href="/about-sohil" className="hover:text-emerald-600 transition-colors">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-slate-900">Legal</div>
              <ul className="space-y-2 text-slate-600">
                <li><Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="text-center text-sm text-slate-400">
                &copy; {new Date().getFullYear()} Zyorix Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
        <CalScriptLoader />
        <CalFloating />
      </body>
    </html>
  );
}










