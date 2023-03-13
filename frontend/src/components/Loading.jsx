import React from 'react'
import loader from '../assets/loader.gif'
const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loading