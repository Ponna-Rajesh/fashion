import React, {useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

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
                {
                  banner.map((dta)=>(
                      <SwiperSlide><img src={dta.img} alt=""   className='w-6/6 mx-auto mb-2'   /></SwiperSlide>
                  ))
                }           
            </Swiper>
           

        </div>
    </div>
  )
}

export default banner