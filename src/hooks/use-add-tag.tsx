import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTag } from "@/services/modules/tag/add-tag";

import { ALL_TAGS_KEY } from "./use-get-all-tags";
import { toast } from "sonner";

export function useAddTag({ onSettled }: { onSettled: () => void }) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addTag,
    onSettled: () => {
      onSettled()
      queryClient.refetchQueries({ queryKey: [ALL_TAGS_KEY] })

      toast.success('Tag added successfully!')
    },
  })

  return mutation
}