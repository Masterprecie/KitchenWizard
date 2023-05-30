import registerImg from '@/assets/registerImg.png'
import '../Login/Login.css'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUserAuth } from "../../context/UserAuthContext";
//import { updateProfile } from 'firebase/auth'


const Register = () => {
	const { signUp } = useUserAuth()
	const [error, setError] = useState("");
	const [toggleEye, setToggleEye] = useState(false);
	const [inputType, setInputType] = useState("password");
	const { googleSignIn } = useUserAuth();
	const navigate = useNavigate()
	const [inputValues, setInputValues] = useState({
		username: " ",
		email: " ",
		password: " ",
	})


	const handleChange = (e) => {
		setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
		console.log(inputValues);
	}

	const handleToggle = (e) => {
		setToggleEye(!toggleEye);
		setInputType(inputType === "password" ? "text" : "password");
	};


	const Register = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(inputValues.email, inputValues.password);
			// await updateProfile(user, {
			// 	displayName: inputValues.username,
			// });
			navigate("/login");
		} catch (err) {
			setError(err.message);
		}

	};

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	}



	return (
		<>
			<section className="sm:flex md:flex items-center sm:h-[110vh] md:h-screen w-full">
				<div className=" left-section bg-gradient h-full sm:w-2/4 place-content-center hidden sm:flex ">
					<div className='sm:pt-40'>
						<img src={registerImg} alt="register-bg" />
					</div>
				</div>

				<div className="right-section sm:flex place-content-center h-full sm:w-2/4">
					<div className='sm:w-4/5 text-center sm:pt-10 pt-8 pb-6 sm:pb-0'>
						<h1 className='text-orange-600 text-4xl font-semibold'>Kitchen<span className='text-green-600 text-4xl'>Wizzard</span></h1>

						<h2 className='mt-5 md:mt-8 mb-3 font-bold text-2xl'>Sign Up</h2>

						<form onSubmit={Register}>
							{error && <p>{error}</p>}
							<input
								className='login-input'
								type="text"
								placeholder="User Name"
								name="username"
								id="username"
								onChange={handleChange}
								required
							/>
							<br />
							<input
								className='login-input'
								type="email"
								placeholder="Email"
								name="email"
								id="email"
								onChange={handleChange}
								required
							/>
							<br />
							<div className='formInput'>

								<input
									className='login-input'
									type={inputType}
									name="password"
									placeholder="Password"
									id='password'
									onChange={handleChange}
									required
								/>
								<div className="eyeIcon" onClick={handleToggle}>
									{toggleEye ? <AiFillEye /> : <AiFillEyeInvisible />}

								</div>
							</div>
							<br />

							<div>
								<a href='' className='text-cyan-500 hover:text-cyan-500 '>Forget Password?</a>
							</div>

							<button
								className='bg-secondary p-3 w-[80%] rounded-full text-white mt-5 sm:w-[80%]'
								type="submit">
								Sign Up
							</button>

						</form>
						<div className='mt-3'>

							<p>Already have an account?
								<Link to="/login"> <span className='text-cyan-500'>Log In</span></Link>
							</p>
						</div>

						<p className='md:mt-8 font-semibold'>Log In With</p>
						<div className='flex justify-center items-center gap-10 mt-5'>
							<a href="#"><FcGoogle size={50} onClick={handleGoogleSignIn} /></a>
							<a href="#"><BsFacebook size={45} className='text-cyan-600' /></a>
							<a href="#"><BsTwitter size={50} className='text-cyan-500' /></a>

						</div>

					</div>
				</div>
			</section>

		</>
	)
}

export default Register