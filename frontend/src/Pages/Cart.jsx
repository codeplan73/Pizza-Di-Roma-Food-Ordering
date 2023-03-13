import React from 'react'
import { Layout, Hero, Section, CartItem } from '../components'

const Cart = () => {
  return (

    <>
      <Hero title="Cart Items" text="List of all cart items" />
      <Layout>
        <Section>
          <CartItem />
          <CartItem />
          <CartItem />
          <hr />
          <div className='flex flex-col items-center'>
            <div className='flex w-full justify-between px-10 py-5 font-bold'>
              <p>Total</p>
              <p>$3,434.43</p>
            </div>
            <button className='text-red-700 font-semibold text-sm md:text-lg border border-red-700 py-1 px-3 hover:bg-red-800 hover:text-white rounded'>Clear Cart</button>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export default Cart