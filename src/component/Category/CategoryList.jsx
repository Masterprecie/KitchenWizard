import React from 'react'
import { Link } from 'react-router-dom';
import './category.css'

const CategoryList = ({ categories }) => {
	console.log(categories);
	return (
		<div className='bg-body pt-20 pb-20'>
			<div className='w-[90%] mx-auto'>
				<div className=''>
					<span className='title'>Trending Recipes
					</span>

				</div>
				<section className='grid gap-x-8 gap-y-0 grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
					{
						categories.map(category => {
							const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;
							return (
								<Link to={`/meal/category/${title}`} key={id}
									className='category-itm bg-[#DCDCB5] my-12 '
								>
									<div className='category-itm-img flex items-center justify-center '>
										<img src={thumbnail} alt={title}
										/>
										<div className='category-itm-title bg-orange-500'>
											<h3 className='text-white text-xl uppercase font-semibold '>{title}</h3>
										</div>
									</div>

								</Link>
							)
						})
					}
				</section>
			</div>
		</div>
	)
}

export default CategoryList