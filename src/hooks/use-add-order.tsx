import { addOrder } from "@/services/modules/order/add-order";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ALL_ORDERS_KEY } from "./use-get-all-orders";

export function useAddOrder({ onSettled }: { onSettled: () => void }) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addOrder,
    onSettled: () => {
      queryClient.refetchQueries({ queryKey: [ALL_ORDERS_KEY] })
      onSettled()
    }
  })

  return mutation
}
