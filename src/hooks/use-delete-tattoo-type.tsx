import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTattooType } from "@/services/modules/tattoo-type/delete-tattoo-type";

import { ALL_TATTOO_TYPE_KEY } from "./use-get-all-tattoo-types";


export function useDeleteTattooType() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteTattooType,
    onSettled: () => {
      queryClient.refetchQueries({ queryKey: [ALL_TATTOO_TYPE_KEY] })
    },
  })

  return mutation
}