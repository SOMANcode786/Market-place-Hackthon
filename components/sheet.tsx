
"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button >
                 <GiHamburgerMenu  />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} >
          <SheetHeader>
          <SheetTitle className="text-[24px] text-black font-semibold font-[Poppins]"></SheetTitle>
           </SheetHeader> 
          <div className="h-full">
            <ul className=' ml-4 mt-10 w-full h-full flex flex-col space-y-4'>
             <Link className='text-[16px] font-[Poppins] font-medium underline' href={"/"}><li>Home</li></Link>
             <Link className='text-[16px] font-[Poppins] font-medium underline' href={"/shop"}><li>Shop</li></Link>
             <Link className='text-[16px] font-[Poppins] font-medium underline' href={"/about"}><li>About</li></Link>
             <Link className='text-[16px] font-[Poppins] font-medium underline' href={"/contact"}><li>Contact</li></Link>
            </ul>
        </div> 
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
