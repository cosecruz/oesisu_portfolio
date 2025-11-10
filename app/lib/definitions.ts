export interface NavListInfo {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}




