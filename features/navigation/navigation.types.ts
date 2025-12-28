export type TNavItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: TNavItem[];
};

export type TNavConfig = TNavItem[];
