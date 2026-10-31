import React from "react";
import Link from "next/link";
import { Compass, ShieldCheck, MapPin, Mail, Sparkles, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/90 bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Mission column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-teal-400">
                <Compass className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Connect<span className="text-teal-600">Sphere</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-teal-800">
              Your Skills. Your Opportunities. Your Future.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              ConnectSphere bridges the gap between ambitious students, fresh graduates, skilled
              freelancers, and progressive employers. Born with a focus on Bangladesh&apos;s youth
              talent ecosystem, engineered for international scalability.
            </p>

            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-600">
              <MapPin className="h-3.5 w-3.5 text-teal-600 shrink-0" />
              <span>Initial Focus: Dhaka, Chattogram, Sylhet & Remote Bangladesh</span>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Explore Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/opportunities"
                  className="text-slate-600 hover:text-teal-700 transition-colors"
                >
                  Explore Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/career-navigator"
                  className="text-slate-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Career Navigator</span>
                  <span className="rounded bg-teal-100 px-1 py-0.2 text-[10px] font-semibold text-teal-800">
                    Preview
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/employers"
                  className="text-slate-600 hover:text-teal-700 transition-colors"
                >
                  Employer Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#bangladesh-hub"
                  className="text-slate-600 hover:text-teal-700 transition-colors"
                >
                  Bangladesh Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/opportunities?type=internship"
                  className="text-slate-600 hover:text-teal-700 transition-colors"
                >
                  Student Internships
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Transparency & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-teal-700 transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-600 hover:text-teal-700 transition-colors"
                >
                  Privacy Principles
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-teal-700 transition-colors">
                  Terms of Prototype
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-teal-700 transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              <span>Phase 1 Frontend Prototype Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              ConnectSphere is currently operating in <strong>Phase 1 Preview</strong>. Job postings,
              organization profiles, and compensation bands shown are realistic demonstration
              data curated to showcase platform functionality. No database accounts are persisted,
              and live application submission will be activated in Phase 2 upon technical approval.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {currentYear} ConnectSphere. All rights reserved.</p>
            <p className="text-slate-400">
              Built with Next.js App Router, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

