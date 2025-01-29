'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <div className='w-full h-[500px] md:h-[900px] bg-[#FBEBB5] flex flex-col md:flex-row justify-between items-center sm:items-center pt-12'> 
        {/* left side text */}
        <div className='md:pl-24 md:ml-28'>
          <h1 className='text-[25px] md:text-[64px] font-[Poppins] font-medium w-[250px] md:w-[440px] mb-4'>Rocket single seater</h1>
          <span className='text-[18px] md:text-[24px] font-[Poppins] font-medium border-b-2 border-black pb-2 md:pb-4'>
            <Link href="/shop">Shop Now</Link>
          </span>
        </div>

        {/* right side Image */}
        <div className='w-[350px] md:w-[750px] md:h-[800px] sm:h-[450px]'>
          <Image
            src="/images/home/Rocket single seater 1.png"
            alt='hero Img'
            height={700}
            width={650}
            objectFit="contain" // Or 'cover' depending on your preference
          /> 
         
        </div>
      </div>
    </div>
  );
};

export default Hero;