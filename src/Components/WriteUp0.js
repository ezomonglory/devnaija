import React from "react";
import Side from "../assets/kids.jpg";


function WriteUp0() {
	return (
		<div className='flex flex-col lg:flex-row w-[90%] mx-auto'>
			<div className='lg:w-[50%] w-full text-lg '>
				<div className='text-black font-bold text-2xl mb-2  '>
					Do your children always grab your phone to play games?
				</div>{" "}
				<div className='text-black font-bold text-2xl mb-2 '>
					Always restless running around?{" "}
				</div>{" "}
				<div className='text-black font-bold text-2xl mb-2'>
					Spends every money that comes into their hands?
				</div>

				<p>{" "}
				It is not their fault, let’s help you , channel their energy, show them
				a better path of sitting to create those games themselves and spend
				their money wisely. This skills will help them compete globally for
				jobs, become technopreneurs(like steve jobs),earn in local and foreign
				currencies and become nation builders by solving real problems.</p>
			</div>
			<div className="w-full lg:w-[50%] text-lg h-[40vh] overflow-hidden rounded-lg">
				<img src={Side} />
			</div>
		</div>
	);
}

export default WriteUp0;
