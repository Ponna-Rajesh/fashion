import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Banner from "../components/Banner";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import SearchItems from "../components/pages/SearchItems";

const Body = () => {

  const [data, setData] = useState([]);
  const [women, setWomen] = useState([]);
  const [kids, setKids] = useState([]);
  const [men, setMen] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [home, setHome] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [toggleData, setToggleData] = useState(true)

  const fetchData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/Ponna-Rajesh/api-fashion-store/main/data.json");
    const json = await response.json();
    setData(json);
    setMen(json[0].items);
    setWomen(json[1].items);
    setKids([...json[2].items, ...json[3].items]);
    setBeauty(json[4].items);
    setHome(json[5].items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = (value) => {
    setToggleData(!toggleData)
    const filtered = data.flatMap(dta => 
      dta.items.filter(item => item.name.toLowerCase().includes(value))
    );
    setFilteredItems(filtered);
    
  };

  useEffect(() => {
    filterItems(searchText);
  }, [searchText, data]);

 

  return (
    <>
      <div>
        <div className='flex justify-center my-10 relative'>
          <input 
            type="search" 
            className='md:hidden outline-none text-gray-950 w-[350px] h-3 rounded-sm border-2 border-gray-200 bg-transparent py-5 pl-4' 
            placeholder='search for products ' 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          />
          <CiSearch 
            className='md:hidden text-2xl absolute right-[50px] top-2 cursor-pointer' 
            onClick={() => filterItems(searchText)} 
          />

          <div className='absolute'>
            <input 
              type="search" 
              className='outline-none max-[768px]:hidden text-gray-950 w-[700px] h-3 rounded-sm border-2 border-gray-200 py-5 pl-4' 
              placeholder='search for products ' 
              value={searchText}
              onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            />
            <CiSearch 
              className='max-[768px]:hidden absolute right-5 top-2 cursor-pointer text-2xl' 
              onClick={() => filterItems(searchText)} 
            />
          </div>
        </div>
      </div>

      <Banner />

    {!toggleData && <SearchItems items={filteredItems} />}

    {toggleData &&
    <>
    <h1 className='text-center text-5xl md:mb-10 mt-5'>Mens</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                men.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden ' key={dta.id}>
                       <Link to="/Men">
                        <div className='max-[1220px]:hidden '>
                                <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                    <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                    <div className='p-1'>
                                        <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                men.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden 'key={dta.id}>
                        <Link to="/Men">
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        </Link>
                        
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
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                women.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden 'key={dta.id}>
                         <Link to="/Women">
                        <div className='max-[1220px]:hidden '>
                                <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                    <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                    <div className='p-1'>
                                        <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                women.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden 'key={dta.id}>
                        <Link to="/Women">
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        </Link>
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>

    <h1 className='text-center text-5xl mt-14'>KIDS</h1>
    <div className=' w-5/6 mx-auto'>
        <div className='flex'>

        {/* larger */}
        <Swiper
                spaceBetween={50}
                slidesPerView={4}          
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                kids.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden 'key={dta.id}>
                        <Link to="/Kids">
                        <div className='max-[1220px]:hidden '>
                                <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                    <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                    <div className='p-1'>
                                        <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                kids.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden 'key={dta.id}>
                       <Link to="/Kids">
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        </Link>
                        
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
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                home.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden 'key={dta.id}>
                         <Link to="/Home">
                        <div className='max-[1220px]:hidden '>
                                <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                    <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                    <div className='p-1'>
                                        <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                home.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden 'key={dta.id}>
                        <Link to="/Home">
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        </Link>
                        
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
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                beauty.map((dta)=>(
                    <SwiperSlide className='max-[1220px]:hidden 'key={dta.id}>
                         <Link to="/Beauty">
                        <div className='max-[1220px]:hidden '>
                                <div className='bg-[#9f8c7f] max-w-56 pb-3 pt-3 px-3 m-10  mb-14 rounded-md ' key={dta.id}>
                                    <img src={dta.img} alt=""  className='w-56 max-h-52 object-cover cursor-pointer'/>
                                    <div className='p-1'>
                                        <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                        
                     </SwiperSlide>
                ))
           }    
        </Swiper>

           {/* smaller */}
           <Swiper
                spaceBetween={50}
                slidesPerView={1}          
                pagination={true} modules={[Pagination]} className="mySwiper"
                loop
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: true, 
                }}
                >

            {
                beauty.map((dta)=>(
                    <SwiperSlide className='min-[1220px]:hidden 'key={dta.id}>
                        <Link to="/Beauty">
                        <div className='min-[1220px]:hidden  flex flex-col justify-center items-center'>
                            <div className='bg-[#9f8c7f] w-56 pb-3 pt-3 px-3 mx-14 my-10 rounded-md ' key={dta.id}>
                                <img src={dta.img} alt=""  className='w-56 max-h-62 object-cover cursor-pointer'/>
                                <div className='p-1'>
                                    <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                                </div>
                            </div>
                        </div>
                        </Link>
                     </SwiperSlide>
                ))
           }    
            </Swiper>

        </div>
    </div>
    </>
}

    <Footer />
    
     </>
  )

}
export default Body