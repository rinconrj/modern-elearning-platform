import Link from 'next/link'
import { FC } from 'react'

const MobileHeader: FC<any> = () => {
    const onClick = () => {
    console.log('clicked')
  };
  return (
            <div className="wsmobileheader clearfix">
          <Link href="#">
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
  )
}
export default MobileHeader