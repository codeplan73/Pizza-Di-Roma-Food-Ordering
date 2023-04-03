import React from 'react'
import AmountButton from './AmountButton'

const CartItem = ({items}) => {
  console.log(items, 'Cart Items')
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className='flex items-center justify-between mx-auto w-full mb-2'>
        <div className='flex gap-6 items-center px-4 py-2'>
            <img src={item.imageUrl} className='h-16 w-16 rounded-xl' alt="" />
            <div className='flex flex-col gap-1 items-start'>
                <p className='text-md lg'>{item.name}</p>
                <p className='text-xl font-semibold text-red-800'>{item.price}</p>
                <button className='text-red-900 text-xs px-2 py-1 rounded-lg hover:bg-red-900 hover:text-white'>Remove</button>
            </div>
        </div>
        <div>
            <AmountButton amount={item.amount}/>
        </div>

        <hr />
    </div>
      ))}
    </>
  )
}

export default CartItem