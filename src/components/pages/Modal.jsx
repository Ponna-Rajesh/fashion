import React from 'react'

const Modal = ({checkOut, setCheckOut}) => {

    const handleDone = () => {
        setCheckOut(!checkOut)
    }


  return (
    <div>
        <div className='bg-white flex flex-col gap-5 items-center p-10 w-96 rounded-sm'>
            <div>
                <h1 className='text-5xl'>🙏</h1>
            </div>
            <div className='mt-4 text-center'>
               
                Thanks for Shopping 💚
            </div>
            <div>
                <button className='bg-red-200 p-2 px-7 rounded-md hover:bg-blue-600 hover:text-white' onClick={handleDone}>submit</button>
            </div>
        </div>
    </div>
  )
}

export default Modal