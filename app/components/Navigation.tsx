"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Toggle clicked! Current state:", mobileMenuOpen);
    const newState = !mobileMenuOpen;
    console.log("New state will be:", newState);
    setMobileMenuOpen(newState);
    alert(`Menu is now: ${newState ? 'OPEN' : 'CLOSED'}`);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3" onClick={closeMobileMenu}>
          <Image
            src="/logo-full.svg"
            width={240}
            height={60}
            className="h-12 md:h-14 w-auto"
            alt="Zyorix Logo"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/contact"
            className="ml-2 rounded-xl bg-emerald-500 text-white px-3 py-1.5 font-semibold hover:bg-emerald-600 transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors bg-emerald-100 border-2 border-emerald-500"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          style={{ zIndex: 9999 }}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="mobile-menu-backdrop fixed inset-0 bg-slate-900/20 backdrop-blur-sm md:hidden z-40"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className="mobile-menu-panel fixed top-14 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl md:hidden z-50 overflow-y-auto">
            <nav className="flex flex-col p-6 space-y-1">
              <Link
                href="/services"
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-slate-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-slate-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/case-studies"
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-slate-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-slate-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-slate-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-slate-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-4 px-4 py-3 text-base font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-colors text-center"
              >
                Book Consultation
              </Link>

              {/* Footer Links */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="space-y-1">
                  <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Legal
                  </p>
                  <Link
                    href="/privacy"
                    onClick={closeMobileMenu}
                    className="px-4 py-2 text-sm text-slate-600 hover:text-emerald-600 block transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    onClick={closeMobileMenu}
                    className="px-4 py-2 text-sm text-slate-600 hover:text-emerald-600 block transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
