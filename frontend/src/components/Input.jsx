import React from 'react'

const Input = ({type, value, onChange, placeholder}) => {  
  return <input type={type} required placeholder={placeholder} className='font-normal p-4 rounded-md border border-slate-500 font-mono text-gray-900 focus:border-red-300 active:text-red-500 w-full'  value={value} autoComplete="off" onChange={onChange}/>
}

export default Input