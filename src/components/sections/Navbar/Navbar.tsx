import { navItems } from "./Navbar.constants";

const Navbar = () => (
  <nav>
    <ul>
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <a
            href={navItem.href}
            className="group flex items-center gap-3 p-1 transition-all font-semibold text-subtle hover:text-foreground"
          >
            <span className="inline-block h-px w-8 group-hover:w-16 bg-gray-400/50 group-hover:bg-gray-400 duration-300" />
            {navItem.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
