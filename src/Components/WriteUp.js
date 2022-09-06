import React from "react";
import Side from "../assets/kids.jpg";

function WriteUp() {
	return (
		<div className='flex  lg:space-x-6 lg:w-[90%] space-y-4 p-2 mx-auto my-4 w-full flex-col lg:flex-row'>
			<div className='lg:w-[50%] w-full '>
				<h1 className='red text-3xl font-bold text-center uppercase mb-4'>
					Why Coding ?
				</h1>
				<p className='line-height text-lg'>
					Coding is the the art of giving a computer a set of instructions in
					the language it (computer) understands to carry out. Coding is at the
					centre and component that is essential to running different
					corporations, all these sales websites like jumia, konga and the likes
					and let's not forget our social media networks like facebook,
					whatsapp, snapchat and the rest that are used to communicate and keep
					in touch with our collegues at work or friends. People built those
					apps and are making a whole lot of money for money from it. Coding is
					the means they used to build those apps. It is one of the most sought
					after jobs in the world right now because of it's day to day
					importance.We can teach them how to use the knowledge of coding to
					succeed and have a skill that they can profit from aside from
					education.
				</p>
			</div>
			<iframe
			className="w-full lg:w-[50%] rounded-lg"
				title='video'				
				src='https://www.youtube.com/embed/TeO8ebBwJWY'
			></iframe>
		</div>
	);
}

export default WriteUp;
