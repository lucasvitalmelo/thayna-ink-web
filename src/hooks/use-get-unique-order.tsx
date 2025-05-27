import { getUniqueOrder } from "@/services/modules/order/get-unique-order";
import { useQuery } from "@tanstack/react-query";

type UseGetAllOrdersProps = {
  orderId: number,
  isOpenDialog: boolean
}


export const UNIQUE_ORDER_KEY = "ORDERS"

export function makeGetUniqueOrderKey(id: number) {
  return [UNIQUE_ORDER_KEY, { id }]
}

export function useGetUniqueOrder({ orderId, isOpenDialog = false }: UseGetAllOrdersProps) {
  const query = useQuery({
    queryKey: makeGetUniqueOrderKey(orderId),
    queryFn: () => getUniqueOrder({ id: orderId }),
    enabled: isOpenDialog
  })

  return query
}