import React from "react";

function Mark({ text }) {
	return (
		<div className='flex space-x-2 '>
			<div className='bg-red w-[25px] h-[25px] p-[1px] text-center rounded-full text-white text-lg font-bold'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={4}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4.5 12.75l6 6 9-13.5'
					/>
				</svg>
			</div>
			<p className='text-gray-600'>{text}</p>
		</div>
	);
}

export default Mark;
