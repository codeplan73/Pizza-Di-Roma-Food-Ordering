import React from 'react'

const OrderCard = ({icon, title, text}) => {
  return (
    <div className='bg-slate-100 flex flex-col items-center max-w-xs py-5 px-2 gap-4 rounded-2xl shadow-md text-gray-600'>
        <span className='text-white bg-red-600 text-3xl p-5 rounded-full'>{icon}</span>
        <h4 className='text-burgundy-900 font-bold text-xl'>{title}</h4>
        <p className='text-center'>{text}</p>
    </div>
  )
}

export default OrderCard