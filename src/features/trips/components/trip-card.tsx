
import Image from "next/image";
import { CalendarDays, Clock3, Users } from "lucide-react";
import { TripCardAction } from "./trip-card-action";
import type { Trip } from "../types/trip";
import { tripStatusConfig } from "../utils/trip-status";

type TripCardProps = {
  trip: Trip;
};

const statusStyles = {
  pending: "bg-amber-50 text-amber-800",
  processing: "bg-sky-50 text-sky-800",
  completed: "bg-emerald-50 text-emerald-800",
  failed: "bg-rose-50 text-rose-800",
};

export function TripCard({ trip }: TripCardProps) {
  const status = tripStatusConfig[trip.status];

const formattedStartDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
}).format(new Date(`${trip.startDate}T00:00:00`));

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E8E2D7] bg-white transition-shadow hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-[#EAE4D9]">
        <Image
          src={trip.coverImage}
          alt={trip.destination}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[trip.status]}`}
        >
          {status.label}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-[#89927C]">
              {trip.origin} {"\u2192"} {trip.destination}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-[#292D27]">
              {trip.title}
            </h3>
          </div>

         <TripCardAction tripId={trip.id} status={trip.status} />
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#F0ECE5] pt-4 text-sm text-[#77796F]">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={16} />
            {formattedStartDate}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock3 size={16} />
            {trip.duration} days
          </span>

          <span className="flex items-center gap-1.5">
            <Users size={16} />
            {trip.travelers} travelers
          </span>
        </div>
      </div>
    </article>
  );
}
