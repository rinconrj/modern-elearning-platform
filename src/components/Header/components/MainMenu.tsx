import Link from 'next/link'
import { FC } from 'react'
import { menu } from '../../../utils/enums'

const MainMenu: FC<any> = ({ onClick, activeFun, iconChange, activeLi }) => {
  return (
    <nav className="wsmenu clearfix" >
      <ul className="wsmenu-list">
        {
          menu.map((item, i) => {
            if (item.children.length) {
              return (
                <li onClick={() => activeFun(item.label)}>
                  <span className={`wsmenu-click ${iconChange(item.label)}`}>
                    <i className="wsmenu-arrow" />
                  </span>
                  <a href={item.href}>{item.label}<span className="wsarrow" />
                  </a>
                  <div
                    className={`wsmegamenu clearfix halfmenu ${activeLi(
                      item.label
                    )}`}
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <ul className="col-lg-6 col-md-12 col-xs-12 link-list left-link-list">
                          {
                            item.children.map(item => {
                              return <li>
                                <Link href={item.href}>{item.label}</Link>
                              </li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>)
            } else {
              return (
                <li key={i} className="nl-simple">
                  <Link href={item.href}>{item.label}</Link>
                </li>)
            }
          })
        }
        <li className="nl-simple">
          <Link href="/sign-in">
            <span className="btn btn-tra-grey green-hover">
              Sign In
            </span>
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/sign-up">
            <span className="btn btn-tra-grey rose-hover">
            Register
            </span>
          </Link>
        </li>
      </ul>

    </nav>
  )
}
export default MainMenu