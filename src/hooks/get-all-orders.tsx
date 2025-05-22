import { getAllOrders } from "@/services/modules/order/get-all-orders";
import { useQuery } from "@tanstack/react-query";

export function useGetAllOrders() {
  const query = useQuery({
    queryKey: ["ALL_ORDERS"],
    queryFn: getAllOrders
  })

  return query
}