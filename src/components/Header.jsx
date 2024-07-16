import React, { useState } from 'react'
import Banner from './Banner';
import { FcLike } from "react-icons/fc";
import { BsBag } from "react-icons/bs";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    function toggleBtn(){
        setShowMenu(!showMenu)
    }

  return (
    <>
     <nav className='bg-white px-10 py-[12px] flex justify-between items-center shadow-lg min-[1220px]:py-5'>
        <div className='flex justify-center items-center'>
            <div className=' flex flex-col items-center justify-center'>
                {/* <img src="../../public/logo/logo.png" alt="" className='w-20 mr-10 ' />  */}
                <h1 className='min-[1220px]:text-2xl font-semibold text-[crimson] mr-10'>FASHION STORE</h1>
            </div>
           
            <div className=' max-[801px]:hidden'>
                <ul className='flex justify-evenly text-gray-950 '>
                    <li className='mx-4 cursor-pointer hover:border-b-[3px] border-blue-500'>MEN</li>
                    <li className='mx-4 cursor-pointer hover:border-b-[3px] border-pink-500'>WOMEN</li>
                    <li className='mx-4 cursor-pointer hover:border-b-[3px] border-violet-500'>KIDS</li>
                    <li className='mx-4 cursor-pointer hover:border-b-[3px] border-pink-500'>HOME & LIVING</li>
                    <li className='mx-4 cursor-pointer hover:border-b-[3px] border-yellow-400'>BEAUTY</li>
                </ul>  
            </div>
        </div>
       
        <div className=' max-[1354px]:hidden'>
            <input type="search" className='outline-none text-gray-950 w-[500px] h-3 rounded-sm border-2 border-gray-200 py-5 pl-4' placeholder='search for products ' />
        </div>

        <div>
            <div className='flex justify-between items-center'>
                <FcLike className='mx-3 text-xl cursor-pointer' />
                <BsBag  className='mx-3 text-xl cursor-pointer '/>
                <button  className={`text-xl mx-4 md:hidden ${showMenu ? 'hidden' : null }`} onClick={toggleBtn}>☰</button>
                <button  className={`text-xl mx-4 md:hidden ${showMenu ? null : 'hidden'}`} onClick={toggleBtn}>X</button>
            </div>
        </div>
    </nav>

    <div className= {`py-4 px-5  ${showMenu ? 'block' : 'hidden'}`} >
            <ul id="menu-items" className={` block  ${showMenu ? 'block' : 'lg:hidden'}`}>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2 "><a href="">MEN</a></li> 
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><a href="">WOMEN</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><a href="">KIDS</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><a href="">HOME & LIVING</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><a href="">BEAUTY</a></li>
            </ul>
    </div>

    <div>
        <div className='md:hidden flex justify-center my-10'>
                <input type="search" className=' outline-none text-gray-950 w-[350px] h-3 rounded-sm border-2 border-gray-200 py-5 pl-4' placeholder='search for products ' />
        </div>
    </div>

    <Banner />

    </>
  )
}

export default Header