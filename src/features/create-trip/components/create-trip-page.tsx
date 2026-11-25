
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, MapPin, SlidersHorizontal } from "lucide-react";

import { useCreateTrip } from "@/features/trips/hooks/use-create-trip";
import {
  createTripSchema,
  type CreateTripFormValues,
} from "../schemas/create-trip-schema";

const fieldClassName =
  "h-11 w-full rounded-xl border border-[#E8E2D7] bg-[#FDFCF9] px-4 text-sm text-[#292D27] outline-none transition-colors placeholder:text-[#AAA99F] focus:border-[#89927C] focus:ring-2 focus:ring-[#89927C]/15";

const errorClassName = "text-xs text-red-600";

export function CreateTripPage() {
  const router = useRouter();
  const createTrip = useCreateTrip();

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<
  z.input<typeof createTripSchema>,
  unknown,
  CreateTripFormValues
>({
    resolver: zodResolver(createTripSchema),
    defaultValues: {
      origin: "",
      destination: "",
      startDate: "",
      endDate: "",
      travelers: 1,
      transportation: "",
      budget: {
        min: 0,
        max: 0,
        currency: "USD",
      },
      additionalNotes: "",
    },
  });

  const onSubmit = async (values: CreateTripFormValues) => {
    try {
      await createTrip.mutateAsync(values);
      router.push("/en");
    } catch {
      // The mutation error is displayed below the form.
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 text-sm text-[#77796F] transition-colors hover:text-[#34483B]"
        >
          <ArrowLeft size={16} />
          Back to My Trips
        </Link>

        <div className="mt-6">
          <p className="text-sm font-medium text-[#89927C]">
            YOUR NEXT ADVENTURE
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#292D27]">
            Plan a New Trip
          </h1>

          <p className="mt-2 text-sm text-[#77796F]">
            Tell us where you want to go and let&apos;s plan your journey.
          </p>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <section className="rounded-2xl border border-[#E8E2D7] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[#F5F1E8] p-3 text-[#34483B]">
              <MapPin size={20} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#292D27]">
                Destination & Dates
              </h2>
              <p className="mt-1 text-sm text-[#77796F]">
                Choose your destination and travel dates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="origin" className="text-sm font-medium text-[#292D27]">
                Departure City
              </label>
              <input
                id="origin"
                type="text"
                placeholder="e.g. Baku"
                className={fieldClassName}
                {...register("origin")}
              />
              {errors.origin && (
                <p className={errorClassName}>{errors.origin.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="destination" className="text-sm font-medium text-[#292D27]">
                Destination City
              </label>
              <input
                id="destination"
                type="text"
                placeholder="e.g. Rome"
                className={fieldClassName}
                {...register("destination")}
              />
              {errors.destination && (
                <p className={errorClassName}>{errors.destination.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="startDate" className="text-sm font-medium text-[#292D27]">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                className={fieldClassName}
                {...register("startDate")}
              />
              {errors.startDate && (
                <p className={errorClassName}>{errors.startDate.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="endDate" className="text-sm font-medium text-[#292D27]">
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                className={fieldClassName}
                {...register("endDate")}
              />
              {errors.endDate && (
                <p className={errorClassName}>{errors.endDate.message}</p>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#E8E2D7] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[#F5F1E8] p-3 text-[#34483B]">
              <SlidersHorizontal size={20} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#292D27]">
                Travel Details
              </h2>
              <p className="mt-1 text-sm text-[#77796F]">
                Set your group size, transportation and budget.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="travelers" className="text-sm font-medium text-[#292D27]">
                  Number of Travelers
                </label>
                <input
                  id="travelers"
                  type="number"
                  min="1"
                  max="20"
                  placeholder="e.g. 2"
                  className={fieldClassName}
                  {...register("travelers", { valueAsNumber: true })}
                />
                {errors.travelers && (
                  <p className={errorClassName}>{errors.travelers.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="transportation" className="text-sm font-medium text-[#292D27]">
                  Transportation
                </label>
                <select
                  id="transportation"
                  defaultValue=""
                  className={fieldClassName}
                  {...register("transportation")}
                >
                  <option value="" disabled>
                    Select transportation
                  </option>
                  <option value="airplane">Airplane</option>
                  <option value="train">Train</option>
                  <option value="bus">Bus</option>
                  <option value="taxi">Taxi</option>
                  <option value="personal-car">Personal Car</option>
                </select>
                {errors.transportation && (
                  <p className={errorClassName}>{errors.transportation.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-[#292D27]">
                  Total Trip Budget (USD)
                </label>
                <p className="mt-1 text-xs text-[#77796F]">
                  Set the estimated budget for your entire trip and all travelers.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="budgetMin" className="text-xs text-[#77796F]">
                    Minimum Budget
                  </label>
                  <input
                    id="budgetMin"
                    type="number"
                    min="0"
                    placeholder="e.g. 500"
                    className={fieldClassName}
                    {...register("budget.min", { valueAsNumber: true })}
                  />
                  {errors.budget?.min && (
                    <p className={errorClassName}>{errors.budget.min.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="budgetMax" className="text-xs text-[#77796F]">
                    Maximum Budget
                  </label>
                  <input
                    id="budgetMax"
                    type="number"
                    min="0"
                    placeholder="e.g. 1500"
                    className={fieldClassName}
                    {...register("budget.max", { valueAsNumber: true })}
                  />
                  {errors.budget?.max && (
                    <p className={errorClassName}>{errors.budget.max.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalNotes" className="text-sm font-medium text-[#292D27]">
                Additional Notes
                <span className="ml-2 text-xs font-normal text-[#99998F]">
                  Optional
                </span>
              </label>
              <textarea
                id="additionalNotes"
                rows={4}
                maxLength={1000}
                placeholder="Any special requests or details about your trip..."
                className="w-full resize-y rounded-xl border border-[#E8E2D7] bg-[#FDFCF9] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#AAA99F] focus:border-[#89927C] focus:ring-2 focus:ring-[#89927C]/15"
                {...register("additionalNotes")}
              />
              {errors.additionalNotes && (
                <p className={errorClassName}>{errors.additionalNotes.message}</p>
              )}
            </div>
          </div>
        </section>

        {createTrip.isError && (
          <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {createTrip.error.message || "Failed to create your trip. Please try again."}
          </p>
        )}

        <div className="flex flex-col-reverse gap-3 border-t border-[#E8E2D7] pt-6 sm:flex-row sm:justify-end">
          <Link
            href="/en"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-[#E8E2D7] px-6 text-sm font-medium text-[#77796F] transition-colors hover:bg-[#F5F1E8]"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={createTrip.isPending}
            className="inline-flex h-11 cursor-pointer items-center justify-center rounded-xl bg-[#34483B] px-7 text-sm font-medium text-white transition-colors hover:bg-[#293A30] disabled:cursor-not-allowed disabled:opacity-60"          >
            {createTrip.isPending ? "Creating Trip..." : "Create My Trip"}
          </button>
        </div>
      </form>
    </div>
  );
}
