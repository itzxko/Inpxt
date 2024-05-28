import React, { useRef, useState } from "react";
import { RiCupLine } from "react-icons/ri";
import accessories from "../JSON/Accessories.json";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Accessories = () => {
  const containerRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

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

  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <div className="p-12 font-signika flex flex-col items-center justify-center w-full lg:w-4/5">
        <div className="flex items-center justify-start gap-4 w-full">
          <div className="text-xl p-3 text-white hover:text-[#2f2f2f] bg-[#2f2f2f] hover:bg-gray-200 ease-in-out duration-500 rounded-full flex items-center justify-center">
            <RiCupLine />
          </div>
          <div className="flex flex-col w-3/4">
            <p className="text-lg lg:text-2xl text-md font-semibold font-signika truncate">
              Furniture Accessories
            </p>
            <p className="text-sm font-normal font-figtree lowercase truncate">
              stylish add-ons for your furniture.
            </p>
          </div>
        </div>
        <div className=" relative w-full flex items-center group">
          <div
            className="flex flex-row overflow-x-auto scrollbar-hide w-full py-8 gap-6"
            ref={containerRef}
          >
            {accessories.map((item, index) => (
              <div
                className="relative flex items-center justify-center h-[120px] min-w-[280px] max-w-[280px] rounded-md overflow-hidden cursor-pointer group"
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={item.src}
                  alt="/"
                  className="object-cover object-start h-full w-full hover:scale-110 ease-in-out duration-500"
                />
                <div className="absolute bg-gradient-to-t from-black/10 via-black/0 to-black/50 w-full h-full pointer-events-none"></div>
                <div className="w-full absolute capitalize top-0 text-start p-6">
                  <p className="text-sm text-white font-figtree font-semibold truncate">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute left-[-40%] bg-[#faffff]/50 text-black text-lg flex items-center justify-center p-3 rounded-full shadow-lg cursor-pointer group-hover:left-[-20px] ease-in-out duration-500"
            onClick={() => handleScrollLeft(320)}
          >
            <MdOutlineArrowBackIosNew />
          </div>
          <div
            className="absolute right-[-40%] bg-[#faffff]/50 text-black text-lg flex items-center justify-center p-3 rounded-full shadow-lg cursor-pointer group-hover:right-[-20px] ease-in-out duration-500"
            onClick={() => handleScrollRight(320)}
          >
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
