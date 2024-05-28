import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [text] = useTypewriter({
    words: [" Furnitures!", " Memories!", " Works!"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1594580701468-e5678582b8ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[50vh] w-full font-figtree"
      id="header"
    >
      <div className="flex flex-col w-full h-full items-center justify-center bg-gradient-to-t from-gray-700/50 via-gray-400/25 to-black/50">
        <div className="flex items-center justify-center pt-12">
          <p className="text-xl md:text-4xl font-extrabold font-signika text-white">
            Crafting Timeless
            <span className="text-xl md:text-4xl font-extrabold font-signika text-white">
              {text}
            </span>
            <Cursor />
          </p>
        </div>
        <div className="flex w-2/3 items-center justify-center pt-4">
          <p className="text-center text-sm text-white font-normal w-full">
            "Furniture and food are ways that people define their attitude
            toward life."
          </p>
        </div>
        <div className="flex items-center justify-end pt-2">
          <p className="text-end text-xs text-white font-normal">
            - Terence Conran
          </p>
        </div>
        <div className="w-full flex items-center justify-center pt-8">
          <Link
            className="bg-[#2f2f2f] py-2 px-6 text-sm text-white font-semibold rounded hover:bg-[#faffff] hover:text-[#2f2f2f] ease-in-out duration-700 cursor-pointer"
            to="works"
            smooth={true}
            offset={-60}
            duration={500}
          >
            Explore.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
