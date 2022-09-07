import React from "react";
import "./homePage.css";
import Logo from "../assets/logo.png";

function HomePage() {
	return (
		<div className='h-[90vh] home text-white  text-center   p-2'>
			<div className='flex md:space-x-2 justify-center items-center '>
				<img src={Logo} alt='logo' className='w-12' />
				<div>
					<p className='md:text-3xl text-lg uppercase font-bold'>
						DevNaija Academy{" "}
					</p>
					<p>Coding and financial literacy school</p>{" "}
				</div>
			</div>
			<div className='w-full text-center mt-40 '>
				<p className='text-3xl mb-2 uppercase font-medium'>
					weekend classes for kids ages 6-16
				</p>
				<p className='text-lg'>First Class Free</p>
			</div>

			<a href='#form' className='scroll-smooth'>
				<button className='bg-red py-2 px-6 rounded-full hover:scale-105 active:scale-95 mt-4 text-2xl  hover:bg-red-600'>
					Book Now
				</button>
			</a>
		</div>
	);
}

export default HomePage;
