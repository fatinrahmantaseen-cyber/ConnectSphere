import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Prototype | ConnectSphere",
  description: "Terms and guidelines governing the ConnectSphere Phase 1 prototype preview.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
          <FileText className="h-3.5 w-3.5" />
          <span>Platform Guidelines</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms of Prototype Preview
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Standard terms governing user interaction with ConnectSphere during the Phase 1
          demonstration preview.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 text-xs sm:text-sm text-amber-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <ShieldAlert className="h-4 w-4" />
          <span>Prototype Scope Disclosure</span>
        </div>
        <p className="leading-relaxed">
          The opportunity records, salary bands, and organization profiles displayed on ConnectSphere
          in Phase 1 are sample demonstration assets curated to showcase the platform experience.
          They do not constitute binding employment offers or formal recruitment contracts.
        </p>
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Acceptance of Demonstration Terms</h2>
          <p>
            By accessing and exploring the ConnectSphere prototype, you acknowledge that all
            interactions, mock buttons, and career roadmaps are provided for evaluation, user
            feedback, and design testing purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Intellectual Property</h2>
          <p>
            All original branding, interface component designs, and code architectures created for
            ConnectSphere are protected. Demonstration company names are used strictly for
            illustrative, non-commercial design prototyping.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Phase 2 Transition</h2>
          <p>
            When ConnectSphere moves into Phase 2 with real employer postings and user
            authentication, formal terms of service and employment verification protocols will be
            published and presented for explicit agreement.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-semibold text-teal-700 hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Home</span>
          </Link>
          <span>ConnectSphere Prototype v1.0</span>
        </div>
      </div>
    </div>
  );
}

