import React, {useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const banner = () => {
  const [banner, setBanner] = useState([])
  const fetchData = async () => {
    const data = await fetch("https://raw.githubusercontent.com/Ponna-Rajesh/banner-api.github.io/main/banner.json") ;
    const json = await data.json()
    setBanner(json)
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      
    {/* <div>
        <div className='md:hidden flex justify-center my-10'>
                <input type="search" className=' outline-none text-gray-950 w-[350px] h-3 rounded-sm border-2 border-gray-200 py-5 pl-4' placeholder='search for products ' />
        </div>
    </div> */}

        <div className=' w-5/6 mx-auto  md:my-16  '>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
                loop
                autoplay={{
                    delay: 500, 
                    disableOnInteraction: true, 
                }}
                >
                {banner.map((data) => (

                        <SwiperSlide key={data.id}>
                          <Link  to={`/${data.name.toLowerCase()}`}>
                              <img src={data.img} alt="" className="w-6/6 mx-auto mb-2" /> 
                          </Link>
                        </SwiperSlide>

                ))}          
            </Swiper>
           

        </div>
    </div>
  )
}

export default banner