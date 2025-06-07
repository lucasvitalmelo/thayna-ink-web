import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute() {
  const { data: user, isLoading, isError } = useAuth();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!user || isError) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}
