import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from "../Footer";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { additems } from '../store/cartSlice';
const All = () => {
    const [data, setData ] = useState([])
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const fetchData = async () => {
        const response = await fetch("https://raw.githubusercontent.com/Ponna-Rajesh/api-fashion-store/main/data.json")
        const json = await response.json()
        setData(json)
    }


    useEffect(()=>{
        fetchData()
    },[])

    const toggleItem = (item) => {
        dispatch((dispatch, getState) => {
          const { cart } = getState();
          const itemExists = cart.items.some(i => i.id === item.id);
    
          let updatedItems;
          if (itemExists) {
            updatedItems = cart.items.filter(i => i.id !== item.id);
          } else {
            updatedItems = [...cart.items, item];
          }
    
          dispatch(additems(updatedItems));
        });
      };
    

    console.log(data)

  return (
    <div>
        
        <div className='flex flex-wrap justify-center '>
        {data.length > 0 && data[0].items ? (
          data[0].items.map((dta) => (
            <div className='' key={dta.id}>
              <div className='bg-[#a7a9aa] text-[#000] max-w-56 pb-3 pt-3 px-3 m-10 mb-14 rounded-md '>
                <img src={dta.img} alt="" className='w-56 max-h-52 object-cover cursor-pointer' />
                <div className='p-1 '>
                  <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                  <h1>{`Price: ${dta.price}`}</h1>
                  <h1>{`${dta.description}`}</h1>
                  <button className='bg-violet-500 text-white p-2 rounded-md my-2' onClick={() => toggleItem(dta)}>
                    {`${cartItems.some((i) => i.id === dta.id) ? '😍 Added' : '😊 Add to Wishlist'}`}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

        {data.length > 0 && data[1].items ? (
          data[1].items.map((dta) => (
            <div className='' key={dta.id}>
              <div className='bg-[#a7a9aa] text-[#000] max-w-56 pb-3 pt-3 px-3 m-10 mb-14 rounded-md '>
                <img src={dta.img} alt="" className='w-56 max-h-52 object-cover cursor-pointer' />
                <div className='p-1 '>
                  <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                  <h1>{`Price: ${dta.price}`}</h1>
                  <h1>{`${dta.description}`}</h1>
                  <button className='bg-violet-500 text-white p-2 rounded-md my-2' onClick={() => toggleItem(dta)}>
                    {`${cartItems.some((i) => i.id === dta.id) ? '😍 Added' : '😊 Add to Wishlist'}`}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

        {data.length > 0 && data[2].items ? (
          data[2].items.map((dta) => (
            <div className='' key={dta.id}>
              <div className='bg-[#a7a9aa] text-[#000] max-w-56 pb-3 pt-3 px-3 m-10 mb-14 rounded-md '>
                <img src={dta.img} alt="" className='w-56 max-h-52 object-cover cursor-pointer' />
                <div className='p-1 '>
                  <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                  <h1>{`Price: ${dta.price}`}</h1>
                  <h1>{`${dta.description}`}</h1>
                  <button className='bg-violet-500 text-white p-2 rounded-md my-2' onClick={() => toggleItem(dta)}>
                    {`${cartItems.some((i) => i.id === dta.id) ? '😍 Added' : '😊 Add to Wishlist'}`}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

        {data.length > 0 && data[3].items ? (
          data[3].items.map((dta) => (
            <div className='' key={dta.id}>
              <div className='bg-[#a7a9aa] text-[#000] max-w-56 pb-3 pt-3 px-3 m-10 mb-14 rounded-md '>
                <img src={dta.img} alt="" className='w-56 max-h-52 object-cover cursor-pointer' />
                <div className='p-1 '>
                  <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                  <h1>{`Price: ${dta.price}`}</h1>
                  <h1>{`${dta.description}`}</h1>
                  <button className='bg-violet-500 text-white p-2 rounded-md my-2' onClick={() => toggleItem(dta)}>
                    {`${cartItems.some((i) => i.id === dta.id) ? '😍 Added' : '😊 Add to Wishlist'}`}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}


        {data.length > 0 && data[4].items ? (
          data[4].items.map((dta) => (
            <div className='' key={dta.id}>
              <div className='bg-[#a7a9aa] text-[#000] max-w-56 pb-3 pt-3 px-3 m-10 mb-14 rounded-md '>
                <img src={dta.img} alt="" className='w-56 max-h-52 object-cover cursor-pointer' />
                <div className='p-1 '>
                  <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                  <h1>{`Price: ${dta.price}`}</h1>
                  <h1>{`${dta.description}`}</h1>
                  <button className='bg-violet-500 text-white p-2 rounded-md my-2' onClick={() => toggleItem(dta)}>
                    {`${cartItems.some((i) => i.id === dta.id) ? '😍 Added' : '😊 Add to Wishlist'}`}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}


        {data.length > 0 && data[5].items ? (
          data[5].items.map((dta) => (
            <div className='' key={dta.id}>
              <div className='bg-[#a7a9aa] text-[#000] max-w-56 pb-3 pt-3 px-3 m-10 mb-14 rounded-md '>
                <img src={dta.img} alt="" className='w-56 max-h-52 object-cover cursor-pointer' />
                <div className='p-1 '>
                  <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                  <h1>{`Price: ${dta.price}`}</h1>
                  <h1>{`${dta.description}`}</h1>
                  <button className='bg-violet-500 text-white p-2 rounded-md my-2' onClick={() => toggleItem(dta)}>
                    {`${cartItems.some((i) => i.id === dta.id) ? '😍 Added' : '😊 Add to Wishlist'}`}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}




      </div>

    <Footer />
    </div>
  )
}

export default All