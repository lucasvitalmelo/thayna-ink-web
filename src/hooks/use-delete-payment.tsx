import { deletePayment } from "@/services/modules/payment/delete-payment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeGetUniqueOrderKey } from "./use-get-unique-order";



export function useDeletePayment({ orderId }: { orderId: number }) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deletePayment,
    onSettled: () => {
      queryClient.refetchQueries({ queryKey: makeGetUniqueOrderKey(orderId) })
    },
  })

  return mutation
}