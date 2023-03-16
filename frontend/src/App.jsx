import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import { Navbar, Footer } from './components'
import { Homepage, About, Login, Register, Meals, Meal, Cart, Error } from './Pages'
import {calculateTotal} from './redux/features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const {cartItems} = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems, dispatch])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/meals' element={<Meals />} />
        <Route path='/meal/:id' element={<Meal />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
