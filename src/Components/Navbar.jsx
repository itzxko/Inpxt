import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from "../Components/Modal/Contact";

//importing icons
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { GoBriefcase } from "react-icons/go";
import { GiDeadWood } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";

import { GoCreditCard } from "react-icons/go";

import { GoMail } from "react-icons/go";

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
            <GiDeadWood />
          </Link>
          <div
            className="flex lg:hidden items-center justify-center p-2 text-2xl cursor-pointer text-white"
            onClick={handleSidebar}
          >
            <BiMenuAltLeft />
          </div>
          <div className="hidden lg:flex gap-4 p-2 font-figtree text-white font-normal text-sm items-center justify-center">
            <p className="cursor-pointer">Pricing</p>
            <Link
              to="works"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              Works
            </Link>
            <div
              className="bg-[#2f2f2f] px-4 py-2 text-black rounded overflow-hidden cursor-pointer group ease-in-out duration-500"
              onClick={handleContact}
            >
              <div className="relative flex items-center justify-center px-6 py-2 ">
                <div className="absolute text-lg text-white right-[-120%] group-hover:right-[16px] ease-in-out duration-500">
                  <IoMailOutline />
                </div>
                <div className="absolute right-[2px] cursor-pointer group-hover:right-[200%] ease-in-out duration-500">
                  <p className="text-xs text-white font-normal">Contact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !sidebar
            ? "fixed flex bg-[#faffff] h-full w-3/4 top-[-100%] ease-in-out duration-500 items-start justify-center p-12 shadow-xl z-[2]"
            : "fixed flex bg-[#faffff] h-full w-3/4 top-0 ease-in-out duration-500 items-start justify-center p-12 shadow-xl z-[2]"
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
              to="/"
            >
              <div className="text-2xl">
                <GoCreditCard />
              </div>
              <div className="flex items-center justify-center w-full truncate">
                <p className="text-sm font-normal">Pricing</p>
              </div>
            </Link>
            <Link
              className="flex flex-row items-center justify-center gap-4 cursor-pointer py-4 "
              to="works"
              smooth={true}
              duration={500}
            >
              <div className="text-2xl">
                <GoBriefcase />
              </div>
              <div className="flex items-center justify-center w-full truncate">
                <p className="text-sm font-normal">My Works</p>
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
