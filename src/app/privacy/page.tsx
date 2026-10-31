import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Principles | ConnectSphere",
  description:
    "Review ConnectSphere's privacy principles, prototype data practices, and commitments to candidate data privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Transparency & Data Ethics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          ConnectSphere Privacy Principles
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Our commitment to honesty, user data sovereignty, and responsible technology practices.
        </p>
      </div>

      {/* Prominent Prototype Status Disclosure */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 text-xs sm:text-sm text-amber-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <Lock className="h-4 w-4" />
          <span>Current Prototype Privacy Status (Phase 1)</span>
        </div>
        <p className="leading-relaxed">
          ConnectSphere is currently operating strictly as a <strong>frontend prototype</strong>.
          We do not collect passwords, transmit resumes to cloud servers, or store personally
          identifiable information (PII) in databases during Phase 1.
        </p>
        <p className="leading-relaxed text-amber-800">
          We deliberately avoid claiming certifications, audit standards, or statutory compliance
          labels that have not yet undergone formal legal and security verification.
        </p>
      </div>

      {/* Planned Phase 2 Principles */}
      <div className="space-y-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Data Minimization</h2>
          <p>
            When account creation and portfolio storage launch in Phase 2, ConnectSphere will only
            request information strictly necessary to facilitate career discovery and skills
            verification (e.g., email address, technical competencies, and project portfolio links).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. Candidate Portfolio Control</h2>
          <p>
            You own your data. Job seekers and students will retain full control over which
            organizations can view their contact information and project deliverables. Portfolios
            can be made public, unlisted, or restricted to applied employers at any time.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Zero Data Monetization / No Third-Party Sales</h2>
          <p>
            ConnectSphere will never sell candidate contact information, resumes, or search habits
            to third-party advertising brokers or data harvesting networks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Local Storage & Client Cookies</h2>
          <p>
            During Phase 1, interface preferences (such as search keyword filters) are maintained in
            standard URL parameters and transient browser state. No invasive cross-site tracking
            pixels or third-party analytics trackers are embedded.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">5. Continuous Privacy Evolution</h2>
          <p>
            As ConnectSphere scales from Bangladesh to international markets, our data handling
            standards will be audited to meet strict global data protection regulations and local
            cybersecurity statutes.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Last revised: Phase 1 Prototype Baseline (October 2026)</span>
          <Link href="/about" className="font-semibold text-teal-700 hover:underline">
            About Our Mission →
          </Link>
        </div>
      </div>
    </div>
  );
}

