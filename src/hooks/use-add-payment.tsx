import { addPayment } from "@/services/modules/payment/add-payment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeGetUniqueOrderKey } from "./use-get-unique-order";
import { toast } from "sonner";
import { ALL_ORDERS_KEY } from "./use-get-all-orders";

type AddPayment = {
  amount: number,
  description: string
}

export function useAddPayment({ orderId }: { orderId: number }) {
  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: ({ amount, description }: AddPayment) => addPayment({ amount, description, orderId }),
    onSettled: () => {
      queryClient.refetchQueries({ queryKey: makeGetUniqueOrderKey(orderId) })
      queryClient.refetchQueries({ queryKey: [ALL_ORDERS_KEY] })


      toast.success('Payment added successfully!')
    }


  })

  return mutate
}