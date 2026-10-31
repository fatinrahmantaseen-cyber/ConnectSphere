import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Target,
  Globe,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ConnectSphere",
  description:
    "Learn about ConnectSphere's mission to bridge education and employment through verified skills and transparent career opportunities.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
          <Compass className="h-3.5 w-3.5" />
          <span>About ConnectSphere</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Your Skills. Your Opportunities. Your Future.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          ConnectSphere is a modern career-tech platform engineered to help students, fresh
          graduates, freelancers, and progressive employers discover opportunities, develop
          competencies, and connect with radical transparency.
        </p>
      </div>

      {/* Mission & Problem Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <Target className="h-4 w-4" />
              <span>The Problem We Address</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              The Experience Paradox in Bangladesh
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every year, thousands of talented students graduate from Bangladeshi colleges and
              universities, only to encounter job listings that demand 2-3 years of professional
              experience for entry-level positions.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              At the same time, employers report difficulty assessing whether applicants possess
              practical development skills or merely theoretical exam knowledge.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
            ConnectSphere replaces the experience barrier with verified practical evidence.
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Our Strategic Mission</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              From Skills to Meaningful Opportunities
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We empower youth to identify the exact technical competencies demanded by today&apos;s
              job market, construct verifiable portfolios of production work, and discover
              authentic career listings with honest compensation.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Beginning with a laser focus on Bangladesh, the platform architecture is intentionally
              designed for future expansion across emerging digital labor markets globally.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
            Initial audience: Bangladesh • Architecture: Internationally scalable.
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
            Guiding Values
          </h2>
          <p className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Our Architectural Principles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60 space-y-2">
            <span className="text-teal-700 font-bold text-sm">01. Skills Over Pedigree</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              We value working code, design prototypes, and documented deliverables over institutional
              prestige or paper degrees.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60 space-y-2">
            <span className="text-teal-700 font-bold text-sm">02. Radical Transparency</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every listing must state salary or stipend ranges, specific work arrangements, and
              realistic technical requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60 space-y-2">
            <span className="text-teal-700 font-bold text-sm">03. Decentralized Access</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Opportunities should not be confined to capital cities. We champion remote access
              and regional talent hubs across all divisions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60 space-y-2">
            <span className="text-teal-700 font-bold text-sm">04. Privacy by Design</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              We do not sell user data, spam applicants, or share contact details without explicit,
              affirmative candidate consent.
            </p>
          </div>
        </div>
      </div>

      {/* Prototype Status Disclosure */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wide">
          <ShieldCheck className="h-4 w-4" />
          <span>Phase 1 Prototype Status & Honesty Notice</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">Where We Are Right Now</h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          ConnectSphere is in active frontend prototype development. We believe in building with
          integrity: we do not publish fake user counters, fabricated testimonials, or invent
          partnerships. All current opportunity records are clearly marked demonstration data
          created to validate interface design, filtering mechanics, and responsive usability.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Production databases, live employer onboarding, and AI model integrations will follow in
          scheduled subsequent phases upon architectural signoff.
        </p>

        <div className="pt-2">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Explore Demo Catalog</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

