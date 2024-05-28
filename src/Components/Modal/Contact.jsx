import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Contact = ({ showContact, closeContact }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleCloseContact = () => {
    closeContact();
  };

  return (
    <div className="fixed z-[2] bg-gray-900/75 min-h-[100dvh] w-full flex items-center justify-center">
      <div className="bg-white h-full md:h-[70svh] w-4/5 md:w-3/4 xl:w-1/2  rounded-xl overflow-hidden flex flex-col md:flex-row p-4">
        <div className="bg-[url('https://images.unsplash.com/photo-1594580701468-e5678582b8ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full md:w-1/2 h-1/3 md:h-full bg-cover bg-center rounded-lg"></div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-2/3 md:h-full p-4 md:p-6 xl:p-12 font-figtree">
          <div className="w-full py-6">
            <p className="font-signika font-semibold text-xl truncate">
              Email us!
            </p>
            <p className="text-xs font-normal truncate">Get in touch with us</p>
          </div>
          <div className="flex flex-col gap-2 py-2 md:py-4 w-full">
            <p className="font-figtree font-normal text-sm truncate">Name:</p>
            <div className="bg-gray-200 py-3 md:py-4 px-6 rounded-lg w-full flex flex-row gap-4 items-center justify-center">
              <FiUser />
              <input
                type="text"
                className="w-full bg-gray-200 outline-none truncate text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2 md:py-4 w-full">
            <p className="font-figtree font-normal text-sm truncate">Email:</p>
            <div className="bg-gray-200 py-3 md:py-4 px-6 rounded-lg w-full flex flex-row gap-4 items-center justify-center">
              <MdOutlineAlternateEmail />
              <input
                type="text"
                className="w-full bg-gray-200 outline-none truncate text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2 md:py-4 w-full">
            <p className="font-figtree font-normal text-sm truncate">
              Message:
            </p>
            <div className="bg-gray-200 p-4 rounded-lg w-full flex items-center justify-center">
              <textarea
                name=""
                id=""
                className="outline-none bg-gray-200 w-full resize-none text-sm line-clamp-4"
                rows="3"
              ></textarea>
            </div>
            <div className="w-full pt-12">
              <button className="w-full bg-[#2f2f2f] py-3 font-semibold text-white font-figtree rounded-lg hover:bg-[#525252] ease-in-out duration-500">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed right-6 top-6 cursor-pointer"
        onClick={handleCloseContact}
      >
        <IoMdClose className="text-white" />
      </div>
    </div>
  );
};

export default Contact;
