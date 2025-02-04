import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";

const MiddleHeader = () => {
  return (
    <div className="w-full h-[100px] bg-[#FAF4F4] mt-16 flex justify-between items-center px-4 md:px-20">
      <div className="flex items-center gap-5">
        <RiMenu5Fill className="w-6 h-6" />
        <span className="text-lg font-[Poppins]">Filter</span>
        <BiGridSmall className="w-7 h-7" />
        <BsViewList className="w-6 h-6" />
        <span className="text-base font-[Poppins]">
          Showing 1–16 of 32 results
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-lg font-[Poppins]">Show</span>
        <div className="w-14 h-10 bg-white rounded text-center leading-10">
          50
        </div>
        <span className="text-lg font-[Poppins]">Sort by</span>
        <button className="text-gray-500 bg-white rounded w-20 h-10">
          Default
        </button>
      </div>
    </div>
  );
};

export default MiddleHeader;
