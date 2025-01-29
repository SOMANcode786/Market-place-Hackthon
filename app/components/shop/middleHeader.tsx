
import React from 'react'
import { RiMenu5Fill } from "react-icons/ri";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";

const MiddleHeader = () => {
  return (
    <div>
      <div className='w-full h-[150px] md:h-[100px] bg-[#FAF4F4] mt-[60px] flex flex-col md:flex-row items-start md:items-center justify-between md:justify-between pl-2 pb-3'>

        {/* left side text  */}
        <div className='h-full flex items-center gap-3 md:gap-10 md:ml-20'>
          {/* icons  */}
          <div className='flex items-center gap-2 md:gap-5 pr-3 md:pr-10 border-r-2 border-black'>
         <span><RiMenu5Fill className='w-[25px] h-[25px]'/></span>
         <span className='text-[20px] text-black font-normal font-[Poppins]'>Filter</span>
         <span><BiGridSmall className='w-[28px] h-[28px]' /></span>
         <span><BsViewList className='w-[24px] h-[24px]' /></span>
          </div>
             {/* text  */}
             <div>
             <span className='text-[16px] text-black font-normal font-[Poppins]'>Showing 1–16 of 32 results</span>
             </div>

        </div>

        {/* right side text  */}

        <div className=''>
          <div className='space-x-5 md:mr-28 flex items-center'>
            <span className='text-[20px] text-black font-normal font-[Poppins]'>Show</span>
            <span className='w-[45px] md:w-[55px] h-[40px] md:h-[55px] bg-white p-[15px] rounded'>16</span>
            <span className='text-[20px] text-black font-normal font-[Poppins]'>Short by</span>
            <button className='text-[14px] md:text-[20px] text-[#9F9F9F] font-normal font-[Poppins] w-[60px] md:w-[88px] h-[40px] md:h-[55px] bg-white rounded'>Default</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MiddleHeader
