"use client";

import { useTrips } from "../hooks/use-trips";
import { TripCard } from "./trip-card";

export function TripsList() {
  const { data: trips, isLoading, isError, error } = useTrips();

  if (isLoading) {
    return (
      <p className="py-10 text-center text-sm text-muted-foreground">
        Loading your trips...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="py-10 text-center text-sm text-red-600">
        {error.message || "Failed to load trips. Please try again."}
      </p>
    );
  }

  if (!trips?.length) {
    return (
      <p className="py-10 text-center text-sm text-muted-foreground">
          You haven&apos;t created any trips yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}