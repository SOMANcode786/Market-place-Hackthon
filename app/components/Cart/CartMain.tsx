
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";


const CartMain = () => {
  return (
    <div>
      <div className='w-full h-[525px] flex justify-center items-center '>
        <div className='w-[90%] h-[420px] md:h-[380px] bg-white flex flex-col md:flex-row justify-between'>
            {/* left side  */}
            <div className='w-full md:w-[60%] h-full'>
               {/* header  */}
               <div className='flex justify-center'>
               <div className='list-none flex items-center justify-evenly w-[90%] h-[55px] bg-[#FFF9E5] '>
                <li className='text-[16px] text-black font-medium font-[Poppins]'>Product</li>
                <li className='text-[16px] text-black font-medium font-[Poppins]'>Price</li>
                <li className='text-[16px] text-black font-medium font-[Poppins]'>Quantity</li>
                <li className='text-[16px] text-black font-medium font-[Poppins]'>Subtotal</li>
               </div>
            </div>
                {/* middle image and text  */}
                <div className='flex items-center justify-evenly mt-6 md:mt-16'>
                    <div className='w-[90px] md:w-[106] h-[90px] md:h-[106px] bg-[#FBEBB5] rounded-md flex justify-center items-center'>
                    <Image src="/images/shop/products/Mask group-14.png" alt='sofa img' width={100} height={100}/>
                    </div>
                    <h2 className='text-[14px] md:text-[16px] text-[#9F9F9F] font-medium font-[Poppins]'>Asgaard sofa</h2>
                    <h2 className='text-[14px] md:text-[16px] text-[#9F9F9F] font-medium font-[Poppins]'>Rs. 250,000.00</h2>
                    <span className='text-[14px] md:text-[16px] text-[#9F9F9F] font-medium font-[Poppins] h-[24px] md:h-[32px] w-[24px] md:w-[32px] border rounded-md text-center '>1</span> 
                    <h2 className='text-[14px] md:text-[16px] text-black font-medium font-[Poppins]'>Rs. 250,000.00</h2>
                    <AiOutlineDelete className='w-[24px] md:w-[28px] h-[24px] md:h-[28px] text-[#FBEBB5]' />  
                </div>
            </div>

            {/* right side  */}

            <div className='w-full md:w-[35%] h-full'>
                <div className='h-full w-full md:w-[393px] bg-[#FFF9E5] flex flex-col items-center justify-evenly '>
                     <h1 className='text-[32px] text-black font-semibold font-[Poppins]'>Cart Totals</h1>
                     <h2>
                        <span className='text-[16px] text-black font-medium font-[Poppins] mr-10'>Subtotal</span>
                        <span className='text-[16px] text-[#9F9F9F] font-medium font-[Poppins]'>Rs. 250,000.00</span>
                     </h2>
                     <h2>
                        <span className='text-[16px] text-black font-medium font-[Poppins]'>Total</span>
                        <span className='text-[16px] text-[#B88E2F] font-medium font-[Poppins] ml-10'>Rs. 250,000.00</span>
                     </h2>

                     <button  className='text-[20px] text-black font-normal font-[Poppins] w-[150px] md:w-[200px] h-[35px] md:h-[50px] border rounded-lg'><Link href="/checkout">Check Out</Link></button>
                     
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default CartMain
