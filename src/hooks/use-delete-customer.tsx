import { deleteCustomer } from "@/services/modules/customer/delete-customer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ALL_CUSTOMERS_KEY } from "./use-get-all-customers";

export function useDeleteCustomer() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [ALL_CUSTOMERS_KEY] })
  })

  return mutation
}