import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='mt-10'>
    <div className='bg-zinc-950 text-white  p-1 mx-auto'>
        <div className='bg-zinc-950 text-white py-16 px-5 min-[1220px]:flex items-center '>
            <div className='flex-1 max-[1220px]:text-center  max-[1220px]:mb-10 text-3xl '>
                FASHION STORE
            </div>
            <div className='flex-1 m-2 '>
                <ul className=' w-full flex justify-center gap-5 '>
                    <li className='text-2xl cursor-pointer'><FaInstagram /></li>
                    <li className='text-2xl cursor-pointer'><FaLinkedin /></li>
                    <li className='text-2xl cursor-pointer'><FaGithub /></li>
                    <li className='text-2xl cursor-pointer'><MdOutlineMail /></li>
                   
                </ul>
            </div>
            <div className='flex-1 '>
                <div className=' w-full flex flex-col items-center self-start max-[1220px]:mt-10 text-[#838282] text-sm'>
                    <p className='mb-2'> <span className='font-bold text-white'>100% ORIGINAL</span> guarantee for all products at Fashion-Store.com</p>
                    <p> <span className='font-bold text-white'>Return within 14days</span> of receiving your order at Fashion-Store.com </p>
                  </div> 
            </div>

        </div>
    </div>
    </div>
  )
}

export default Footer