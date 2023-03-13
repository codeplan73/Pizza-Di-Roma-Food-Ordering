import React from 'react'

const Hero = ({title, text}) => {
  return (
    <div className='bg-bg-hero bg-cover bg-no-repeat h-6/12 w-full flex flex-col items-center md:items-start justify-center px-8 md:pl-32 gap-4 py-10 md:py-20'>
      <h4 className='text-2xl md:text-4xl font-bold text-slate-100'>{title}</h4>
      <p className='text-slate-100 text-sm md:text-lg text-center md:text-start'>{text}</p>
    </div>
  )
}

export default Hero