import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link} from 'react-router-dom'

import { Loading, Layout, Section, Hero, AddToCart } from '../components'
import { getMeal } from '../redux/features/meals/mealSlice'

const Meal = () => {
  const { meal, error, loading, message } = useSelector((state) => state.meal)

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getMeal(id))
  }, [dispatch, id])

  if (loading) return <Loading />

  if (error) return <div><h4>{message}</h4></div>
  return (
    <>
    <Hero title='Meal Details' text={meal.name}/>
    <Layout>
      <Section>
      <Link to='/meals' className='bg-burgundy-900 text-white font-semibold px-4 py-2 rounded'>Go Back</Link>
        <div className='mt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-12 w-full'>
          <img src={meal.imageUrl} width={600} height={600} className='rounded-xl' alt='imageUrl' />
          <div className='w-full md:w-7/12 flex flex-col items-start gap-4'>
            <h2 className='text-4xl font-bold text-slate-600'>{meal.name}</h2>
            <h4 className='text-2xl font-bold text-red-600'>{meal.price}</h4>
            <p className='text-slate-600 font-normal leading-relaxed text-justify'>{meal.description}</p>

            <div className='flex flex-col gap-4'>
              <span className='text-slate-700 font-bold'>cooking Time: {meal.cookingTime} Min</span>
              <span className='text-slate-700 font-bold'>Serving Size: {meal.servingSize}</span>
              <hr />
              <AddToCart />
              {/* <span className='text-slate-600 font-normal leading-relaxed text-justify'><span className='text-slate-700 font-bold'>Ingredients:</span> {meal.ingredients}</span> */}
            </div>

          </div>
        </div>
      </Section>
    </Layout>
    </>
  )
}

export default Meal 