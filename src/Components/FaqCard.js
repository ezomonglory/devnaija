import React, { useState } from "react";

function FaqCard({ text, ToggleText }) {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className=' flex cursor-pointer justify-between p-4 bg-red text-white' onClick={()=> setOpen(!open)}>
				<h2>{text}</h2>
				<div >
					{open ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M8.25 4.5l7.5 7.5-7.5 7.5'
							/>
						</svg>
					)}
				</div>
			</div>

           {open ?  <div className="bg-red-600 text-white p-4">
                {ToggleText}                
            </div> : " " }
		</div>
	);
}

export default FaqCard;
