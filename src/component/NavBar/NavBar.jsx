import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserImage from "../../assets/user.jpg";
import Authentication from "../Authentication";
import { useUserAuth } from "../../context/UserAuthContext";


function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);



	const { user } = useUserAuth();


	return (
		<>
			<nav className="navbar bg-footer">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						<h2 className='text-orange-600 text-4xl font-semibold'>Kitchen<span className='text-green-600 text-4xl'>Wizzard</span></h2>

					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
								Blog
							</Link>
						</li> */}
						<li className="nav-item">
							<Authentication />
						</li>

					</ul>
					<img
						className="user"
						src={UserImage}
						alt="user"
					/>
					<span className="userLogin">
						{user && user.email}
						{/* {user.email && user?.displayName} */}
					</span>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
