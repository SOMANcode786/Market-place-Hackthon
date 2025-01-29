
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { SheetSide } from '@/components/sheet2';

const SingleMain = () => {
  return (
    <div>
      <div className='w-full h-[1100px] md:h-[800px] flex justify-center items-center'>
        <div className='w-full md:w-[1200px] h-[1100px] md:h-[700px] flex flex-col md:flex-row justify-between'>

             {/* left side Images  */}
             <div className='w-full md:w-[550px] h-[400px] md:h-[500px] flex flex-col items-center md:items-start md:flex-row md:justify-between pb-4'>
                  {/* short images  */}
                  <div className='w-full md:w-[76px] h-[416px] flex justify-between md:flex-col md:space-y-4'>
                    <div className='w-[76px] h-[80px] bg-[#FFF9E5] rounded-lg'>
                    <Image src="/images/shop/products/Outdoor sofa set-1.png" alt='sofa img' width={76} height={80}/>
                    </div>
                    <div className='w-[76px] h-[80px] bg-[#FFF9E5] rounded-lg'>
                    <Image src="/images/shop/products/Outdoor sofa set-2.png" alt='sofa img' width={76} height={80}/>
                    </div>
                    <div className='w-[76px] h-[80px] bg-[#FFF9E5] rounded-lg'>
                    <Image src="/images/shop/products/Stuart sofa 1.png" alt='sofa img' width={76} height={80}/>
                    </div>
                    <div className='w-[76px] h-[80px] bg-[#FFF9E5] rounded-lg'>
                    <Image src="/images/shop/products/Maya sofa three seater (1) 1.png" alt='sofa img' width={76} height={80}/>
                    </div>
                  </div>
                  {/* big Image  */}
                  <div className='w-[300px] md:w-[423px] h-[350px] md:h-[500px] bg-[#FFF9E5] rounded-lg flex items-center'>
                  <Image src="/images/shop/products/Asgaard sofa 3.png" alt='sofa img' width={480} height={390}/>
                  </div>
             </div>

             {/* right side text  */}
             <div className='w-full md:w-[600px] h-[700px] pl-4 md:pl-0'>
                {/* upper text  */}
                <div>
                    <h1 className='text-[32px] md:text-[46px] text-black font-normal font-[Poppins]'>Asgaard sofa</h1>
                    <h2 className='text-[20px] md:text-[24px] text-[#9F9F9F] font-medium font-[Poppins]'>Rs. 250,000.00</h2>
                    <div className='flex items-center mt-4'>
                    <span className='flex items-center text-yellow-500 mr-3 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </span>
                    <span className='text-[#9F9F9F]'>|</span>
                    <span className='text-[#9F9F9F] text-[13px] font-normal font-[Poppins] ml-3'>5 Customer Review</span>
                    </div>
                    <h2 className='w-[340px] md:w-[420px] h-[80px] text-[13px] text-black font-normal font-[Poppins] mt-4'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                     </h2>
                </div>
                {/* middle section  */}
                <div className='border-b-2 border-gray-300 pb-10'>
                  <p  className='text-[14px] text-[#9F9F9F] font-medium font-[Poppins] mb-3'>Size</p>
                  <span  className='text-[13px] text-black bg-[#FBEBB5] font-medium font-[Poppins] w-[30px] h-[30px] rounded py-1 px-2 mr-3'>L</span>
                  <span  className='text-[13px] text-black bg-[#9F9F9F] font-medium font-[Poppins] w-[30px] h-[30px] rounded py-1 px-2 mr-3'>XL</span>
                  <span  className='text-[13px] text-black bg-[#9F9F9F] font-medium font-[Poppins] w-[30px] h-[30px] rounded py-1 px-2'>XS</span>
                  <p className='mt-4 mb-3'>Color</p>
                  <div className='flex gap-3 mb-8'>
                  <FaCircle className='w-[30px] h-[30px] text-[#816DFA]' />
                  <FaCircle className='w-[30px] h-[30px] text-[#000000]' />
                  <FaCircle className='w-[30px] h-[30px] text-[#CDBA7B]' />
                  </div>
                     {/* buttons  */}
                     <div className='flex gap-4'>
                      <button className='w-[90px] md:w-[123px] h-[50px] md:h-[64px] border rounded-lg flex justify-evenly items-center'>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                      </button>
                      <h2 className='w-[150px] md:w-[215px] h-[50px] md:h-[64px] border rounded-lg flex justify-center items-center'>
                        <SheetSide />
                      </h2>
                     </div>
                </div>
                {/* footer  */}
                <div className='w-full mt-8'>
                   <div>
                    <span className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] mr-9'>SKU</span>
                    <span className='text-[#9F9F9F]'>:</span>
                    <span className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] ml-7'>SS001</span>
                   </div>
                   <div>
                    <span className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] mr-2'>Category</span>
                    <span className='text-[#9F9F9F]'>:</span>
                    <span className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] ml-7'>Sofas</span>
                   </div>
                   <div>
                    <span className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] mr-9'>Tags</span>
                    <span className='text-[#9F9F9F]'>:</span>
                    <span className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] ml-7'>Sofa, Chair, Home, Shop</span>
                   </div>
                   <div className='flex items-center'>
                    <span  className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] mr-7'>Share</span>
                    <span className='text-[#9F9F9F]'>:</span>
                    <span className='flex ml-7 gap-4 items-center'>
                    <FaFacebook className='w-[20px] h-[20px]'/>
                    <FaLinkedin className='w-[20px] h-[20px]'/>
                    <FaTwitterSquare className='w-[20px] h-[20px]' />
                    <FaRegHeart className='ml-32 w-[25px] h-[31px] text-[#FF0000]'/>
                    </span>
                   </div>
                </div>

             </div>
        </div>

      </div>
    </div>
  )
}

export default SingleMain
