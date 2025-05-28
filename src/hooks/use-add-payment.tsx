import { addPayment } from "@/services/modules/payment/add-payment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeGetUniqueOrderKey } from "./use-get-unique-order";

type AddPayment = {
  amount: number,
  description: string
}

export function useAddPayment({ orderId }: { orderId: number }) {
  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: ({ amount, description }: AddPayment) => addPayment({ amount, description, orderId }),
    onSettled: () => queryClient.refetchQueries({ queryKey: makeGetUniqueOrderKey(orderId) })

  })

  return mutate
}