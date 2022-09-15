import React from "react";

function Message() {
	return (
		<div className='lg:w-[90%] mx-auto w-full p-2'>
			<h1 className='mb-4 red text-3xl text-center uppercase font-bold'>
				Message from manager's desk
			</h1>

			<p className="text-black text-lg  mb-4">Hi welcome and thanks for visiting us, we are please to have you here, <br/>
			I am Engineer Mrs Ogunbiyi, i am the manager of Devnaija Academy. <br/> Our vision is to raise one million people benenfiting from the school by 2050 by providing education and training that is affordable to all. <br/>
			Our mission is to create world-class school with a difference by focusing on coding-financial literacy.
			</p>
			<iframe
				src='https://www.youtube.com/embed/PUPpt2_Y-Oc'
				title='Manager'
				className=' w-full mx-auto mb-4 h-[400px] rounded-lg '
			/>
		</div>
	);
}

export default Message;
