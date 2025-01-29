
import React from 'react'

const Delivery = () => {
  return (
    <div>
      <div className='w-full h-[350px] md:h-[300px] bg-[#FAF4F4] flex flex-col md:flex-row justify-evenly items-center mb-8'>
        {/* left text  */}
        <div>
            <h1 className='text-[20px] md:text-[32px] text-black font-medium font-[Poppins]'>Free Delivery</h1>
            <h2 className='text-[18px] md:text-[20px] text-[#9F9F9F] font-normal font-[Poppins]'>For all oders over $50, consectetur <br /> adipim scing elit.</h2>
        </div>

       {/* Middle text  */}
       <div>
            <h1 className='text-[20px] md:text-[32px] text-black font-medium font-[Poppins] pl-2'>90 Days Return</h1>
            <h2 className='text-[18px] md:text-[20px] text-[#9F9F9F] font-normal font-[Poppins] pl-2'>If goods have problems, consectetur <br /> adipim scing elit.</h2>
        </div>

         {/* right text  */}
         <div>
            <h1 className='text-[20px] md:text-[32px] text-black font-medium font-[Poppins]'>Secure Payment</h1>
            <h2 className='text-[18px] md:text-[20px] text-[#9F9F9F] font-normal font-[Poppins]'>100% secure payment, consectetur <br /> adipim scing elit.</h2>
        </div>


      </div>
    </div>
  )
}

export default Delivery
