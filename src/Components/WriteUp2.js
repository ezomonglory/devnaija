import React from "react";
import Side from "../assets/kids.jpg";

function WriteUp2() {
	return (
		<div className="w-full">
			<div className='  w-full items-center justify-center lg:w-[90%] p-2 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4'>
				<div className=' w-full lg:w-full text-lg'>
					<h1 className='red text-3xl font-bold text-center uppercase mb-4'>
						How our weekend classes runs
					</h1>
					<p>
						We offer both{" "}
						<span className='text-black font-bold '>
							Physical(In-Person) and Virtual(Online)
						</span>{" "}
						Classes. <br /> <br />
						Our weekend classes runs for two hours every saturday for a month
						and in two batches. <br /> See available batches below: <br />
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
				</div>

				<div className=' w-full  text-lg lg:-mt-[5rem]'>
					<h1 className='red text-3xl font-bold text-center uppercase mb-4'>
						Courses we offer
					</h1>
					<p>
						<h2 className="text-center">Courses:</h2>
						<h2 className='mt-4 text-center text-black font-bold'>
							HTML,CSS & Javascript(Website)
						</h2>
						<h2 className='text-black text-center font-bold'>Financial Literacy</h2>
						<h2 className='text-black text-center font-bold'>Scratch(Games)</h2>
						<h2 className='text-black text-center font-bold'>Robotics</h2>
					</p>
				</div>
			</div>
			<a href='#form' className=' lg:ml-[25%] lg:mr-[25%] mx-auto ml-4 mr-4'>
				<button className='bg-red py-2  px-6 w-[90%] lg:w-[50%] text-white rounded-full hover:scale-105 active:scale-95 mt-4 text-2xl  hover:bg-red-600'>
					Book Now
				</button>
			</a>
		</div>
	);
}

export default WriteUp2;
