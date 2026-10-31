export type OpportunityType =
  | "full-time"
  | "internship"
  | "freelance"
  | "student"
  | "scholarship";

export type WorkArrangement = "remote" | "hybrid" | "on-site";

export type ExperienceLevel =
  | "Student / Fresh Graduate"
  | "Entry-Level (0-2 yrs)"
  | "Mid-Level (2-4 yrs)"
  | "Senior / Lead (5+ yrs)"
  | "Open to All";

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  organizationType: string;
  location: string;
  city: "Dhaka" | "Chattogram" | "Sylhet" | "Remote" | "Other";
  type: OpportunityType;
  arrangement: WorkArrangement;
  experienceLevel: ExperienceLevel;
  compensation: string;
  skills: string[];
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  deadline: string;
  postedDate: string;
  isFeatured: boolean;
  targetAudience: string;
  isSampleData: true;
}

export interface OpportunityFilters {
  query: string;
  location: string;
  type: string;
  arrangement: string;
}

