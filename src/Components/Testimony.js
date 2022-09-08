import React from "react";
import Card from "./Card";
import Ester from "../assets/Ester.jpeg";
import { InstagramEmbed } from "react-social-media-embed";

function Testimony() {
	return (
		<div className='w-[80%] mx-auto'>
			<h1 className='capitalize red text-3xl font-bold text-center mb-12'>
				TESTIMONIALS
			</h1>

			<div className=' grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 '>
				<iframe
					title='Mom'
					src='https://www.youtube.com/embed/TmBT0V2JMh4'
					className=' w-full rounded-lg mx-auto mb-4 h-[400px] '
				></iframe>

				<iframe
					title='Mom'
					src='https://www.youtube.com/embed/nEfNXtN_WfA'
					className=' w-full mx-auto mb-4 h-[400px] rounded-lg '
				></iframe>
				<Card
					Name='Mrs Esther'
					Title='Mother'
					image={Ester}
					text='I registered my son for the devnaija academy summer training and in just the second week of the program instead of playing games with his phone, he now spends his time trying to build games. This academy has allowed him to channel all his energy into something beneficial to him, i am so happy with my decision to enroll him to devnaija academy, it was truly a revelation.'
				/>
				<Card
					Name='Mrs Ibukun K.'
					Title='Mother'
					text='Thank you at Devnaija for transforming my son, he is passionate about building games and assembling robots. He has started saving and spending his money wisely'
				/>
			</div>
		</div>
	);
}

export default Testimony;
