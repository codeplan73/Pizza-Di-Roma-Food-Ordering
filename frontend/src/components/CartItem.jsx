import React from 'react'
import { useDispatch } from 'react-redux'
import { FiMinus, FiPlus } from 'react-icons/fi'

import AmountButton from './AmountButton'
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from '../redux/features/cart/cartSlice'

const CartItem = ({ items }) => {
  const dispatch = useDispatch()
  // const {cartItems, total} = useSelector((state) => state.cart);


  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between mx-auto w-full mb-2"
        >
          <div className="flex gap-6 items-center px-4 py-2">
            <img src={item.imageUrl} className="h-16 w-16 rounded-xl" alt="" />
            <div className="flex flex-col gap-1 items-start">
              <p className="text-md lg">{item.name}</p>
              <p className="text-xl font-semibold text-red-800">{item.price}</p>
              <button onClick={() => dispatch(removeItem(item.id))} className="text-red-900 text-xs px-2 py-1 rounded-lg hover:bg-red-900 hover:text-white">
                Remove
              </button>
            </div>
          </div>
          <div>
            <AmountButton increase={() => dispatch(increaseItem(item.id))} decrease={() => dispatch(decreaseItem(item.id))} amount={item.amount} />

            {/* <div className="flex gap-4 items-center my-4 font-bold text-md md:text-2xl">
              <button onClick={() => dispatch(decreaseItem(item.id))}>
                <FiMinus />
              </button>
              <h2>{item.amount}</h2>
              <button onClick={() => dispatch(increaseItem(item.id))}>
                <FiPlus />
              </button>
            </div> */}
          </div>

          <hr />
        </div>
      ))}
    </>
  )
}

export default CartItem
