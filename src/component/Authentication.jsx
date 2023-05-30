import { auth } from '../Firebase'
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";
const Authentication = () => {
	//const [authenticateUser, setAuthenticateUser] = useState('')
	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	const listenAuth = onAuthStateChanged(auth, (user) => {
	// 		if (user) {
	// 			setAuthenticateUser(user)
	// 		} else {
	// 			setAuthenticateUser(null)
	// 		}
	// 	})
	// 	return () => {
	// 		listenAuth()
	// 	}

	// }, [])

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}
	};



	return (
		<>
			{user === null ?
				<>
					<Link
						to="/register"
						className="nav-links"

					>
						Sign in
					</Link>

				</> : <>
					<Link
						to="/"
						className="nav-links"
						onClick={handleLogout}
					>
						Sign Out
					</Link>

				</>
			}

		</>

	)
}

export default Authentication