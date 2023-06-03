import React, { useEffect } from 'react'
import MealList from '../../component/Meal/MealList'
import { useMealContext } from '../../context/mealContext';
import { startFetchMealByCategory } from '../../actions/mealActions';
import { useParams } from 'react-router-dom';
import Navbar from '../../component/NavBar/NavBar';
import Hero from '../../component/Hero/Hero';

const Category = () => {
	const { name } = useParams();
	const { categoryMeals, dispatch, categories } = useMealContext();
	let catDescription = "";

	if (categories) {
		categories.forEach(category => {
			if (category?.strCategory === name)
				catDescription = category?.strCategoryDescription;
		})
	}

	useEffect(() => {
		startFetchMealByCategory(dispatch, name)
	}, [name, dispatch]);

	return (
		<>
			<Navbar />
			<Hero />
			<main className=' bg-body py-8'>
				<div className='w-[90%] mx-auto pt-4'>
					<div className='px-4 py-5 border-2 border-orange-500'>
						<h2 className='text-orange-500 font-semibold text-3xl pb-5'>{name}</h2>
						<p>{catDescription}</p>
					</div>
				</div>
				{
					(categoryMeals?.length) ? <MealList meals={categoryMeals} /> : null
				}
			</main>
		</>
	)
}

export default Category