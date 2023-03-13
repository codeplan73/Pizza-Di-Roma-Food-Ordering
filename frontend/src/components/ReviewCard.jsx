import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'

const ReviewCard = () => {
    return (
        <div className='flex flex-col items-start gap-6 w-full md:w-6/12'>
            <h4 className='text-4xl font-bold'>Our lovely <span className='text-red-600'>customers </span> <br /> loves our food</h4>

            <div className='flex flex-col gap-2'>
                <p className='text-slate-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aspernatur animi cupiditate nemo, necessitatibus ex.
                </p>
                <div className='flex gap-2 text-xl'>
                   <AiFillStar className='text-yellow-400'/>
                   <AiFillStar className='text-yellow-400'/>
                   <AiFillStar className='text-yellow-400'/>
                   <AiFillStar className='text-yellow-400'/>
                   <BsStarHalf className='text-yellow-400'/>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaUserCircle />
                    <span className='font-bold text-sm'>Dan Young</span>
                </div>
            </div>


            <div className='flex items-center gap-6'>
                <button className='bg-slate-200 p-2 rounded-lg text-lg text-red-600 cursor-pointer'><IoIosArrowBack /></button>
                <button className='bg-red-600 p-2 rounded-lg text-lg text-slate-50 cursor-pointer'><IoIosArrowForward /></button>
            </div>

        </div>
    )
}

export default ReviewCard