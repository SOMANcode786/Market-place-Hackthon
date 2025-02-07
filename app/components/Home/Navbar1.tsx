"use client";
import React from "react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SheetSide } from "@/components/sheet";

const Navbar1 = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center px-3 md:px-0 bg-[#FBEBB5]">
      <div className="w-full h-full flex justify-between items-center">
        {/* Left Side - Mobile Menu */}
        <div className="block md:hidden">
          <SheetSide />
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:block md:ml-40 lg:ml-96">
          <ul className="flex gap-x-5 mr-4">
            {["Home", "Shop", "About", "Contact", "Blog"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-[16px] font-[Poppins] font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center lg:mr-28 gap-4">
          <Link href="/account">
            <FaRegUser className="h-[20px] w-[20px]" />
          </Link>
          <Link href="/pages">
            <FiHeart className="h-[20px] w-[20px]" />
          </Link>
          <Link href="/carts">
            <FaCartShopping className="h-[20px] w-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
