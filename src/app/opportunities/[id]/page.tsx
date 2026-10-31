import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEMO_OPPORTUNITIES } from "@/data/opportunities";
import { OpportunityDetailView } from "@/components/OpportunityDetailView";
import { getOpportunityById, ApiError } from "@/lib/api";
import { Opportunity } from "@/types/opportunity";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return DEMO_OPPORTUNITIES.map((opp) => ({
    id: opp.id,
  }));
}

async function resolveOpportunity(id: string): Promise<Opportunity | null> {
  // Try backend API first
  try {
    const opp = await getOpportunityById(id);
    if (opp) return opp;
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      // Not found on backend, check demo fallback
      const fallback = DEMO_OPPORTUNITIES.find((item) => item.id === id);
      return fallback || null;
    }
    // Network or server offline: fall back to local dataset
    const fallback = DEMO_OPPORTUNITIES.find((item) => item.id === id);
    if (fallback) return fallback;
  }

  // Fallback lookup
  return DEMO_OPPORTUNITIES.find((item) => item.id === id) || null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const opportunity = await resolveOpportunity(id);

  if (!opportunity) {
    return {
      title: "Opportunity Not Found | ConnectSphere",
    };
  }

  return {
    title: `${opportunity.title} at ${opportunity.organization} | ConnectSphere`,
    description: opportunity.shortDescription,
  };
}

export default async function OpportunityDetailPage({ params }: PageProps) {
  const { id } = await params;
  const opportunity = await resolveOpportunity(id);

  if (!opportunity) {
    notFound();
  }

  // Find up to 3 similar opportunities based on type or category
  const similarOpportunities = DEMO_OPPORTUNITIES.filter(
    (item) => item.id !== opportunity.id && (item.type === opportunity.type || item.city === opportunity.city)
  ).slice(0, 3);

  return (
    <OpportunityDetailView
      opportunity={opportunity}
      similarOpportunities={similarOpportunities}
    />
  );
}
