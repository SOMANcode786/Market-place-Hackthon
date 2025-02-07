import React from "react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SheetSide } from "@/components/sheet";

const Navbar2 = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center bg-white px-4 md:px-0">
      <div className="w-full h-full flex justify-between items-center">
        {/* Left side - Mobile Menu */}
        <div className="block md:hidden">
          <SheetSide />
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:block md:ml-40 lg:ml-96">
          <ul className="flex gap-x-5 mr-4">
            {["Home", "Shop", "About", "Contact", "Blog"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-[16px] font-medium"
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

export default Navbar2;
