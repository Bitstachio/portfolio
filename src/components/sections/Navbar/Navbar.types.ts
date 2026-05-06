export type TNavItemId = "about" | "experience" | "projects";

export type TNavItem = {
  id: TNavItemId;
  href: string;
  external?: boolean;
};
