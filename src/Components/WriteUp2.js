import React from "react";
import Side from "../assets/kids.jpg";

function WriteUp2() {
	return (
		<div className='flex  lg:space-x-6 w-full  lg:w-[90%] p-2 mx-auto my-4 space-y-4 flex-col-reverse lg:flex-row'>
			<img
				src={Side}
				alt='kid'
				className='lg:w-[50%] h-[40vh] rounded-lg w-full mt-4'
			/>

			<div className=' w-full lg:w-[50%] text-lg'>
				<h1 className='red text-3xl font-bold text-center uppercase mb-4'>
					How our weekend classes work
				</h1>
				<p>
					We offer both{" "}
					<span className='text-black font-bold '>
						Physical(In-Person) and Vitual(Online)
					</span>{" "}
					Classes. <br /> <br />
					Our weekend classes runs for two hours every saturday for a month and
					runs in two batches see available batches below. <br /> <br />
					<span className='font-bold text-black'>
						October to November{" "}
					</span>{" "}
					<br />
					<span className='font-bold text-black'>
						Morning: 10am - 12pm
					</span>{" "}
					<br />
					<span className='font-bold text-black'> Afternoon: 1pm - 3pm </span>
				</p>
				<a href='#form' className='scroll-smooth'>
					<button className='bg-red py-2 px-6 text-white rounded-full hover:scale-105 active:scale-95 mt-4 text-2xl  hover:bg-red-600'>
						Book Now
					</button>
				</a>
			</div>
		</div>
	);
}

export default WriteUp2;
