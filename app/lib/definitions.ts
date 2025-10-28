export interface NavListInfo {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface Role {
  role: string;
  comment: string;
}

export interface CarouselType {
  id: string;
  tag: string[];
  title: string;
  description?: string;
  label?: string;
  from?: string;
  to?: string;
}
