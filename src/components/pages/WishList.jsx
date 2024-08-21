import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartItemRemove } from '../store/cartSlice';
import bag from '../store/bag';
import { bagitems } from '../store/bag';

const WishList = () => {
  const [goBag, setGoBag] = useState(false)

  const cartItems = useSelector((state) => state.cart.items);
  console.log("hello", cartItems);
  const dispatch = useDispatch()

  const handleRemoveCard = (value) => {
    dispatch(cartItemRemove(value))
  }
    
 const handleToBag = (dta) => {
    dispatch(bagitems(dta))
   
  }

 
 

  return (
    <div>
      <h1 className='text-center font-semibold text-xl my-2 mt-5 '>Wishlist</h1>
      {cartItems.length > 0 ? (
        <div className='flex flex-wrap justify-center'>
          {cartItems.map((item) => (
            <div key={item.id} className='w-48 bg-[#7866eb26] text-black m-5 p-3 pt-1 pb-[1] rounded-md flex flex-col items-center justify-between' >
              <div className='self-end mb-2 cursor-pointer font-semibold' onClick={() => handleRemoveCard(item.id)}>X</div>
              <img src={item.img} alt={item.name} className='w-[100%] rounded-sm' />
              <div className='mt-2'>{item.name}</div>
              <div className='my-2 font-semibold'>Price: {item.price}</div>
              <div className='bg-blue-500 cursor-pointer text-white py-1 px-10 rounded-lg hover:bg-blue-600' onClick={() => handleToBag(item)}>Bag</div>
            </div>
          ))}
        </div>
      ) : (
        <>
         <p className='text-center font-semibold text-xl '>No items in the wishlist. </p>
        <p className='text-center font-semibold text-xl '>Add Products to WishList. </p>
        </>
       
      )}
    </div>
  );
};

export default WishList;
