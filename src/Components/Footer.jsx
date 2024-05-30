import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiDeadWood } from "react-icons/gi";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandGithub,
  TbBrandDiscord,
} from "react-icons/tb";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import Keyboard from "../JSON/Accessories.json";
import Mouse from "../JSON/Scrollables.json";

const Footer = () => {
  const Navigate = useNavigate();
  const [works, setWorks] = useState(false);
  const [accessories, setAccessories] = useState(false);

  const openWorks = () => {
    setWorks(!works);
    setAccessories(false);
  };
  const openAccessories = () => {
    setAccessories(!accessories);
    setWorks(false);
  };

  const handleMouseClicked = (id) => {
    Navigate(`/mouse/${id}`);
  };

  const handleKeyboardClicked = (id) => {
    Navigate(`/keyboard/${id}`);
  };

  return (
    <>
      {" "}
      <div className="bg-[#2f2f2f] w-full flex items-center justify-center text-white">
        <div className="w-full lg:w-4/5 flex items-center justify-center p-12">
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12">
            <div className="flex items-center justify-center w-full">
              <div className="w-full flex flex-col gap-4 items-start justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="font-figtree font-semibold text-sm uppercase">
                    Gaming and Productivity Mice
                  </p>
                  {works === false ? (
                    <IoCaretDown
                      onClick={openWorks}
                      className="cursor-pointer text-sm text-white"
                    />
                  ) : (
                    <IoCaretUp
                      onClick={openWorks}
                      className="cursor-pointer text-sm text-white"
                    />
                  )}
                </div>
                {Mouse.map((mouse, index) => (
                  <div
                    className={
                      works === false
                        ? "hidden"
                        : "flex items-center justify-start w-full"
                    }
                    key={index}
                    onClick={() => handleMouseClicked(mouse.id)}
                  >
                    <p
                      className="text-sm font-figtree font-normal text-gray-400 hover:text-white ease-in-out duration-500 cursor-pointer capitalize truncate"
                      key={index}
                    >
                      {mouse.category}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-between w-full">
                  <p className="font-figtree font-semibold text-sm uppercase">
                    Mechanical Keyboards
                  </p>
                  {accessories === false ? (
                    <IoCaretDown
                      onClick={openAccessories}
                      className="cursor-pointer text-sm text-white"
                    />
                  ) : (
                    <IoCaretUp
                      onClick={openAccessories}
                      className="cursor-pointer text-sm text-white"
                    />
                  )}
                </div>
                {Keyboard.map((keyboard, index) => (
                  <div
                    className={
                      accessories === false
                        ? "hidden"
                        : "flex w-full items-center justify-start"
                    }
                    key={index}
                    onClick={() => handleKeyboardClicked(keyboard.id)}
                  >
                    <p
                      className="text-sm font-figtree font-normal text-gray-400 hover:text-white ease-in-out duration-500 cursor-pointer capitalize truncate"
                      key={index}
                    >
                      {keyboard.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 items-center justify-center">
              <div className="w-full flex items-center justify-center">
                <p className="uppercase font-figtree text-sm font-semibold truncate">
                  Social Media
                </p>
              </div>
              <div className="flex flex-row gap-2 w-full items-center justify-center">
                <div className="p-2 bg-gray-700 rounded-md group hover:rounded-full ease-in-out duration-500 flex items-center justify-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.facebook.com/itzxko.z"
                  >
                    <TbBrandFacebook className="text-xl text-white group-hover:rotate-[360deg] ease-in-out duration-500" />
                  </a>
                </div>
                <div className="p-2 bg-gray-700 rounded-md group hover:rounded-full ease-in-out duration-500 flex items-center justify-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.instagram.com/itzxko/"
                  >
                    <TbBrandInstagram className="text-xl text-white group-hover:rotate-[360deg] ease-in-out duration-500" />
                  </a>
                </div>
                <div className="p-2 bg-gray-700 rounded-md group hover:rounded-full ease-in-out duration-500 flex items-center justify-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/itzxko"
                  >
                    <TbBrandGithub className="text-xl text-white group-hover:rotate-[360deg] ease-in-out duration-500" />
                  </a>
                </div>
                <div className="p-2 bg-gray-700 rounded-md group hover:rounded-full ease-in-out duration-500 flex items-center justify-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="http://discordapp.com/users/720229528173019160"
                  >
                    <TbBrandDiscord className="text-xl text-white group-hover:rotate-[360deg] ease-in-out duration-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[#3b3b3b] font-figtree py-2">
        <p className="text-xs font-semibold text-white/25">made by @itzxko</p>
      </div>
    </>
  );
};

export default Footer;
