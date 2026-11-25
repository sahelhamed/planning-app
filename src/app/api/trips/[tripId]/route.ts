import { NextResponse } from "next/server";
import { getTripById, removeTrip } from "@/lib/mock-db";

interface RouteContext {
  params: Promise<{
    tripId: string;
  }>;
}

export async function GET(
  _request: Request,
  context: RouteContext
) {
  const { tripId } = await context.params;
  const trip = getTripById(tripId);

  if (!trip) {
    return NextResponse.json(
      {
        success: false,
        message: "Trip not found.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: trip,
  });
}

export async function DELETE(
  _request: Request,
  context: RouteContext
) {
  const { tripId } = await context.params;
  const deleted = removeTrip(tripId);

  if (!deleted) {
    return NextResponse.json(
      {
        success: false,
        message: "Trip not found.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Trip deleted successfully.",
  });
}