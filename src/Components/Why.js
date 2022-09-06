import React from "react";
import Mark from "./Mark";

function Why() {
	return (
		<div className="lg:w-[70%] mx-auto w-full p-2">
			<h1 className='red text-3xl font-bold text-center uppercase lg:mb-6'>Why DevNaija ? </h1>
			<div className="flex lg:space-x-6  lg:flex-row flex-col justify-center items-center  space-y-3 lg:space-y-0">
				<div className=" space-y-3 w-full">
					<Mark text='Lessons are hands-on and project-based ' />
					<Mark text="Our teachers are very friendly and are experienced working with children" />
					<Mark text='Children are exposed to the technology world ' />
				</div>
				<div className="space-y-3 w-full ">
					<Mark text='We help the children channel their energy into something benefitial to them  ' />
					<Mark text='We teach financial literacy and entrepreneurial skills ' />
					<Mark text='A Convenient and friendly enviroment for learning ' />
				</div>
			</div>
		</div>
	);
}

export default Why;
