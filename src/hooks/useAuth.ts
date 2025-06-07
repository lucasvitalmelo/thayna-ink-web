// src/hooks/useAuth.ts
import { Api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export function useAuth() {
  const query = useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const { data } = await Api.get("/auth/profile");
      return data;
    },
    retry: false
  });

  useEffect(() => {
    if (query.isError) {
      toast.success("Unauthorized!");
    }
  }, [query.isError]);

  return query
}
