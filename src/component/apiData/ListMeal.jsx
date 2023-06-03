import React from 'react'
import MealList from '../Meal/MealList'
import { useMealContext } from '../../context/mealContext'
import NotFound from '../NotFound/NotFound'
import Loader from '../Loader/Loader'
import CategoryList from '../Category/CategoryList'

const ListMeal = () => {
	const { categories, meals, categoryLoading, mealsLoading } = useMealContext()
	return (
		<main className='content'>
			{(mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals={meals} /> : ""}

			{(categoryLoading) ? <Loader /> : <CategoryList categories={categories} />}
		</main>

	)
}

export default ListMeal