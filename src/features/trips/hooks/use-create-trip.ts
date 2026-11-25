import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTrip } from "../services/trip-service";
import { tripsQueryKey } from "./use-trips";

export function useCreateTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTrip,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tripsQueryKey,
      });
    },
  });
}