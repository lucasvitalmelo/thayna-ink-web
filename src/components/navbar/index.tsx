import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { AlignJustify, Moon, Settings, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/context/theme-context";

export function Navbar() {
  const { setTheme, theme } = useTheme()
  return (
    <nav className="flex w-full h-15 items-center justify-center border-b-2 border-gray-700">
      <div className="flex justify-between max-w-7xl w-full mx-5">
        <span>Thayna Vieira</span>


        <Popover>
          <PopoverTrigger className="cursor-pointer hover:opacity-85 transition-all">
            <AlignJustify />
          </PopoverTrigger>


          <PopoverContent align="center" side="bottom" sideOffset={10}>
            <div className="flex gap-2 bg-gray-700 p-4 rounded">

              <span></span>
              <Button
                disabled={'light' === theme}
                className="hover:cursor-pointer"
                onClick={() => setTheme('light')}>
                <Sun />
              </Button>

              <Button
                disabled={'dark' === theme}
                className="hover:cursor-pointer"
                onClick={() => setTheme('dark')}>
                <Moon />
              </Button>

              <Button
                disabled={'system' === theme}
                className="hover:cursor-pointer"
                onClick={() => setTheme('system')}>
                <Settings />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>)
}