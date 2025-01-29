
'use client'
import React from 'react'
import Image from 'next/image'
import Navbar2 from '../components/navbar2'

const About = () => {
    return (
        <div>
          <Navbar2/>
            <section
                className="w-full md:h-[400px] flex flex-col md:flex-row text-center justify-center items-center md:text-start"
            >
                <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">

                    <div className='w-full md:w-[525px] h-[336px] flex flex-col justify-center '>
                        <h1 className="text-[54px] font-[Inter] font-semibold my-2">About Us</h1>
                        <p className='my-5'>
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </p>

                        <p>
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <Image
                        src="/images/shop/products/Description-1.png"
                        alt="Profile picture"
                        width={705}
                        height={609}
                        className="m-auto"
                    />
                </div>
            </section>
                
                {/* Services  */}
            <div>
              <h2 className="text-[54px] font-[Inter] font-semibold my-2 ml-4 md:ml-16">Our services</h2>
            {/* images section 01  */}
            <div className='w-full'>
                {/* cataogory Boxes  */}
                <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-evenly mt-10 mx-auto items-center mb-8 md:mb-0'>

                    {/* catagory 01  */}

                    <div>
                        <div className='w-[270px] h-[230px] flex flex-col  justify-center items-center border-2 border-black/20 rounded-md'>
                            <Image src="/images/shop/products/Asgaard sofa 3.png" alt='img' height={100} width={100} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>10.5k </h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Sallers active our site</h2>
                        </div>
                    </div>

                    {/* catagory 02  */}

                    <div>
                        <div className='w-[270px] h-[230px]  flex flex-col justify-center items-center border-2 border-black/20 rounded-md'>
                            <Image src="/images/shop/products/Description-1.png" alt='img' height={100} width={100} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>33k </h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Mopnthly Produduct Sale</h2>
                        </div>
                    </div>

                    {/* catagory 03  */}
                    <div>
                        <div className='w-[270px] h-[230px] flex flex-col justify-center items-center border-2 border-black/20 rounded-md'>
                            <Image src="/images/shop/products/Description-2.png" alt='img' height={100} width={100} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>45.5k</h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Customer active in our site</h2>
                        </div>
                    </div>

                    {/* catagory 04  */}
                    <div>
                        <div className='w-[270px] h-[230px] flex flex-col justify-center items-center border-2 border-black/20 rounded-md'>
                            <Image src="/images/shop/products/Mask group-10.png" alt='img' height={100} width={100} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>25k </h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Anual gross sale in our site</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
        </div>
    )
}

export default About
