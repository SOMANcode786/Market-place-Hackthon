
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MoreProducts = () => {
  return (
    <div>
      <div className='w-full h-[672px] bg-[#FAF4F4] flex flex-col md:flex-row justify-center items-center pr-8 pb-8'>

        {/* left side div  */}
        <div className='flex flex-col justify-center items-center'>
          {/*  Image  */}
          <div>
            <Image src="/images/home/Granite square side table 1.png" alt='product Img' width={564} height={383} />
          </div>
          {/* left side text */}
          <div className='-ml-32 -mt-32'>
            <h1 className='text-[36px] font-[Poppins] font-medium'>Side table</h1>
            <span className='text-[24px] font-[Poppins] font-medium border-b-2 border-black pb-2 md:pb-6'><Link href="/shop">View More</Link></span>
          </div>


        </div>

        {/* right side div  */}
        <div className='flex flex-col justify-center items-center'>

          {/* right Image  */}
          <div>
            <Image src="/images/home/Cloud sofa three seater + ottoman_3 1.png" alt='product Img' width={564} height={383} />
          </div>
          {/* right side text 02 */}
          <div className='-mt-16 md:-mt-32 -ml-10'>
            <h1 className='text-[36px] font-[Poppins] font-medium'>Side table</h1>
            <span className='text-[24px] font-[Poppins] font-medium border-b-2 border-black pb-2 md:pb-6'><Link href="/shop">View More</Link></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MoreProducts