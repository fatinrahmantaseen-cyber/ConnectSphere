import React from "react";
import { AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NoticeBannerProps {
  className?: string;
  showExploreLink?: boolean;
}

export function NoticeBanner({ className = "", showExploreLink = true }: NoticeBannerProps) {
  return (
    <div
      className={`rounded-xl border border-teal-200/80 bg-teal-50/70 p-3.5 text-slate-800 text-xs sm:text-sm ${className}`}
      role="status"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">
            i
          </span>
          <p>
            <strong className="font-semibold text-slate-900">Prototype Demonstration:</strong> All
            opportunity records and organization profiles are realistic demonstration data. Real
            database connections and live applications will be introduced in Phase 2.
          </p>
        </div>
        {showExploreLink && (
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-1 font-semibold text-teal-800 hover:text-teal-950 underline underline-offset-2 shrink-0 transition-colors"
          >
            <span>Explore Demo Data</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

