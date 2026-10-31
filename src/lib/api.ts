import { Opportunity, OpportunityFilters } from "@/types/opportunity";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "http://localhost:8000";

export interface OpportunityListResponse {
  items: Opportunity[];
  total: int;
  page: int;
  size: int;
  pages: int;
}

type int = number;

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  countLabel: string;
  filterType?: string | null;
  filterArrangement?: string | null;
  iconName: string;
  accentColor: string;
}

export interface LocationItem {
  city: string;
  label: string;
  count: number;
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/**
 * Fetch opportunities from the FastAPI backend with filtering and search.
 */
export async function getOpportunities(
  filters: Partial<OpportunityFilters> = {},
  page: number = 1,
  size: number = 20
): Promise<OpportunityListResponse> {
  const params = new URLSearchParams();
  if (filters.query?.trim()) params.set("q", filters.query.trim());
  if (filters.location?.trim()) params.set("location", filters.location.trim());
  if (filters.type?.trim()) params.set("type", filters.type.trim());
  if (filters.arrangement?.trim()) params.set("arrangement", filters.arrangement.trim());
  params.set("page", String(page));
  params.set("size", String(size));

  const url = `${API_BASE_URL}/api/v1/opportunities?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      // Revalidate cache every 10 seconds or dynamic
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch opportunities (HTTP ${response.status})`,
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      `Network error connecting to backend API at ${API_BASE_URL}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      503
    );
  }
}

/**
 * Fetch a single opportunity by ID.
 */
export async function getOpportunityById(id: string): Promise<Opportunity> {
  const url = `${API_BASE_URL}/api/v1/opportunities/${encodeURIComponent(id)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 10 },
    });

    if (response.status === 404) {
      throw new ApiError(`Opportunity with ID "${id}" was not found`, 404);
    }

    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch opportunity (HTTP ${response.status})`,
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      `Network error fetching opportunity "${id}" from backend: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      503
    );
  }
}

/**
 * Check backend health status.
 */
export async function checkBackendHealth(): Promise<{
  status: string;
  database: string;
  version: string;
}> {
  const url = `${API_BASE_URL}/health`;
  const response = await fetch(url, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new ApiError(`Backend health check failed with status ${response.status}`, response.status);
  }
  return await response.json();
}

