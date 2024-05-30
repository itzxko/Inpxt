import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../JSON/Scrollables.json";
import ProductNavbar from "../Components/ProductNavbar";
import Footer from "../Components/Footer";
import { IoIosArrowDown } from "react-icons/io";

const MouseProduct = () => {
  const { mouseId } = useParams();
  const mouse = Data.find((item) => item.id === parseInt(mouseId));
  const [variant, setVariant] = useState("White");
  const [openVariant, setOpenVariant] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  if (!mouse) {
    return <h2>Product not found!</h2>;
  }

  const handleVariant = (e) => {
    setOpenVariant(!openVariant);
    // setVariant(e.target.innerText);
  };

  const handleCart = () => {
    setCartCount((prevState) => (prevState += 1));
    console.log(cartCount);
  };

  return (
    <>
      <ProductNavbar cartCount={cartCount} />
      <div className="flex flex-col items-center justify-center w-full font-figtree">
        <div className="relative min-h-[50vh] max-h-[50vh] lg:min-h-[70vh] w-full group overflow-hidden">
          <img
            src={mouse.src}
            alt="/"
            className="object-cover min-h-[50vh] max-h-[50vh] lg:min-h-[70vh] lg:max-h-[70vh] w-full object-center group-hover:scale-110 ease-in-out duration-500 antialiased"
          />
          <div className="absolute min-h-[50vh] max-h-[50vh] lg:min-h-[70vh] lg:max-h-[70vh] w-full bg-gradient-to-t from-black/25 via-black/25 to-black/50 top-0 left-0"></div>
          <div></div>
        </div>
        <div className="bg-[#FAF5FF] flex items-center justify-center">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-20 w-full lg:w-4/5 items-center justify-center min-h-[40vh] py-20 px-12">
            <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center w-full py-6">
                <p className="font-signika font-semibold text-xl md:text-3xl line-clamp-2">
                  {mouse.category}
                </p>
                <p className="text-[#2f2f2f] text-md font-semibold">{`Price: $${mouse.price}`}</p>
              </div>
              <div className="flex flex-row gap-4 w-full items-center justify-center py-4">
                <div className="flex items-center justify-center w-1/2">
                  <button
                    className="bg-[#2f2f2f] text-white text-sm md:text-md font-semibold w-full py-2 rounded-md hover:bg-gray-700 ease-in-out duration-500"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="relative flex items-center justify-center w-1/2">
                  <div
                    className="relative flex items-center justify-center rounded-md border border-[#2f2f2f] w-full py-2 cursor-pointer"
                    onClick={handleVariant}
                  >
                    <p className="text-sm md:text-md font-semibold">
                      {variant}
                    </p>
                    <IoIosArrowDown className="text-md text-[#2f2f2f] absolute right-4" />
                  </div>
                  <div
                    className={
                      !openVariant
                        ? "hidden"
                        : "absolute flex flex-col rounded-md items-center justify-center top-[120%] bg-[#FAF5FF] shadow-xl w-full overflow-hidden"
                    }
                  >
                    <p
                      className="font-normal text-sm md:text-md hover:bg-[#2f2f2f] hover:text-white ease-in-out duration-500 w-full text-center py-2 cursor-pointer"
                      onClick={(e) => {
                        setVariant(e.target.innerText),
                          setOpenVariant(!openVariant);
                      }}
                    >
                      White
                    </p>
                    <p
                      className="font-normal text-sm md:text-md hover:bg-[#2f2f2f] hover:text-white ease-in-out duration-500 w-full text-center py-2 cursor-pointer"
                      onClick={(e) => {
                        setVariant(e.target.innerText),
                          setOpenVariant(!openVariant);
                      }}
                    >
                      Black
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col items-start justify-center">
              <p className="text-md md:text-2xl truncate font-semibold py-4">
                Description
              </p>
              <p className="line-clamp-6 font-normal text-sm md:text-lg">
                {mouse.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MouseProduct;
