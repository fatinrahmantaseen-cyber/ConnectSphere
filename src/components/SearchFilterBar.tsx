"use client";

import React from "react";
import { Search, MapPin, Briefcase, Globe, X, RotateCcw } from "lucide-react";
import { OpportunityFilters } from "@/types/opportunity";

interface SearchFilterBarProps {
  filters: OpportunityFilters;
  onFilterChange: (filters: OpportunityFilters) => void;
  onReset: () => void;
  resultCount?: number;
}

export function SearchFilterBar({
  filters,
  onFilterChange,
  onReset,
  resultCount,
}: SearchFilterBarProps) {
  const hasActiveFilters =
    Boolean(filters.query) ||
    Boolean(filters.location) ||
    Boolean(filters.type) ||
    Boolean(filters.arrangement);

  const handleInputChange = (field: keyof OpportunityFilters, value: string) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 md:grid-cols-12 gap-3"
        role="search"
        aria-label="Filter opportunities"
      >
        {/* Keyword Search */}
        <div className="md:col-span-5 relative">
          <label htmlFor="search-keyword" className="sr-only">
            Search opportunities by role, skill, or organization
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              id="search-keyword"
              type="text"
              value={filters.query}
              onChange={(e) => handleInputChange("query", e.target.value)}
              placeholder="Search by title, skill, or company..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            />
            {filters.query && (
              <button
                type="button"
                onClick={() => handleInputChange("query", "")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
                aria-label="Clear search input"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="md:col-span-2 relative">
          <label htmlFor="filter-location" className="sr-only">
            Filter by Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <select
              id="filter-location"
              value={filters.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none transition-colors cursor-pointer"
            >
              <option value="">All Locations</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Remote">Remote (Bangladesh)</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Type Dropdown */}
        <div className="md:col-span-3 relative">
          <label htmlFor="filter-type" className="sr-only">
            Filter by Opportunity Type
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <select
              id="filter-type"
              value={filters.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none transition-colors cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="full-time">Full-Time Jobs</option>
              <option value="internship">Internships</option>
              <option value="freelance">Freelance Projects</option>
              <option value="student">Student Opportunities</option>
              <option value="scholarship">Scholarships & Grants</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Arrangement Dropdown */}
        <div className="md:col-span-2 relative">
          <label htmlFor="filter-arrangement" className="sr-only">
            Filter by Work Arrangement
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <select
              id="filter-arrangement"
              value={filters.arrangement}
              onChange={(e) => handleInputChange("arrangement", e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none transition-colors cursor-pointer"
            >
              <option value="">All Arrangements</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="on-site">On-site</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>
      </form>

      {/* Filter status row & Clear button */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs sm:text-sm">
        <div className="text-slate-600">
          {resultCount !== undefined && (
            <span>
              Showing <strong className="text-slate-900 font-semibold">{resultCount}</strong>{" "}
              demonstration {resultCount === 1 ? "opportunity" : "opportunities"}
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/80 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}

