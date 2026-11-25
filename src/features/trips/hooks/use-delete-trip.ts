import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrip } from "../services/trip-service";
import { tripsQueryKey } from "./use-trips";

export function useDeleteTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTrip,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tripsQueryKey,
      });
    },
  });
}