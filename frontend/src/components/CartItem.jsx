import React from 'react'
import AmountButton from './AmountButton'
import food from '../assets/food-1.jpeg'

const CartItem = () => {
  return (
    <div className='flex items-center justify-between mx-auto w-full lg:max-w-6xl md:max-w-5xl my-2'>
        <div className='flex gap-6 items-center px-4 py-2'>
            <img src={food} className='h-16 w-16 rounded-xl' alt="" />
            <div className='flex flex-col gap-1 items-start'>
                <p className='text-md lg'>Samsung Phone</p>
                <p className='text-xl font-semibold text-red-800'>$590.99</p>
                <button className='text-red-900 text-xs px-2 py-1 rounded-lg hover:bg-red-900 hover:text-white'>Remove</button>
            </div>
        </div>
        <div>
            <AmountButton amount={5}/>
        </div>
        {/* <AmountButton increase={increase} decrease={descrease} quantity={quantity}/> */}
        <hr />
    </div>
  )
}

export default CartItem