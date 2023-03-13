import React from 'react'
import {FiMinus, FiPlus} from 'react-icons/fi'

const AmountButton = ({increase, decrease, quantity}) => {
  return (
    <div className='flex gap-7 items-center my-4 font-bold text-2xl'>
        <button onClick={decrease}><FiMinus /></button>
        <h2>{quantity}</h2>
        <button onClick={increase}><FiPlus /></button>
    </div>
  )
}

export default AmountButton