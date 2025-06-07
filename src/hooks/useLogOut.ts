// src/hooks/useAuth.ts
import { Api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export function useLogOut() {
  const mutate = useMutation({
    mutationFn: async () => {
      await Api.post("/auth/logout");
    },
    onSettled: () => window.location.href = '/sign-in',
    retry: false
  });

  return mutate
}
