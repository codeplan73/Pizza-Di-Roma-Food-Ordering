import React, { useState } from 'react'
import { Layout, Input } from '../components'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const clearText =()=> {
    setEmail('')
    setPassword('')
  }

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log(email, password)

    clearText()
  }
  return (
     <div className='flex flex-col items-center gap-4 py-10'>
      <h4 className='text-2xl'>What's your email address</h4>
      <p className='text-sm'>Type your email to login or create <span className='text-red-600 font-bold'>Pizza-Di-Roma</span> Account</p>
       <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5 container px-14 pt-12 w-full lg:w-6/12 md:w-7/12'>
        <Input type='text' placeholder='Enter Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <Input type='password' placeholder='Enter Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <button className='bg-orange-600 px-8 py-2 rounded text-white font-semibold'>Submit</button>
      </form>
      <Link to='/register' className='text-orange-700 font-semibold'>No account yet? Signup now</Link>
     </div>
  )
}

export default Login
