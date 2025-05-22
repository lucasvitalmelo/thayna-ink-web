import { Menu } from "./menu";

export function Navbar() {
  return (
    <nav className="flex w-full h-15 items-center justify-center border-b-2 border-gray-700">
      <div className="flex justify-between max-w-7xl w-full mx-5">
        <span>Thayna Vieira</span>

        <Menu />

      </div>
    </nav>)
}