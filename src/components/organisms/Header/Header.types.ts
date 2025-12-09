export interface NavItem {
  label: string;
  href: string;
  download?: boolean | string;
}

export interface HeaderProps{
  navItems: NavItem[]
}