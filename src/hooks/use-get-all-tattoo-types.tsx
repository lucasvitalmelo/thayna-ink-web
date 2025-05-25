import { getAllTattooTypes } from "@/services/modules/tattoo-type/get-all-tattoo-types";
import { useQuery } from "@tanstack/react-query";

export const ALL_TATTOO_TYPE_KEY = "ALL_TATTOO_TYPE" as const

export function useGetAllTattooTypes() {
  const query = useQuery({
    queryKey: [ALL_TATTOO_TYPE_KEY],
    queryFn: getAllTattooTypes,
    staleTime: 0
  })

  return query
}