import React from 'react';
import { useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearBag } from '../store/bag';
import Modal from './Modal';

const Bag = () => {
    const [checkOut, setCheckOut] = useState(false)
    const data = useSelector((store) => store.bag.items);
    
    const [quantities, setQuantities] = useState(data.map(item => ({ id: item.id, quantity: 1 })));
    const dispatch = useDispatch((state) => state.bag.clearBag)
    const handleAdd = (id) => {
        setQuantities(prevQuantities => 
            prevQuantities.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    
    const handleSub = (id) => {
        setQuantities(prevQuantities => 
            prevQuantities.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const totalPrice = quantities.reduce((acc, item) => {
        const product = data.find(p => p.id === item.id);
        if (product) {
            return acc + (product.price * item.quantity);
        }
        return acc
    }, 0);
    

    const handleClear = () => {
        setQuantities(data.map(item => ({ id: item.id, quantity: 0 })))
        dispatch(clearBag())
    }

    const handleCheckOut = () => {
        setCheckOut(true)
    }
    
   

    console.log("hello data", data);
    return (
        <div className='relative'>
       {checkOut && <div className='absolute inset-0 bg-[#00000057] opacity-100 h-full'>
            <div className='absolute top-90 left-0 bottom-36 right-0 w-max mx-auto h-max my-auto z-50'>
               <Modal  checkOut={checkOut} setCheckOut={setCheckOut} />  
            </div> 
        </div>}
        <div className='flex flex-col items-center z-10'>
                <div className='flex-1'>
                    {data.length === 0 ? ( 
                        <h1 className='text-3xl text-center mt-24'>No items are in the bag</h1>
                    ) : (
                        
                        data.map((item) => (
                            <div key={item.id} className='mt-10  p-5 flex gap-5 '>

                                <div className='flex border-2 border-blue-400 w-[100%] p-2'>
                                    <div className='flex-2 '>
                                        <img src={item.img} alt={item.name} className='w-40 rounded-sm' /> 
                                    </div>
                                    <div className='flex-1 mx-10'>

                                        <div className='mt-2'>{item.name}</div>
                                        <div className='my-2 font-semibold'>Price: {item.price}</div>
                                        <div className='my-2 font-semibold'>{item.description}</div>
                                        <p> <span>14 days </span>return available</p> 
                                        <p><span>Express Delivery</span>in 2 days</p> 

                                        <div className='flex gap-2 justify-between border-2 border-black w-40 px-4 items-center py-2 mt-2 rounded-md'>
                                            <div className=' text-xl font-bold cursor-pointer' onClick={() => handleSub(item.id)}><FaMinus /></div>
                                            <div>{quantities.find(q => q.id === item.id)?.quantity || 1}</div>
                                            <div className=' text-xl font-bold cursor-pointer' onClick={() => handleAdd(item.id)}><FaPlus /></div>
                                        </div>
                                    
                                    </div>
                                </div> 

                            </div>
                        ))
                    )}
                </div>
                    

                    <div className='bg-[#d9d9d9] md:w-[50%] mb:pb-0 pb-10 px-10 my-14 rounded-md '>
                    <h1 className='md:text-5xl text-xl font-semibold text-center mt-4'>Price Details</h1>
                   { data.map((item) => (
                            <div key={item.id} className='mt-10  p-5 flex gap-5 '>
                                
                                <div className='flex gap-5 items-center w-full'>
                                    <div className='flex-2 '>
                                        <img src={item.img} alt={item.name} className=' w-20 h-20 object-cover rounded-full' /> 
                                    </div>
                                    <div className='flex  gap-5 items-center'>
                                        <div className='mt-2'>{item.name}</div>
                                        <div className='my-2 font-semibold'>Price: {item.price}</div>
                                        <div>X</div>
                                        <div>{quantities.find(q => q.id === item.id)?.quantity || 1}</div>
                                        <div>=</div>
                                        <div>{item.price * quantities.find(q => q.id === item.id)?.quantity || 1}</div>
                                    </div>
                                </div> 

                            </div>
                        ))}
                        <div className='flex  gap-5 justify-center items-center mt-5'>
                            <div className='text-xl font-semibold'>Total Price: </div>
                            <div className='text-4xl'>{Math.floor(totalPrice)} </div>
                        </div>
                        <div className='flex justify-center items-center gap-20 mt-7'>
                            <div className='bg-gray-600 cursor-pointer p-2 px-4 text-white rounded-md' onClick={()=> handleClear()}>Clear all</div>
                            <div className='bg-green-600 cursor-pointer p-2 px-4 text-white rounded-md' onClick={() => handleCheckOut()}>Check out</div>
                             
                        </div>
                        
                    </div>
                    
            </div>
            
        </div>
    );
}

export default Bag;
