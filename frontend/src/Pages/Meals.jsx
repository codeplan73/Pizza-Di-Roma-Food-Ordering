import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Layout, Hero, Loading, Section, MealCard } from '../components'
import { getAllMeals } from '../redux/features/meals/mealSlice'

// import { useGetAllMealsQuery } from '../redux/services/mealCore'


const Meals = () => {
  // const { data, isFetching, error } = useGetAllMealsQuery()

  const { meals, loading } = useSelector((state) => state.meal);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllMeals())
  }, [dispatch])

  if (loading) return <Loading />

  // if (error) return <div><h4>Error Loading data</h4></div>

  return (
    <>
      <Hero title='Menu List' text='List of our available Meals' />
      <Layout>
        <Section>
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              meals.map((meal) => (
                <MealCard key={meal._id} link={meal._id} image={meal.imageUrl} title={meal.name} price={meal.price} />
              ))
            }
          </div>

        </Section>

      </Layout>
    </>
  )
}

export default Meals