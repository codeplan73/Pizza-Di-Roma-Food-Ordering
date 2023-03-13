import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Navbar, Footer } from './components'
import { Homepage, About, Meals, Meal, Error } from './Pages'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/meals' element={<Meals />} />
        <Route path='/meal/:id' element={<Meal />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
