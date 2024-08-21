import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    function toggleBtn(){
        setShowMenu(!showMenu)
    }
    const itemsNum = useSelector((state)=> state.cart.items)
    const Bagitems = useSelector((state)=> state.bag.items)

  return (
    <>
     <nav className='bg-white px-10 py-[12px] flex justify-between items-center shadow-lg min-[1220px]:py-5'>
        <div className='flex justify-center items-center'>
            <div className=' flex flex-col items-center justify-center'>
                {/* <img src="../../public/logo/logo.png" alt="" className='w-20 mr-10 ' />  */}
               <Link to="/"><h1 className='min-[1220px]:text-2xl font-semibold text-[crimson] mr-10 cursor-pointer'>FASHION STORE</h1></Link> 
            </div>
           
            <div className=' max-[801px]:hidden'>
                <ul className='flex justify-evenly text-gray-950 '>
                    <Link to="/Men"><li className='mx-4 cursor-pointer hover:border-b-[3px] border-blue-500'>MEN</li></Link>
                    <Link to="/Women"><li className='mx-4 cursor-pointer hover:border-b-[3px] border-pink-500'>WOMEN</li></Link>
                    <Link to="/Kids"><li className='mx-4 cursor-pointer hover:border-b-[3px] border-violet-500'>KIDS</li></Link>
                    <Link to="/Home"><li className='mx-4 cursor-pointer hover:border-b-[3px] border-pink-500'>HOME & LIVING</li></Link>
                    <Link to="/Beauty"><li className='mx-4 cursor-pointer hover:border-b-[3px] border-yellow-400'>BEAUTY</li></Link>
                    <Link to="/all"><li className='mx-4 cursor-pointer hover:border-b-[3px] border-yellow-400'>All</li></Link>
                </ul>  
            </div>
        </div>
       
        {/* <div className=' max-[1354px]:hidden'>
            <input type="search" className='outline-none text-gray-950 w-[500px] h-3 rounded-sm border-2 border-gray-200 py-5 pl-4' placeholder='search for products ' />
        </div> */}

        <div>
            <div className='flex justify-between items-center relative'>
                <p className=' text-[#fff]  absolute top-[6.5px] left-6 text-[12px]  z-10 '>{itemsNum.length}</p>
                <Link to="wishlist"> <FcLike className='mx-3 text-3xl cursor-pointer' /></Link>
                
                <p className=' text-[#fff]  absolute top-[6.5px] left-[74px] font-semibold text-red-600 text-[14px]  z-10 '>{Bagitems.length}</p>
                <Link to="bag"><BsBag  className='mx-3 text-2xl cursor-pointer '/></Link>

                <button  className={`text-xl mx-4 md:hidden ${showMenu ? 'hidden' : null }`} onClick={toggleBtn}>☰</button>
                <button  className={`text-xl mx-4 md:hidden ${showMenu ? null : 'hidden'}`} onClick={toggleBtn}>X</button>
            </div>
        </div>
    </nav>

    <div className= {`py-4 px-5  ${showMenu ? 'block' : 'hidden'}`} >
            <ul id="menu-items" className={` block  ${showMenu ? 'block' : 'lg:hidden'}`}>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2 "><Link to="/Men">MEN</Link></li> 
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><Link to="/Women">WOMEN</Link></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><Link to="/Kids">KIDS</Link></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><Link to="/Home">HOME & LIVING</Link></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><Link to="/Beauty">BEAUTY</Link></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><Link to="/all">All</Link></li> 
            </ul>
    </div>

    </>
  )
}

export default Header