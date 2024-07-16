import React, { useEffect } from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay} from 'swiper/modules';

const Body = () => {

const [women, setWomen] = useState([])
const [kids, setKids] = useState([])
const [girls, setGirls] = useState([])
const [men, setMen] =useState([])
const [beauty, setBeauty] =useState([])
const [home, setHome] =useState([])

const fetchData = async () => {
    const data = await fetch("https://raw.githubusercontent.com/Ponna-Rajesh/api-fashion-store/main/data.json") ;
    const json = await data.json()
    
    setMen(json[0].items)
    setWomen(json[1].items)
    setKids(json[2].items)
    setGirls(json[3].items)
    setBeauty(json[4].items)
    setHome(json[5].items)
}
useEffect(()=>{
    fetchData()
},[])



console.log("Info", men)
  return (<>

    <h1 className='text-center text-5xl md:mb-10 mt-5'>Mens</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                men.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden '>
                        <div className='max-[1220px]:hidden '>
                            <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                men.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden '>
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>

    <h1 className='text-center text-5xl mt-14'>WOMENS</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                women.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden '>
                        <div className='max-[1220px]:hidden '>
                            <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                women.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden '>
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>

    <h1 className='text-center text-5xl mt-14'>BOYS</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                kids.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden '>
                        <div className='max-[1220px]:hidden '>
                            <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                kids.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden '>
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>

    <h1 className='text-center text-5xl mt-14'>GIRLS</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                girls.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden '>
                        <div className='max-[1220px]:hidden '>
                            <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-56 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                girls.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden '>
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>

    <h1 className='text-center text-5xl mt-14'>HOME & LIVING</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                home.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden '>
                        <div className='max-[1220px]:hidden '>
                            <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-56 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                home.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden '>
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>

    <h1 className='text-center text-5xl mt-14'>BEAUTY</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                beauty.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden '>
                        <div className='max-[1220px]:hidden '>
                            <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-56 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                beauty.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden '>
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>


    
    
     </>
  )

}
export default Body