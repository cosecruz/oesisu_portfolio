export interface NavListInfo {
  id: string;
  label: string;
  iconUrl:string
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface Role {
  role: string;
  comment: string;
}
