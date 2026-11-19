import logo from "@/assets/images/logo.png";
import { Button } from "@/components/atoms/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavMenu from "@/components/molecules/NavMenu";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="sticky w-full bg-header-bg border-b border-border z-50 top-0">
      <div className="flex py-3 px-10 justify-between items-center">
        <a href="/">
          <img src={logo} alt="Gambar Logo" className="w-26.25 h-5.75" />
        </a>
        <Button
          onClick={() => setIsOpenMenu((prev) => !prev)}
          type="button"
          variant="ghost"
          size="icon-lg"
          className="flex md:hidden"
        >
          <Menu className="size-6" />
        </Button>
        <NavMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      </div>
    </header>
  );
}

export default Header;
