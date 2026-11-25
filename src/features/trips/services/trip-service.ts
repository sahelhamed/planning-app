import type { Trip } from "../types/trip";
import type { CreateTripInput } from "@/features/create-trip/types/create-trip";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

async function handleApiResponse<T>(response: Response): Promise<T> {
  const result = (await response.json()) as ApiResponse<T>;

  if (!response.ok || !result.success || result.data === undefined) {
    throw new Error(result.message ?? "Something went wrong.");
  }

  return result.data;
}

export async function getTrips(): Promise<Trip[]> {
  const response = await fetch("/api/trips", {
    cache: "no-store",
  });

  return handleApiResponse<Trip[]>(response);
}

export async function getTripById(tripId: string): Promise<Trip> {
  const response = await fetch(`/api/trips/${tripId}`, {
    cache: "no-store",
  });

  return handleApiResponse<Trip>(response);
}

export async function createTrip(input: CreateTripInput): Promise<Trip> {
  const response = await fetch("/api/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  return handleApiResponse<Trip>(response);
}

export async function deleteTrip(tripId: string): Promise<void> {
  const response = await fetch(`/api/trips/${tripId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const result = (await response.json()) as ApiResponse<never>;
    throw new Error(result.message ?? "Failed to delete trip.");
  }
}
