import React from 'react'
import {FiMinus, FiPlus} from 'react-icons/fi'
import { useSelector, useDispatch  } from 'react-redux'
import {decreaseItem, increaseItem, removeItem } from '../redux/features/cart/cartSlice'


const AmountButton = ({increase, decrease, amount}) => {
    const dispatch = useDispatch();
  return (
    <div className='flex gap-4 items-center my-4 font-bold text-md md:text-2xl'>
        <button onClick={decrease}><FiMinus /></button>
        <h2>{amount}</h2>
        <button onClick={increase}><FiPlus /></button>
    </div>
  )
}

export default AmountButton