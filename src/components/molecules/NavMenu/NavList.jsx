import { cn } from "cn";
import { NavLink } from "react-router-dom";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function NavList() {
  return (
    <nav className="flex items-center w-full mb-4 md:m-0">
      <ul className="flex flex-col gap-2.5 md:flex-row md:gap-5">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label + href} className="inline-flex items-center w-full">
            <NavLink
              to={href}
              end={href === "/"}
              className={({ isActive }) =>
                cn(
                  "font-medium text-foreground py-2 px-3 cursor-pointer hover:text-primary rounded-sm",
                  isActive && "border-b-2 border-b-primary rounded-b-none",
                )
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;