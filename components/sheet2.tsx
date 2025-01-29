
"use client"

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { RxCrossCircled } from "react-icons/rx"

const SHEET_SIDES = ["right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button >
              Add to Cart
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
            <div className='w-full md:w-[415px]  md:h-[600px] bg-white flex flex-col justify-between pb-7'> 
            {/* upper side  */}
            <div>
            <div>
            <div className='flex items-center mt-10 justify-start border-t-2 pt-10'>
              {/* left side image  */}
           <div className='h-[105px] w-[108px] bg-[#FBEBB5] flex justify-center items-center rounded-md'>
            <Image src="/images/shop/products/Asgaard sofa 3.png" alt='Sofa Img' width={100} height={100}/>
    
           </div>
           {/* right side text  */}
           <div className='ml-6'>
           <h1 className='text-[16px] text-black font-normal font-[Poppins]'>Asgaard sofa</h1>
           <div className='flex gap-4 items-center mt-4'>
            <span className='text-[16px] text-[#000000] font-medium font-[Poppins]'>1</span>
            <span className='text-[12px] text-[#000000] font-normal font-[Poppins]'>X</span>
            <span  className='text-[12px] text-[#B88E2F] font-medium font-[Poppins]'>Rs. 250,000.00</span>
            </div>
           </div>
           {/* icon  */}
           <div>
           <RxCrossCircled className='w-[20px] h-[20px] text-[#9F9F9F] ml-6'/>
           </div>

           </div>

          </div>
          </div>

          {/* down side text and button  */}
          <div>
            {/* text  */}
            <div className='flex justify-start border-b-2 pb-10 space-x-20 ml-2'>
                <h1>Subtotal</h1>
                <h1>Rs. 250,000.00</h1>
            </div>
            {/* buttons  */}
            <div className=' flex justify-start space-x-10 mt-8'>
                <button className='w-[130px] h-[30px] border-2 border-black rounded-2xl text-[12px] text-black font-normal font-[Poppins]'><Link href='/cart'>View Cart</Link></button>
                <button className='w-[130px] h-[30px] border-2 border-black rounded-2xl text-[12px] text-black font-normal font-[Poppins]'><Link href='/checkout'>Checkout</Link></button>
            </div>
          </div>

      </div>
       
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
