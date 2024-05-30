import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../JSON/Scrollables.json";
import { BiMouseAlt } from "react-icons/bi";

//importing icons
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Sideways = () => {
  const containerRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  const handleScrollRight = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  const handleScrollLeft = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollOffset;
    }
  };

  const handleProductClick = (id) => {
    navigate(`/mouse/${id}`);
  };

  return (
    <div
      className="flex items-center justify-center w-full overflow-hidden bg-[#FAF5FF]"
      id="mice"
    >
      <div className="flex flex-col items-start justify-center w-full lg:w-4/5 pt-20 px-12 font-figtree antialiased">
        <div className="w-full flex-col">
          <div className="flex items-center justify-start gap-4 w-full">
            <div className="text-sm lg:text-xl p-3 text-white hover:text-[#2f2f2f] bg-[#2f2f2f] hover:bg-gray-200 ease-in-out duration-500 rounded-full flex items-center justify-center">
              <BiMouseAlt />
            </div>
            <div className="flex flex-col w-3/4">
              <p className="text-lg lg:text-2xl font-semibold truncate capitalize font-signika">
                Gaming and Productivity Mouse
              </p>
              <p className="font-figtree text-sm font-normal truncate lowercase">
                Unleash Your Potential: Explore Our Elite Collection of
                Peripherals.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full flex items-center group">
          <div
            className="flex flex-row overflow-x-auto scrollbar-hide w-full py-8 gap-6"
            ref={containerRef}
          >
            {Data.map((data, index) => (
              <div
                className="relative flex bg-gray-200 rounded-md min-w-[280px] max-w-[280px] h-[250px] overflow-hidden cursor-pointer"
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => handleProductClick(data.id)}
              >
                <img
                  src={data.src}
                  alt="/"
                  className="w-full object-cover object-center hover:scale-110 ease-in-out duration-500 antialiased"
                />
                <div
                  className={
                    hoverIndex === index
                      ? "absolute w-full h-full bg-gradient-to-t from-black/5 via-black/20 to-black/50 pointer-events-none ease-in-out duration-500 "
                      : "absolute w-full h-full bg-gradient-to-t from-black/5 via-black/10 to-black/20 pointer-events-none ease-in-out duration-500 "
                  }
                ></div>
                <div className="absolute w-full p-6 pointer-events-none">
                  <div className="w-full">
                    <p className="font-semibold text-md text-white truncate capitalize">
                      {data.category}
                    </p>
                  </div>
                  <div className="relative w-full py-2 flex items-start justify-center pointer-events-none">
                    <div
                      className={
                        hoverIndex === index
                          ? "absolute w-full left-[0] ease-in-out duration-500"
                          : "absolute w-full left-[-200%] ease-in-out duration-500"
                      }
                    >
                      <p className="text-sm font-figtree text-white font-normal line-clamp-2 lowercase">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute place-items-center text-md rounded-full bg-white/50 p-4 left-[-40%] cursor-pointer shadow-md group-hover:left-[-20px] ease-in-out duration-500"
            onClick={() => handleScrollLeft(160)}
          >
            <div className="">
              <MdOutlineArrowBackIosNew />
            </div>
          </div>
          <div
            className="absolute rounded-full place-items-center text-md bg-white/50 p-4 right-[-40%] cursor-pointer shadow-md group-hover:right-[-20px] ease-in-out duration-500"
            onClick={() => handleScrollRight(160)}
          >
            <div>
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sideways;
