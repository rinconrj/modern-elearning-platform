import Link from 'next/link'
import { FC } from 'react'

const DropDown: FC<any> = ({activeFun, activeLi, iconChange}) => {
  return (
    <li onClick={() => activeFun("pages")}>
      <span className={`wsmenu-click ${iconChange("pages")}`}>
        <i className="wsmenu-arrow" />
      </span>
      <a href="#">
        Pages <span className="wsarrow" />
      </a>
      <div
        className={`wsmegamenu clearfix halfmenu ${activeLi(
          "pages"
        )}`}
      >
        <div className="container-fluid">
          <div className="row">
            {/* Links */}
            <ul className="col-lg-6 col-md-12 col-xs-12 link-list left-link-list">
              <li>
                <Link href="about">About Us Page</Link>
              </li>
              <li>
                <Link href="categories-list">
                  Categories Listing
                </Link>
              </li>
              <li>
                <Link href="category-details">
                  Category Details
                </Link>
              </li>
              <li>
                <Link href="courses-list">Courses Listing</Link>
              </li>
              <li>
                <Link href="course-details">Course Details</Link>
              </li>
              <li>
                <Link href="teachers-list">Teachers Listing</Link>
              </li>
              <li>
                <Link href="teacher-profile">Teacher Profile</Link>
              </li>
            </ul>
            {/* Links */}
            <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
              <li>
                <Link href="become-a-teacher">
                  Become A Teacher
                </Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plans Page</Link>
              </li>
              <li>
                <Link href="reviews">Reviews Page</Link>
              </li>
              <li>
                <Link href="faqs">FAQs Page</Link>
              </li>
              <li>
                <Link href="blog-listing">Blog Listing</Link>
              </li>
              <li>
                <Link href="single-post">Single Post</Link>
              </li>
              <li>
                <Link href="contacts">Contacts Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}
export default DropDown