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




const courses = [
  <div className="col-md-6 col-lg-4 col-xl-3">
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

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {userMenu.map(item => (
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            {item.label}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 drop-shadow-xl">
        <div className="flex items-center justify-between text-black">
          <div className="flex w-full justify-between items-center gap-4">
            <div className="mr-4 lg:block">{navList}</div>
            <div className="mr-4">
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
              </SignedIn>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton />
              </SignedOut>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>


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