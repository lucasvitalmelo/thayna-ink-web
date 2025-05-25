import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useTheme } from "@/context/theme-context";
import { Moon, Settings, Sun } from "lucide-react";

export function Navbar() {
  const { setTheme, theme } = useTheme()

  const currentTheme = theme === 'dark' ? 'light' : 'dark'

  console.log(currentTheme)

  return (
    <nav className="flex w-full h-15 items-center justify-center border-b-2 border-gray-700">
      <div className="flex items-center max-w-7xl w-full mx-5">
        <h1 className="font-bold mr-4">Thayna Vieira</h1>
        <NavLink to={'/'}>
          <Button
            size={"sm"}
            variant={"link"}>
            Orders
          </Button>
        </NavLink>
        <div className="ml-auto flex items-center gap-2">

          <NavLink to='/settings' >
            <Button
              variant={"outline"}
              size={"sm"}
            >
              <Settings />
              settings
            </Button>
          </NavLink>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setTheme(currentTheme)}
          >
            {currentTheme === 'dark' ? <Moon /> : <Sun />}
          </Button>
        </div>
        {/* <Menu /> */}
      </div>
    </nav>)
}