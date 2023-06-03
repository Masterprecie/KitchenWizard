import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { useMealContext } from '../../context/mealContext';
import { startFetchMealsBySearch } from '../../actions/mealActions';


const SearchForm = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("")

	const [errorMsg, setErroMsg] = useState("")
	const { dispatch } = useMealContext();


	const handleSearchTerm = (e) => {
		e.preventDefault();
		if ((e.target.value.replace(/[^\w\s]/gi, "")).
			length !== 0) {
			setSearchTerm(e.target.value);
			setErroMsg("");
		} else {
			setErroMsg("Invalid search result...")
		}
	}

	const handleSearchResult = (e) => {
		e.preventDefault();
		navigate('/');
		startFetchMealsBySearch(dispatch, searchTerm)
	}



	return (
		<form className="form-page" onSubmit={(e) => handleSearchResult(e)}>
			<div className="formInput">
				<input type="text" placeholder="Search for a recipe" name="search"
					onChange={(e) => handleSearchTerm(e)}
				/>
				<div type="submit" className="searchIcon">
					<AiOutlineSearch />
				</div>
			</div>
		</form>
	)
}

export default SearchForm