'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MdArrowForwardIos } from "react-icons/md";
import Navbar2 from '../components/navbar2';
import Delivery from '../components/shop/delivery';
import Account from '../components/myAccount/account';


const Page = () => {
  return (
    <div>
       <Navbar2/>
      <div className=' h-[200px] md:h-[316px] w-full relative'>
         {/* Background Image  */}
         <div className="bg-cover bg-center bg-no-repeat h-full w-[100%] object-cover opacity-50 absolute inset-0" style={{ backgroundImage: "url('/images/shop/house bg.jpg.crdownload')" }}>
        </div>
          {/* middle logo and text  */}
          <div className='w-full h-full flex flex-col items-center relative z-10 justify-center'>
         <div>
          <Image src="/images/shop/Meubel House_Logos-05.png" alt='Img logo' width={77} height={77} />
          </div>
          {/* text div  */}
          <div className='flex flex-col items-center'>
          <h1 className='text-[32px] md:text-[48px] text-black font-medium font-[Poppins]'>My Account</h1>
          <div className='flex items-center'>
            <span className='text-[16px] text-black font-medium font-[Poppins] mr-2'><Link href="/">Home</Link></span>
            <span><MdArrowForwardIos className='w-[15px] h-[15px] text-black' /></span>
            <span className='text-[16px] text-black font-light font-[Poppins] ml-2'><Link href="/account">My Account</Link></span>
          
          </div>
         </div>
  
        </div>   
      </div>
      <Account/>
      <Delivery/>
    </div>
  )
}

export default Page
