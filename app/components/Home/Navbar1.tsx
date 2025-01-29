   'use client'
import React from 'react'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SheetSide } from '@/components/sheet';

const Navbar1 = () => {
   
  
  return (
   
    <div className='w-full h-[80px] flex justify-center items-center px-3 md:px-0 bg-[#FBEBB5] '>
     <div className='w-full h-full flex justify-between items-center'>

        {/* left side  */}
        <div className='block md:hidden'>
        <SheetSide />
        </div>
        <div className='hidden md:block md:ml-40 lg:ml-96'>
            <ul className='flex gap-x-2 md:gap-x-5 mr-4 '>
             <Link className='text-[16px] font-[Poppins] font-medium' href={"/"}><li>Home</li></Link>
             <Link className='text-[16px] font-[Poppins] font-medium' href={"/shop"}><li>Shop</li></Link>
             <Link className='text-[16px] font-[Poppins] font-medium' href={"/about"}><li>About</li></Link>
             <Link className='text-[16px] font-[Poppins] font-medium' href={"/contact"}><li>Contact</li></Link>
            </ul>
        </div> 
              
              {/* Icons */}
        <div className= 'flex items-center justify-center lg:mr-28'>
           
           <div className='flex items-center gap-2 md:gap-4'>
           <Link href={'/account'}><FaRegUser className=' h-[16px] md:h-[20px] w-[16px] md:w-[20px]'/> </Link>
           <FiSearch className='h-[16px] md:h-[20px] w-[16px] md:w-[20px]'/>
           <FiHeart className='h-[16px] md:h-[20px] w-[16px] md:w-[20px]' />
           <Link href={'/cart'}> <FaCartShopping /> </Link> 
           </div>
        </div>


     </div>
    </div>
   
  )
}

export default Navbar1

