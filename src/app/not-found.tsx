import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center space-y-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-teal-600">
        <Compass className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
          Page Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          404 — Opportunity Ahead
        </h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          The page or opportunity listing you are looking for does not exist in our catalog or has
          been updated.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-xs"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/opportunities"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shadow-xs"
        >
          <Search className="h-3.5 w-3.5" />
          <span>Browse Opportunities</span>
        </Link>
      </div>
    </div>
  );
}

