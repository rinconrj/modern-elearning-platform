import Link from 'next/link'
import { FC } from 'react'
import { menu } from '../../../utils/enums'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  UserButton
} from "@clerk/nextjs";
import { useRouter } from 'next/router';

const MainMenu: FC<any> = ({ onClick, activeFun, iconChange, activeLi, menuItems }: { onClick: (name: string) => void, activeFun: (name: string) => void, iconChange: (name: string) => void, activeLi: (name: string) => void, menuItems: IMenu[] }) => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser()

  if(isSignedIn){
    router.push('/my-courses')
  }


  return (
    <nav className="wsmenu clearfix" >
      <ul className="wsmenu-list">
        {
          (menuItems || menu).map((item, i) => {
            if (item.children.length) {
              return (
                <li key={i} onClick={() => activeFun(item.label)}>
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
                            item.children.map((item, index) => {
                              return <li key={i + '-' + index}>
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


        {!isSignedIn && <li className="nl-simple">
          <Link href="/sign-in">
            <span className="btn btn-tra-grey green-hover">
              Sign In
            </span>
          </Link>
        </li>}
        {!isSignedIn && <li className="nl-simple">
          <Link href="/sign-up">
            <span className="btn btn-tra-grey rose-hover">
            Register
            </span>
          </Link>
        </li>}

        <li className="nl-simple">
          <SignedIn >
            <UserButton  />
          </SignedIn>
        </li>
      </ul>

    </nav>
  )
}
export default MainMenu