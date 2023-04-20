import Link from 'next/link'
import { FC } from 'react'
import MainMenu from './NavigationMenu'

const DesktopHeader: FC<any> = () => {
  return (
    <div className="wsmainfull menu clearfix" id="wsmainfull">
      <div className="wsmainwp clearfix">
        {/* LOGO IMAGE */}
        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
        <div className="desktoplogo">
          <Link href="/demo-1" className="logo-black">
              <img
                src="images/logo.png"
                width={172}
                height={40}
                alt="header-logo"
              />
          </Link>
        </div>
        <div className="desktoplogo">
          <Link href="#" className="logo-white">
              <img
                src="images/logo-white.png"
                width={172}
                height={40}
                alt="header-logo"
              />
          </Link>
        </div>
        {/* MAIN MENU */}
        <MainMenu/>

        {/* END MAIN MENU */}
      </div>
    </div>
  )
}
export default DesktopHeader