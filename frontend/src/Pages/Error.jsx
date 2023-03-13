import React from 'react'

const Error = () => {
  return (
    <div className='container mx-auto flex flex-col items-center gap-4 h-80 my-12'>
        <h2 className='text-4xl text-amber-900 font-bold'>Not Found</h2>
        <p className='text-xl'>Sorry the page you are looking for does not exist</p>
    </div>
  )
}

export default Error