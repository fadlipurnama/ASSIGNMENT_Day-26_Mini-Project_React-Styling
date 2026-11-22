import { Button } from "@/components/atoms/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import NavMenu from "@/components/molecules/NavMenu";
import { cn } from "cn";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "container sticky top-0 z-50 mx-auto border-b bg-background px-4 py-3",
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src="/assets/images/logo-lightmode.png"
            alt="Gambar Logo"
            className="w-32 object-contain dark:hidden"
          />
          <img
            src="/assets/images/logo-darkmode.png"
            alt="Gambar Logo"
            className="hidden w-32 object-contain dark:block"
          />
        </Link>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          variant="ghost"
          size="icon-lg"
          className="flex md:hidden"
        >
          <Menu className="size-6" />
        </Button>
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}

export default Header;