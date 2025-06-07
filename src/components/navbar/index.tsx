import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useTheme } from "@/context/theme-context";
import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { Logo } from "../logo";
import { useLogOut } from "@/hooks/useLogOut";

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const { mutate: logout } = useLogOut()

  const currentTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <nav className="flex w-full h-15 items-center justify-center border-b-1 border-gray-900">
      <div className="flex items-center max-w-7xl w-full mx-5">
        <h1 className="flex items-center gap-2 font-bold mr-4">
          <Logo size={35} />
          <span className="hidden lg:flex md:flex">Thayna Manager</span>
        </h1>
        <NavLink to={'/'}>
          <Button
            size={"sm"}
            variant={"link"}>
            Orders
          </Button>
        </NavLink>
        <div className="ml-auto flex items-center gap-2">

          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setTheme(currentTheme)}
          >
            {currentTheme === 'dark' ? <Moon /> : <Sun />}
          </Button>
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
            onClick={() => logout()}
            variant={"destructive"}
            size={"icon"}
          >
            <LogOut />
          </Button>
        </div>
      </div>
    </nav>)
}