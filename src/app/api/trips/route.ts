
import { NextRequest, NextResponse } from "next/server";
import { createTrip, getAllTrips } from "@/lib/mock-db";
import type { Trip } from "@/features/trips/types/trip";
import type { CreateTripInput } from "@/features/create-trip/types/create-trip";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: getAllTrips(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateTripInput;

    if (
      !body.origin?.trim() ||
      !body.destination?.trim() ||
      !body.startDate ||
      !body.endDate ||
      !Number.isInteger(body.travelers) ||
      body.travelers < 1 ||
      body.travelers > 20 ||
      !["bus", "train", "taxi", "personal-car", "airplane"].includes(
        body.transportation
      ) ||
      !body.budget ||
      !Number.isFinite(body.budget.min) ||
      !Number.isFinite(body.budget.max) ||
      body.budget.min < 0 ||
      body.budget.max < body.budget.min ||
      typeof body.budget.currency !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing trip information.",
        },
        { status: 400 }
      );
    }

    const startDate = new Date(`${body.startDate}T00:00:00`);
    const endDate = new Date(`${body.endDate}T00:00:00`);

    if (
      Number.isNaN(startDate.getTime()) ||
      Number.isNaN(endDate.getTime()) ||
      endDate < startDate
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide valid travel dates.",
        },
        { status: 400 }
      );
    }

    const duration =
      Math.round(
        (endDate.getTime() - startDate.getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1;

    const newTrip: Trip = {
      id: `trip-${Date.now()}`,
      title: `A Journey to ${body.destination.trim()}`,
      origin: body.origin.trim(),
      destination: body.destination.trim(),
      startDate: body.startDate,
      endDate: body.endDate,
      duration,
      travelers: body.travelers,
      transportation: body.transportation,
      status: "pending",
      coverImage: "/images/trips/istanbul.jpg",
      createdAt: new Date().toISOString(),
      budget: body.budget,
      additionalNotes: body.additionalNotes?.trim() ?? "",
    };

    const createdTrip = createTrip(newTrip);

    return NextResponse.json(
      {
        success: true,
        data: createdTrip,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body.",
      },
      { status: 400 }
    );
  }
}
