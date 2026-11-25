import type { Transportation } from "@/features/trips/types/trip";

export interface CreateTripInput {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  transportation: Transportation;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  additionalNotes?: string;
}