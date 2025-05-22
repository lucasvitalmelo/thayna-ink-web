import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { AlignJustify, Moon, Settings, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/context/theme-context";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const themeConfigButtons = [
  { icon: Sun, value: 'light' },
  { icon: Moon, value: 'dark' },
  { icon: Settings, value: 'system' },
] as const

export function Menu() {
  const { setTheme, theme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer hover:opacity-85 transition-all">
        <AlignJustify />
      </PopoverTrigger>

      <PopoverContent align="center" side="bottom" sideOffset={10}>
        <div className="flex gap-2 bg-gray-800 p-4 rounded">
          <div className="flex flex-col gap-1">


            <span className="text-[12px]">Theme: </span>

            <div className="flex gap-2">
              {
                themeConfigButtons.map(({ icon: Icon, value }) => (
                  <button
                    disabled={value === theme}
                    className="hover:bg-gray-700 hover:cursor-pointer transition-all border p-1 rounded disabled:opacity-60 disabled:pointer-events-none"
                    onClick={() => setTheme(value as Theme)}>
                    <Icon size={14} />
                  </button>
                ))}

            </div>
            <NavLink to='/settings' >
              <Button className="cursor-pointer mt-4" variant={"outline"}>
                Settings
              </Button>
            </NavLink>

          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}