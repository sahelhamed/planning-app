"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Trash2 } from "lucide-react";

import type { TripStatus } from "../types/trip";
import { tripStatusConfig } from "../utils/trip-status";
import { useDeleteTrip } from "../hooks/use-delete-trip";

type TripCardActionProps = {
  tripId: string;
  status: TripStatus;
};

export function TripCardAction({
  tripId,
  status,
}: TripCardActionProps) {
  const [showMessage, setShowMessage] = useState(false);
  const { mutate, isPending, isError } = useDeleteTrip();

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this trip?"
    );

    if (confirmed) {
      mutate(tripId);
    }
  }

  return (
    <div className="flex shrink-0 items-center gap-3">
      {status === "completed" ? (
        <Link
          href={`/en/trips/${tripId}`}
          aria-label="View trip details"
className="cursor-pointer text-[#89927C] transition-transform hover:-translate-y-1 hover:translate-x-1"        >
          <ArrowUpRight size={20} />
        </Link>
      ) : (
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowMessage((current) => !current)}
            aria-label="View trip status"
            aria-expanded={showMessage}
            className="cursor-pointer text-[#89927C] transition-transform hover:-translate-y-1 hover:translate-x-1"
          >
            <ArrowUpRight size={20} />
          </button>

          {showMessage && (
            <div
              role="status"
              className="absolute right-0 top-8 z-10 w-56 rounded-xl border border-[#E8E2D7] bg-white p-3 text-sm text-[#77796F] shadow-lg"
            >
              {tripStatusConfig[status].description}
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={handleDelete}
        disabled={isPending}
        aria-label="Delete trip"
        title={isError ? "Failed to delete trip" : "Delete trip"}
        className="cursor-pointer text-[#B77B5B] transition-colors hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}