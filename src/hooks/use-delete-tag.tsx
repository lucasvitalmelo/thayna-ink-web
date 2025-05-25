import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTag } from "@/services/modules/tag/delete-tag";

import { ALL_TAGS_KEY } from "./use-get-all-tags";

export function useDeleteTag() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteTag,
    onSettled: () => {
      queryClient.refetchQueries({ queryKey: [ALL_TAGS_KEY] })
    },
  })

  return mutation
}