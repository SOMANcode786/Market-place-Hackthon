
import React from 'react'

const Account = () => {
    return (
        <div>
            <div className='w-full md:h-[700px] flex justify-center items-center mb-10 md:mb-0'>
                <div className='w-[90%] md:h-[600px] flex flex-col md:flex-row justify-evenly pt-10'>

                    {/* log in  */}
                    <div className='mb-12 md:mb-0'>
                        <h1 className='text-[26px] text-black font-semibold font-[Poppins] mb-5'>Log In</h1>

                        <div className="relative mb-6">
                            <label htmlFor="email" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
                                Email address
                            </label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-3 w-full md:w-[423px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                                required />
                        </div>

                        <div className="relative mb-6">
                            <label htmlFor="email" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
                               Passward
                            </label>
                            <br />
                            <input
                                type="passward"
                                id="passward"
                                name="passward"
                                className="mt-3 w-full md:w-[423px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required />
                           </div>

                           <div className='flex items-center mb-5' >
                           <input type="checkbox" className='w-[30px] h-[27px]'/>
                           <label htmlFor="vehicle1" className='text-[16px] text-black font-normal font-[Poppins] ml-3'>Remember me</label> <br/>
                            
                           </div>

                           <div>
                           <button className='w-[150px] md:w-[215px] h-[50px] md:h-[64px] border rounded-lg text-[20px] font-normal font-[Poppins]'>Log In</button>
                           <span className='text-[16px] text-black font-light font-[Poppins] ml-6'>Lost Your Password?</span>
                           </div>

                    </div>
                    {/* Register  */}
                    <div>
                    <h1 className='text-[26px] text-black font-semibold font-[Poppins] mb-5'>Register</h1>
                    <div className="relative mb-6">
                            <label htmlFor="email" className="leading-7 text-[16px] text-black font-medium font-[Poppins]">
                                Email address
                            </label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-3 w-full md:w-[423px] bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                                required />
                        </div>
                          <h2 className='text-[16px] text-black font-light font-[Poppins] mb-3'>A link to set a new password will be sent to your email <br /> address.</h2>
                          <h2 className='text-[16px] text-black font-light font-[Poppins] mb-3'>Your personal data will be used to support your <br /> experience throughout this website, to manage access <br /> to your account, and for other purposes described in our <br /> <b>privacy policy</b> .</h2>
                          <div>
                          <div>
                           <button className='w-[150px] md:w-[215px] h-[50px] md:h-[64px] border rounded-lg text-[20px] font-normal font-[Poppins]'>Register</button>
                           </div>
                          </div>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Account
