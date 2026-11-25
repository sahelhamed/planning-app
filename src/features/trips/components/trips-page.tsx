import Link from "next/link";
import { Plus } from "lucide-react";

import { TripsList } from "./trips-list";

export function TripsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-[#89927C]">
            YOUR JOURNEYS
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#292D27]">
            My Trips
          </h1>

          <p className="mt-2 text-sm text-[#77796F]">
            All your travel plans, gathered in one place.
          </p>
        </div>

        <Link
          href="/en/create-trip"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#34483B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#293A30]"
        >
          <Plus size={18} />
          Plan a new trip
        </Link>
      </header>

      <TripsList />
    </div>
  );
}