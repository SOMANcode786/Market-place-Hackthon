
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Products = () => {
  return (
   
    <div className='w-full h-[1300px] md:h-[700px] flex justify-center items-center mt-12'>
      <div className=' w-[80%] h-full'>
           {/* Top side  */}
           <div>
            <div className='flex flex-col items-center flex-wrap'>
            <h2 className='text-[16px] md:text-[36px] font-[Poppins] font-bold md:font-medium mt-6'>Top Picks For You</h2>
            <h2 className='text-[12px] md:text-[16px] font-[Poppins] font-medium mt-4'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h2>
            </div>
           </div>
           {/* products Boxes  */}
           <div className='flex flex-col md:flex-row justify-between items-center mt-7 space-x-2 '>
              {/* Product 01  */}
              <div className='ml-5'>
            <div className='w-[180px] md:w-[287px] h-[180px] md:h-[287px] flex justify-center items-center'> 
                <Image src="/images/home/products/Mask group.png" alt='Product Image' width={287} height={287} />
            </div>
                  {/* Tittle  */}
            <div>
                  <h2 className='text-[16px] font-[Poppins] font-normal '>Trenton modular sofa_3</h2>
                 <h2 className='text-[16px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
            </div>
              </div>

                 {/* Product 02  */}
              <div>
            <div className='w-[180px] md:w-[287px] h-[180px] md:h-[287px] flex justify-center items-center'> 
            <Image src="/images/home/products/Mask group-1.png" alt='Product Image' width={287} height={287} />
            </div>
             {/* title  */}
             <div className='ml-5'>
             <h2 className='text-[16px] font-[Poppins] font-normal '>Granite dining table with <br /> dining chair</h2>
             <h2 className='text-[16px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
            </div>
              </div>
                 {/* Product 03  */}  
               <div>
            <div className='w-[180px] md:w-[287px] h-[180px] md:h-[287px] flex justify-center items-center'> 
            <Image src="/images/home/products/Mask group-2.png" alt='Product Image' width={287} height={287} />
            </div>
             {/* title  */}
             <div className='ml-5'>
             <h2 className='text-[16px] font-[Poppins] font-normal '>Outdoor bar table and <br /> stool</h2>
             <h2 className='text-[16px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
            </div>
               </div>
               {/* Product 04  */}
               <div>
            <div className='w-[180px] md:w-[287px] h-[180px] md:h-[287px] flex justify-center items-center '> 
            <Image src="/images/home/products/Mask group-3.png" alt='Product Image' width={287} height={287} />
            </div>
             {/* title  */}
             <div className='ml-5'>
                 <h2 className='text-[16px] font-[Poppins] font-normal'>Plain console with teak <br /> mirror</h2>
                 <h2 className='text-[16px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
            </div>
               </div>

           </div>
           <div className='flex justify-center mt-12'>
          <button className='text-[20px] font-[Poppins] font-medium border-b-2 border-black pb-3'><Link href="/shop">View More</Link></button>
          </div>
      </div>   
    </div>
  )
}

export default Products