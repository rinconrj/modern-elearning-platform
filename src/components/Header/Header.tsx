import Link from "next/link";
import React, { useState } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";
import MainMenu from "./components/MainMenu";


function Header({ menuItems }: { menuItems?: IMenu[] }) {

  const [openSubMen, setOpenSubMen] = useState<string | null>(null);
  const onClick = () => {
    console.log('clicked')
  };

  const activeFun = (name: string) => setOpenSubMen(name === openSubMen ? "" : name);
  const activeLi = (name: string) =>
    name === openSubMen ? "d-block" : "d-md-block d-sm-none";
  const iconChange = (name: string) => (name === openSubMen ? "ws-activearrow" : "");


  return (
    <header id="header" className="header white-menu navbar-dark">
      <div className="wsmainfull menu clearfix" id="wsmainfull">
        <div className="desktoplogo">
          <Link legacyBehavior href="/">
            <a href="#hero-3" className="logo-black">
              <img
                src="images/logo.png"
                width={172}
                height={40}
                alt="header-logo"
              />
            </a>
          </Link>
        </div>
        <div>

        <MainMenu onClick={onClick} activeFun={activeFun} iconChange={iconChange} activeLi={activeLi} menuItems={menuItems} />
        </div>

      </div>
    </header>
  );
}

export default Header