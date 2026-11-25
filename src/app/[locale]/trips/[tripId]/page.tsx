
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { mockTrips } from "@/features/trips/data/mock-trips";
import { mockItineraries } from "@/features/trip-details/data/mock-itineraries";
import { TripDetailsPage } from "@/features/trip-details/components/trip-details-page";

type TripDetailsRouteProps = {
  params: Promise<{
    locale: string;
    tripId: string;
  }>;
};

async function TripDetailsContent({ params }: TripDetailsRouteProps) {
  const { tripId } = await params;

  const trip = mockTrips.find((item) => item.id === tripId);

  if (!trip) {
    notFound();
  }

  const itinerary = mockItineraries.find(
    (item) => item.tripId === tripId
  );

  if (!itinerary) {
    notFound();
  }

  return (
    <AppShell>
      <TripDetailsPage trip={trip} itinerary={itinerary} />
    </AppShell>
  );
}

export default function TripDetailsRoute({
  params,
}: TripDetailsRouteProps) {
  return (
    <Suspense
      fallback={
        <AppShell>
          <div className="min-h-screen bg-[#F5F1E8] p-8">
            <div className="mx-auto max-w-5xl animate-pulse">
              <div className="h-8 w-64 rounded bg-[#D8D1C2]" />
              <div className="mt-6 h-32 rounded-2xl bg-white" />
              <div className="mt-4 h-40 rounded-2xl bg-white" />
            </div>
          </div>
        </AppShell>
      }
    >
      <TripDetailsContent params={params} />
    </Suspense>
  );
}
