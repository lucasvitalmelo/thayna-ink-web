import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCustomer } from "@/services/modules/customer/add-customer";

import { ALL_CUSTOMERS_KEY } from "./use-get-all-customers";

export function useAddCustomer({ onSettled }: { onSettled: () => void }) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addCustomer,
    onSettled: () => {
      onSettled()
      queryClient.refetchQueries({ queryKey: [ALL_CUSTOMERS_KEY] })
    },
  })

  return mutation
}