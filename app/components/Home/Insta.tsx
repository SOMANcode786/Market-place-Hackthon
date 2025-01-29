
import React from 'react'

const Insta = () => {
  return (
    <div className='w-full h-[450px] mb-5'>
    
      {/* Background Image  */}
      <div className="bg-cover bg-center bg-no-repeat h-[450px] w-full" style={{ backgroundImage: "url('/images/home/products/instagram.png')" }}>
            {/* text div  */}
            <div className='flex flex-col items-center justify-center h-full space-y-4'>
              
              <h1 className='text-[32px] md:text-[60px] text-black font-bold font-[Poppins]'>Our Instagram</h1>
              <h2 className='text-[16px] md:text-[20px] text-black font-normal font-[Poppins]'>Follow our store on Instagram</h2>
              <button className='w-[150px] md:w-[255px] h-[45px] md:h-[64px] text-[14px] md:text-[20px] text-black font-normal font-[Poppins] bg-[#FAF4F4] border-2 border-black/100 rounded-full'>Follow Us</button>
              
            </div>
      </div>
      </div>

    
    
  )
}

export default Insta