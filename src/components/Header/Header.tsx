import Link from "next/link";
import React, { useState } from "react";
import NavigationMenu from "./components/NavigationMenu";


function Header() {

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
      <div className="fixed top-0 right-0 left-0 z-1030">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <Link legacyBehavior href="#">
            <a
              onClick={() => onClick()}
              id="wsnavtoggle"
              className="wsanimated-arrow"
            >
              <span />
            </a>
          </Link>
          <span className="smllogo smllogo-black">
            <img
              src="images/logo.png"
              width={172}
              height={40}
              alt="mobile-logo"
            />
          </span>
          <span className="smllogo smllogo-white">
            <img
              src="images/logo-white.png"
              width={172}
              height={40}
              alt="mobile-logo"
            />
          </span>
        </div>
        <div className="wsmainfull menu clearfix" id="wsmainfull">
          <div className="wsmainwp clearfix">

            <NavigationMenu />

          </div>

        </div>
        {/* NAVIGATION MENU */}
        {/* END NAVIGATION MENU */}

      </div>
    </header>
  );
}

export default Header