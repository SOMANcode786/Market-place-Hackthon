
'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const NewArrivals = () => {
    return (
        <div>
            <div className='w-full h-[600px] md:h-[639px] bg-[#FFF9E5] flex flex-col justify-center md:flex-row items-center md:justify-evenly pb-16'>
                {/* left side Image  */}
                <div className='w-[350px] md:w-[600px] h-[450px] md:h-[620px] md:mt-20'>
                    <Image src="/images/home/products/Asgaard sofa 1.png" alt='Img' height={600} width={699} />
                </div>
                   {/* right side text  */}
                   <div className='md:ml-28 flex flex-col items-start space-y-3 -mt-14'>
                    <h2 className='text-[24px] font-[Poppins] font-medium'>New Arrivals</h2>
                    <h1 className='text-[32px] md:text-[48px] font-[Poppins] font-bold'>Asgaard sofa</h1>
                    <button className='w-[150px] md:w-[255px] h-[45px] md:h-[64px] border-2 border-black text-[20px] font-[Poppins] font-normal'><Link href="/singleProduct">Order Now</Link></button>
                   </div>
            </div>

        </div>
    )
}

export default NewArrivals