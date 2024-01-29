import Hamburger from "./Hamburger.jsx";
import Logo from "./Logo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import clsx from 'clsx'
const Navbar = () => {
  const menuItem = [
    { title: "Front end Developer Jobs", id: 0 },
    { title: "Back End Developer Jobs", id: 1 },
    { title: "Fullstack developer Jobs", id: 2 },
    { title: "Post a Job", id: 3 },
    { title: "About", id: 4 },
    { title: "Why list with us", id: 5 },
    { title: "Contact us", id: 6 },
  ];

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="flex items-center justify-between my-5 px-5">
        <div onClick={toggleOpen} className="lg:hidden">
          <Hamburger />
        </div>
        {/* the sidebar for mobile */}
        <div className={clsx("fixed top-0 right-0 h-full w-screen lg:hidden bg-black/30 backdrop-blur-sm transition duration-700 ease-in-out", {'translate-x-0': open, '-translate-x-full': !open})}>
          <div className="absolute top-0 left-0 h-screen w-screen bg-white">
            <div className="absolute top-5 right-5">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-3xl"
                onClick={toggleOpen}
              />
            </div>
            {open && (
              <ul className="py-16 px-5">
                {menuItem.map((item, index) => (
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

        <div>
          <Logo />
        </div>
        <div>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
