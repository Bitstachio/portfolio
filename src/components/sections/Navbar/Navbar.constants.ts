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
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
] satisfies TNavItem[];

export const ROOT_SECTION_ID = navItems[0].id;
