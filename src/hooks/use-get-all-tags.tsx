import { getAllTags } from "@/services/modules/tag/get-all-tags";
import { useQuery } from "@tanstack/react-query";

export const ALL_TAGS_KEY = "ALL_TAGS" as const

export function useGetAllTags() {
  const query = useQuery({
    queryKey: [ALL_TAGS_KEY],
    queryFn: getAllTags,
    staleTime: 0
  })

  return query
}