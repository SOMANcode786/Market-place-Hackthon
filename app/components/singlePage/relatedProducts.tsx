
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RelatedProducts = () => {
  return (
    <div>
       {/* Related Products */}
       <div className='w-full h-[1700px] md:h-[700px] flex justify-center items-center mt-5 md:mt-12'>
                <div className=' w-[80%] h-full'>
                    {/* Top side  */}
                    <div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-[36px] font-[Poppins] font-medium mt-6'>Related Products</h2>
                        </div>
                    </div>
                    {/* products Boxes  */}
                    <div className='flex flex-col md:flex-row justify-between mt-7 space-x-2 '>
                        {/* Product 01  */}
                        <div className='md:ml-5'>
                            <div className='w-[287px] h-[287px] flex justify-center items-center'>
                                <Image src="/images/home/products/Mask group.png" alt='Product Image' width={287} height={287} />
                            </div>
                            {/* Tittle  */}
                            <div className='ml-16 md:ml-0'>
                                <h2 className='text-[16px] font-[Poppins] font-normal '>Trenton modular sofa_3</h2>
                                <h2 className='text-[20px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
                            </div>
                        </div>

                        {/* Product 02  */}
                        <div>
                            <div className='w-[287px] h-[287px] flex justify-center items-center'>
                                <Image src="/images/home/products/Mask group-1.png" alt='Product Image' width={287} height={287} />
                            </div>
                            {/* title  */}
                            <div className='ml-16 md:ml-0'>
                                <h2 className='text-[16px] font-[Poppins] font-normal '>Granite dining table with <br /> dining chair</h2>
                                <h2 className='text-[20px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
                            </div>
                        </div>
                        {/* Product 03  */}
                        <div>
                            <div className='w-[287px] h-[287px] flex justify-center items-center'>
                                <Image src="/images/home/products/Mask group-2.png" alt='Product Image' width={287} height={287} />
                            </div>
                            {/* title  */}
                            <div className='ml-16 md:ml-0'>
                                <h2 className='text-[16px] font-[Poppins] font-normal '>Outdoor bar table and <br /> stool</h2>
                                <h2 className='text-[20px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
                            </div>
                        </div>
                        {/* Product 04  */}
                        <div>
                            <div className='w-[287px] h-[287px] flex justify-center items-center '>
                                <Image src="/images/home/products/Mask group-3.png" alt='Product Image' width={287} height={287} />
                            </div>
                            {/* title  */}
                            <div className='ml-16 md:ml-0'>
                                <h2 className='text-[16px] font-[Poppins] font-normal'>Plain console with teak <br /> mirror</h2>
                                <h2 className='text-[20px] md:text-[24px] font-[Poppins] font-medium mt-2'>Rs. 25,000.00</h2>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center mt-12'>
                        <button className='text-[20px] font-[Poppins] font-medium border-b-2 border-black pb-3'><Link href="/shop">View More</Link></button>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default RelatedProducts
