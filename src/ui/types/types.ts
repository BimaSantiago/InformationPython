import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import type { ReactNode } from "react";

// Menu interfaces

export interface SidebarProps {
  isSidebarOpen: boolean,
  toggleSidebar: () => void
}

export interface DropdownProps {
  id: string,
  icon: IconProp,
  title: string,
  items: DropdownItemProps[],
  dropdownOpen?: boolean,
  toggleDropdown?: () => void
}

export interface SectionContent {
  title: string,
  body: ReactNode,
  code?: ReactNode
} 

export interface DropdownItemProps {
  id: string;
  item: string,
  content: SectionContent,
  itemSelectioned?: boolean,
  activeItem?: () => void
}