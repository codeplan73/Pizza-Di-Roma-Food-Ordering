import React from 'react'
import { Link } from 'react-router-dom';

const MenuCard = ({icon, title, image}) => {
  return (
    <div className='bg-slate-100 flex flex-col items-center w-44 py-5 px-2 gap-2 rounded-2xl shadow-md text-gray-600'>
        <img src={image} alt="menu" className='rounded-full w-28 md:w-20 h-28 md:h-20' />
        <h4 className='text-burgundy-900 font-bold text-sm'>{title}</h4>
        <Link to="/meals" className='text-red-600 text-center text-4xl font-bold'>{icon}</Link>
    </div>
  )
}

export default MenuCard