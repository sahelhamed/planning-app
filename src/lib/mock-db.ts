import { mockTrips } from "@/features/trips/data/mock-trips";
import type { Trip } from "@/features/trips/types/trip";

let trips: Trip[] = [...mockTrips];

export function getAllTrips(): Trip[] {
  return [...trips];
}

export function getTripById(id: string): Trip | undefined {
  return trips.find((trip) => trip.id === id);
}

export function createTrip(trip: Trip): Trip {
  trips = [trip, ...trips];

  return trip;
}

export function removeTrip(id: string): boolean {
  const initialLength = trips.length;

  trips = trips.filter((trip) => trip.id !== id);

  return trips.length < initialLength;
}