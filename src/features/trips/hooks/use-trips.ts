import { useQuery } from "@tanstack/react-query";
import { getTrips } from "../services/trip-service";

export const tripsQueryKey = ["trips"] as const;

export function useTrips() {
  return useQuery({
    queryKey: tripsQueryKey,
    queryFn: getTrips,
  });
}