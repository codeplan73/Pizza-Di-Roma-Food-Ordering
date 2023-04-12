import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/features/auth/authSlice'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' })
})

const Login = () => {
  const { user, loading, error, success, message } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const notify = () => toast.error(message)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    dispatch(login(data));
    if (error){notify();
    }else if(success) {
      navigate('/meals')
    }

    // clearData();
  }

  return (
    <div className='flex flex-col items-center gap-4 py-10'>
      <h4 className='text-2xl'>What's your email address</h4>
      <p className='text-sm'>Type your email to login or create <span className='text-red-600 font-bold'>Pizza-Di-Roma</span> Account</p>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-5 container px-14 pt-12 w-full lg:w-6/12 md:w-7/12'>

        <div className="flex flex-col items-start w-full gap-2">
          <input
            type="email" placeholder='Email'
            {...register('email')}
            className="font-normal p-4 rounded-md border border-slate-500 font-mono text-gray-900  w-full"
          />
          {errors.email?.message && (
            <p className="text-xs text-red-600 font-normal">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start w-full gap-2">
          <input
            type="password" placeholder='Enter Password'
            {...register('password')}
            className="font-normal p-4 rounded-md border border-slate-500 font-mono text-gray-900  w-full"
          />
          {errors.password?.message && (
            <p className="text-xs text-red-600 font-normal">
              {errors.password?.message}
            </p>
          )}
        </div>

        <button className='bg-orange-600 px-8 py-2 rounded text-white font-semibold'>Submit</button>

      </form>
      <Link to='/register' className='text-orange-700 font-semibold'>No account yet? Signup now</Link>

      <button onClick={notify}>Make me a toast</button>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default Login
