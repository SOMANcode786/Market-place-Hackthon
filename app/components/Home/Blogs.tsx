"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const Blog = () => {
  return (
    <div>
      <div className="w-full h-auto md:h-[944px] flex justify-center items-center mt-12">
        <div className="w-[90%] md:w-[80%] h-full">
          {/* Top side Text */}
          <div className="text-center">
            <h2 className="text-[24px] sm:text-[36px] font-[Poppins] font-medium mt-6">
              Our Blogs
            </h2>
            <h2 className="text-[14px] sm:text-[16px] font-[Poppins] font-medium mt-2">
              Find a bright ideal to suit your taste with our great selection
            </h2>
          </div>

          {/* Blog Boxes */}
          <div className="flex flex-col md:flex-row justify-center mt-7 space-y-8 md:space-x-4 md:space-y-0">
            {/* Blog 01 */}
            <div className="flex flex-col items-center">
              <div className="w-[300px] md:w-[393px] h-[300px] md:h-[393px] flex justify-center items-center">
                <Image
                  src="/images/home/products/blog-1.png"
                  alt="Product Image"
                  width={393}
                  height={393}
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-[16px] font-[Poppins] font-normal mt-4">
                  Going all-in with millennial design
                </h2>
                <button className="w-[130px] h-[46px] text-[18px] md:text-[24px] font-[Poppins] font-medium border-b-2 border-black my-4">
                  Read More
                </button>
                <div className="flex items-center space-x-2">
                  <span>
                    <FaRegClock />
                  </span>
                  <span>5 min</span>
                  <span>
                    <CiCalendar />
                  </span>
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>

            {/* Blog 02 */}
            <div className="flex flex-col items-center">
              <div className="w-[300px] md:w-[393px] h-[300px] md:h-[393px] flex justify-center items-center">
                <Image
                  src="/images/home/products/blog-2.png"
                  alt="Product Image"
                  width={393}
                  height={393}
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-[16px] font-[Poppins] font-normal mt-4">
                  Going all-in with millennial design
                </h2>
                <button className="w-[130px] h-[46px] text-[18px] md:text-[24px] font-[Poppins] font-medium border-b-2 border-black my-4">
                  Read More
                </button>
                <div className="flex items-center space-x-2">
                  <span>
                    <FaRegClock />
                  </span>
                  <span>5 min</span>
                  <span>
                    <CiCalendar />
                  </span>
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>

            {/* Blog 03 */}
            <div className="flex flex-col items-center">
              <div className="w-[300px] md:w-[393px] h-[300px] md:h-[393px] flex justify-center items-center">
                <Image
                  src="/images/home/products/blog-3.png"
                  alt="Product Image"
                  width={393}
                  height={393}
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-[16px] font-[Poppins] font-normal mt-4">
                  Going all-in with millennial design
                </h2>
                <button className="w-[130px] h-[46px] text-[18px] md:text-[24px] font-[Poppins] font-medium border-b-2 border-black my-4">
                  Read More
                </button>
                <div className="flex items-center space-x-2">
                  <span>
                    <FaRegClock />
                  </span>
                  <span>5 min</span>
                  <span>
                    <CiCalendar />
                  </span>
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* View All Post Button */}
          <div className="flex justify-center mt-16">
            <button className="text-[20px] sm:text-[24px] font-[Poppins] font-medium border-b-2 border-black pb-3">
              <Link href="/blog">View All Post</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
