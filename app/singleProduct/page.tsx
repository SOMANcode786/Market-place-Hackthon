'use client'
import React from 'react'
import Navbar2 from '../components/navbar2'
import Link from 'next/link'
import { MdArrowForwardIos } from "react-icons/md";
import SingleMain from '../components/singlePage/singleMain'
import Description from '../components/singlePage/description'
import RelatedProducts from '../components/singlePage/relatedProducts'

const SingleProduct = () => {
    return (
        <div>
            <Navbar2 />
              {/* header  */}
              <div className='w-full h-[100px] flex items-center'>
                <ul className='flex items-center gap-3 md:gap-5 ml-3 md:ml-20'>
                    <li className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins]'><Link href={'/'}>Home</Link></li>
                    <span><MdArrowForwardIos className='w-[15px] h-[15px] text-black' /></span>
                    <li className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins]'><Link href={'/shop'}>Shop</Link></li>
                    <span><MdArrowForwardIos className='w-[15px] h-[15px] text-black' /></span>
                    <span>|</span>
                    <li className='text-[16px] text-black font-normal font-[Poppins]'>Asgaard sofa</li>
                </ul>
              </div>
              {/* main  */}
              <SingleMain/>
              <Description/>
              <RelatedProducts/>


        </div>
    )
}

export default SingleProduct
