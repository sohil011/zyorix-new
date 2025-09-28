import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zyorix | Independent FinOps Consultancy for AWS, Azure & GCP",
  description: "Assess, optimize, and govern cloud spend with Zyorix - independent FinOps experts for AWS, Azure, and GCP.",
  metadataBase: new URL("https://www.zyorix.com"),
  openGraph: {
    title: "Zyorix | Independent FinOps Consultancy",
    description: "Independent FinOps experts for AWS, Azure & GCP. Assessment to ongoing governance.",
    images: ["/img/og/social-share.webp"],
    url: "https://www.zyorix.com",
    siteName: "Zyorix"
  },
  twitter: { card: "summary_large_image", title: "Zyorix", description: "Independent FinOps experts." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only p-2 bg-white">Skip to content</a>

        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/zyorix-logo-embedded.svg"
                alt="Zyorix Logo"
                width={120}
                height={24}
                priority
              />
              <span className="font-semibold">Zyorix</span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/contact" className="ml-2 rounded-xl bg-emerald-500 text-white px-3 py-1.5 font-semibold">
                Book Consultation
              </Link>
            </div>
          </nav>
        </header>

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
                <li><Link href="/case-studies">Case Studies</Link></li>
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
          <div className="text-center text-xs text-slate-500 pb-6">
            &copy; {new Date().getFullYear()} Zyorix.com. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
