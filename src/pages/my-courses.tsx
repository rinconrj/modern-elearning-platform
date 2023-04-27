import React, { FC, useState } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";
import { userMenu } from '~/utils/enums';
import Link from 'next/link';
import CustomSelect from '~/components/ui/CustomSelect';
import { FaSearch } from 'react-icons/fa';
import Header from '~/components/Header/Header';




const courses = [
  <div key={1} className="col-md-6 col-lg-4 col-xl-3">
    <div className="cbox-1">
      <Link legacyBehavior href="/course-details">
        <a>
          {/* Image */}
          <img
            className="img-fluid"
            src="images/courses/course-1-img.jpg"
            alt="course-preview"
          />
          {/* Text */}
          <div className="cbox-4-txt">
            {/* Course Tags */}
            <p className="course-tags">
              <span>Languages</span>
              <span>English</span>
            </p>
            {/* Course Title */}
            <h5 className="h5-xs">
              Beginner Level English - Foundations
            </h5>
            {/* Course Rating */}
            <div className="course-rating clearfix">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>4.5 (26 Ratings)</span>
            </div>
            {/* Course Price */}
            <span className="course-price">
              <span className="old-price">
                $149.99
              </span>
              $138.99
            </span>
          </div>
        </a>
      </Link>
    </div>
  </div>
]

const MyCourses: FC<any> = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Header menuItems={userMenu} />
      <div className='flex justify-between h-16 m-24 pr-24'>
        <CustomSelect className={"w-72"} label={'Ordenar'} options={[]} />
        <div className="w-72">
          <Input label="Buscar mis Cursos" icon={<FaSearch />} />
        </div>

      </div>
      <div className="m-24 w-full py-12">
        {courses.map(item => item)}
      </div>
    </>
  );
}
export default MyCourses