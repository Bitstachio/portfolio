import { TNavItem } from "./Navbar.types";

export const navItems = [
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
] satisfies TNavItem[];

export const ROOT_SECTION_ID = navItems[0].id;
