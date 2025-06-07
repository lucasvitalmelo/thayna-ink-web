import { updateOrder } from "@/services/modules/order/update-order"
import type { Status } from "@/types/status"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { makeGetUniqueOrderKey } from "./use-get-unique-order"
import { toast } from "sonner"
import { ALL_ORDERS_KEY } from "./use-get-all-orders"

type UseUpdateOrderProps = { orderId: number }

export type UpdateOrder = {
  bodyLocation?: string,
  width?: number,
  height?: number,
  price?: number,
  status?: Status
  scheduledDate?: Date | null
  tags?: string[],
  description?: string | null
}


export function useUpdateOrder({ orderId }: UseUpdateOrderProps) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (props: UpdateOrder) => updateOrder({ ...props, orderId }),
    onSettled: () => {
      queryClient.refetchQueries(
        { queryKey: makeGetUniqueOrderKey(orderId) }
      )

      queryClient.refetchQueries(
        { queryKey: [ALL_ORDERS_KEY] }
      )
    }
  })

  return mutation
}