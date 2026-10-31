"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Compass,
  GraduationCap,
  Target,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

const EDUCATION_LEVELS = [
  "Undergraduate Student (1st - 3rd Year)",
  "Final-Year University Student",
  "Fresh Graduate (Within 1 Year)",
  "Master's / Postgraduate Student",
  "Self-Taught Developer / Bootcamp Graduate",
  "Career Switcher",
];

const AVAILABLE_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "Tailwind CSS",
  "HTML5/CSS3",
  "Git & GitHub",
  "Docker",
  "Figma",
  "FastAPI",
  "PostgreSQL",
  "Flutter",
  "Data Analysis",
];

const CAREER_INTERESTS = [
  "Frontend Web Development",
  "Backend & Cloud Systems",
  "Full-Stack Web Engineering",
  "Mobile App Development",
  "UI/UX & Product Design",
  "Data Science & Analytics",
  "AI & Natural Language Processing",
  "Technical Writing & Developer Relations",
];

export default function CareerNavigatorPage() {
  const [education, setEducation] = useState(EDUCATION_LEVELS[1]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "JavaScript",
    "React",
    "HTML5/CSS3",
  ]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Frontend Web Development",
  ]);
  const [targetGoal, setTargetGoal] = useState("Full-Stack Web Engineering");
  const [showRoadmap, setShowRoadmap] = useState(false);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleGenerateRoadmap = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRoadmap(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Interactive Career Planner</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          AI Career Navigator Prototype
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Plan your skills progression and understand requirements for technology careers in
          Bangladesh and global remote markets.
        </p>
      </div>

      {/* Honest AI Status Banner */}
      <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-4 sm:p-5 text-xs sm:text-sm text-slate-800">
        <div className="flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900">Prototype Feature Notice</p>
            <p className="text-slate-600 leading-relaxed mt-0.5">
              Personalized AI recommendation models and real-time LLM gap analysis are scheduled
              for <strong>Phase 2</strong>. This frontend prototype illustrates the future user
              experience using deterministic, curriculum-aligned career milestones. No live AI APIs
              or third-party models are connected in this phase.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 space-y-6">
          <form
            onSubmit={handleGenerateRoadmap}
            className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6"
          >
            <h2 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Compass className="h-5 w-5 text-teal-600" />
              <span>Define Your Background & Target</span>
            </h2>

            {/* 1. Education Level */}
            <div className="space-y-2">
              <label
                htmlFor="education-select"
                className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5"
              >
                <GraduationCap className="h-4 w-4 text-slate-500" />
                <span>1. Current Academic / Career Stage</span>
              </label>
              <select
                id="education-select"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              >
                {EDUCATION_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Current Skills Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-slate-500" />
                  <span>2. Current Skills (Select all that apply)</span>
                </span>
                <span className="text-[11px] text-teal-700 font-semibold">
                  {selectedSkills.length} selected
                </span>
              </label>
              <div className="flex flex-wrap gap-2 pt-1 max-h-48 overflow-y-auto p-1 rounded-xl bg-slate-50/60 border border-slate-100">
                {AVAILABLE_SKILLS.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? "bg-teal-600 text-white shadow-xs font-semibold"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {isSelected ? `✓ ${skill}` : `+ ${skill}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Interests */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-slate-500" />
                  <span>3. Areas of Interest</span>
                </span>
                <span className="text-[11px] text-teal-700 font-semibold">
                  {selectedInterests.length} selected
                </span>
              </label>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {CAREER_INTERESTS.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 text-white font-medium"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Target Career Goal */}
            <div className="space-y-2">
              <label
                htmlFor="goal-select"
                className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5"
              >
                <Target className="h-4 w-4 text-slate-500" />
                <span>4. Primary Career Goal</span>
              </label>
              <select
                id="goal-select"
                value={targetGoal}
                onChange={(e) => setTargetGoal(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              >
                <option value="Full-Stack Web Engineering">
                  Full-Stack Web Engineer (Next.js & Node)
                </option>
                <option value="Frontend Engineering">Frontend Developer (React / Next.js)</option>
                <option value="Backend Engineering">Backend Cloud Engineer (Python / FastAPI)</option>
                <option value="Mobile App Development">Mobile Engineer (Flutter / Android)</option>
                <option value="UI/UX Product Design">UI/UX Product Designer (Figma & UX)</option>
                <option value="Data & AI Research">Data Analyst / AI Researcher</option>
              </select>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              <span>Generate Prototype Roadmap</span>
            </button>
          </form>
        </div>

        {/* Roadmap Display Column */}
        <div className="lg:col-span-6 space-y-6">
          {showRoadmap ? (
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                    Demonstration Roadmap Preview
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{targetGoal}</h2>
                </div>
                <span className="rounded-md bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 text-xs font-semibold">
                  Sample Roadmap
                </span>
              </div>

              {/* Summary */}
              <div className="rounded-xl bg-slate-50 p-4 text-xs text-slate-600 space-y-2">
                <p>
                  <strong>Profile Stage:</strong> {education}
                </p>
                <p>
                  <strong>Starting Competencies:</strong>{" "}
                  {selectedSkills.length > 0 ? selectedSkills.join(", ") : "None selected yet"}
                </p>
              </div>

              {/* Milestones */}
              <div className="space-y-4">
                {/* Milestone 1 */}
                <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-900 uppercase tracking-wide">
                      Milestone 1 • Foundations & Architecture
                    </span>
                    <span className="text-[11px] font-semibold text-teal-700">Weeks 1 - 4</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Master TypeScript strict types, component modularization, and asynchronous state
                    handling. Build solid foundation for modern web frameworks.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="rounded bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700 border border-teal-100">
                      TypeScript Core
                    </span>
                    <span className="rounded bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700 border border-teal-100">
                      REST & HTTP Semantics
                    </span>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                      Milestone 2 • Production Projects
                    </span>
                    <span className="text-[11px] font-semibold text-blue-700">Weeks 5 - 10</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Construct 2 full-scale projects with authentication, database migrations, and
                    clean deployment pipelines. Publish code with rigorous documentation.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="rounded bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700 border border-blue-100">
                      Next.js App Router
                    </span>
                    <span className="rounded bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700 border border-blue-100">
                      PostgreSQL / Prisma
                    </span>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Milestone 3 • Opportunity Matching
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600">Weeks 11 - 12</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Prepare your verifiable skills portfolio and apply to entry-level roles or
                    internships matching your exact stack.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/opportunities"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
                    >
                      <span>Explore matching opportunities in catalog</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                In Phase 2, this roadmap will be dynamically customized using real-time market data
                and GitHub project analysis.
              </div>
            </div>
          ) : (
            /* Placeholder before form submission */
            <div className="h-full rounded-3xl border border-dashed border-slate-300 bg-slate-50/50 p-8 flex flex-col items-center justify-center text-center text-slate-500 space-y-4 min-h-[400px]">
              <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-teal-600 shadow-xs">
                <Sparkles className="h-7 w-7" />
              </div>
              <div className="max-w-sm space-y-1">
                <h3 className="text-base font-bold text-slate-800">Ready to plan your path?</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Select your background and career target on the left, then click &quot;Generate
                  Prototype Roadmap&quot; to preview a structured milestone plan.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

