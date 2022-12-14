import React from "react";
import "./homePage.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
				<p className='text-2xl mb-2'>First Coding Class Free</p>				
				<a href="https://wa.me/message/UW5CWNXP5AB7D1">
					<div className="text-md bg-red py-2 px-8 rounded-full md:w-[50%] mx-auto hover:scale-105 active:scale-95 mt-4 md:text-lg   hover:bg-red-600 ">
						Chat us via Whatsapp
					</div>
				</a>
			</div>
			
		</div>
	);
}

export default HomePage;
