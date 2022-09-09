import React from "react";

function Message() {
	return (
		<div className='lg:w-[90%] mx-auto w-full p-2'>
			<h1 className='mb-4 red text-3xl text-center uppercase font-bold'>
				Message from manager's desk
			</h1>
			<iframe
				src='https://www.youtube.com/embed/PUPpt2_Y-Oc'
				title='Manager'
				className=' w-full mx-auto mb-4 h-[400px] rounded-lg '
			/>
		</div>
	);
}

export default Message;
