import { Button } from "@/components/atoms/button";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import NavMenu from "@/components/molecules/NavMenu";
import { cn } from "cn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollYRef = useRef(0);

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
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollYRef.current;

      if (currentY <= 90 || isOpen) {
        setIsHidden((prev) => (prev ? false : prev));
      } else if (diff > 1) {
        setIsHidden((prev) => (!prev ? true : prev));
      } else if (diff < -1) {
        setIsHidden((prev) => (prev ? false : prev));
      }

      lastScrollYRef.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

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
        "container fixed inset-x-0 top-0 p-4 py-3 z-50 bg-background transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isHidden ? "-translate-y-full pointer-events-none" : "translate-y-0",
      )}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img
            src={"/assets/images/logo.png"}
            alt="Gambar Logo"
            className="w-26.25 h-5.75"
          />
        </a>
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
