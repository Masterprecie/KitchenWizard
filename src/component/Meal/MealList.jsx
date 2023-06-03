import React from 'react'
import { Link } from 'react-router-dom';
import '../Category/category.css'
import './meal.css'

const MealList = ({ meals }) => {
	console.log(meals);
	return (
		<>

			<div className='bg-body pt-20 pb-20'>

				<div className='w-[90%] mx-auto' >
					<div className='title'>Meals</div>
					<section className='grid gap-x-8 gap-y-0 grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
						{
							meals?.map(mealItem => {
								const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;

								return (
									<Link to={`/meal/${id}`}
										className='category-itm bg-[#DCDCB5] relative my-12 '
										key={id}>
										<div
											className='meal-itm-img'
										>
											<img src={thumbnail} alt={meal}
												className='category-meal-itm-cat font-semibold'
											/>
											<div className='meal-itm-cat bg-orange-500 text-white font-semibold'>{category}</div>
										</div>

										<div className='meal-itm-body'>
											<div className='meal-itm-body-info flex flex-col'>
												<div className='text-sm font-medium px-6 pt-2'>{area}</div>
												<div
													className='font-semibold px-6 py-2 text-left'
												>{meal}</div>
											</div>
										</div>

									</Link>
								)
							})
						}
					</section>
				</div>
			</div>
		</>
	)
}

export default MealList 