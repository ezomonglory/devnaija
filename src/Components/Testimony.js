import React from "react";
import Card from "./Card";
import Ester from "../assets/Ester.jpeg";

function Testimony() {
	return (
		<div className='w-[80%] mx-auto'>
			<h1 className='capitalize red text-3xl font-bold text-center mb-12'>
				What Some of our parents are saying
			</h1>
			<iframe
				title='Mom'
				src='https://www.youtube.com/embed/nEfNXtN_WfA'
				className=' w-full lg:w-[50%] mx-auto mb-4 h-[400px] '
			></iframe>
			<div className=' grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 '>
				<Card
					Name='Mrs Esther'
					Title='Mother'
					image={Ester}
					text='I registered my son for the devnaija academy summer training and in just the second week of the program instead of playing games with his phone, he now spends his time trying to build games. This academy has allowed him to channel all his energy into something beneficial to him, i am so happy with my decision to enroll him to devnaija academy, it was truly a revelation.'
				/>
				<Card Name='Mrs Ibukun K.' Title='Mother' text="Thank you at DevNaija for transforming my son, he is passionate about building games and assembling robots. He has started saving and spending his money wisely" />
			</div>
		</div>
	);
}

export default Testimony;
