import { TNavItem } from "./Navbar.types";

export const navItems = [
  {
    id: "about",
    href: "#about",
  },
  {
    id: "experience",
    href: "#experience",
  },
  {
    id: "projects",
    href: "#projects",
  },
] satisfies TNavItem[];

export const ROOT_SECTION_ID = navItems[0].id;
