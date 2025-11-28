import { Link } from "react-router-dom";
import type { DropdownItemProps } from "../types/types";
import { IDs } from "../data/menuData";

const findFirstContentId = (subtemaId: string) => {
    const topic = IDs.find(item => item.subtema === subtemaId);
    return topic && topic.ids.length > 0 ? topic.ids[0] : null; 
};

export default function DropdownItem({id, item, itemSelectioned, activeItem}: DropdownItemProps) {
  
  const firstContentId = findFirstContentId(id);

  const linkTo = firstContentId ? `/python/${id}#${firstContentId}` : `/python/${id}`;
  
  return (
    <>
    <Link to={`${linkTo}`} key={id} className={`ml-8 p-3 text-white font-medium
    hover:bg-indigo-800 ${itemSelectioned ? 'bg-indigo-800' : 'bg-none'}
    transition-all duration-300`}
    onClick={activeItem}>
        {item}
    </Link>
    </>
  )
}