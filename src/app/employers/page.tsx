"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  Briefcase,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Send,
  Eye,
  FileCheck,
  Search,
  Filter,
} from "lucide-react";

export default function EmployersPage() {
  const [interestSubmitted, setInterestSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [hiringRole, setHiringRole] = useState("Software Engineering");

  const handleSubmitInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName.trim() && contactEmail.trim()) {
      setInterestSubmitted(true);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
          <Building2 className="h-3.5 w-3.5" />
          <span>Employer & Recruiter Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Skills-First Talent Acquisition for Bangladesh
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Cut through traditional resume clutter. ConnectSphere connects progressive tech employers
          with students, fresh graduates, and experienced engineers evaluated on verifiable skills.
        </p>
      </div>

      {/* Prototype Status Banner */}
      <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-4 sm:p-5 text-xs sm:text-sm text-slate-800">
        <div className="flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900">Employer Feature Status</p>
            <p className="text-slate-600 leading-relaxed mt-0.5">
              Employer onboarding, live posting management, and applicant pipeline tooling will be
              deployed in <strong>Phase 2</strong>. Below is a functional preview of our planned
              employer dashboard and candidate discovery workflows.
            </p>
          </div>
        </div>
      </div>

      {/* Core Employer Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. Publish Opportunities */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-4">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Publish Opportunities</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Create structured listings with clear skill requirements, transparent compensation
              ranges, and specific work arrangements.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-700">
            Phase 2 Feature
          </div>
        </div>

        {/* 2. Discover Candidates */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 mb-4">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Discover Verified Talent</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Filter prospective candidates by proven tech stacks, university backgrounds, and
              curated GitHub project evidence.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-700">
            Phase 2 Feature
          </div>
        </div>

        {/* 3. Manage Applications */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 mb-4">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Manage Pipelines</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Organize applicant stages from screening and technical interviews to offer rollout in
              a centralized Kanban workflow.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-purple-700">
            Phase 2 Feature
          </div>
        </div>

        {/* 4. Review Skill Portfolios */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 mb-4">
              <FileCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Review Portfolios</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Examine live code demonstrations and verified project deliverables instead of
              relying on unverified resume claims.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-teal-700">
            Phase 2 Feature
          </div>
        </div>
      </div>

      {/* Employer Portal Preview Mockup */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
              Interactive Design Preview
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Candidate Pipeline Dashboard Preview
            </h2>
          </div>
          <span className="rounded-md bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 text-xs font-semibold self-start sm:self-auto">
            Prototype Preview Mode
          </span>
        </div>

        {/* Mock Pipeline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1: Applied */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Applied Candidates</span>
              <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px]">3 Demo</span>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-3 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-slate-900">Tanvir Ahmed</span>
                <span className="text-[10px] text-teal-700 font-medium">92% Match</span>
              </div>
              <p className="text-[11px] text-slate-500">Next.js • TypeScript • Tailwind CSS</p>
              <div className="text-[10px] text-slate-400">Dhaka University • Fresh Grad</div>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-3 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-slate-900">Nafisa Karim</span>
                <span className="text-[10px] text-teal-700 font-medium">88% Match</span>
              </div>
              <p className="text-[11px] text-slate-500">React • Node.js • PostgreSQL</p>
              <div className="text-[10px] text-slate-400">BRAC University • Final Year</div>
            </div>
          </div>

          {/* Column 2: Technical Review */}
          <div className="rounded-2xl bg-blue-50/50 border border-blue-200/60 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-blue-900">
              <span>Technical Review</span>
              <span className="rounded-full bg-blue-200/80 px-2 py-0.5 text-[10px]">2 Demo</span>
            </div>
            <div className="rounded-xl bg-white border border-blue-200 p-3 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-slate-900">Sabbir Hossain</span>
                <span className="text-[10px] text-blue-700 font-medium">Portfolio Ready</span>
              </div>
              <p className="text-[11px] text-slate-500">Python • FastAPI • Docker</p>
              <div className="text-[10px] text-slate-400">SUST • 1 yr Experience</div>
            </div>
          </div>

          {/* Column 3: Final Stage */}
          <div className="rounded-2xl bg-emerald-50/50 border border-emerald-200/60 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
              <span>Interview Scheduled</span>
              <span className="rounded-full bg-emerald-200/80 px-2 py-0.5 text-[10px]">1 Demo</span>
            </div>
            <div className="rounded-xl bg-white border border-emerald-200 p-3 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-slate-900">Anika Chowdhury</span>
                <span className="text-[10px] text-emerald-700 font-medium">Interview Set</span>
              </div>
              <p className="text-[11px] text-slate-500">UI/UX Design • Figma • Design Tokens</p>
              <div className="text-[10px] text-slate-400">Chattogram • Mid-Level</div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 italic pt-2">
          Interactive mockup for Phase 1 preview. Real database-backed candidate evaluation will
          launch in Phase 2.
        </p>
      </div>

      {/* Early Access / Interest Registration Form */}
      <div className="rounded-3xl border border-slate-900 bg-slate-900 text-white p-6 sm:p-10 shadow-xl">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Join Early Employer Testing</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Register your interest to join the Phase 2 closed pilot. We will notify you when
              recruitment tools and candidate search become active.
            </p>
          </div>

          {interestSubmitted ? (
            <div className="rounded-2xl bg-slate-800 border border-teal-500/50 p-6 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <CheckCircle2 className="h-5 w-5" />
                <span>Interest Registered Successfully!</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you, <strong>{companyName}</strong>. As this is a Phase 1 prototype, no
                external email was sent. Your interest has been acknowledged in this prototype
                session.
              </p>
              <button
                onClick={() => setInterestSubmitted(false)}
                className="mt-3 text-xs font-semibold text-teal-400 hover:text-teal-300 underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitInterest} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Organization / Company
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Tech Bangladesh"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Work Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="hr@company.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="hiring-role"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                >
                  Primary Hiring Domain
                </label>
                <select
                  id="hiring-role"
                  value={hiringRole}
                  onChange={(e) => setHiringRole(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-teal-400"
                >
                  <option value="Software Engineering">Software Engineering & Web</option>
                  <option value="UI/UX Product Design">UI/UX & Product Design</option>
                  <option value="Data & Analytics">Data Science & Analytics</option>
                  <option value="Student Internships">Student & Fresh Graduate Internships</option>
                  <option value="Freelance Contracts">Freelance & Contract Projects</option>
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Register Employer Interest</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

