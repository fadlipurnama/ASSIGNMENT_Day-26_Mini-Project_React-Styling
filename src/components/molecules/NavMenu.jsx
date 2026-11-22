import { Button } from "@/components/atoms/button";
import { cn } from "cn";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function NavMenu({ isOpen, setIsOpen }) {
  return (
    <div
      className={cn(
        "bg-background absolute top-0 left-0 w-full h-screen flex-col p-4 gap-2 shadow-lg z-50",
        isOpen ? "flex" : "hidden",
        "md:static md:h-auto md:w-auto md:flex md:flex-row md:shadow-none md:p-0 md:gap-6",
      )}
    >
      <div className="flex md:hidden w-full justify-end">
        <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon-lg">
          <X className="size-6" />
        </Button>
      </div>
      <nav className="flex items-center w-full mb-4 md:m-0">
        <ul className="flex flex-col gap-2.5 md:flex-row md:gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label + href} className="inline-flex items-center gap-4">
              <NavLink
                to={href}
                end={href === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "font-medium text-foreground cursor-pointer py-2 px-3 hover:text-primary rounded-sm",
                    isActive &&
                      "text-primary md:border-b-2 md:border-b-primary",
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        variant="default"
        size="lg"
        type="button"
        className="w-full md:w-min"
      >
        Sign Up
      </Button>
    </div>
  );
}

export default NavMenu;
