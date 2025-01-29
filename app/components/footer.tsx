
import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    
    <div className='bg-[#FFFFFF] w-full h-[300px] mt-8 md:mt-24 pl-5 md:pl-0'>

    <div className='w-full flex flex-col md:flex-row justify-evenly items-start border-b-2 border-gray-200 pb-8'> 

    <div className='w-[200px] md:w-[285px] h-[65px] md:mt-28 mb-4 md:mb-0'>
    <p className='text-[14px] md:text-[16px] text-[#9F9F9F] font-[Poppins] font-normal'>400 University Drive Suite 200 Coral Gables, <br />
    FL 33134 USA</p>
    </div>
          
    <div className='mb-4 md:mb-0'>
    <h1 className='text-[14px] md:text-[16px] text-[#9F9F9F] font-[Poppins] font-normal mb-2 md:mb-8'>Links</h1>
      <ul className='text-black'>
          <li className='mt-2 md:mt-6'><Link href="/">Home</Link></li>
          <li className='mt-2 md:mt-6'><Link href="/shop">Shop</Link></li>
          <li className='mt-2 md:mt-6'><Link href="/about">About</Link></li>
          <li className='mt-2 md:mt-6'><Link href="/contact">Contact</Link></li>  
      </ul>
    </div>

    <div  className='mb-4 md:mb-0'>
    <h1 className='text-[14px] md:text-[16px] text-[#9F9F9F] font-[Poppins] font-normal mb-2 md:mb-8'>Help</h1>
    <ul className='text-black'>
          <li className='mt-2 md:mt-6'>Payment Options</li>
          <li className='mt-2 md:mt-6'>Returns</li>
          <li className='mt-2 md:mt-6'>Privacy Policies</li>        
      </ul>
    </div>

    <div>
      <h1 className='text-[14px] md:text-[16px] text-[#9F9F9F] font-[Poppins] font-normal mb-2 md:mb-8'>Newsletter</h1>
           
          <span className='text-[14px] md:text-[16px] text-[#9F9F9F] font-[Poppins] font-normal  border-b-2 border-black pb-2'>Enter your email address  </span>
          <span className='ml-3 md:ml-6 text-black border-b-2 border-black pb-2 cursor-pointer'>Subscribe</span>  
    </div>
  </div>
   <h1 className='text-[16px] text-black font-[Poppins] font-normal mt-6 pb-6 ml-2 md:ml-6 w-[250px] md:w-[300px]'>2022 Meubel House. All rights reverved</h1>
  </div>
  )
}

export default Footer
