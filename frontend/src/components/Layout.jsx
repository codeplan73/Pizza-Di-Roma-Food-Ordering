import React from 'react'

const Layout = ({ children }) => {
  return (
      <div className='w-full md:max-w-6xl container mx-auto px-5'>{children}</div>
  )
}

export default Layout