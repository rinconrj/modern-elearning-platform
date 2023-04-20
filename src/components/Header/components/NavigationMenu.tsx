import Link from 'next/link'
import { FC, useState } from 'react'
import MainMenu from './MainMenu';

const NavigationMenu: FC<any> = ({ headerBtn }) => {

  const [openSubMen, setOpenSubMen] = useState<string | null>(null);
  const onClick = () => {
    console.log('clicked')
  };

  const activeFun = (name: string) => setOpenSubMen(name === openSubMen ? "" : name);
  const activeLi = (name: string) =>
    name === openSubMen ? "d-block" : "d-md-block d-sm-none";
  const iconChange = (name: string) => (name === openSubMen ? "ws-activearrow" : "");


  return (
<div>

        {/* LOGO IMAGE */}
        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
        <div className="desktoplogo">
          <Link legacyBehavior href="/demo-1">
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
        <div className="desktoplogo">
          <Link legacyBehavior href="#">
            <a href="d#hero-3" className="logo-white">
              <img
                src="images/logo-white.png"
                width={172}
                height={40}
                alt="header-logo"
                />
            </a>
          </Link>
        </div>
        {/* MAIN MENU */}
        <div>

        <MainMenu onClick={onClick} activeFun={activeFun} iconChange={iconChange} activeLi={activeLi} />
        </div>

        {/* END MAIN MENU */}
                </div>
  )
}
export default NavigationMenu