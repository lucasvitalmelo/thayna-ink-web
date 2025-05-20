import type { ReactNode } from "react"
import { Navbar } from "./components/navbar"

export function App({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-200 text-black dark:bg-gray-900 dark:text-gray-100 h-screen">
      <Navbar />
      <section className="flex w-full items-center justify-center overflow-auto">
        <div className=" max-w-7xl w-full mx-5 h-[calc(100vh-60px)]">
          {children}
        </div>
      </section>


    </div>
  )
}

