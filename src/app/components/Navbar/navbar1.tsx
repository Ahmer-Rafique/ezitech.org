import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandBehance } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiYoutubeFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import Link from 'next/link';
const Navbar1 = () => {
  return (
    <div>
        <div className='bg-blue-600 py-3 flex  gap-10 justify-end px-20'>
           <div className='text-white flex  gap-2 '>
            <div className='space-y-5'><IoCall /></div>
           <div className='text-xs'>+92 3455555396</div>
           </div>
           <div className='text-white flex gap-2'>
            <div className='space-y-5'><FaLocationDot /></div>
            <div className='text-xs'>Office #304-B Amna Plaza, Rawalpindi, Pakistan</div>
            </div>  
            <div  className='text-white flex gap-3'>
              <div className='space-y-5'><FaRegClock /></div>
              <div className='text-xs'>Mon - Fri 8.00 - 20.00</div>
              </div> 
              <div className='text-white flex gap-3'>
                <div>
                  <Link href={"https://www.facebook.com/ezitech"}>
                  <MdFacebook />
                  </Link>
                  </div>
                <div>
                  <Link href={"https://www.instagram.com/ezitechpk/"}>
                  <AiFillInstagram />
                  </Link>
                  </div>
                <div>
                  <Link href={"https://www.behance.net/ezitech"}>
                  <TbBrandBehance />
                  </Link>
                  </div>
                <div>
                  <Link href={"https://pk.linkedin.com/company/ezitechpk"}>
                  <TiSocialLinkedin />
                  </Link>
                  </div>
                <div>
                  <Link href={"https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg"}>
                  <RiYoutubeFill />
                  </Link>
                  </div>
                </div>  
                <div className='text-white flex gap-3' >
                  <div className='space-y-5' ><BsPersonFill /> </div>
                  <div className='flex gap-3' >
                    <div className='text-xs'>Login</div>
                    <div className='text-xs text-gray-700'>|</div>
                    <div className='text-xs'>Register</div>
                  </div>
                  </div> 
    </div>
    </div>
  )
}

export default Navbar1