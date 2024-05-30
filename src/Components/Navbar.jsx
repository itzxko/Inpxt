import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from "../Components/Modal/Contact";
import Cart from "./Cart";

//importing icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { BiMouseAlt } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { RxKeyboard } from "react-icons/rx";
import { GoMail } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  const handleContact = () => {
    setShowContact(!showContact);
    setSidebar(false);
  };

  console.log(showContact);

  return (
    <>
      <div className="absolute flex items-center justify-center w-full z-[1]">
        <div className=" w-full lg:w-4/5 flex items-center justify-between font-figtree p-4">
          <Link
            className="text-2xl text-white p-2 cursor-pointer tracking-tighter"
            to="header"
            smooth={true}
            duration={500}
          >
            <BiMouseAlt />
          </Link>
          <div
            className="flex lg:hidden items-center justify-center p-2 text-2xl cursor-pointer text-white"
            onClick={handleSidebar}
          >
            <BiMenuAltRight />
          </div>
          <div className="hidden lg:flex gap-4 p-2 font-figtree text-white font-normal text-sm items-center justify-center">
            <Link
              to="mice"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              Mice
            </Link>
            <Link
              to="keyboards"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              Keyboards
            </Link>
            <Cart />
          </div>
        </div>
      </div>
      <div
        className={
          !sidebar
            ? "fixed flex bg-[#FAF5FF] lg:hidden h-full w-3/4 top-[-100%] ease-in-out duration-500 items-start justify-center p-12 shadow-xl z-[2]"
            : "fixed flex bg-[#FAF5FF] lg:hidden h-full w-3/4 top-0 ease-in-out duration-500 items-start justify-center p-12 shadow-xl z-[2]"
        }
      >
        <div className="flex flex-col items-start justify-center w-full">
          <div
            className="flex items-center justify-end w-full pb-12 text-xl cursor-pointer"
            onClick={handleSidebar}
          >
            <IoMdClose />
          </div>
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <Link
              className="flex flex-row items-center justify-center gap-4 cursor-pointer py-4 "
              to="mice"
              smooth={true}
              duration={500}
              offset={-80}
            >
              <div className="text-2xl">
                <BiMouseAlt />
              </div>
              <div className="flex items-center justify-center w-full truncate">
                <p className="text-sm font-normal">Mice</p>
              </div>
            </Link>
            <Link
              className="flex flex-row items-center justify-center gap-4 cursor-pointer py-4 "
              to="keyboards"
              smooth={true}
              duration={500}
              offset={-80}
            >
              <div className="text-2xl">
                <RxKeyboard />
              </div>
              <div className="flex items-center justify-center w-full truncate">
                <p className="text-sm font-normal">Keyboards</p>
              </div>
            </Link>
            <div
              className="flex flex-row items-center justify-center gap-4 cursor-pointer py-4 "
              onClick={handleContact}
            >
              <div className="text-2xl">
                <GoMail />
              </div>
              <div className="flex items-center justify-center w-full truncate">
                <p className="text-sm font-normal">Contact Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showContact && (
        <Contact
          showContact={showContact}
          closeContact={() => setShowContact(!showContact)}
        />
      )}
    </>
  );
};

export default Navbar;
