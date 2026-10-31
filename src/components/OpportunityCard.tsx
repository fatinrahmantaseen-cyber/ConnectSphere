import React from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Banknote,
  CheckCircle2,
} from "lucide-react";
import { Opportunity } from "@/types/opportunity";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const getTypeColor = (type: Opportunity["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-blue-50 text-blue-700 border-blue-200/70";
      case "internship":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/70";
      case "freelance":
        return "bg-purple-50 text-purple-700 border-purple-200/70";
      case "student":
        return "bg-amber-50 text-amber-800 border-amber-200/70";
      case "scholarship":
        return "bg-indigo-50 text-indigo-700 border-indigo-200/70";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getArrangementColor = (arrangement: Opportunity["arrangement"]) => {
    switch (arrangement) {
      case "remote":
        return "bg-teal-50 text-teal-800 border-teal-200/70";
      case "hybrid":
        return "bg-sky-50 text-sky-700 border-sky-200/70";
      case "on-site":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  const formatTypeLabel = (type: Opportunity["type"]) => {
    switch (type) {
      case "full-time":
        return "Full-Time";
      case "internship":
        return "Internship";
      case "freelance":
        return "Freelance Project";
      case "student":
        return "Student Opportunity";
      case "scholarship":
        return "Scholarship / Fellowship";
    }
  };

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-teal-400/80 transition-all duration-200">
      <div>
        {/* Top Badges & Sample Data Label */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold border ${getTypeColor(
                opportunity.type
              )}`}
            >
              {formatTypeLabel(opportunity.type)}
            </span>
            <span
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold capitalize border ${getArrangementColor(
                opportunity.arrangement
              )}`}
            >
              {opportunity.arrangement}
            </span>
          </div>

          <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200/60 uppercase tracking-wide">
            Sample Data
          </span>
        </div>

        {/* Title & Organization */}
        <div className="mb-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
            <Link
              href={`/opportunities/${opportunity.id}`}
              className="focus:outline-hidden focus:underline"
            >
              {opportunity.title}
            </Link>
          </h3>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 mt-1">
            <Building2 className="h-4 w-4 text-slate-400 shrink-0" />
            <span className="font-medium text-slate-800">{opportunity.organization}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">{opportunity.organizationType}</span>
          </div>
        </div>

        {/* Location & Compensation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mb-3.5 py-2 px-3 rounded-xl bg-slate-50/80 border border-slate-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-teal-600 shrink-0" />
            <span className="truncate">{opportunity.location}</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
            <Banknote className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{opportunity.compensation}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {opportunity.shortDescription}
        </p>

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {opportunity.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
          {opportunity.skills.length > 4 && (
            <span className="rounded-md bg-slate-50 px-1.5 py-0.5 text-[11px] text-slate-500">
              +{opportunity.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Footer / CTA Row */}
      <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span>Deadline: {opportunity.deadline}</span>
        </div>

        <Link
          href={`/opportunities/${opportunity.id}`}
          className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-900 group-hover:translate-x-0.5 transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

