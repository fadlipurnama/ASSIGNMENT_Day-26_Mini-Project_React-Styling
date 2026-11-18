import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { X } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

function NavList({ isOpenMenu, setIsOpenMenu }) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-max flex-col bg-header-bg px-6 py-4 gap-6 shadow-lg z-50",
        isOpenMenu ? "flex" : "hidden",
        "md:static md:h-auto md:w-auto md:flex md:flex-row md:bg-transparent md:shadow-none md:p-0 md:gap-6",
      )}
    >
      <div className="flex md:hidden w-full justify-end pt-4">
        <Button
          onClick={() => setIsOpenMenu(false)}
          variant="ghost"
          size="icon-lg"
        >
          <X className="size-6" />
        </Button>
      </div>
      <nav className="w-full">
        <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-9">
          {NAV_LINKS.map(({ label, href }) => (
            <li
              className="font-medium p-2 rounded-lg cursor-pointer hover:font-bold hover:bg-background hover:text-primary"
              key={label + href}
            >
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button variant="default" size="lg" type="button" className="w-full mb-4 md:w-min md:mb-0">
        Sign Up
      </Button>
    </div>
  );
}

export default NavList;
