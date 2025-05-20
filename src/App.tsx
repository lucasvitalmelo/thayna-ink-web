import { Button } from "./components/ui/button"
import { useTheme } from "./context/theme-context"

export function App() {
  const { setTheme, } = useTheme()
  return (
    <div className="bg-blue-200 text-black dark:bg-blue-950 dark:text-blue-400 h-screen">
      <p>Hello tailwind</p>

      <div className="flex gap-4 text-dark dark:text-white">
        <Button className="hover:cursor-pointer" onClick={() => setTheme('light')}>Light</Button>
        <Button className="hover:cursor-pointer" onClick={() => setTheme('dark')}>Dark</Button>
        <Button className="hover:cursor-pointer" onClick={() => setTheme('system')}>System</Button>
      </div>
    </div>
  )
}

