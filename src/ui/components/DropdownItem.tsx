import { Link } from "react-router-dom";
import type { DropdownItemProps } from "../types/types";

export default function DropdownItem({id, item, path, itemSelectioned, activeItem}: DropdownItemProps) {
  return (
    <>
    <Link to={path} key={id} className={`ml-8 p-3 text-white font-medium
    hover:bg-indigo-800 ${itemSelectioned ? 'bg-indigo-800' : 'bg-none'}
    transition-all duration-300`}
    onClick={activeItem}>
        {item}
    </Link>
    </>
  )
}