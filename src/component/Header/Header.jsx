import Logo from "./Logo.jsx";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { navItem } from "/src/Data/NavItem.jsx";
import clsx from "clsx";
const Header = () => {
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const hideSideBar = () => {
    setOpen(false);
  };

  return (
    <nav className="font-helvetica px-5">
      <div className="flex items-center justify-between my-5 px-5">
        <div onClick={toggleOpen} className="lg:hidden">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>
        <div
          className={clsx(
            "fixed top-0 right-0 h-full w-[100%] lg:hidden bg-black/30 z-10 transition duration-300 ease-in-out",
            { "translate-x-0": open, "-translate-x-full": !open }
          )}
        >
          <div className="absolute top-0 left-0 h-screen w-screen min-[400px]:w-[90%] bg-white">
            <div className="absolute top-5 right-5">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-3xl"
                onClick={toggleOpen}
              />
            </div>
            {open && (
              <ul className="py-16 px-5">
                {navItem.map((item, index) => (
                  <NavLink key={item.id} to={item.path}>
                    <li
                      key={item.id}
                      className="my-5 font-bold italic text-2xl cursor-pointer"
                      onClick={hideSideBar}
                    >
                      {item.title}
                    </li>
                  </NavLink>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-between w-screen">
          <div>
            <Logo />
          </div>
          <div className="flex justify-between items-center gap-5">
            <ul className="flex flex-row items-center justify-between gap-5 text-lg cursor-pointer">
              <li className="hover:text-[#f15d5d]">
                <NavLink to="allJobs">Browse Job</NavLink>
              </li>
              <NavLink to="about"><li className="hover:text-[#f15d5d]">About</li></NavLink>
              <NavLink to="postjob">
                <li className="font-semibold py-2 px-3 rounded-lg border-2 border-[#f15d5d] hover:bg-[#f15d5d] hover:text-[#fffff1] hover:transition ease-in-out delay-150">
                  Post a job
                </li>
              </NavLink>
            </ul>
            {/* <FontAwesomeIcon icon={faHeart} className="text-2xl" /> */}
          </div>
        </div>
        <div className="lg:hidden">
          <Logo />
        </div>
        <div className="lg:hidden">
          <FontAwesomeIcon icon={faHeart} className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
