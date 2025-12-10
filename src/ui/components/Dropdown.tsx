import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { DropdownProps } from "../types/types"
import DropdownItem from "./DropdownItem"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


export default function Dropdown({icon, title, items, dropdownOpen, toggleDropdown}: DropdownProps) {
    const [itemSelectioned, setItemSelectioned] = useState<string | null>(null)

    const activeItem = (id: string) => {
        setItemSelectioned(id ? id : null);
    }
    
    const location = useLocation().pathname.substring(8);

    useEffect(() => {    
        if (itemSelectioned !== location) setItemSelectioned(null); 
        if (itemSelectioned === null) setItemSelectioned(location);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
    <div>
        <button className="w-full flex items-center gap-3
        p-4 text-white cursor-pointer
        hover:bg-azul-zzz transition-all duration-300"
        onClick={toggleDropdown}> 
            <FontAwesomeIcon icon={icon} className="text-amarillo" size="xl" />
            <h3 className="text-xl font-bold tracking-wide flex-1 text-left">
                {title}
            </h3>
            <span className={`${!dropdownOpen ? 'rotate-0' : 'rotate-90'} 
            transition-all duration-300 ease-in-out`}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </span>
        </button>
        <div className={`flex flex-col bg-azul-zz overflow-hidden
        ${dropdownOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
        transition-all duration-600`}>
            {items.map((item) => (
                <DropdownItem 
                    key={item.id}
                    {...item}
                    itemSelectioned={itemSelectioned === item.id}
                    activeItem={() => activeItem(item.id)}
                />
            ))}
        </div>
    </div>
    )
}