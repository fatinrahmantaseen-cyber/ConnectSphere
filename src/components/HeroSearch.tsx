"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ArrowRight } from "lucide-react";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Dhaka");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (location && location !== "all") params.set("location", location);

    const targetUrl = `/opportunities${params.toString() ? `?${params.toString()}` : ""}`;
    router.push(targetUrl);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl rounded-2xl bg-white p-2 sm:p-3 shadow-xl border border-slate-200/90 text-slate-800 transition-all focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20"
      role="search"
      aria-label="Find career opportunities"
    >
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
        {/* Search input */}
        <div className="flex-1 relative flex items-center">
          <label htmlFor="hero-search-query" className="sr-only">
            Job title, skill, or company
          </label>
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
          <input
            id="hero-search-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by job title, skill (e.g. Next.js, Python), or company..."
            className="w-full pl-10 pr-3 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-hidden"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block h-8 w-px bg-slate-200" />

        {/* Location select */}
        <div className="relative md:w-56 flex items-center">
          <label htmlFor="hero-search-location" className="sr-only">
            Select location
          </label>
          <MapPin className="absolute left-3.5 h-4 w-4 text-teal-600 pointer-events-none" />
          <select
            id="hero-search-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-8 py-3 text-sm font-medium text-slate-800 bg-transparent focus:outline-hidden appearance-none cursor-pointer"
          >
            <option value="all">Any Location</option>
            <option value="Dhaka">Dhaka, Bangladesh</option>
            <option value="Chattogram">Chattogram, Bangladesh</option>
            <option value="Sylhet">Sylhet, Bangladesh</option>
            <option value="Remote">Remote (Bangladesh)</option>
          </select>
          <div className="absolute right-3 pointer-events-none text-slate-400 text-xs">▼</div>
        </div>

        {/* Search CTA */}
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-xs hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-teal-500 cursor-pointer shrink-0"
        >
          <span>Find Opportunities</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

