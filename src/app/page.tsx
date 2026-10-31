import React from "react";
import Link from "next/link";
import {
  Compass,
  Briefcase,
  GraduationCap,
  Globe,
  Laptop,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
  Users,
  Target,
  CheckCircle,
  Building2,
  ShieldAlert,
  Search,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { DEMO_OPPORTUNITIES, CATEGORIES } from "@/data/opportunities";
import { OpportunityCard } from "@/components/OpportunityCard";
import { HeroSearch } from "@/components/HeroSearch";
import { NoticeBanner } from "@/components/NoticeBanner";

export default function HomePage() {
  const featuredOpportunities = DEMO_OPPORTUNITIES.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Prototype Transparency Notice */}
      <div className="bg-teal-900 text-teal-100 px-4 py-2 text-xs font-medium text-center">
        <span>ConnectSphere Phase 1 Frontend Prototype • Operating with curated demonstration data.</span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-radial from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 text-xs font-semibold text-teal-300 mb-6 backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span>ConnectSphere • Bangladesh to Global Career Platform</span>
          </div>

          {/* Required Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight sm:leading-none">
            Your Next Opportunity Starts Here.
          </h1>

          {/* Required Supporting Text */}
          <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Discover jobs, internships, and projects. Build the skills employers need. Turn your
            potential into real opportunities.
          </p>

          {/* Hero Search Box */}
          <div className="mt-8 sm:mt-10 w-full flex justify-center">
            <HeroSearch />
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-teal-500/20"
            >
              <Briefcase className="h-4 w-4" />
              <span>Explore Opportunities</span>
            </Link>

            <Link
              href="/career-navigator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
            >
              <Sparkles className="h-4 w-4 text-teal-400" />
              <span>Build Your Career</span>
            </Link>
          </div>

          {/* Initial Bangladesh Focus Tag */}
          <div className="mt-8 inline-flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-teal-400" />
            <span>Initial regional focus: Dhaka • Chattogram • Sylhet • Remote across Bangladesh</span>
          </div>
        </div>
      </section>

      {/* Trust and Purpose Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
              Our Core Purpose
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Empowering Every Stage of Your Career Journey
            </p>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              ConnectSphere is built to solve the career discovery and skill disconnect in
              Bangladesh. We connect education with real industry demands without empty promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Students */}
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 flex flex-col justify-between hover:border-teal-500/50 transition-colors">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Students & Undergrads</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discover campus ambassador initiatives, student hackathons, and early internships
                  that translate academic learning into industry-ready skill sets.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs font-semibold text-blue-700">
                Early skill building & mentorship
              </div>
            </div>

            {/* Fresh Graduates */}
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 flex flex-col justify-between hover:border-teal-500/50 transition-colors">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Fresh Graduates</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Find transparent entry-level openings where employers evaluate demonstrated
                  practical competencies instead of requiring impossible years of experience.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs font-semibold text-emerald-700">
                Verified entry-level roles
              </div>
            </div>

            {/* Freelancers & Project Builders */}
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 flex flex-col justify-between hover:border-teal-500/50 transition-colors">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700 mb-4">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Freelancers</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Connect with domestic startups and international companies offering structured,
                  milestone-based contracts and competitive compensation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs font-semibold text-purple-700">
                Milestone projects & remote work
              </div>
            </div>

            {/* Employers */}
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 flex flex-col justify-between hover:border-teal-500/50 transition-colors">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-800 mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Hiring Teams</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Recruit talented Bangladeshi youth based on verified project evidence and skills
                  rather than keyword-stuffed traditional CVs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs font-semibold text-slate-800">
                Skills-first talent sourcing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Categories Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                Browse By Track
              </h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Opportunity Categories
              </p>
              <p className="mt-1 text-slate-600 text-sm">
                Every category connects directly to our active demonstration filter.
              </p>
            </div>

            <Link
              href="/opportunities"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
            >
              <span>View all listings</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Full-time */}
            <Link
              href="/opportunities?type=full-time"
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-4 group-hover:scale-105 transition-transform">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Full-Time Jobs
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Permanent engineering, product, design, and operations roles with local and
                  regional tech enterprises.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-blue-700">Filter full-time</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            {/* 2. Internships */}
            <Link
              href="/opportunities?type=internship"
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 mb-4 group-hover:scale-105 transition-transform">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Internships
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured paid internships providing hands-on mentorship for current university
                  students and recent graduates.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-700">Filter internships</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            {/* 3. Remote */}
            <Link
              href="/opportunities?arrangement=remote"
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 mb-4 group-hover:scale-105 transition-transform">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Remote Opportunities
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Distributed roles allowing professionals across Bangladesh to work from any
                  division or district.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-teal-700">Filter remote</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            {/* 4. Freelance */}
            <Link
              href="/opportunities?type=freelance"
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 mb-4 group-hover:scale-105 transition-transform">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Freelance Projects
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Contractual projects with clearly defined deliverables, scopes, and milestone
                  payout schedules.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-purple-700">Filter freelance</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            {/* 5. Student */}
            <Link
              href="/opportunities?type=student"
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800 mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Student Opportunities
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Campus ambassador programs, hardware maker incubators, and student chapter
                  leadership roles.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-800">Filter student</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            {/* 6. Scholarship */}
            <Link
              href="/opportunities?type=scholarship"
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 mb-4 group-hover:scale-105 transition-transform">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Scholarships & Competitions
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Competitive research fellowships, compute grants, and youth technology
                  competitions.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-700">Filter scholarships</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Opportunities Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Curated Listings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Demonstration Opportunities
              </h2>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-1 font-semibold text-sm text-teal-700 hover:text-teal-900"
            >
              <span>Explore all opportunities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mb-8">
            <NoticeBanner showExploreLink={false} />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-xs"
            >
              <span>View All 10 Demonstration Opportunities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
              System Architecture
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How ConnectSphere Works
            </p>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              A transparent, 4-step framework designed to take candidates from skill acquisition to
              career placement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 relative">
              <span className="text-3xl font-black text-slate-200 mb-3 block">01</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Create Your Profile</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Highlight your verified technical skills, project repositories, education, and career
                aspirations in one portable portfolio.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 relative">
              <span className="text-3xl font-black text-slate-200 mb-3 block">02</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Discover Opportunities</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Filter through verified jobs, internships, freelance gigs, and university grants
                tailored to your location and work preference.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 relative">
              <span className="text-3xl font-black text-slate-200 mb-3 block">03</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Build Skills & Apply</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Identify concrete skill gaps using the Career Navigator and apply directly with
                demonstrated evidence of your competence.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 relative">
              <span className="text-3xl font-black text-slate-200 mb-3 block">04</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Track Your Progress</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Monitor review status, receive honest employer feedback, and continuously advance
                your professional milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Development Section (AI Career Navigator Introduction) */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-400/30 px-3 py-1 text-xs font-semibold text-teal-300">
                <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                <span>Future AI Roadmap Planning • Phase 1 Preview</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                AI Career Navigator: Map Your Skills to Real Roles
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                ConnectSphere is developing an intelligent career navigation assistant. Rather than
                generating generic advice, the AI Navigator analyzes specific market requirements
                in Bangladesh and globally to construct personalized learning pathways.
              </p>

              {/* Honest AI Status Disclaimer */}
              <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-4 text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-teal-300 flex items-center gap-1.5">
                  <ShieldAlert className="h-4 w-4 text-teal-400" />
                  Development Status
                </p>
                <p>
                  No live AI API is connected in Phase 1. You can test the interactive Career
                  Navigator prototype form and preview structured curriculum roadmaps today.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/career-navigator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all"
                >
                  <span>Launch Career Navigator Prototype</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Visual Preview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-6 shadow-2xl text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-slate-300">
                  <span className="font-bold text-white text-sm">Target Track: Full-Stack Engineer</span>
                  <span className="rounded bg-teal-900/80 text-teal-300 px-2 py-0.5 font-mono text-[10px]">
                    Preview Mode
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60">
                    <p className="font-semibold text-slate-200">1. Current Strengths Identified</p>
                    <p className="text-slate-400 mt-1">JavaScript, React, Tailwind CSS, Git</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60">
                    <p className="font-semibold text-amber-400">2. Recommended Bridge Skills</p>
                    <p className="text-slate-400 mt-1">
                      TypeScript Generics, Next.js Server Components, PostgreSQL
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60">
                    <p className="font-semibold text-emerald-400">3. Target Opportunity Match</p>
                    <p className="text-slate-400 mt-1">
                      Junior Full-Stack Engineer at Bengal Softworks (Dhaka)
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 text-center italic pt-1">
                  Interactive preview representation — live AI model integration coming in Phase 2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bangladesh Opportunity Hub Section */}
      <section id="bangladesh-hub" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>National Talent Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Bangladesh Opportunity Hub
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Curated access for Bangladeshi talent. Prior to public employer onboarding, all
              listings will undergo strict authenticity and compensation verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hub Pillar 1 */}
            <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                <GraduationCap className="h-4 w-4 text-teal-600" />
                <h4>Students & Fresh Grads</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Focus on foundational software development, product testing, and academic-to-career
                transitions across major universities.
              </p>
              <Link
                href="/opportunities?type=student"
                className="text-xs font-semibold text-teal-700 hover:underline"
              >
                Browse Student Roles →
              </Link>
            </div>

            {/* Hub Pillar 2 */}
            <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                <Building2 className="h-4 w-4 text-blue-600" />
                <h4>Local Internships</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Mentored internship placements in tech hubs: Dhaka (Banani, Gulshan, Mohakhali) and
                Chattogram (Agrabad).
              </p>
              <Link
                href="/opportunities?type=internship"
                className="text-xs font-semibold text-blue-700 hover:underline"
              >
                View Internships →
              </Link>
            </div>

            {/* Hub Pillar 3 */}
            <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                <Globe className="h-4 w-4 text-emerald-600" />
                <h4>Remote Opportunities</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Flexible remote engineering, design, and content roles open to talent across all 8
                divisions of Bangladesh.
              </p>
              <Link
                href="/opportunities?arrangement=remote"
                className="text-xs font-semibold text-emerald-700 hover:underline"
              >
                Find Remote Roles →
              </Link>
            </div>

            {/* Hub Pillar 4 */}
            <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                <Award className="h-4 w-4 text-purple-600" />
                <h4>Grants & Competitions</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Non-dilutive research awards, climate-tech grants, and national computing
                fellowships with compute support.
              </p>
              <Link
                href="/opportunities?type=scholarship"
                className="text-xs font-semibold text-purple-700 hover:underline"
              >
                Explore Grants →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-radial from-slate-800 to-slate-900 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400">
                <Building2 className="h-4 w-4" />
                <span>For Employers & Hiring Managers</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hire Verified Youth Talent Across Bangladesh
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Publish positions, evaluate verified portfolio deliverables, and streamline your
                candidate screening process with skills-first assessment tools.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/employers"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md text-center"
              >
                <span>Preview Employer Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
