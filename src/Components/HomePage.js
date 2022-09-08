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
				<p className='text-[2rem] mb-2 uppercase font-medium'>
					Welcome 
				</p>
				<p className='text-2xl'>Thank You For Visiting Our page</p>
			</div>
			
		</div>
	);
}

export default HomePage;
