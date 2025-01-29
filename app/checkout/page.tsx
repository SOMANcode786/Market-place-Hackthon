   'use client' 
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdArrowForwardIos } from "react-icons/md";
import Navbar2 from '../components/navbar2';
import Delivery from '../components/shop/delivery';
import CheckoutMain from '../components/Checkout/CheckoutMain'


const CheckOut = () => {
  return (
    <div>
        <Navbar2/>

 <div className='md:h-[316px] w-full relative pb-3'>

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
        <h1 className='text-[48px] text-black font-medium font-[Poppins]'>Checkout</h1>
        <div className='flex items-center'>
            <span className='text-[16px] text-black font-medium font-[Poppins] mr-2'><Link href="/">Home</Link></span>
            <span><MdArrowForwardIos className='w-[15px] h-[15px] text-black' /></span>
            <span className='text-[16px] text-black font-light font-[Poppins] ml-2'><Link href="/checkout">Checkout</Link></span>

        </div>
    </div>
</div>
    </div>
    <CheckoutMain/>
    <Delivery/>
    </div>
  )
}

export default CheckOut
