
import Image from 'next/image';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

const BlogMain = () => {
  return (
    <div className='mb-8 md:mb-0'>
      <div className='w-full h-full md:h-[2550px] flex flex-col-reverse md:flex-row md:justify-evenly'>
        {/* left side  */}
        <div className='w-full md:w-[800px] md:h-[2490px] mt-8 md:mt-0'>
             {/* post 01  */}
             <div className='w-full h-[750px] md:h-[794px]'>
             <Image src="/images/blog/post-1-unsplash.jpg" alt='blog01 Img' height={500} width={800}/>
             {/* date  */}
             <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex space-x-5 mt-2'>
                <span className='flex items-center space-x-1'>
                <FaUser />
                <span>Admin</span>
                </span>
                <span className='flex items-center space-x-1'>
                <FaCalendar />
                <span>14 Oct 2022</span>
                </span>
                <span className='flex items-center space-x-1'>
                <FaTag />
                <span>Wood</span>
                </span>
             </div>
             {/* heading and paragraph  */}
              <div className='px-3 md:px-0'>  
                <h1 className='text-[24px] md:text-[30px] text-[#000000] font-medium font-[Poppins] mt-2'>Going all-in with millennial design</h1>
                <p className='text-[15px] text-[#9F9F9F] font-normal font-[Poppins] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              </div>
              <h2 className='text-[16px] text-[#000000] font-normal font-[Poppins] border-b-2 border-gray-300 w-[100px] pb-3 mt-6 ml-3 md:ml-0'>Read more</h2>
             </div>
             {/* post 02  */}
             <div>
             <div className='w-full h-[750px] md:h-[794px]'>
             <Image src="/images/blog/post-02.png" alt='blog01 Img' height={500} width={800}/>
             {/* date  */}
             <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex space-x-5 mt-2'>
                <span className='flex items-center space-x-1'>
                <FaUser />
                <span>Admin</span>
                </span>
                <span className='flex items-center space-x-1'>
                <FaCalendar />
                <span>14 Oct 2022</span>
                </span>
                <span className='flex items-center space-x-1'>
                <FaTag />
                <span>Wood</span>
                </span>
             </div>
             {/* heading and paragraph  */}
              <div className='px-3 md:px-0'>
                <h1 className='text-[24px] md:text-[30px] text-[#000000] font-medium font-[Poppins] mt-2'>Exploring new ways of decorating</h1>
                <p className='text-[15px] text-[#9F9F9F] font-normal font-[Poppins] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              </div>
              <h2 className='text-[16px] text-[#000000] font-normal font-[Poppins] border-b-2 border-gray-300 w-[100px] pb-3 mt-6 ml-3 md:ml-0'>Read more</h2>
             </div>
             </div>
               {/* post 03  */}
               <div>
               <div className='w-full h-[750px] md:h-[794px]'>
             <Image src="/images/blog/post-2.png" alt='blog01 Img' height={500} width={800}/>
             {/* date  */}
             <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex space-x-5 mt-2'>
                <span className='flex items-center space-x-1'>
                <FaUser />
                <span>Admin</span>
                </span>
                <span className='flex items-center space-x-1'>
                <FaCalendar />
                <span>14 Oct 2022</span>
                </span>
                <span className='flex items-center space-x-1'>
                <FaTag />
                <span>Wood</span>
                </span>
             </div>
             {/* heading and paragraph  */}
              <div className='px-3 md:px-0'>
                <h1 className='text-[24px] md:text-[30px] text-[#000000] font-medium font-[Poppins] mt-2'>Handmade pieces that took time to make </h1>
                <p className='text-[15px] text-[#9F9F9F] font-normal font-[Poppins] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              </div>
              <h2 className='text-[16px] text-[#000000] font-normal font-[Poppins] border-b-2 border-gray-300 w-[100px] pb-3 mt-6 ml-3 md:ml-0'>Read more</h2>
             </div>
                </div>

        </div>

        {/* right side  */}
        <div className='w-full md:w-[390px] h-[900px] md:h-[1250px] flex flex-col items-center'>
            {/* Top div  */}
            <div className='w-full h-[500px] md:mb-10 flex flex-col items-center justify-start pt-6'>
                {/* search bar  */}
                <div className='flex items-center md:justify-center'>
                <input type="text" className='w-[310px] h-[35px] md:h-[50px] border relative rounded-lg ' />
                <div className='flex justify-end items-center'>
                <FaSearch className='absolute mr-3' />
                </div>
                </div>

                {/* text  */}
                <div className='w-[300px] h-[350px] space-y-5 pt-6'>
                    <h1 className='text-[24px] text-black font-medium font-[Poppins]'>Categories</h1>
                    <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex justify-between mr-3 ml-1'>
                        <span>Crafts</span>
                        <span>2</span>
                    </div>
                    <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex justify-between mr-3 ml-1'>
                        <span>Design</span>
                        <span>8</span>
                    </div>
                    <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex justify-between mr-3 ml-1'>
                        <span>Handmade</span>
                        <span>7</span>
                    </div>
                    <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex justify-between mr-3 ml-1'>
                        <span>Interior</span>
                        <span>1</span>
                    </div>
                    <div className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] flex justify-between mr-3 ml-1'>
                        <span>Wood</span>
                        <span>6</span>
                    </div>
                </div>


            </div>

            {/* bottom div  */}
            <div className='w-[350px] md:h-[650px] flex justify-center'>
                <div className='w-[252px] md:h-[600px] bg-white'>
                    <h1 className='text-[24px] text-black font-medium font-[Poppins]'>Recent Posts</h1>
                    {/* blog pics and text  */}
                    <div className='space-y-8'>
                        {/* blog 01  */}
                        <div className='flex'>
                       <Image src="/images/blog/blog-1-unsplash.jpg" alt='blog-1' width={80} height={80} className=' rounded-lg'/>
                       <div className='w-[115px] ml-2'>
                        <h1 className='text-[14px] text-black font-normal font-[Poppins]'>Going all-in with millennial design</h1>
                        <p className='text-[12px] text-[#9F9F9F] font-normal font-[Poppins]'>03 Aug 2022</p>
                       </div>
                        </div>

                         {/* blog 02  */}
                         <div className='flex'>
                       <Image src="/images/blog/blog-2-unsplash.jpg" alt='blog-1' width={80} height={80} className=' rounded-lg'/>
                       <div className='w-[115px] ml-2'>
                        <h1 className='text-[14px] text-black font-normal font-[Poppins]'>Exploring new ways of decorating</h1>
                        <p className='text-[12px] text-[#9F9F9F] font-normal font-[Poppins]'>03 Aug 2022</p>
                       </div>
                        </div>

                          {/* blog 03  */}
                          <div className='flex'>
                       <Image src="/images/blog/blog-3-unsplash.jpg" alt='blog-1' width={80} height={80} className=' rounded-lg'/>
                       <div className='w-[115px] ml-2'>
                        <h1 className='text-[14px] text-black font-normal font-[Poppins]'>Handmade pieces that took time to make</h1>
                        <p className='text-[12px] text-[#9F9F9F] font-normal font-[Poppins]'>03 Aug 2022</p>
                       </div>
                        </div>

                          {/* blog 04  */}
                          <div className='flex'>
                       <Image src="/images/blog/blog-4-unsplash.jpg" alt='blog-1' width={80} height={80} className=' rounded-lg'/>
                       <div className='w-[115px] ml-2'>
                        <h1 className='text-[14px] text-black font-normal font-[Poppins]'>Modern home in Milan</h1>
                        <p className='text-[12px] text-[#9F9F9F] font-normal font-[Poppins]'>03 Aug 2022</p>
                       </div>
                        </div>

                          {/* blog 05  */}
                          <div className='flex'>
                       <Image src="/images/blog/blog-5-unsplash.jpg" alt='blog-1' width={80} height={80} className='h-[60px] rounded-lg'/>
                       <div className='w-[115px] ml-2'>
                        <h1 className='text-[14px] text-black font-normal font-[Poppins]'>Colorful office redesign</h1>
                        <p className='text-[12px] text-[#9F9F9F] font-normal font-[Poppins]'>03 Aug 2022</p>
                       </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
           
      </div>
       {/* number  */}
       <div className='flex justify-center items-center space-x-5 text-center mt-6 md:mt-0'>
       
       <p className='text-[20px] font-[Poppins] font-normal w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-[#FBEBB5] rounded-md pt-2'>1</p>
      
       <p className='text-[20px] font-[Poppins] font-normal  w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-[#FFF9E5] rounded-md pt-2'>2</p>
       <p className='text-[20px] font-[Poppins] font-normal  w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-[#FFF9E5] rounded-md pt-2'>3</p>
       
       <p className='text-[20px] font-[Poppins] font-light w-[80px] md:w-[98px] h-[40px] md:h-[50px] bg-[#FFF9E5] rounded-md pt-3 cursor-pointer'>Next</p>
     </div>
    </div>
  )
}

export default BlogMain 