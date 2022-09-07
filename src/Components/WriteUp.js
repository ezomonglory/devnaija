import React from "react";
import Side from "../assets/kids.jpg";

function WriteUp() {
	return (
		<div className='flex  lg:space-x-6 lg:w-[90%] space-y-4 p-2 mx-auto my-4 w-full flex-col lg:flex-row'>
			<div className='lg:w-[50%] w-full '>
				<h1 className='red text-3xl font-bold text-center uppercase mb-4'>
					Why Coding and Financial Literacy for kids ?
				</h1>
				<p className='line-height text-lg mb-2'>
					Coding, or programming, is simply the learning of computer language.
					In order to control computers (robots or drones)
				</p>
				<ul className="ml-8">
					<li className='text-lg font-bold'>
						It improves their performance in academics{" "}
					</li>
					<li className='text-lg font-bold'>
						It improves their thinking & creative capacity{" "}
					</li>
					<li className='text-lg font-bold'>
						It helps the children cultivate the habit of saving & investing
						early in life{" "}
					</li>
					<li className='text-lg font-bold'>
						It helps them create businesses and be their own boss{" "}
					</li>
					<li className='text-lg font-bold'>It engages them positively </li>
				</ul>
			</div>
			<iframe
				className='w-full lg:w-[50%] rounded-lg'
				title='video'
				src='https://www.youtube.com/embed/TeO8ebBwJWY'
			></iframe>
		</div>
	);
}

export default WriteUp;
