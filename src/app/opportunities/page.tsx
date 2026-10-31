import React, { Suspense } from "react";
import type { Metadata } from "next";
import { OpportunitiesClient } from "@/components/OpportunitiesClient";

export const metadata: Metadata = {
  title: "Explore Opportunities | ConnectSphere",
  description:
    "Search and filter through jobs, internships, freelance projects, student roles, and research grants across Bangladesh.",
};

export default function OpportunitiesPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-16 text-center text-slate-500">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent align-[-0.125em]" />
          <p className="mt-4 text-sm font-medium">Loading opportunities catalog...</p>
        </div>
      }
    >
      <OpportunitiesClient />
    </Suspense>
  );
}

