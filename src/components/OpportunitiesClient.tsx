"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DEMO_OPPORTUNITIES } from "@/data/opportunities";
import { OpportunityCard } from "@/components/OpportunityCard";
import { SearchFilterBar } from "@/components/SearchFilterBar";
import { Opportunity, OpportunityFilters } from "@/types/opportunity";
import { getOpportunities, ApiError, API_BASE_URL } from "@/lib/api";
import {
  Briefcase,
  SearchX,
  RotateCcw,
  Database,
  AlertTriangle,
  RefreshCw,
  ServerOff,
} from "lucide-react";

export function OpportunitiesClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [isUsingDemoFallback, setIsUsingDemoFallback] = useState<boolean>(false);
  const [retryTrigger, setRetryTrigger] = useState<number>(0);

  // Derive active filters from URL query parameters
  const filters: OpportunityFilters = useMemo(() => {
    return {
      query: searchParams.get("q") || "",
      location: searchParams.get("location") || "",
      type: searchParams.get("type") || "",
      arrangement: searchParams.get("arrangement") || "",
    };
  }, [searchParams]);

  // Handle filter changes and update URL query params
  const handleFilterChange = (newFilters: OpportunityFilters) => {
    const params = new URLSearchParams();
    if (newFilters.query.trim()) params.set("q", newFilters.query.trim());
    if (newFilters.location) params.set("location", newFilters.location);
    if (newFilters.type) params.set("type", newFilters.type);
    if (newFilters.arrangement) params.set("arrangement", newFilters.arrangement);

    const targetUrl = `/opportunities${params.toString() ? `?${params.toString()}` : ""}`;
    router.replace(targetUrl, { scroll: false });
  };

  const handleReset = () => {
    router.replace("/opportunities", { scroll: false });
  };

  useEffect(() => {
    let isCancelled = false;

    getOpportunities(filters, 1, 50)
      .then((response) => {
        if (isCancelled) return;
        setOpportunities(response.items);
        setTotalCount(response.total);
        setIsUsingDemoFallback(false);
        setLoading(false);
      })
      .catch((err) => {
        if (isCancelled) return;
        // Backend offline or unreachable: fall back to local dataset explicitly
        setIsUsingDemoFallback(true);

        const q = filters.query.toLowerCase().trim();
        const loc = filters.location.toLowerCase().trim();
        const type = filters.type.toLowerCase().trim();
        const arr = filters.arrangement.toLowerCase().trim();

        const fallbackFiltered = DEMO_OPPORTUNITIES.filter((item) => {
          if (q) {
            const matchesTitle = item.title.toLowerCase().includes(q);
            const matchesOrg = item.organization.toLowerCase().includes(q);
            const matchesDesc = item.shortDescription.toLowerCase().includes(q);
            const matchesSkill = item.skills.some((s) => s.toLowerCase().includes(q));
            if (!matchesTitle && !matchesOrg && !matchesDesc && !matchesSkill) return false;
          }
          if (loc) {
            if (loc === "remote") {
              if (item.arrangement !== "remote" && item.city !== "Remote") return false;
            } else if (item.city.toLowerCase() !== loc) {
              return false;
            }
          }
          if (type && item.type !== type) return false;
          if (arr && item.arrangement !== arr) return false;
          return true;
        });

        setOpportunities(fallbackFiltered);
        setTotalCount(fallbackFiltered.length);
        setLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [filters, retryTrigger]);

  const handleRetry = () => {
    setLoading(true);
    setRetryTrigger((prev) => prev + 1);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Opportunity Catalog</span>
          </div>

          {/* Backend Connection Indicator Badge */}
          {!loading && (
            <div>
              {isUsingDemoFallback ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 border border-amber-200">
                  <ServerOff className="h-3.5 w-3.5 text-amber-600" />
                  <span>Offline Mode (Local Demonstration Data)</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 border border-teal-200">
                  <Database className="h-3.5 w-3.5 text-teal-600" />
                  <span>Live Database API Connected</span>
                </span>
              )}
            </div>
          )}
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Explore Opportunities
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Filter through jobs, internships, freelance gigs, student leadership roles, and research
          grants across Bangladesh.
        </p>
      </div>

      {/* Explicit Offline Fallback Alert */}
      {isUsingDemoFallback && (
        <div
          className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 text-amber-950 text-xs sm:text-sm"
          role="alert"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900">
                  Backend Service Offline — Explicit Local Demo Mode Active
                </p>
                <p className="text-amber-800 leading-relaxed mt-0.5">
                  Could not reach the FastAPI backend at <code className="font-mono">{API_BASE_URL}</code>.
                  Showing local offline demonstration opportunities. No fake database connection is
                  claimed.
                </p>
              </div>
            </div>
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-200/80 hover:bg-amber-200 text-amber-900 font-bold text-xs shrink-0 transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Retry Backend</span>
            </button>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <SearchFilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        resultCount={totalCount}
      />

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs animate-pulse space-y-4"
            >
              <div className="h-5 w-24 bg-slate-200 rounded-md" />
              <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
              <div className="h-4 w-1/2 bg-slate-200 rounded-md" />
              <div className="h-16 w-full bg-slate-100 rounded-lg" />
              <div className="flex gap-2">
                <div className="h-5 w-16 bg-slate-200 rounded-md" />
                <div className="h-5 w-16 bg-slate-200 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Opportunity Cards Grid */}
      {!loading && opportunities.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && opportunities.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center my-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 mb-4">
            <SearchX className="h-7 w-7" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-1">No matching opportunities found</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
            We couldn&apos;t find any opportunities matching your current filters. Try adjusting your
            keyword or clearing individual filters.
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
