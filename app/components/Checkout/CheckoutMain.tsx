
import React from 'react'
import Link from 'next/link';
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const CheckoutMain = () => {
  return (
    <div>
      <div className='w-full md:h-[1300px] flex justify-center items-center pb-6 md:pb-0'>
        <div className='w-full md:w-[90%] md:h-[1250px] flex flex-col md:flex-row justify-evenly'>
     {/* left side , Billing details  */}
        <div className='w-full md:w-[45%] h-full px-3 md:px-0'>
            <h1 className='text-[36px] text-black font-semibold font-[Poppins] mb-8'>Billing details</h1>
         <div className='flex'>
        <div className='mb-8 mr-5'>
        <label htmlFor="full-name" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">First Name</label> <br />
        <input type="text" id="full-name" name="full-name" className="mt-2 w-full md:w-[200px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div>
        <label htmlFor="full-name" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">Last Name</label> <br />
        <input type="text" id="full-name" name="full-name" className=" mt-2 w-full md:w-[200px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
         </div>

         <div className="relative mb-6">
        <label htmlFor="name" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        Company Name (Optional)
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className=" mt-2 w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required />
      </div>
      <div className="relative mb-6">
        <label htmlFor="email" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        Country / Region
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>
      <div className="relative mb-6">
        <label htmlFor="subject" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        Street address
        </label>
        <br />
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-2 w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div> 

      <div className="relative mb-6">
        <label htmlFor="subject" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        Town / City
        </label>
        <br />
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-2 w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>

      <div className="relative mb-6">
        <label htmlFor="subject" className="leading-7text-[16px] text-black font-medium font-[Poppins]">
        Province
        </label>
        <br />
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-2 w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>

      <div className="relative mb-6">
        <label htmlFor="subject" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        ZIP code
        </label>
        <br />
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-2 w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>

      <div className="relative mb-6">
        <label htmlFor="subject" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        Phone
        </label>
        <br />
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-2 w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>

      <div className="relative mb-6">
        <label htmlFor="subject" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        Email address
        </label>
        <br />
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-2 w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder='Additional information'
          className="w-full md:w-[450px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>
         </div>

         {/* right side, place order  */} 

            <div className='w-full md:w-[45%] h-full'>
                 <div>
                {/* upper text  */}
                <div className='flex justify-between mt-8 border-b-2 border-gray-300 pb-8 px-3 md:px-0'>
                 {/* left side  */}
                 <div>
                   <h1 className='text-[24px] text-black font-medium font-[Poppins] mb-3'>Product</h1>
                   <span className='text-[16px] text-black font-normal font-[Poppins]'>Asgaard sofa</span>
                   <span className='text-[16px] text-black font-normal font-[Poppins] ml-3'>x</span>
                   <span className='text-[16px] text-black font-normal font-[Poppins] ml-3 '>1</span>
                   <h2 className='text-[16px] text-black font-normal font-[Poppins] mt-3'>Subtotal</h2>
                    <h2 className='text-[16px] text-black font-normal font-[Poppins] mt-3'>Total</h2>
                 </div>
                 {/* right side  */}
                 <div>
                  <h1 className='text-[24px] text-black font-medium font-[Poppins] mb-3'>Subtotal</h1>
                  <h2 className='text-[16px] text-black font-light font-[Poppins] mb-3'>Rs. 250,000.00</h2>
                  <h2 className='text-[16px] text-black font-light font-[Poppins] mb-3'>Rs. 250,000.00</h2>
                  <h2 className='text-[24px] text-[#B88E2F] font-bold font-[Poppins]'>Rs. 250,000.00</h2>
                 </div>
                 </div>
                 {/* bottom text  */} 
                 <div className='mt-8 px-3 md:px-0 '>
                <div className='flex items-center'>
                <GoDotFill className='mr-3' />
                <h1>Direct Bank Transfer</h1>
                </div>
                 <h2 className='mt-3'>Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</h2>
                 <div className='mt-3'>
                 <h2 className='flex items-center mb-2'> <GoDot className='mr-2' /> Direct Bank Transfer</h2>
                 <h2 className='flex items-center'>  <GoDot className='mr-2' /> Cash On Delivery</h2>
                 </div>
                  <h2 className='mt-3'>Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account, and <br /> for other purposes described in our privacy policy.</h2>
                         
                </div>
                   {/* button  */}
                   <div className='mt-10 ml-8 md:ml-20'>
                   <button className='w-[300px] h-[64px] border rounded-lg text-[20px] font-normal font-[Poppins]'><Link href={''}>Place order</Link></button>
                   </div>
                </div>

            </div>


            </div>
      </div>
    </div>
  )
}

export default CheckoutMain
