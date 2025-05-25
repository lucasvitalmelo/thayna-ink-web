import { getAllCustomers } from "@/services/modules/customer/get-all-customers";
import { useQuery } from "@tanstack/react-query";

export const ALL_CUSTOMERS_KEY = "ALL_CUSTOMERS" as const

export function useGetAllCustomers() {
  const query = useQuery({
    queryKey: [ALL_CUSTOMERS_KEY],
    queryFn: getAllCustomers,
    staleTime: 0
  })

  return query
}