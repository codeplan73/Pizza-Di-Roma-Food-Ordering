import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

import logo from './../assets/logo.png'
import links from '../data.json'
import Layout from './Layout'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const menuHandler = () => {
    setOpen(!open);
  }

  return (
    <Layout>
      <nav className='relative my-10 flex items-center justify-between bg-slate-50 drop-shadow-xl rounded-full overflow-hidden p-4 z-50'>
        <Link to='/' className='flex items-center gap-3 text-burgundy-900 font-bold'>
          <img src={logo} className='h-8 md:h-12 w-8 md:w-12 rounded-full' alt="logo" />
          <span>Pizza Di Roma</span>
        </Link>

        <ul className='hidden md:flex items-center justify-between gap-6'>

          {
            links.map((link, id) => (
              <Link to={link.path} key={link.id}>{link.pathName}</Link>
            ))
          }

          <button className='md:ml-28 lg:ml-72 bg-red-700 text-sm text-white px-4 py-2 rounded-full flex items-center gap-2'>
            <FaShoppingCart />
            CART
          </button>
        </ul>

        <FiMenu onClick={menuHandler} className='md:hidden text-3xl text-red-900 cursor-pointer' />
      </nav>

      {open && (
        <ul className='absolute flex flex-col items-start w-11/12 p-2 font-bold rounded-md shadow-2xl bg-slate-100 text-burgundy-900 z-50 top-28'>
          {
            links.map((link, id) => (
              <Link className='transition ease-in-out delay-150 hover:-translate-y-1 duration-300 m-2 cursor-pointer' onClick={menuHandler} to={link.path} key={link.id}>{link.pathName}</Link>
            ))

          }
          <Link onClick={menuHandler} to='/cart' className='bg-red-700 text-sm w-full text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 mb-3'>
            <FaShoppingCart />
            CART
          </Link>
        </ul>
      )}
    </Layout>
  )
}

export default Navbar