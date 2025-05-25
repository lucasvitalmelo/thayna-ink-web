import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTattoType } from "@/services/modules/tattoo-type/add-tattoo-type";

import { ALL_TATTOO_TYPE_KEY } from "./use-get-all-tattoo-types";

export function useAddTattooType({ onSettled }: { onSettled: () => void }) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addTattoType,
    onSettled: () => {
      onSettled()
      queryClient.refetchQueries({ queryKey: [ALL_TATTOO_TYPE_KEY] })
    },
  })

  return mutation
}