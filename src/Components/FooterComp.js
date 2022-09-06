import React from "react";

function FooterComp({ image, text, icon }) {
	return (
		<div className='flex flex-col space-y-3 font-bold text-2xl text-white justify-center items-center'>
			{icon ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2}
					stroke='currentColor'
					className='w-12 h-12'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
					/>
				</svg>
			) : (
				<img src={image} alt='img' className='w-12' />
			)}
			<h2>{text}</h2>
		</div>
	);
}

export default FooterComp;
