
import React from 'react'

const MainContact = () => {
  return (
    <div>
       <div className='w-full h-[1200px] md:h-[944px] flex flex-col items-center md:justify-between mb-8 md:mb-0 '>
        {/* top heading  */}
        <div className='w-full md:w-[600px] md:h-[40px] flex flex-col items-center mt-6 md:mt-16 pb-3 md:pb-0'>
            <h1 className='text-[24px] md:text-[36px] text-black font-[Poppins] font-semibold'>Get In Touch With Us</h1>
            <h2 className='text-[16px] text-[#9F9F9F] font-[Poppins] font-normal pl-3 md:pl-0'>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
                <p className='md:ml-8'>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </h2>
        </div>

        {/* contact Form and address dev  */}

        <div className='w-[80%] h-[500px] md:h-[700px] flex flex-col md:flex-row md:items-end'>
            {/* left side address  */}
            <div className='h-full w-[50%]  flex items-start justify-center'>
                 <div>
                    {/* address  */}
                    <div className='mb-3 md:mb-8 mt-3 md:mt-8'>
                       <h1 className='text-black text-[24px] font-medium font-[Poppins]'>Address</h1>
                       <h2 className='text-black text-[16px] font-normal font-[Poppins]'>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</h2>
                    </div>
                {/* phone  */}
                <div className='mb-8'>
                  <h1 className='text-black text-[24px] font-medium font-[Poppins]'>Phone</h1>
                  <h2 className='text-black text-[16px] font-normal font-[Poppins]'>Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789</h2>
                </div>
                {/* working Time  */}
                <div className='mb-8'>
                <h1 className='text-black text-[24px] font-medium font-[Poppins]'>Working Time</h1>
                <h2 className='text-black text-[16px] font-normal font-[Poppins]'>Monday-Friday: 9:00 - <br /> 22:00
                </h2>
                <h2 className='text-black text-[16px] font-normal font-[Poppins]'>Saturday-Sunday: 9:00 - <br /> 21:00</h2>
                </div>
                 </div>
            </div>
               {/* right side form  */}
            <div className='w-full md:w-[450px] h-full flex flex-col pt-8 mt-14'>
            <div className="relative mb-6">
        <label htmlFor="name" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
        Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required />
      </div>
      <div className="relative mb-6">
        <label htmlFor="email" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>
      <div className="relative mb-6">
        <label htmlFor="subject" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>
      <div className="relative mb-6">
        <label htmlFor="message" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-16 md:h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
       required />
      </div>
      <button className=" border-2 border-black py-2 px-6 focus:outline-none rounded-lg text-lg w-[180px] md:w-[230px] h-[40px] md:h-[45px] text-black text-[16px] font-normal font-[Poppins]">
       Send Message
      </button>
            </div>

        </div>

       </div>
    </div>
  )
}

export default MainContact