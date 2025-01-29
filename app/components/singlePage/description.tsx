
import React from 'react'
import Image from 'next/image'

const Description = () => {
  return (
    <div>
       {/* description  */}
                  <div className='w-full h-[1050px] md:h-[700px] flex flex-col items-center md:mt-8 px-3'>
      
                      {/* headings  */}
                      <div className='flex justify-center space-x-5 mb-8'>
                          <h1 className='text-[20px] md:text-[24px] text-black font-normal font-[Poppins]'>Description</h1>
                          <h2 className='text-[20px] md:text-[24px] text-[#9F9F9F] font-normal font-[Poppins]'>Additional Information</h2>
                          <h2 className='text-[20px] md:text-[24px] text-[#9F9F9F] font-normal font-[Poppins]'>Reviews [5]</h2>
                      </div>
                      {/* description paragraph  */}
      
                      <div className='w-[340px] h-[350px] md:w-[900px] md:h-[170px] flex flex-col items-center'>
                          <p className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins] mb-4'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                          <p className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                      </div>
                       {/* product Images  */}
                       <div className='w-full h-[600px] md:h-[350px] flex flex-col items-center md:flex-row justify-center gap-4 mt-8'>
                          <div className='w-[300px] md:w-[600px] h-[250px] md:h-[340px] bg-[#FFF9E5]'>
                          <Image src="/images/shop/products/Description-1.png" alt='Description Img' width={600} height={340}/>
                          </div>
                          <div className='w-[300px] md:w-[600px] h-[250px] md:h-[340px] bg-[#FFF9E5]'>
                          <Image src="/images/shop/products/Description-2.png" alt='Description Img' width={600} height={340}/>
                          </div>
                       </div>
                  
                  </div>
      
    </div>
  )
}

export default Description
