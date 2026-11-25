"use client";

import { useState } from "react";
import Link from "next/link";

import type { Trip } from "@/features/trips/types/trip";
import type { TripItinerary } from "../types/itinerary";

type TripDetailsPageProps = {
  trip: Trip;
  itinerary: TripItinerary;
};

export function TripDetailsPage({
  trip,
  itinerary,
}: TripDetailsPageProps) {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);

  const toggleDay = (dayNumber: number) => {
    setExpandedDays((current) =>
      current.includes(dayNumber)
        ? current.filter((day) => day !== dayNumber)
        : [...current, dayNumber]
    );
  };

  const formattedStartDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${trip.startDate}T00:00:00`));

  const formattedEndDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${trip.endDate}T00:00:00`));

  const transportationLabels: Record<string, string> = {
    bus: "Bus",
    train: "Train",
    taxi: "Taxi",
    "personal-car": "Personal car",
    airplane: "Airplane",
  };

  const transportationLabel =
    transportationLabels[trip.transportation] ?? trip.transportation;

  return (
    <div className="min-h-full bg-[#F5F1E8] p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
  href="/en"
  className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#34483B] transition-colors hover:text-[#B77B5B]"
>
  <span aria-hidden="true">←</span>
  Back to My Trips
</Link>

        {/* Trip overview */}
        <p className="text-sm text-[#89927C]">
          {trip.origin} {"\u2192"} {trip.destination}
        </p>

<div className="mt-2 flex flex-wrap items-center gap-3">
  <h1 className="text-3xl font-semibold text-[#292D27]">
    {trip.title}
  </h1>

  <span
    className={`rounded-full px-3 py-1 text-xs font-medium ${
      trip.status === "completed"
        ? "bg-[#E4EADF] text-[#34483B]"
        : trip.status === "processing"
          ? "bg-[#F5E8D8] text-[#9A673F]"
          : trip.status === "pending"
            ? "bg-[#EEEAE1] text-[#77796F]"
            : "bg-[#F3E2DE] text-[#A45F50]"
    }`}
  >
    {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
  </span>
</div>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-[#E5DED1] bg-white p-5 md:grid-cols-4">
          <div>
            <p className="text-xs text-[#89927C]">Travel dates</p>
            <p className="mt-1 text-sm font-medium text-[#292D27]">
              {formattedStartDate}
            </p>
            <p className="text-sm text-[#77796F]">{formattedEndDate}</p>
          </div>

          <div>
            <p className="text-xs text-[#89927C]">Duration</p>
            <p className="mt-1 text-sm font-medium text-[#292D27]">
              {trip.duration} days
            </p>
          </div>

          <div>
            <p className="text-xs text-[#89927C]">Travelers</p>
            <p className="mt-1 text-sm font-medium text-[#292D27]">
              {trip.travelers} travelers
            </p>
          </div>

          <div>
            <p className="text-xs text-[#89927C]">Transportation</p>
            <p className="mt-1 text-sm font-medium text-[#292D27]">
              {transportationLabel}
            </p>
          </div>
        </div>

        {/* Accommodation */}
        <section className="mt-8 rounded-2xl border border-[#E5DED1] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#89927C]">
                Accommodation
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#292D27]">
                {itinerary.accommodation.name}
              </h2>

              <p className="mt-1 text-sm text-[#77796F]">
                {itinerary.accommodation.type} ·{" "}
                {itinerary.accommodation.location}
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-lg font-semibold text-[#34483B]">
                ${itinerary.accommodation.estimatedCostPerNight}
              </p>
              <p className="text-xs text-[#89927C]">per night</p>
            </div>
          </div>
        </section>

        {/* Estimated budget */}
        <section className="mt-4 rounded-2xl border border-[#E5DED1] bg-[#34483B] p-6 text-white">
          <p className="text-xs font-medium uppercase tracking-wider text-[#D8D1C2]">
            Estimated total budget
          </p>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold">
              {new Intl.NumberFormat("en-US").format(
                itinerary.totalEstimatedCost
              )}
            </span>

            <span className="text-sm text-[#D8D1C2]">
              {itinerary.currency}
            </span>
          </div>

          <p className="mt-2 text-xs text-[#D8D1C2]">
            Estimated cost for the entire trip
          </p>
        </section>

        {/* Daily itinerary */}
        <section className="mt-10">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wider text-[#89927C]">
              Your journey
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#292D27]">
              Daily itinerary
            </h2>

            <p className="mt-1 text-sm text-[#77796F]">
              Explore your planned activities and meals for each day.
            </p>
          </div>

<div className="space-y-5">
  {itinerary.days.map((day) => {
    const isExpanded = expandedDays.includes(day.dayNumber);

    return (
      <article
        key={day.dayNumber}
        className="rounded-2xl border border-[#E5DED1] bg-white p-6"
      >
        <button
          type="button"
          onClick={() => toggleDay(day.dayNumber)}
          aria-expanded={isExpanded}
          aria-controls={`day-content-${day.dayNumber}`}
          className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-[#EEE9E0] pb-4 text-left"
        >
          <div>
            <p className="text-xs font-medium text-[#89927C]">
              DAY {day.dayNumber}
            </p>

            <h3 className="mt-1 text-lg font-semibold text-[#292D27]">
              {day.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-sm text-[#77796F]">
              {new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(`${day.date}T00:00:00`))}
            </p>

            <span
              aria-hidden="true"
              className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F1E8] text-lg text-[#34483B] transition-transform duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            >
              {isExpanded ? "−" : "+"}
            </span>
          </div>
        </button>

        <div
          id={`day-content-${day.dayNumber}`}
          aria-hidden={!isExpanded}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-5">
              {/* Activities */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-[#34483B]">
                  Activities
                </h4>

                <div className="space-y-4">
                  {day.activities.map((activity) => (
                    <div key={activity.id} className="flex gap-4">
                      <span className="w-14 shrink-0 pt-0.5 text-sm font-medium text-[#89927C]">
                        {activity.time}
                      </span>

                      <div className="min-w-0 flex-1 border-l-2 border-[#D8D1C2] pl-4">
                        <p className="font-medium text-[#292D27]">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-sm text-[#77796F]">
                          {activity.location}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[#77796F]">
                          {activity.description}
                        </p>

                        <p className="mt-2 text-xs text-[#89927C]">
                          Estimated cost: ${activity.estimatedCost}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meals */}
              <div className="mt-6 border-t border-[#EEE9E0] pt-5">
                <h4 className="mb-3 text-sm font-semibold text-[#34483B]">
                  Meals
                </h4>

                <div className="grid gap-3 sm:grid-cols-3">
                  {day.meals.map((meal) => (
                    <div
                      key={`${day.dayNumber}-${meal.type}`}
                      className="rounded-xl bg-[#F5F1E8] p-4"
                    >
                      <p className="text-xs capitalize text-[#89927C]">
                        {meal.type}
                      </p>

                      <p className="mt-1 font-medium text-[#292D27]">
                        {meal.name}
                      </p>

                      <p className="mt-1 text-xs text-[#77796F]">
                        {meal.location}
                      </p>

                      <p className="mt-2 text-xs text-[#89927C]">
                        ${meal.estimatedCost}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  })}
</div>

        </section>
      </div>
    </div>
  );
}
