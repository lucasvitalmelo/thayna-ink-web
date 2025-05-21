import type { ReactNode } from "react"
import { ThemeProvider } from "./context/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export function Provivers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}