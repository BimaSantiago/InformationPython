import type { IconProp } from "@fortawesome/fontawesome-svg-core"

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

export interface DropdownItemProps {
  id: string;
  item: string,
  path: string,
  itemSelectioned?: boolean,
  activeItem?: () => void
}