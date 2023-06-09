import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Hero, Section, CartItem, EmptyCart } from '../components'
import { clearCart } from '../redux/features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems, total } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  const navigate = useNavigate()

  const handleCheckout = () => {
    if(!user){
      navigate('/login')
    }else{
      navigate('/checkout')
    }
  }

  return (
    <>
      <Hero title="Cart Items" text="List of all cart items" />
      <Layout>
        {cartItems.length > 0 ? (
          <Section>
            <CartItem items={cartItems} />
            <hr />
            <div className="flex flex-col items-center">
              <div className="flex w-full justify-between px-10 py-5 font-bold">
                <p>Total</p>
                <p>${total}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="text-red-700 font-semibold text-sm md:text-lg border border-red-700 py-1 px-3 hover:bg-red-800 hover:text-white rounded"
                >
                  Clear Cart
                </button>
                <button onClick={handleCheckout} className="text-red-700 font-semibold text-sm md:text-lg border border-red-700 py-1 px-3 hover:bg-red-800 hover:text-white rounded">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </Section>
        ) : (
          <EmptyCart />
        )}
      </Layout>
    </>
  )
}

export default Cart
