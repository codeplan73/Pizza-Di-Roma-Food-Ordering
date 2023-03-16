import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Hero, Section, CartItem } from '../components'


const Cart = () => {
  const dispatch = useDispatch();
  const {cartItems, total} = useSelector((state) => state.cart);
  return (

    <>
      <Hero title="Cart Items" text="List of all cart items" />
      <Layout>
        <Section>
          <CartItem items={cartItems}/>
          <hr />
          <div className='flex flex-col items-center'>
            <div className='flex w-full justify-between px-10 py-5 font-bold'>
              <p>Total</p>
              <p>${total}</p>
            </div>
            <div className='flex gap-4'>
              <button className='text-red-700 font-semibold text-sm md:text-lg border border-red-700 py-1 px-3 hover:bg-red-800 hover:text-white rounded'>Clear Cart</button>
              <button className='text-red-700 font-semibold text-sm md:text-lg border border-red-700 py-1 px-3 hover:bg-red-800 hover:text-white rounded'>Proceed to Checkout</button>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export default Cart