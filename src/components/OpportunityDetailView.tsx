"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Calendar,
  Clock,
  ArrowLeft,
  Banknote,
  Briefcase,
  Globe,
  Share2,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import { Opportunity } from "@/types/opportunity";
import { ApplyModal } from "@/components/ApplyModal";
import { OpportunityCard } from "@/components/OpportunityCard";

interface OpportunityDetailViewProps {
  opportunity: Opportunity;
  similarOpportunities: Opportunity[];
}

export function OpportunityDetailView({
  opportunity,
  similarOpportunities,
}: OpportunityDetailViewProps) {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const formatTypeLabel = (type: Opportunity["type"]) => {
    switch (type) {
      case "full-time":
        return "Full-Time Position";
      case "internship":
        return "Mentored Internship";
      case "freelance":
        return "Freelance Project";
      case "student":
        return "Student Program";
      case "scholarship":
        return "Scholarship / Fellowship";
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Top Breadcrumb & Back button */}
      <div className="flex items-center justify-between">
        <Link
          href="/opportunities"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all opportunities</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <Share2 className="h-3.5 w-3.5" />
          <span>{copied ? "Link Copied!" : "Share Listing"}</span>
        </button>
      </div>

      {/* Prominent Demonstration Notice Banner */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 text-amber-900 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-950">Demonstration Listing Notice</p>
            <p className="text-amber-800 leading-relaxed mt-0.5">
              This record is realistic demonstration data created for the ConnectSphere Phase 1
              prototype. Real employer recruitment and candidate pipelines will launch in Phase 2.
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-lg bg-amber-200/70 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
          Sample Data Only
        </span>
      </div>

      {/* Main Listing Header Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-teal-50 border border-teal-200/70 px-2.5 py-1 text-xs font-semibold text-teal-800">
                {formatTypeLabel(opportunity.type)}
              </span>
              <span className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 capitalize">
                {opportunity.arrangement} Arrangement
              </span>
              <span className="rounded-lg bg-blue-50 border border-blue-200/70 px-2.5 py-1 text-xs font-semibold text-blue-800">
                {opportunity.experienceLevel}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {opportunity.title}
            </h1>

            {/* Organization info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <Building2 className="h-4 w-4 text-slate-500" />
                <span>{opportunity.organization}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-teal-600" />
                <span>{opportunity.location}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 font-medium text-emerald-700">
                <Banknote className="h-4 w-4 text-emerald-600" />
                <span>{opportunity.compensation}</span>
              </div>
            </div>
          </div>

          {/* Apply Button CTA */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => setApplyModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              <span>Apply for this Position</span>
              <Sparkles className="h-4 w-4" />
            </button>
            <p className="text-[11px] text-slate-400 text-center">
              Phase 1 interactive prototype
            </p>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 text-xs">
          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-slate-400 block mb-1">Target Group</span>
            <span className="font-semibold text-slate-800">{opportunity.targetAudience}</span>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-slate-400 block mb-1">Posted On</span>
            <span className="font-semibold text-slate-800">{opportunity.postedDate}</span>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-slate-400 block mb-1">Application Deadline</span>
            <span className="font-semibold text-slate-800">{opportunity.deadline}</span>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-slate-400 block mb-1">Verification Status</span>
            <span className="font-semibold text-teal-700 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
              Demo Verified
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Details, Responsibilities, Requirements */}
        <div className="lg:col-span-8 space-y-8">
          {/* Detailed Overview */}
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100">
              Role Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {opportunity.description}
            </p>
          </section>

          {/* Key Responsibilities */}
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100">
              Key Responsibilities
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              {opportunity.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements & Qualifications */}
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100">
              Requirements & Qualifications
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              {opportunity.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 text-xs font-bold mt-0.5">
                    •
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits & Perks */}
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100">
              Benefits & Growth Support
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              {opportunity.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mt-0.5">
                    ★
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Sidebar: Skills, Application Process, Organization */}
        <div className="lg:col-span-4 space-y-6">
          {/* Required Skills Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
              Required Technical Competencies
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {opportunity.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-teal-50 border border-teal-200/70 px-3 py-1.5 text-xs font-medium text-teal-900"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Tip: Prepare verifiable GitHub repos or project case studies demonstrating these skills.
            </p>
          </div>

          {/* Organization Info Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
              About the Organization
            </h3>
            <p className="font-semibold text-slate-900">{opportunity.organization}</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              An active participant in Bangladesh&apos;s digital workforce development. Organization
              profile verified for Phase 1 prototype demonstration.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              <span>Location: {opportunity.location}</span>
            </div>
          </div>

          {/* Quick Apply Action Box */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900 text-white p-6 shadow-md space-y-4">
            <h3 className="text-base font-bold text-white">Interested in this position?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Test the application action to view the demonstration readiness notice and review
              what materials will be required in Phase 2.
            </p>
            <button
              onClick={() => setApplyModalOpen(true)}
              className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Test Application Action
            </button>
          </div>
        </div>
      </div>

      {/* Similar Opportunities Section */}
      {similarOpportunities.length > 0 && (
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Similar Demonstration Listings</h2>
            <Link
              href="/opportunities"
              className="text-xs font-semibold text-teal-700 hover:underline"
            >
              View catalog →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarOpportunities.map((similar) => (
              <OpportunityCard key={similar.id} opportunity={similar} />
            ))}
          </div>
        </div>
      )}

      {/* Accessible Apply Modal */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        opportunity={opportunity}
      />
    </div>
  );
}

