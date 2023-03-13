import React from 'react'
import { Link } from 'react-router-dom'

const MealCard = ({image, title, price, link}) => {
  return (
    <Link to={`/meal/${link}`} className='bg-slate-100 flex flex-col items-center max-w-xs py-5 gap-2 text-gray-900 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300'>
        <img src={image} alt="menu" className='rounded-2xl  w-full md:w-56 h-40' />
        <div className='flex flex-col justify-between items-start w-full font-bold text-sm py-3 gap-3'>
          <h2 className='text-sm text-slate-700'>{title}</h2>
          <p className='text-red-600 text-xl'>${price}</p>
        </div> 
        <button className='text-red-600  py-2 rounded-full text-center text-sm font-bold w-full border border-red-600 hover:border-white hover:bg-burgundy-900 hover:text-white'>Add to cart</button>
    </Link>
  )
}

export default MealCard