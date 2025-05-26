import { getAllOrders } from "@/services/modules/order/get-all-orders";
import { useQuery } from "@tanstack/react-query";

export const ALL_ORDERS_KEY = "ALL_ORDERS"

export function useGetAllOrders() {
  const query = useQuery({
    queryKey: [ALL_ORDERS_KEY],
    queryFn: getAllOrders
  })

  return query
}