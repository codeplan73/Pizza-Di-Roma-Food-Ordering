import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {ImLocation} from 'react-icons/im'

import logo from './../assets/logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full bg-burgundy-900 text-white py-10'>
      <div className='w-12/12 md:max-w-6xl container mx-auto px-5 flex flex-col md:flex-row justify-center items-center md:justify-start mb-12'>
        <h4 className='text-2xl font-bold font-sans mb-10 md:mb-0 md:mr-52 lg:mr-72'>Ready to order your <br /> favorite food?</h4>

        <div className='flex items-center justify-end gap-3'>
          <button type='button' className='bg-orange-600 px-4 py-2 rounded'>Order Now</button>
          <button type='button' className='bg-burgundy-900 border border-orange-500 px-4 py-2 rounded'>Learn More</button>
        </div>
      </div>
      <div className='w-12/12 md:max-w-6xl container mx-auto px-5 flex flex-col md:flex-row gap-4'>
        <div className='flex flex-col gap-6 w-full md:w-4/12 mr-0 mb-10 md:mb-0 md:mr-20'>
          <div className='flex gap-4 items-center'>
            <img src={logo} className='h-16 md:h-12 w-16 md:w-12 rounded-full' alt="logo" />
            <h4 className='text-2xl font-bold '>Pizza Di <span className='text-orange-500'>Roma</span> </h4>
          </div>
          <p className='text-sm text-gray-200 text-justify'>Lorem ipsum dolor sit amet consectetur em ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus.</p>
        </div>

        <div className='w-full md:w-2/12 flex flex-col gap-4 text-gray-300 mb-10 md:mb-0 items-center md:items-start'>
          <h4 className='text-sm font-bold text-white'>Company</h4>
          <Link className='text-xs' to='/'>Home</Link>
          <Link className='text-xs' to='/about'>About</Link>
          <Link className='text-xs' to='/contact'>Contact</Link>
        </div>
        <div className='w-full md:w-2/12 flex flex-col gap-4 text-gray-300 mb-10 md:mb-0 items-center md:items-start'>
          <h4 className='text-sm font-bold text-white'>Features</h4>
          <Link  className='text-xs' to='/'>Blog</Link>
          <Link  className='text-xs' to='/about'>Support</Link>
          <Link className='text-xs' to='/contact'>Privacy</Link>
          <Link className='text-xs' to='/contact'>Security</Link>
        </div>
        <div className='w-full md:w-3/12 flex flex-col gap-4 text-gray-300 items-center md:items-start'>
          <h4 className='text-sm font-bold text-white'>Features</h4>
          <p className='flex gap-3 items-center'>
            <BsFillTelephoneInboundFill className='text-orange-500 text-xl'/>
            +234-299923
          </p>
          <p className='flex gap-3 items-center'>
            <HiMail className='text-orange-500 text-xl'/>
            mail@company.com
          </p>
          <p className='flex gap-4 items-center text-center md:text-justify'>
            <ImLocation className='text-orange-500 text-xl'/>
            40, util street, company home address, Usa
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer