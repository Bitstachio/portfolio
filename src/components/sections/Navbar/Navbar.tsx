"use client";
import { navItems, ROOT_SECTION_ID } from "./Navbar.constants";
import { useActiveSection } from "./useActiveSection";

const Navbar = () => {
  const activeId = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  // TODO: The current approach can potentially be improved
  // The main issue is that the styles in the active state duplicate the hover state
  // As a result, if active style needs to be updated in the future, it has to modify 2 places
  // Creating a `hoverOrActive` function to conditionally append "hover:" to the beginning was considered
  // The main issue is the default styles (when hover doesn't take action)
  // So when `isActive` is true and "hover:" is not added, we end up with 2 classes for the same style, causing unpredictable behavior
  return (
    <nav>
      <ul>
        {navItems.map((item) => {
          const isActive = activeId === item.href.replace("#", "");
          return (
            <li key={item.id}>
              <a
                href={item.href === "#" + ROOT_SECTION_ID ? "#" : item.href}
                className={`group flex py-3 text-xs items-center gap-3 p-1 transition-all font-semibold ${isActive ? "text-strong" : "text-muted hover:text-strong"}`}
              >
                <span
                  className={`inline-block h-px duration-300 ${isActive ? "w-16 bg-gray-400" : "w-8 group-hover:w-16 bg-gray-400/50 group-hover:bg-gray-400"}`}
                />
                {item.label.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
