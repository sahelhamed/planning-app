import type { TripStatus } from "../types/trip";

export const tripStatusConfig: Record<
  TripStatus,
  {
    label: string;
    description: string;
  }
> = {
  pending: {
    label: "Pending",
    description: "Waiting to be generated",
  },
  processing: {
    label: "Processing",
    description: "Your itinerary is being prepared",
  },
  completed: {
    label: "Completed",
    description: "Your trip plan is ready",
  },
  failed: {
    label: "Failed",
    description: "Something went wrong",
  },
};