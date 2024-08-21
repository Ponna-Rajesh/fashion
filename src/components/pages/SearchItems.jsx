import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { additems } from '../store/cartSlice';

const SearchItems = (prop) => {
  const products = prop.items
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

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


  return (
    <div>{products.length === 0 ? (
      <p className='text-center text-2xl font-semibold'>
        " No Products Are Found "
      </p>
    ) : 
    (
      <div className='flex flex-wrap justify-center'>
        {products.map((dta) => (
          <div className='' key={dta.id}>
            <div className='bg-[#a7a9aa] text-[#000] max-w-56 pb-3 pt-3 px-3 m-10 mb-14 rounded-md '>
              <img src={dta.img} alt="" className='w-56 max-h-52 object-cover cursor-pointer' />
              <div className='p-1 '>
                <h1 className='text-2xl font-[Poppins] text-center mt-2 text-white'>{dta.name}</h1>
                <h1>{`Price: ${dta.price}`}</h1>
                <h1>{`${dta.description}`}</h1>
                <button className='bg-violet-500 text-white p-2 rounded-md my-2' onClick={() => toggleItem(dta)}>
                  {`${cartItems.some(i => i.id === dta.id) ? "😍 Added" : "😊 Add to Wishlist"}`}
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    )}</div>
  )
}

export default SearchItems