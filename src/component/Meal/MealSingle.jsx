/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import './meal.css'
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';
import Hero from "../Hero/Hero";
import Navbar from "../NavBar/NavBar";



const MealSingle = ({ meal }) => {
	console.log(meal);
	let tags = meal?.tags?.split(',');
	console.log(meal);
	let instructions = meal?.instructions?.split('\r\n');
	instructions = instructions?.filter(instruction => instruction.length > 1);



	return (
		<div className=''>
			<Navbar />
			<Hero />
			<div className='mx-auto py-16 w-[90%]'>
				<div className='breadcrumb bg-orange-500 text-white'>
					<ul className='flex items-center my-2'>
						<li className='breadcrumb-item'>
							<Link to="/" className='flex items-center'>
								<AiFillHome size={22} />
							</Link>
						</li>
						<li className='flex items-center mx-1'>
							<BiChevronsRight size={23} />
						</li>
						<li className='breadcrumb-item flex'>
							<span to="" className='text-sm font-semibold uppercase'>{meal?.title}</span>
						</li>
					</ul>
				</div>

				<div className='title '>Meal Details</div>
				<section className='sc-details bg-white'>
					<div className='details-head grid grid-cols-1 md:grid-cols-2 '>
						<div className='details-img'>
							<img src={meal?.thumbnail} alt="" className='w-[100%]' />
						</div>

						<div className='details-intro md:ps-6'>
							<h3 className='di-title text-xl text-orange-500'>{meal?.title}</h3>
							<div className='py-4'>
								<div className='category flex items-center'>
									<span className='uppercase font-semibold text-xl my-1'>category: &nbsp;</span>
									<span className='uppercase'>{meal?.category}</span>
								</div>

								<div className='source flex items-center flex-wrap'>
									<span className=' text-xl font-semibold uppercase'>Source: &nbsp;</span>
									<a href={meal.source}>
										{meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found"}
									</a>
								</div>
							</div>

							<div className='tags flex items-center flex-wrap'>
								<h6 className='text-xl uppercase font-semibold'>Tags:</h6>
								<ul className='flex items-center flex-wrap'>
									{
										tags?.map((tag, idx) => (<li key={idx} className="text-xl">{tag}</li>))
									}
								</ul>
							</div>

							<div className='ingredients my-5 px-3 py-3'>
								<h6 className='text-xl font-semibold text-white'>Ingredients</h6>
								<ul className='grid'>
									{
										meal?.ingredients?.map((ingredient, idx) => (
											<li key={idx} className="flex align-center">
												<span className='li-dot'>{idx + 1}</span>
												<span className='text-capitalize text-white fs-15'>{ingredient}</span>
											</li>
										))
									}
								</ul>
							</div>
						</div>
					</div>

					<div className='details-body'>
						<div className='measures my-4'>
							<h6 className='text-xl font-semibold'>Measure:</h6>
							<ul className='grid'>
								{
									meal?.measures?.map((measure, idx) => (
										<li key={idx} className="text-sm flex align-end">
											<span className='li-icon text-sm text-orange-500'>
												<FaUtensilSpoon />
											</span>
											<span className='li-text text-sm font-semibold'>{measure}</span>
										</li>
									))
								}
							</ul>
						</div>

						<div className='instructions my-4'>
							<h6 className='text-xl font-semibold'>Instructions:</h6>
							<ul className='grid'>
								{
									instructions?.map((instruction, idx) => (
										<li key={idx} className="text-sm">
											<AiOutlineCheckSquare size={18} className="text-orange-500 li-icon" />
											<span className='li-text text-sm font-semibold'>{instruction}</span>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default MealSingle