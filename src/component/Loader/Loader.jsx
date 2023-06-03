import React from 'react'
import { loader } from '../../utils/image'
const Loader = () => {
	return (
		<div className='my-5'>
			<div className='container flex align-center justify-center'>
				<img src={loader} alt="loader" className='w-[70px]' />
			</div>

		</div>
	)
}

export default Loader