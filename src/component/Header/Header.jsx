import Logo from "./Logo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { navItem } from "/src/Data/NavItem.jsx";
import clsx from "clsx";
const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="font-helvetica">
      <div className="flex items-center justify-between my-5 px-5">
        <div onClick={toggleOpen} className="lg:hidden">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>
        {/* the sidebar for mobile */}
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
                  <li
                    key={index}
                    className="my-5 font-bold italic text-2xl cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* navbar for desktop */}
        <div className="hidden lg:flex flex-row items-center justify-between w-screen">
          <div>
            <Logo />
          </div>
          <div className="flex justify-between items-center gap-5">
            <ul className="flex flex-row items-center justify-between gap-5 text-lg cursor-pointer">
              <li className="hover:text-[#f15d5d]">Browse Job</li>
              <li className="hover:text-[#f15d5d]">Browse Company</li>
              <li className="font-semibold py-2 px-3 rounded-lg border-2 border-[#f15d5d] hover:bg-[#f15d5d] hover:text-[#fffff1] hover:transition ease-in-out delay-150">
                Post a job
              </li>
            </ul>
            <FontAwesomeIcon icon={faHeart} className="text-2xl" />
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
