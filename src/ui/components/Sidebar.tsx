import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";
import { DROPDOWNS } from "../data/menuData";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { SidebarProps } from "../types/types";

export default function Sidebar({isSidebarOpen, toggleSidebar}: SidebarProps) {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  }

  return (
    <>
    {isSidebarOpen && (
      <div className="fixed inset-0 bg-black/50 blur-4xl transition-all duration-300 md:hidden" />
    )}
    <aside className={`fixed flex flex-col ${isSidebarOpen ? 'md:w-64 w-dvw' : 'w-0'} h-full max-h-full bg-azul-fuerte
    transition-all duration-500 ease-in-out z-10 gap-4 overflow-hidden overflow-y-auto`}>
      <div className="w-full border-b-4 border-amarillo
      flex justify-between p-4 text-2xl">
        <Link to="/" className="font-bold text-amber-300 cursor-crosshair">
          Curso Python
        </Link>
        <button className="text-gris cursor-pointer 
        hover:text-gris-medio/90 hover:scale-125 
        active:scale-100 active:text-gris 
        transition-all duration-300"
        onClick={toggleSidebar}>
          <FontAwesomeIcon icon={["fas", "xmark"]} />
        </button>
      </div>
      <nav>
        {DROPDOWNS.map((dropdown) => (
          <Dropdown 
            key={dropdown.id}
            {...dropdown}
            dropdownOpen={dropdownOpen === dropdown.id}
            toggleDropdown={() => toggleDropdown(dropdown.id)}
          />
        ))}
      </nav>
    </aside>
    </>
  )
}