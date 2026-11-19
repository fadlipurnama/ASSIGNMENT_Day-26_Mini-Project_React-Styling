import { Button } from "@/components/atoms/button";
import { cn } from "cn";
import { X } from "lucide-react";
import NavList from "./nav-list";

function NavMenu({ isOpenMenu, setIsOpenMenu }) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-max flex-col bg-header-bg py-3 px-10 gap-2 shadow-lg z-50",
        isOpenMenu ? "flex" : "hidden",
        "md:static md:h-auto md:w-auto md:flex md:flex-row md:bg-transparent md:shadow-none md:p-0 md:gap-6",
      )}
    >
      <div className="flex md:hidden w-full justify-end">
        <Button
          onClick={() => setIsOpenMenu(false)}
          variant="ghost"
          size="icon-lg"
        >
          <X className="size-6" />
        </Button>
      </div>
      <NavList />
      <Button
        variant="default"
        size="lg"
        type="button"
        className="w-full mb-4 md:w-min md:mb-0"
      >
        Sign Up
      </Button>
    </div>
  );
}

export default NavMenu;
