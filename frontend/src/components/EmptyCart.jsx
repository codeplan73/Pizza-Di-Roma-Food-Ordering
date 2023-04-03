import {BsCartX} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center gap-8 py-8'>
        <h4 className='font-bold text-4xl text-slate-600'>Your cart is empty</h4>
        <BsCartX className='text-9xl text-red-700'/>
        <Link to='/Meals' className='text-white font-semibold text-2xl p-2 bg-orange-800 rounded-md'>Continue</Link>
    </div>
  )
}

export default EmptyCart